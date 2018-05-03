var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var navColorDisplay = document.querySelector("#navColorDisplay");
var backgroundDisplay = document.querySelector("#backgroundDisplay");
var clickedColorDisplay = document.querySelector("#clickedColorDisplay");
var resetButton = document.querySelector("#reset");



init();

function init(){
	setupSquares();
	reset();
}


function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			clickedColorDisplay.textContent = clickedColor;
			navColorDisplay.style.background = clickedColor;
			backgroundDisplay.style.background = clickedColor;
			console.log(clickedColor);
		});
	}
}



function reset(){
	colors = generateRandomColors(numSquares);

	resetButton.textContent = "New Colors"
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

