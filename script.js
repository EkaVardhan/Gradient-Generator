var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")
var x = document.getElementById("gradient"),
style = window.getComputedStyle(x),
bck = style.getPropertyValue("background");
var b = bck.slice(16,77)
var button = document.querySelector(".btn");
console.log(button);

function colorPicker() {
	return '#'+Math.floor(Math.random()*16777216).toString(16);
}

function randomize() {
	color1.value = colorPicker();
	color2.value = colorPicker();
	setGradient();
}

function initialBackground() {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value 
    + ")";

    css.textContent= b + ";" ;
}

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";" ;
}

initialBackground();

button.addEventListener("click", randomize);

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);