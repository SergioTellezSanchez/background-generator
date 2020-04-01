var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColor = document.getElementById("randomColor");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function changeRrandomColor() {
	var res1 = "#" + '';
	var res2 = "#" + '';
	for (var j = 0; j < 6; j++) {
      	var raw1 = parseInt(Math.random() * 16, 10).toString(16);
      	var raw2 = parseInt(Math.random() * 16, 10).toString(16);
        res1 += raw1;
        res2 += raw2;
        };

	body.style.background = 
	"linear-gradient(to right, " 
	+ res1 
	+ ", " 
	+ res2 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomColor.addEventListener("click", changeRrandomColor);