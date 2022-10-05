
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

   let UserPrompt = prompt("Stone,Paper or Scissors ?")
   let UserInput = UserPrompt.toUpperCase();

   const ComputerInput = getRandomItem(array);

 





  
 if (UserInput === "STONE" && ComputerInput === "STONE" || UserInput === "PAPER" && ComputerInput === "PAPER" || UserInput === "SCISSORS" && ComputerInput === "SCISSORS" ){

    return "tie";


 }else if (UserInput === "STONE" && ComputerInput === "PAPER" || UserInput === "PAPER" && ComputerInput === "SCISSORS" || UserInput === "SCISSORS" && ComputerInput === "STONE"){

     return "lost";

     


 }else if (UserInput === "STONE" && ComputerInput === "SCISSORS"|| UserInput === "PAPER" && ComputerInput === "STONE" || UserInput === "SCISSORS" && ComputerInput === "PAPER"){

    return "won";

   


 } else {
    
    console.log("Check your input again")

 }
 
}


let j = 0;

let  k = 0 ;
// The function to count the score of the rounds

function scoreCounter (){

  let results = gameStructure();

  //The counting system // 

 


if(results == "tie"){

 console.log("It's a tie",k,j)

} else if ( results == "lost"){

 console.log("You lost",k,++j)

}else if (results == "won"){

console.log("You won",++k,j)

}else{ 

   console.log("Check the parameters")
}

}
 
let l =0

do {
   
scoreCounter(); 
l++; 

} 

while (l < 5);



