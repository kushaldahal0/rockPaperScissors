console.log("WELCOME TO ROCK PAPERS AND SCISSORS!!!");
console.log("Best of 5!!")

let array = ["ROCK","PAPER","SCISSORS"];
let getComputerChoice = () =>{
    let arrayNo = Math.floor(Math.random()*3);
    return ( array[arrayNo]);
}




// let getPlayerChoice = () =>{
//     let choice = "";
//     do{
//         choice = prompt("Enter your choice");
//         if(choice == null) {
//             console.log("value not given")
//             return(0)
//         }
//         choice = choice.toUpperCase();
//         choice = choice.trim();
//     } while((choice != array[0]) || (choice != array[1]) || (choice != array[2]));
//     return choice;
// };

// console.log(`players choice => ${getPlayerChoice()}`);

let winCount = 0;
let loseCount = 0;
let drawCount = 0;

let win = (a,b) => {
    console.log(`You Win! ${array[a]} beats ${array[b]}`);
    winCount ++;
}
let loose = (a,b) => {
    console.log(`You Lose! ${array[a]} beats ${array[b]}`);
    loseCount ++;
}

let draw = () =>{
    console.log("Draw! Both had same choice")
    drawCount ++;
}


// array = ["ROCK","PAPER","SCISSORS"] rock = 0, paper = 1, scissors = 2;
let play = (compSelect, playerSelect) => {
    console.log(`players choice => ${playerSelect}(example),                computers choice => ${compSelect}`);
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


let game = () =>{

    let i = 0;
    while(i < 5){
        play(getComputerChoice(), "ROCK");
        console.log(`wins = ${winCount} , loses = ${loseCount} , draw = ${drawCount}`)
        console.log("\n\n") 
        i++;
    }
}
game()