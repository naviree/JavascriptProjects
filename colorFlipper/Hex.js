const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// this is where the logic for clicking the button would be
btn.addEventListener("click", () => {
	document.body.style.background = getRandomHexCode();
	console.log(getRandomHexCode());
	color.textContent = getRandomHexCode();
});

function getRandomHexCode() {
	let randomColor = Math.floor(Math.random() * 16777215).toString(16);
	return "#" + "0".repeat(6 - randomColor.length) + randomColor;
}
