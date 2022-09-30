//Psudo code //

// Get input from user // 

let UserPrompt = prompt("Stone,Paper or Scissors ?")
let UserInput = UserPrompt.toUpperCase();




// Function for  input from computer// 

function getRandomItem(arr){

// get random index value //
const randomIndex =   Math.floor(Math.random() * arr.length)

// get random item //
const item = arr[randomIndex]

return item;

}

const array = ["STONE", "PAPER", "SCISSORS"]

const ComputerInput = getRandomItem(array);




// The Matrix of the results and who wins // 

function gameStructure () {
  
 if (UserInput === "STONE" && ComputerInput === "STONE" || UserInput === "PAPER" && ComputerInput === "PAPER" || UserInput === "SCISSORS" && ComputerInput === "SCISSORS" ){

    console.log("It's a tie");


 }else if (UserInput === "STONE" && ComputerInput === "PAPER" || UserInput === "PAPER" && ComputerInput === "SCISSORS" || UserInput === "SCISSORS" && ComputerInput === "STONE"){

     console.log("You lose");



 }else if (UserInput === "STONE" && ComputerInput === "SCISSORS"|| UserInput === "PAPER" && ComputerInput === "STONE" || UserInput === "SCISSORS" && ComputerInput === "PAPER"){

    console.log("You win");


 } else {
    
    console.log("Check your input again")

 }
 
}


let i =0

do {
   
gameStructure(i); i++

} 


while (i < 5);
