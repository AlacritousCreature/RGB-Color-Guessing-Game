var numSquares=6;
var colors = [];
var colorPicked ;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
//var easy=document.querySelector("#easybtn");
//var hard=document.querySelector("#hardbtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons events listener
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
    for(var i=0;i< modeButtons.length;++i){
	    modeButtons[i].addEventListener("click",function(){
           modeButtons[0].classList.remove("selected");
           modeButtons[1].classList.remove("selected");
           this.classList.add("selected");
           this.textContent === "Easy" ? numSquares=3: numSquares=6;
            reset();
	   });
    }
}

function setupSquares(){
	for(var i=0;i < squares.length ; ++i){
	    //added intial colors to squares
        //add event listener to the square when clicked
        squares[i].addEventListener("click",function(){
              //grab the color of clicked square
               var clickedColor = this.style.backgroundColor;
        		//compare with the selected color
        		if(clickedColor===colorPicked){
        			messageDisplay.textContent="correct!";
        			resetButton.textContent="Play Again";
        			changeColor(colorPicked);
        			h1.style.backgroundColor = colorPicked;
        		}else{
        			this.style.backgroundColor = "#232323";
        			messageDisplay.textContent = "Try Again";
        		}
        });
    }
}

function reset(){
	//generate all new colors
   colors = generateRandomColors(numSquares);
   //pick a new random color from the array
   colorPicked = pickColor();
   //change color dispay to match the colorpicked
   colorDisplay.textContent = colorPicked;
   resetButton.textContent="New Colors";
   messageDisplay.textContent = "";
   //change the color of squares
   for(var i=0;i<squares.length;++i){
   	  if(colors[i]){
   	  	squares[i].style.display = "block";
  		squares[i].style.backgroundColor = colors[i];
   	   }else{
   		squares[i].style.display = "none";
   	   }
   }
   //change the background of h1 again to black
   h1.style.backgroundColor="#75d194";
}

resetButton.addEventListener("click",function(){
  reset();
});

function changeColor(color){
	for(var i=0;i<squares.length;++i){
		squares[i].style.backgroundColor = color; 
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an empty array
	var arr=[];
	//repeat num times
	for(var i=0;i<num;++i){
      //random color
      arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
