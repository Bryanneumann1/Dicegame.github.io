var playerOneScore = [];
var playerTwoScore = [];
var totalRoundsToPlay = 0;

function setPlayerOne()
{
	var playerOne = window.prompt("What is player one's name?","<Enter player one's name>");
	if(playerOne != null){
		document.getElementById("p1").innerHTML="<button onclick=\"rollDice1()\">" +playerOne+"</button>";
	}
}

function setPlayerTwo(){
	var playerTwo = window.prompt("What is player two's name?","<Enter player two's name>");
	if(playerTwo != null){
		document.getElementById("p2").innerHTML="<button onclick=\"rollDice2()\">" +playerTwo+"</button";
	}
}

function setTotalRounds(){
	var totalRounds = window.prompt("How many rounds would you like to play?","<How many rounds would you like to play?>");
	if (totalRounds != null){
		document.getElementById("set total rounds").innerHTML
		totalRoundsToPlay = parseInt(totalRounds);
	}
}

function getTotalDiceValue(diceArray){
	var total = 0;
	for(var i = 0; i < diceArray.length; i++){
		total += diceArray[i];
	}
	return total;
}




function rollDice1(){

	var die1 = document.getElementById("die1");
	var die2 = document.getElementById("die2");
	var status = document.getElementById("status");
	var d1 = Math.floor(Math.random() * 6) + 1;
	var d2 = Math.floor(Math.random() * 6) + 1;
	var diceTotal = d1 + d2;
	die1.innerHTML = d1;
	die2.innerHTML = d2;
		status.innerHTML = "You rolled "+diceTotal+".";
    playerOneScore.push(diceTotal);
    checkRoundsPlayed();
    var diceTotal = getTotalDiceValue(playerOneScore);
	}


function checkRoundsPlayed(){
	if (playerOneScore.length === totalRoundsToPlay){
		document.getElementById("p1").style.visibility = 'hidden';
	}
}

function calculateTotalPlayerOne(){
	var totalScore = playerOneScore.reduce(function(a, b){
		return a + b;
	});
	return totalScore;
}


function rollDice2(){

	var die3 = document.getElementById("die3");
	var die4 = document.getElementById("die4");
	var status = document.getElementById("status1");
	var d3 = Math.floor(Math.random() * 6) + 1;
	var d4 = Math.floor(Math.random() * 6) + 1;
	var diceTotal = d3 + d4;
	die3.innerHTML = d3;
	die4.innerHTML = d4;
		status1.innerHTML = "You rolled "+diceTotal+".";
	playerTwoScore.push(diceTotal);
	checkRoundsPlayedDice2();
	var diceTotal = getTotalDiceValue(playerTwoScore);
}




function checkRoundsPlayedDice2(){
	if (playerTwoScore.length === totalRoundsToPlay){
		document.getElementById("p2").style.visibility = 'hidden';
		checkWinner();
}
	}

	function calculateTotalPlayerTwo(){
	var totalScore = playerTwoScore.reduce(function(a, b){
		return a + b;
	});
	return totalScore;
}


function checkWinner(){
	if (calculateTotalPlayerOne()> calculateTotalPlayerTwo()){
		document.getElementById("winner1").innerHTML="Player 1 Wins";
	}


	else if (calculateTotalPlayerOne() < calculateTotalPlayerTwo()){
		document.getElementById("winner2").innerHTML="Player 2 Wins";
	}
}






function startGame(){
setPlayerOne();
setPlayerTwo();
var totalRounds = setTotalRounds();
}
startGame();
