
var numOfSquares=6;
var pickedColor;
var colors=generateColors(numOfSquares);
var squares=document.querySelectorAll(".square");
var mode=document.querySelectorAll(".mode");
var rgb=document.querySelector("#rgb");
var message=document.querySelector("#message");
var newGame=document.querySelector("#newGame");
var h1=document.querySelector("h1");

init();

function init(){
	setMode();
	reset();
	rgb.innerHTML="<br />" +pickedColor+ "<br />";
	newGame.addEventListener("click", reset);
}


function randomNum(limit){
	return Math.round(Math.random()*limit);
}

// change the color to the match corrected square
function changeColors(color){
	for (var i = 0; i <squares.length; i++) {
		squares[i].style.background=color;
		h1.style.background=color;
	}
}

function generateColors(){
	var arr=[];
	for (var i = 0; i <numOfSquares; i++) {
		var hue="rgb(" +randomNum(255)+", "+randomNum(255)+", "+randomNum(255)+ ")";
		arr.push(hue);
	}
	return arr;
}

function colorSquares(){

	
	 for (var i = 0; i <squares.length; i++) {
	 	if(colors[i]){
	 		squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}

	
}

function pickSelected(){
	return colors[randomNum(colors.length-1)];
}

function clickedSquare(){
	for (var i = 0; i <squares.length; i++) {
		squares[i].addEventListener("click", function() {
			var clickedColor=this.style.background;
			if(clickedColor===pickedColor){
			message.textContent="Correct!";
			changeColors(pickedColor);
			newGame.textContent="Play Again?";
		}
			else{
				this.style.background="black";
				message.textContent="Try Again";
			}
		});
	}
}

function reset(){
	colors=generateColors(numOfSquares);
	pickedColor=pickSelected();
	rgb.innerHTML="<br />" +pickedColor+ "<br />";
	newGame.textContent="New Colors";
	message.textContent="";
	h1.style.background="steelblue";
	colorSquares(colors);
	clickedSquare();
}


function setMode(){
	for (var i = 0; i < mode.length; i++) {
	 mode[i].addEventListener("click", function(){
	 	mode[0].classList.remove("selected");
	 	mode[1].classList.remove("selected");
	 	this.classList.add("selected");
	 	this.textContent==="Easy"? numOfSquares=3:numOfSquares=6;
	 	reset();
	 });

	}
}
