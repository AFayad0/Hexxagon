<?php


$FileName = "Leaderboard.txt";

if(!file_exists($FileName))
{
    $Leaderboard = fopen("Leaderboard.txt", "a") or die("Unable to open file!");

    $str = "Name Duration\n";
    fwrite($Leaderboard, $str);
}
else
    $Leaderboard = fopen("Leaderboard.txt", "a") or die("Unable to open file!");

$str = $_GET["name"]." ".$_GET["duration"]."\n";

fwrite($Leaderboard, $str);
fclose($Leaderboard);

header("location: index.php");
?>