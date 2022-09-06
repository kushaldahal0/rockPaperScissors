console.log("WELCOME TO ROCK PAPERS AND SCISSORS!!!");

let array = ["ROCK","PAPER","SCISSORS"];
let getComputerChoice = () =>{
    let arrayNo = Math.floor(Math.random()*3);
    return ( array[arrayNo]);
}



let compSelect = getComputerChoice();
console.log(`computers choice => ${compSelect}`);

// let getPlayerChoice = () =>{
//     let choice = prompt("Enter your choice");
//     choice = choice.toUpperCase();
//     choice = choice.trim();
//     return choice;
// };

// let playerSelect = getPlayerChoice();
// console.log(`players choice => ${playerSelect}`);

let playerSelect = "ROCK";
console.log(`players choice => ${playerSelect}(example)`)





let play = (compSelect, playerSelect) => {
    (compSelect === playerSelect) ? console.log("draw")
    //win situations
    : (compSelect == array[0] && playerSelect == array[1]) ? console.log(`You Win! ${array[1]} beats ${array[2]}`)
    : (compSelect == array[1] && playerSelect == array[2]) ? console.log(`You Win! ${array[2]} beats ${array[1]}`)
    : (compSelect == array[2] && playerSelect == array[0]) ? console.log(`You Win! ${array[0]} beats ${array[2]}`)
    //lose situations
    : (compSelect == array[1] && playerSelect == array[0]) ? console.log(`You Lose! ${array[1]} beats ${array[0]}`)
    : (compSelect == array[2] && playerSelect == array[1]) ? console.log(`You Lose! ${array[2]} beats ${array[1]}`)
    : (compSelect == array[0] && playerSelect == array[2]) ? console.log(`You Lose! ${array[0]} beats ${array[2]}`)
    : console.log("dont know what happened here")
};
play(compSelect, playerSelect);