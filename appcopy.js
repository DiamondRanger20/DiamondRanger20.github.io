/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var scores, roundScore, activePlayer, dice, gamePlaying;
init();


// document.querySelector('#current-' + activePlayer).innerHTML = '<b>' + dice + '</b>';




function btn() {

}
btn();

var preroll;

document.querySelector('.btn-roll').addEventListener('click', function() {
		if (gamePlaying) {
			var dice1 = Math.floor(Math.random() * 6) + 1;
			var dice2 = Math.floor(Math.random() * 6) + 1;
			document.getElementById('dice1').style.display = "block";
			document.getElementById('dice2').style.display = "block";
			document.getElementById('dice1').src = 'dice-' + dice1 + '.png';
			document.getElementById('dice2').src = 'dice-' + dice2 + '.png';

			// if (dice === 6 && preroll === 6) {
			// 	scores[activePlayer] = 0;
   //          	document.querySelector('#score-' + activePlayer).textContent = '0';
			// 	nextPlayer();
			// }

			if (dice1 == 1 || dice2 == 1) {
				nextPlayer();
				
			} 
			else {
				roundScore += dice1 + dice2;
					document.querySelector('#current-' + activePlayer).textContent = roundScore;
				}

			
			// if (dice1 !== 1) {
			// 	roundScore += dice1;
			// 	document.querySelector('#current-' + activePlayer).textContent = roundScore;
				
			// } 
			// else {
			// 		nextPlayer();
			// 	}

			// if (dice2 !== 1) {
			// 	roundScore += dice2;
			// 	document.querySelector('#current-' + activePlayer).textContent = roundScore;
				
			// } 
			// else {
			// 		nextPlayer();
			// 	}

		
			}

			// preroll = dice;

		

	
});


document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {
		// holding stuff
		scores[activePlayer] += roundScore;

		//update stuff
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		var win = document.querySelector(".finale").value;
		if (win) {
			var winningscore = win;
		} else {
			winningscore = 100;
		}
		// CHECK FOR 100
		if (scores[activePlayer] >= winningscore){
			document.getElementById('dice1').style.display = "none";
			document.getElementById('dice2').style.display = "none";
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			nextPlayer();
		}


	}

	
	

});
 
function nextPlayer() {
	document.querySelector('#current-' + activePlayer).textContent = '0';
		activePlayer === 0  ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;

		
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		// document.querySelector('.dice').style.display = 'none';
		document.getElementById('sound').play();
		document.querySelector('#dice1').src = 'Bird.jpg';
		document.querySelector('#dice2').src = 'Bird.jpg';

}

document.querySelector('.btn-new').addEventListener('click', init);

	

function init() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;


	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');

}






