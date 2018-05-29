'use strict';


var ComputerPlayConstructor = function(view, model, pageConstructor) {
    GameController.call(this, view, model, pageConstructor);
};

ComputerPlayConstructor.prototype = new GameController();
ComputerPlayConstructor.prototype.constructor = ComputerPlayConstructor;

ComputerPlayConstructor.prototype.process = function() {
    var page = this.pageConstructor.createPageConmputerConstructor();
    this.insertPage(page);
    this.model.computerPlays = true;
    this.model.reduceHexagons();
    this.view.showHexagons(this.model.hexagons);
    this.deleteAllHandlersOnCanvas();
        
    Object.getPrototypeOf(ComputerPlayConstructor.prototype).process.call(this);
};


