'use strict';
/*
need methods
 */

function check1player() 
{
    var name = document.getElementById("Player1Name").value;
    if(name.length < 1 || name.length > 10 )  
    {
        document.getElementById("Player1Name").style.borderColor='#FF0000';
        document.getElementById("Player1Name").value='';
        document.getElementById("Player1Name").placeholder='Name must be between 1-10 characters';
    }
    else
        window.location.href = HASH_URI.game;
}

function check2players() 
{
    var name1 = document.getElementById("Player1Name").value;
    var name2 = document.getElementById("Player2Name").value;
    var check1 = true, check2 = true;
    if(name1.length < 1 || name1.length > 10)
    {
        document.getElementById("Player1Name").style.borderColor='#FF0000';
        document.getElementById("Player1Name").value='';
        document.getElementById("Player1Name").placeholder='Name must be between 1-10 characters';       
        check1 = false;
    }
    else
        document.getElementById("Player1Name").style.borderColor='#000000';


    if (name2.length < 1 || name2.length > 10 )
    {
        document.getElementById("Player2Name").style.borderColor='#FF0000';
        document.getElementById("Player2Name").value='';
        document.getElementById("Player2Name").placeholder='Name must be between 1-10 characters';
        check2 = false;
    }
    else
        document.getElementById("Player2Name").style.borderColor='#000000';

        
    if (check1 && check2)
        window.location.href = HASH_URI.game;
        
}

// pause the game
$(function () {
  $("#pausebtn").click(function () {
    $("#paused").css("display", "flex");
    //$("#page").hide();
      timer.pause();
  });
});


//resume the game
$(function () {
  $("#continuebtn").click(function () {
    $("#paused").css("display", "none");
    $("#page").show();
      timer.start();
  });
});


//exit the game
$(function () {
  $("#exitbtn").click(function () {
    timer.pause();
  if (window.confirm("Click OK to exit the game."))
      {
        window.location.replace("index.php");
      }
      timer.start();
  });
});





function hideButtons()
{
     $(".game-table-canvas").hide();
     $("#timer").hide();
     $("#icons").hide();
}

function showButtons()
{
    $(".game-table-canvas").show();
    $("#timer").show();
    $("#icons").show();
}


function addPropertyToObject(obj, properties){
    for(var key in properties){
        obj[key] = properties[key];
    }
    return obj;
}

function clone(obj){
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

function mixArray(array){
    var index, mixedArray = [];
    var count = array.length;

    for( var i = 0; i < count; i++){

        index = Math.floor(Math.random() * array.length);
        mixedArray.push(array[index]);
        array.splice(index,1);

    }

    return mixedArray;
}

function objToArray (obj){
    var arr = [];
    for(var key in obj){
        arr.push(obj[key]);
    }
    return arr;
}

