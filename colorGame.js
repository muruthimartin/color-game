let numSquares = 6;
let colors = [];
let squares = document.querySelectorAll(".square");
let pickedColor;
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();
function init(){
    //mode button event listeners
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for (let i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected");
            this.textContent ==="Easy" ? numSquares = 3 :numSquares = 6;  
           reset();
        });
    }

}
function setUpSquares(){
    for (let i=0; i < squares.length; i++){
        // add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab clicked color
            let clickedColor = this.style.backgroundColor;
            if (clickedColor===pickedColor){
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }else{  
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            } 
        });
    }

}
function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color from the array
     pickedColor = pickColor();
     //make colorDisplay match the picked color
     colorDisplay.textContent = pickedColor;
     resetButton.textContent = "New Colors";
     messageDisplay.textContent = "";
    //change colors of the squares
    for(let i=0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor ="steelblue";
}


 resetButton.addEventListener("click", function(){
        reset();
   })

function changeColors(color){
    //loop through the squares
    for (let i = 0; i < squares.length; i++){
        //change colors to match the given color
        squares[i].style.backgroundColor = color;

    }
}
function pickColor(){
    let random = Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColors(num){
    //make an array
    let arr = [];
    //add num random colors to an array
    for (let i=0; i < num; i++){
     //get random color and push into array
        arr.push(randomColor());
       
    }
    //return that array
    return arr;
    
}
function randomColor(){
    //pick a "red" from o-255
    let r =  Math.floor(Math.random()*256);
    //pick a "green" from o-255
    let g =  Math.floor(Math.random()*256);
    //pick a "blue" from o-255
    let b =  Math.floor(Math.random()*256);
    return "rgb(" + r + ", "+ g + ", " + b + ")";
}