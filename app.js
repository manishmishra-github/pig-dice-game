/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- ALSO, if the player rolls 6 two times consecutively, all his GLOBAL score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer,gamePlaying;


init();//initilaize 
var lastdice,x;






document.querySelector(".btn-roll").addEventListener("click",function(){
	if(gamePlaying){
	var dice = Math.floor(Math.random()*6)+1;
	var active=document.querySelector("#current-"+activePlayer);
	
	var dice_select=document.querySelector(".dice");

	dice_select.style.display="block";

	dice_select.src="dice-"+ dice+".png";
	if(dice===6&&lastdice===6){
		scores[activePlayer]=0;
		document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];
		dry();
	}
	else if(dice!==1){
		roundScore+=dice;//update roundscore
		active.textContent=roundScore;//append roundscore
	}
	else{
		dry();

	}
lastdice=dice;
}

});

document.querySelector("#sub").addEventListener("click",function(){

	 x=document.querySelector("#input").value;
	 document.querySelector("#input").value="";

	 if(x){
	 	

	 }

	 

});
document.querySelector(".btn-hold").addEventListener("click",function(){
	if(gamePlaying){
	scores[activePlayer]+=roundScore;

	document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];
	console.log(x);
	
	if(scores[activePlayer]>=x){
		document.querySelector("#name-"+activePlayer).textContent="Winner!";
		document.querySelector(".dice").style.display="none";
		document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
		document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
		gamePlaying=false;
		
	}else {
		dry();

	}}

	


});



document.querySelector(".btn-new").addEventListener("click",init);



function init(){
scores=[0,0];
roundScore=0;
activePlayer=0;
gamePlaying=true;
x=100;



document.querySelector(".dice").style.display="none";
document.getElementById("score-0").textContent="0";
document.getElementById("score-1").textContent="0";
document.getElementById("current-0").textContent="0";
document.getElementById("current-1").textContent="0";
document.querySelector("#name-0").textContent="Player-1";
document.querySelector("#name-1").textContent="Player-2";

		document.querySelector(".player-0-panel").classList.remove("winner");
		document.querySelector(".player-1-panel").classList.remove("winner");
		document.querySelector(".player-0-panel").classList.remove("active");
		document.querySelector(".player-1-panel").classList.remove("active");
		document.querySelector(".player-0-panel").classList.add("active");

}

function dry(){
			var active=document.querySelector("#current-"+activePlayer);
		roundScore=0;//roundscore set to 0
		active.textContent=roundScore;//append roundscore
		document.querySelector(".dice").style.display="none";

		activePlayer===0?activePlayer=1:activePlayer=0;

		document.querySelector(".player-0-panel").classList.toggle("active");
		document.querySelector(".player-1-panel").classList.toggle("active");
	}





