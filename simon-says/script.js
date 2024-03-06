const green = document.getElementById("#green");
const red = document.getElementById("#red");
const yellow = document.getElementById("#yellow");
const blue = document.getElementById("#blue");
const startButton = document.querySelector(".start");


// create startGame function
function startGame() {
	startButton.classList.add("hidden");
	displaySequence();
}

startButton.addEventListener("click", startGame);

function displaySequence() {
	let sequence = [];
	let humanSequence = [];

	const squares = [green, red, yellow, blue];

	for (let i = 0; i < squares.length; i++) {

	}	
}
