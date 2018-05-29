'use strict'
/*
PageConstructor provides html for all page of the application
 */

var PageConstructor = function(){
    this.createPageIndexConstructor = function(){
        var html ='';

        hideButtons();
        /*
        html += '<form> Play Against: <br/> <input type="radio" name="PlayerCount" Value="1"> Player <br/> <input type="radio" name="PlayerCount" Value="2"> Computer </form>';
        */
        html += '<div class="menu"><a class="button" href="'+ HASH_URI.computer+'">'+ "1 PLAYER" +'</a>';
        
        html += '<a class="button" href="'+ HASH_URI.count+'">'+ "2 PLAYERS" +'</a>';

         html += '<a class="button" href="index.php?ShowLeader=true">'+ " LEADERBOARD" +'</a>';
         html += '<a class="button" href="'+ HASH_URI.howto +'">'+ " HOW TO PLAY" +'</a></div>';
        return html;
    };

    
    // against Player
    this.createPagePlayersCountConstructor = function(){
        var html ='';
         html+= '<form class="menu"> <h1> Enter Your Names </h1> <input type="text" id="Player1Name" class="nameinput" placeholder="Player 1"> <input type="text" id="Player2Name" class="nameinput" placeholder="Player 2"> ';
    
              html+=  '<a id="startbtn2" class="button" onclick="check2players(); return false;" href="#"> START </a>';
                  html+=  '<a  href="./index.php" class="back"> Back </a> </form>';

        
         
        return html;
    };

    
    
     this.createHowToPlay = function(){
        var html ='';
         html+= '<div class="menu" style="padding: 0 25px; z-index:1000; font-size:18px;">  <h2> Goal </h2>  Target of the game is to have as many own stones on the board, as possible. Beat the computer as fast as you can to put your name in the leaderboard.<h2 style="padding-top: 20px;"> Rules </h2>  During every move, the player can move whether he wants to duplicate one of his stones to an empty adjacent field (originating stone remains), or whether he want to jump with the stone to an empty field which is 2 spaces away. Whenever a stone is placed adjacent to opposing stones, they change colour and become friendly (own) stones. In case the opponent cannot move any more, all empty fields are automatically populated with your stones. This fills up the board and brings the game to its end.';
    
              
        
         html+=  '<a class="back" href="./index.php"> Back </a> </div>';
        return html;
    };
    
    
    
    /*
    //against Computer
    this.createPagePlayersConstructor = function(){
        var html = '';
                 html+= '<form> <input type="text" id="Player1Name"> </form>  <input class="checkbox" id="computer" type="checkbox"> ';

        html += '<div class="game-table-info-title">' + GameSettings[locale] + '</div>' +
                '<div>' +
                    PlacePearlsDescription[locale] +
                '</div>' +
          
        
                html+= '<button id="StartAgainstComputer"> GO </button>';
            
              html+=  '<div class="button-a-wrapper"><a class="button-a" href="'+ HASH_URI.game+'">' + StartGame[locale] +'</a></div>';

        return html;

    };

    */
    
    //new controller computer plays
    this.createPageConmputerConstructor = function(){
        var html = '';
        html+= '<form class="menu"> <h1> Enter Your Name </h1> <input type="text" id="Player1Name" class="nameinput" placeholder="Your Name"> ';
          html+=  '<a id="startbtn1" class="button" onclick="check1player(); return false;" href="#"> START </a> ';
          html+=  '<a  href="./index.php" class="back"> Back </a> </form>';
        
        return html;
    }
    
    
    
    
    this.createPageGamePlay = function(){
        var html = '';

                PLAYERS_INFO[0].name = document.getElementById("Player1Name").value; 
        if (document.getElementById("Player2Name") != null)
            {
                PLAYERS_INFO[1].name = document.getElementById("Player2Name").value;
                
            }
        
            
        
        html += '<div id="game-statistic" class="bottombar"> </div>';


        html += '<div id="winner-banner" class="menu winner">' +
                    
                        '<h1> The End </h1>' +
                        '<div id="result"></div>' +
                    
                '</div>';

        /*
        html += ' <div class="game-table"> <div class="game-table-canvas"> <div class="canvas-wrapper"><canvas id="stadium" width="700" height="550" ></canvas><canvas id="selected" width="700" height="550" ></canvas><canvas id="pearls" width="700" height="550" ></canvas></div> </div> <div id="info" class="game-table-info" > </div> </div> '
        */
        
        
        return html;
    };

    this.insertPage = function(html){
        var element = document.getElementById('info');
        element.innerHTML = html;
    };

    
    
    /*
    this.buildStatistic = function(player, count, computer){
        var width = 100/Object.keys(count).length;
         var name1 = PLAYERS_INFO[0].name, name2 = PLAYERS_INFO[1].name;
        var html = '<div class="current-player" style="background-color: rgb(255, 87, 66)">'+ name1 +'</div>';


        
        //html += '<div class="wrapper">';
        for(var key in count){
            html += '<div class="statistic" style="width:'+ width + '%;background-color: '+ key +';">' + count[key] + '</div>'
        }
        
        //html += '</div>';

        if(computer){
            html += '<div class="current-player" style="background-color: '+ computer.color[0] +'">' + Computer[locale] +'</div>';
        }
        else
            {
            html += '<div class="current-player" style="background-color: rgb(144, 140, 254) ">' + name2 +'</div>';
                
            }

        return html;
    };
*/
    
    
    this.buildStatistic = function(player, count, computer){
        var name1 = PLAYERS_INFO[0].name, name2 = PLAYERS_INFO[1].name;
        var scores = new Array();
        for(var key in count){
            scores.push(count[key]);
        }
        
        
        if (player[0] == "rgb(255, 87, 66)")
            {
                $(".bottombar").css("background-color","red");
                
                var html = '<div id="p1" class="playername" style="opacity : 1">'+ name1 +': ' +  scores[0] +'</div>';
                
                 if(computer){
                        html += '<div id="p2" class="playername" style="opacity : 0.4"> Computer: '+ scores[1] +'</div>';
                        }
                    else
                        {
                    html += '<div id="p2" class="playername" style="opacity : 0.4">' + name2 +': ' +  scores[1] +'</div>';

                        }

            }
        else
            {
                $(".bottombar").css("background-color","blue");
                
                var html = '<div id="p1" class="playername" style="opacity : 0.4">'+ name1 +': ' +  scores[0] +'</div>';
                
                if(computer){
                        html += '<div id="p2" class="playername" style="opacity : 1"> Computer: '+ scores[1] +'</div>';
                        }
                    else
                        {
                    html += '<div id="p2" class="playername" style="opacity : 1">' + name2 +': ' +  scores[1] +'</div>';

                        }
                
            }
            
             html+=  '</form>';

                
        
        return html;
    }
    
    this.buildGameOver = function(count, player, model){
        var name1 = PLAYERS_INFO[0].name, name2 = PLAYERS_INFO[1].name;
        var width = 100/Object.keys(count).length;
        var html = '<div>';
      
        var scores = new Array();
        for(var key in count){
            scores.push(count[key]);
            console.log(count[key]);
        }
        
        timer.pause();
        //check if a player has 0 pieces "change undefined with 0"
        if (scores[1] == null)
            {
                
                if (model.computerPlays)
                {
                    //check if the winner is the computer
                        if (player.name == null )
                            {
                                scores[1] = scores[0];
                                scores[0] = 0;
                            }
                        else
                                scores[1] = 0;
                }
                else
                    {
                        if (player.name == name1)
                            scores[1] = 0;
                        else
                            {
                                scores[1] = scores[0];
                                scores[0] = 0;
                            }
                    }
            }
        else
            {
                if (scores[0] > scores[1] && model.computerPlays)
                    {
                    model.playerIsWinner = true;
                        console.log("h1");
                    }
                    else
                        {
                    model.playerIsWinner = false;
                            console.log("h2");
                        }
                        }
           /*
                    */
            if (model.playerIsWinner)
                {
                
                    if (model.computerPlays)
                        {
                            html += '<div class="win-title"> You WON!</div>';
                            html += '<div>'+ name1 +' : '+ scores[0] +'</div>';
                            html += '<div> Computer : '+ scores[1] +'</div>';
                        }
                    else
                        {
                            html += '<div class="win-title">'+ player.name +' WON!</div>';
                            html += '<div>'+ name1 +' : '+ scores[0] +'</div>';
                            html += '<div>'+ name2 +' : '+ scores[1] +'</div>'
                        }
                
                html += '<a href="SaveScore.php?duration=' + document.getElementById("timer").innerHTML + '&name='+player.name +'" class="button">Main Menu</a> </div>';
                }
            else
                {
                    html += '<div class="win-title"> You LOST!</div>';

                       html += '<div>'+ name1 +' : '+ scores[0] +'</div>';
                        html += '<div> Computer : '+ scores[1] +'</div>';
                    
                    
                html += '<a href="index.php" class="button">Main Menu</a> </div>';
                }
        
        return  html;
    };

    this.insertStatistic = function(player, count, computer){
        var statisticDiv = document.getElementById('game-statistic');
        statisticDiv.innerHTML = this.buildStatistic(player, count, computer);
    };

    this.insertGameOver = function(count, player, model){
        //удаляем статистику с основной страницы
        var statisticDiv = document.getElementById('game-statistic');
        statisticDiv.parentNode.removeChild(statisticDiv);

        //добавляем информацию о завершении на баннер
        var gameOver = document.getElementById('result');
        gameOver.innerHTML = this.buildGameOver(count, player, model);
        
        setTimeout(
        function() {
            document.getElementById('winner-banner').style.display = 'flex';
            $(".game-table-canvas").hide();
        }, 5000);
        

    };

    this.changeBlockingDivState = function(block){
        var blockingDiv = document.getElementById('blocking');
        if(block){
            blockingDiv.style.display = 'block';
        }
        else{
            blockingDiv.style.display = 'none';
        }
    }

};
