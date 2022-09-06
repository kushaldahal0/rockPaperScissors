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
let winCount = 0;
let loseCount = 0;
let drawCount = 0;

let win = (a,b) => {
    console.log(`You Win! ${array[a]} beats ${array[b]}`);
    winCount ++;
}
let loose = (a,b) => {
    console.log(`You Lose! ${array[1]} beats ${array[0]}`);
    loseCount ++;
}

let draw = () =>{
    console.log("Draw! Both had same choice")
    drawCount ++;
}



let play = (compSelect, playerSelect) => {
    (compSelect === playerSelect) ? draw()
    //win situations ------>win(ps, cs)
    : (compSelect == array[0] && playerSelect == array[1]) ? win(1,0)
    : (compSelect == array[1] && playerSelect == array[2]) ? win(2,1)
    : (compSelect == array[2] && playerSelect == array[0]) ? win(0,2)
    //lose situations ------>loose(ps, cs)
    : (compSelect == array[1] && playerSelect == array[0]) ? loose(0,1)
    : (compSelect == array[2] && playerSelect == array[1]) ? loose(1,2)
    : (compSelect == array[0] && playerSelect == array[2]) ? loose(2,0)
    : console.log("dont know what happened here")
};

play(compSelect, playerSelect);
console.log(`wins = ${winCount} , loses = ${loseCount} , draw = ${drawCount}`)