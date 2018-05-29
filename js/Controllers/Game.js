'use strict';
/*
    Game - controller, parent - GameController
    This controller manages the game process
 */

var Game = function(view, model, pageConstructor){
    GameController.call(this, view, model, pageConstructor);
    this.points = {};
    this.currentPlayer = this.model.players[0];
    this.availableMoves = {};
    this.computer = null;
    

    if (this.model.computerPlays){
        this.computer = new ComputerPlayer(this.model.players[this.model.players.length - 1].color, this.model.players.length);
        this.model.players[this.model.players.length - 1] = this.computer;

    }
};

Game.prototype = new GameController();
Game.prototype.constructor = Game;

Game.prototype.process = function(){
    var page = this.pageConstructor.createPageGamePlay();
    this.pageConstructor.insertPage(page);
    
    
    timer.start();
    timer.addEventListener('secondsUpdated', function (e) {
        $('#timer').html(timer.getTimeValues().toString());
    });
    
    showButtons();

    Object.getPrototypeOf(Game.prototype).process.call(this);

    this.points = PointCounterService.count(this.model.board);
    this.postMove();
    

};

Game.prototype.handlerPearlClicked = function(pearl) {

    if (this.currentPlayer.color != pearl.color) {
        return;
    }

    if (this.selectedPearl == pearl) {
        this.selectedPearl = null;
        this.availableMoves = {};
        this.view.showMoves();
    } else {
        this.selectedPearl = pearl;
        this.availableMoves = this.model.getMoves(pearl);
        this.view.showMoves(this.availableMoves.hexagons);
    }
};

Game.prototype.handlerHexagonClicked = function(hexagon) {
    if (this.selectedPearl == null) {
        return;
    }

    var currentMoving = this.availableMoves.to[hexagon.place];
    if (!currentMoving) {
        return;
    }

    // make move
    var move = this.model.move(currentMoving, this.currentPlayer.color);
    // paint move
    this.view.showStep(move.pearl, move.recolored , move.deleted);
    delete this.selectedPearl;
    this.changePlayer();
    // check if game can be continued
    this.postMove();
};

Game.prototype.postMove = function(){
    // count scores
    this.points = PointCounterService.count(this.model.board);

    // no free cells in board
    if(!this.model.countFreeCells()){
        this.pageConstructor.insertGameOver(this.points, this.currentPlayer, this.model);
        return;
    }
    // currentPlayer has no Pieces
    if(!this.model.playerHasPieces(this.currentPlayer)){
        this.whenPlayerHasNoMoves();
        return;
    } 
    // currentPlayer has no moves
    if(!this.model.playerHasMoves(this.currentPlayer)){
        this.whenPlayerHasNoMoves();
        return;
    }
    // game continue
    this.pageConstructor.insertStatistic(this.currentPlayer.color, this.points, this.computer);
    

    //if computer plays
    if (this.computer && this.currentPlayer.color == this.computer.color) {
        var computerMove;
        this.pageConstructor.changeBlockingDivState(true);
        computerMove = this.computer.findMove(this.model);
        this.makeComputerMove(computerMove);
    }
};

Game.prototype.whenPlayerHasNoMoves = function(){
  
    this.changePlayer();
    PointCounterService.addPearlsCountToPlayer(this.points, this.currentPlayer.color, this.model.countFreeCells());
    this.timeoutDraw();
    
    if (this.model.computerPlays)
        {
            if (this.currentPlayer != this.computer)
                this.model.playerIsWinner = true;
        }

    this.pageConstructor.insertGameOver(this.points, this.currentPlayer, this.model);
};

Game.prototype.timeoutDraw = function(){
    var pearls = this.model.createPearls(this.currentPlayer.color);
    this.view.drawPearlsTimeout(pearls);
};

Game.prototype.changePlayer = function(){  
    if (this.currentPlayer == this.model.players[0])
        {
            this.currentPlayer = this.model.players[1];
        }
    else
        {
            this.currentPlayer = this.model.players[0];
        }
};

Game.prototype.makeComputerMove = function(computerMove){
    var self = this;
    setTimeout(function(){self.view.showMoves(computerMove.hexagons)}, 1000);
    setTimeout(
        function(){
            var move = self.model.move(computerMove.best, self.computer.color);
            self.view.showStep(move.pearl, move.recolored , move.deleted);
            self.changePlayer();
            self.postMove();
            self.pageConstructor.changeBlockingDivState(false);
        }, 2000);

};

/*
Game.prototype.countDuration = function(){
    var difference = this.endTime - this.startTime
    var seconds = Math.floor(difference /1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    
    minutes = minutes - (hours * 60);
    seconds = seconds - (minutes * 60);
    
    if (hours < 10)
        hours = ("0"+hours);
    
    if (minutes < 10)
        minutes = ("0"+minutes);
    
    if (seconds < 10)
        seconds = ("0"+seconds);
    
    
        this.model.duration = (hours + ":" + minutes  + ":" + seconds) ;
    
        
    console.log(hours + "---" + minutes + "---" + seconds);
    console.log(this.model.duration);
        
} */