function OnLoad()
{
	SelectRoom(0);
	var myAudio=document.getElementById("music").play();
}

function SelectRoom(roomIndex)
{
	document.getElementById("image").innerHTML = roomArray[roomIndex].image;
	document.getElementById("roomTitle").innerHTML = roomArray[roomIndex].title;
	document.getElementById("roomText").innerHTML = roomArray[roomIndex].text;
	document.getElementById("roomChoices").innerHTML = "";

	for(var i = 0; i < roomArray[roomIndex].choices.length; i++)
	{
		var options = "<button type='button' onClick='SelectRoom(" + roomArray[roomIndex]["choices"][i]["index"] + ")'>" + roomArray[roomIndex]["choices"][i]["text"] + "</button>";
		//square brackets specify each item down the list
		document.getElementById("roomChoices").innerHTML += options;
	}
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
	function volumeUp()
	{
		var myAudio = document.getElementById("music");
		myAudio.volume +=0.1;
	}
	function volumeDown()
	{
		var myAudio = document.getElementById("music");
		myAudio.volume -=0.1;
	}
	function mute()
	{
		var myAudio = document.getElementById("music");
		if(myAudio.volume>0)
		{
			myAudio.volume=0;
		}
		else if(myAudio.volume==0)
		{
			myAudio.volume=1;
		}
	}
