var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	//alert("easy");	
});

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 3; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block" //to bring back the squares
	}
	//alert("hard");
});

resetButton.addEventListener("click", function() {
	//generate all new colors 
	numSquares = 6;
	colors = generateRandomColors(numSquares);  
	//pick a neweranom color from array
	pickedColor = pickColor();

	messageDisplay.textContent = "";
	//change color Display to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New game";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	//Always use style.backgroundColor

	squares[i].addEventListener("click", function() {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!!"; 
			resetButton.textContent = "Play Again?"
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		// change each color to match the given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	//pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}