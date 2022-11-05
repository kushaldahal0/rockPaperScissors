console.log("WELCOME TO ROCK PAPERS AND SCISSORS!!!");
console.log("Best of 5!!")

let array = ["ROCK","PAPER","SCISSORS"];


const container = document.querySelector(".container");
const cards = document.querySelector(".cards");
const rock = document.querySelector("#rock");
const scis = document.querySelector("#scis");
const pap = document.querySelector("#pap");
const startdiv = document.querySelector(".start");
const scores = document.querySelectorAll(".scoreholder");
const state = document.querySelector(".state");
let prevscore = document.querySelector(".prev_score");
let comp = document.querySelector("#comp");
let player = document.querySelector("#player");
let selectCard = document.querySelectorAll(".select");
let index;
let playerSelect;

let resultcard = document.querySelector(".resultcard");

// pselect =()=>{selectCard.forEach(card => card.addEventListener("click", () =>{
//     index = card.dataset.index;
//     playerSelect = array[index];
// }) )};

let clickanimation = (div) =>{
    div.classList.toggle("clicked");    
}


let ComputerChoice = () =>{
    let arrayNo = Math.floor(Math.random()*3);
    return ( array[arrayNo]);
}

let appendtocompcard = (compiselected) =>{
    if (compiselected == array[0]) comp.innerHTML = rock.innerHTML;
    else if (compiselected == array[1]) comp.innerHTML = pap.innerHTML;
    else if (compiselected == array[2]) comp.innerHTML = scis.innerHTML;
}
let appendtoplayercard = (playerselected) =>{
    if (playerselected == array[0]) player.innerHTML = rock.innerHTML;
    else if (playerselected == array[1]) player.innerHTML = pap.innerHTML;
    else if (playerselected == array[2]) player.innerHTML = scis.innerHTML;
}




let winCount = 0;
let loseCount = 0;
let drawCount = 0;

let win = (a,b) => {
    console.log(`You Win! ${array[a]} beats ${array[b]}`);
    state.textContent =`You Win! ${array[a]} beats ${array[b]}`;
    winCount ++;
}
let loose = (a,b) => {
    console.log(`You Lose! ${array[a]} beats ${array[b]}`);
    state.textContent =`You Lose! ${array[a]} beats ${array[b]}`;
    loseCount ++;
}

let draw = () =>{
    console.log("Draw! Both had same choice")
    state.textContent ="Draw! Both had same choice";
    drawCount ++;
}


 // // array = ["ROCK","PAPER","SCISSORS"] rock = 0, paper = 1, scissors = 2;
let play = (playerSelect,compSelect) => {
    appendtoplayercard(playerSelect);
    appendtocompcard(compSelect);
    // console.log(`players choice => ${playerSelect},                computers choice => ${compSelect}`);
    (compSelect === playerSelect) ? draw()
    //win situations ------>win(ps, cs)
    : (compSelect == array[0] && playerSelect == array[1]) ? win(1,0)
    : (compSelect == array[1] && playerSelect == array[2]) ? win(2,1)
    : (compSelect == array[2] && playerSelect == array[0]) ? win(0,2)
    //lose situations ------>loose(ps, cs)
    : (compSelect == array[1] && playerSelect == array[0]) ? loose(1,0)
    : (compSelect == array[2] && playerSelect == array[1]) ? loose(2,1)
    : (compSelect == array[0] && playerSelect == array[2]) ? loose(0,2)
    : console.log("dont know what happened here")
};


// let game = () =>{

//     let i = 0;
//     while(i < 5){
//         pselect();
//         compSelect  = ComputerChoice();
//         play(playerSelect,compSelect);
//         console.log(`wins = ${winCount} , loses = ${loseCount} , draw = ${drawCount}`)
//         console.log("\n\n") 
//         i++;
//     }
// }

let popresult = () =>{
    resultcard.style.display = 'flex';
    container.style.display = 'none';
};
let continuebtn = () =>{
    resultcard.style.display = 'none';
    container.style.display = 'flex';
};
let cancel = () =>{
    resultcard.style.display='none';
    startdiv.style.display= 'flex';
    prevscore.textContent = `Previous Score: Wins = ${winCount}   Loses = ${loseCount}   Draw = ${drawCount}`;
    winCount = 0;
    loseCount = 0;
    drawCount = 0;
    scores.forEach(score => score.textContent= `Wins = ${winCount}   Loses = ${loseCount}   Draw = ${drawCount}`);
};

let start = () =>{
    container.style.display='flex';
    startdiv.style.display='none';
}
// pselect();
    selectCard.forEach(card => card.addEventListener("click", () =>{
        index = card.dataset.index;
        playerSelect = array[index];
        compSelect  = ComputerChoice();
        play(playerSelect,compSelect);
        popresult();
        console.log(`wins = ${winCount} , loses = ${loseCount} , draw = ${drawCount}`)
        scores.forEach(score => score.textContent= `Wins = ${winCount}   Loses = ${loseCount}   Draw = ${drawCount}`);
        console.log("\n\n") }
    ))
