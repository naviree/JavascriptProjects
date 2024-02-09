const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// this is where the logic for clicking the button would be
btn.addEventListener("click", () => {
	const hexCode1 = getRandomHexCode();
	const hexCode2 = getRandomHexCode();
	document.body.style.background = `linear-gradient(to right, ${hexCode1}, ${hexCode2})`;
	color.textContent = `${hexCode1} to ${hexCode2}`;
});

function getRandomHexCode() {
	let randomColor = Math.floor(Math.random() * 16777215).toString(16);
	return "#" + "0".repeat(6 - randomColor.length) + randomColor;
}
