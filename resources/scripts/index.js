// Elements
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const startGameButton = document.getElementById('start-game-button');
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');

// instantiate the game object from the 'RockPaperScissors' class.
let game;

// hide game screen
//gameScreen.classList.add('d-none');

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph = (game.username, ': ', game.score.user, 'v CPU: ', game.score.cpu);
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph = game.gameHistoryLog;
}

// start-game-button EventListener
startGameButton.addEventListener('click', function () {
  const userName = game.username;
  game = new RockPaperScissors(userName);

  //welcomeScreen.classList.add('d-none');
  //gameScreen.classList.remove('d-none');
  // Complete
});

// go-button EventListener
goButton.addEventListener('click', function () {
  const userSelection = game.userSelection;
  game.play(userSelection);

  scoreParagraph = updateScoreTallyUI();
  gameHistoryParagraph= updateGameHistoryUI();
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener('click', function(e) { 
  
// });