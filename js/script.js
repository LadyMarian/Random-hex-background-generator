const button = document.getElementById("btn");
const body = document.querySelector("body");
const hexValue = document.getElementById("hex-value");


function createHex() {
	randomPicker = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomPicker;
}

function clickfunction() {
	console.log('click');
	newHex = createHex();
	body.style.background = newHex;
	hexValue.innerHTML = newHex;
}

button.addEventListener("click", clickfunction);