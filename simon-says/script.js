const green = document.getElementById("#green");
const red = document.getElementById("#red");
const yellow = document.getElementById("#yellow");
const blue = document.getElementById("#blue");
const startButton = document.querySelector(".start");

// create startGame function
function startGame() {
	console.log("Hello world");
	startButton.classList.add("hidden");
	info.classList.remove("hidden");
	info.textContent = "Wait for the computer";
}

startButton.addEventListener("click", startGame);
// create on click events for each square

// create a function that displays the sequence to the player

function displaySequence() {
	let sequence = [];
	let humanSequence = [];
}
// create two arrays to keep track of the sequence

// call a function that calls a random square for the sequence

// gather user input if incorrect call displaySequence function

// if correct go to next level
