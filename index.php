
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    
    <link rel="stylesheet" href="styles/style.css">
    
    <title>Hexagon</title>
</head>
<body onload="hideButtons()">

   <?php include 'sortfunction.php'; 
    
     // if leaderboard is clicked, show it
     if (isset($_GET["ShowLeader"]))
         {
             
            $Leaderboard = fopen("Leaderboard.txt", "r");
            
            $names = [];
            $scores = [];
            while ($line = fgets($Leaderboard)) 
            {
                $Arr = explode(" ", $line);    
                $names[] = $Arr[0];
                $scores[] = $Arr[1];
            } 
             
            // calling the function sortScores
            list($names, $scores) = sortScores($names, $scores); 
             
    ?>
        
<div >
</div>
<div id="Leaderboards" class="menu">
<a  href="./index.php" class="back"> Back </a>
<table class="table">
<thead>
    
    <tr> 
        <th colspan="3">
        <h3>Leaderboard</h3>
        </th>
    </tr>
<tr>
<th>Rank</th>
<th>Name</th>
<th>Duration</th>
</tr>
</thead>
<tbody>
    
 <?php
    for ($i=0; $i<count($names); $i++)
    {
        //show only top 10
        if($i==10) break;
 ?>
    
<tr>
    
<td><?php echo $i+1  ?></td>
<td><?php echo $names[$i]  ?></td>
<td><?php echo $scores[$i] ?></td>
</tr>
    <?php 
    } 
      fclose($Leaderboard);
      ?>
</tbody>    
</table>
</div>
   
    <?php
         }
    ?>
    
    <div id="page" >
        <div class="topbar">
            <h1 style="color:rgba(0, 81, 255, 1); font-size:54px;  ">HexxagoN</h1>
        <div id="timer" class="timer">00:00:00</div>
        <ul id="icons"> 
            <i id="pausebtn" class="fas fa-pause icon"></i>
            <i id="exitbtn" class="fas fa-sign-out-alt icon"></i>
        </ul>
        </div>
        <div class="game-table">
        <div class="game-table-canvas">
            <div class="canvas-wrapper">
                <canvas id="stadium" width="550" height="550" ></canvas>
                <canvas id="selected" width="550" height="550" ></canvas>
                <canvas id="pearls" width="550" height="550" ></canvas>
                </div>
            </div>
            <div id="info" class="game-table-info" >
            </div>

        </div>

        
    </div>

     <div id="paused"> 
         
        <h1> Paused </h1> 
         <div id="continuebtn"> Continue </div>
    </div>
    
    <div id="blocking"></div>

    <script src="js/Timer/easytimer.min.js"></script>
    
    <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
    
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">    
    
    <script type="text/javascript" src="js/Models/Coordinates.js"></script>
    <script type="text/javascript" src="js/Constants/Global.js"></script>
    <script type="text/javascript" src="js/utils/utils.js"></script>
    <script type="text/javascript" src="js/Page/PageConstructor.js"></script>

    <script type="text/javascript" src="js/Models/BaseAI.js"></script>
    <script type="text/javascript" src="js/Models/AlphaBetaAI.js"></script>
    <script type="text/javascript" src="js/Models/SimpleAI.js"></script>

    <script type="text/javascript" src="js/Models/Vector.js"></script>
    <script type="text/javascript" src="js/Models/Rectangle.js"></script>
    <script type="text/javascript" src="js/Models/Hexagon.js"></script>
    <script type="text/javascript" src="js/Models/Pearl.js"></script>
    <script type="text/javascript" src="js/Models/CanvasModel.js"></script>
    <script type="text/javascript" src="js/Models/Move.js"></script>
    <script type="text/javascript" src="js/Models/ComputerPlayer.js"></script>
    <script type="text/javascript" src="js/Models/GameModel.js"></script>
    <script type="text/javascript" src="js/Models/PointCounterService.js"></script>

    <script type="text/javascript" src="js/view_models/CanvasViewClass.js"></script>

    <script type="text/javascript" src="js/Controllers/GameController.js"></script>
    <script type="text/javascript" src="js/Controllers/HowToPlayConstructor.js"></script>
    <script type="text/javascript" src="js/Controllers/IndexConstructor.js"></script>
    <script type="text/javascript" src="js/Controllers/PlayerCountConstructor.js"></script>
    <script type="text/javascript" src="js/Controllers/PearlsConstructor.js"></script>
    <script type="text/javascript" src="js/Controllers/ComputerPlayConstructor.js"></script>
    <script type="text/javascript" src="js/Controllers/Game.js"></script>

    <script type="text/javascript" src="js/app.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    
</body>
</html>
