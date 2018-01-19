window.onload=function()
  {
      var myAudio=document.getElementById("music").play();
  }
function play_pause()
    {

      var myAudio = document.getElementById("music");
      myAudio.volume =1;
      if (myAudio.paused)
      {
          myAudio.play();
      }
        else
      {
          myAudio.pause();
      }
  }
function OnLoad()
  {
    var playername = localStorage.getItem("playername");
    var playerage = localStorage.getItem("playerage");
    document.getElementById("playername").innerText = playername;
    document.getElementById("playerage").innerText = playerage;
    var myAudio=document.getElementById("music").play()
  }
function StorePlayerData()
  {
    var playerName = document.forms[0]["playername"].value;
    var playerAge = document.forms[0]["playerage"].value;
    localStorage.setItem("playername",playerName);
    localStorage.setItem("playerage",playerAge);

  }
$(document).ready(function(){
  $("#Nyx").fadeIn(3000);
  });
