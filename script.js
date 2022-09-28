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
  
 if (UserInput === "STONE" && ComputerInput === "STONE"){

    alert("It's a tie");

 }else if (UserInput === "STONE" && ComputerInput === "PAPER"){

     alert("You lose");

 }else if (UserInput === "STONE" && ComputerInput === "SCISSORS"){

    alert("You win");

 }else if (UserInput === "PAPER" && ComputerInput === "PAPER"){

    alert("It's a tie");
 }else if (UserInput === "PAPER" && ComputerInput === "STONE"){

    alert("You win");

 }else if (UserInput === "PAPER" && ComputerInput === "SCISSORS"){

    alert("You lose");

 }else if (UserInput === "SCISSORS" && ComputerInput === "STONE"){

    alert("You lose");

 }else if (UserInput === "SCISSORS" && ComputerInput === "PAPER"){

    alert("You win");      

 }else if (UserInput === "SCISSORS" && ComputerInput === "SCISSORS"){

    alert("It's a tie");
 } else {
    
    alert ("Check your input again")
 }
 
}


gameStructure();