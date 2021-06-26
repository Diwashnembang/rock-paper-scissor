/*the odin project 
rock paper and scissor game 
15 june 2021
-diwash nembang
 



*/

// generate random number

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerChoice() {
    let cmpChoice = randomNumber(1, 3);
    console.log("cmp-choice is", cmpChoice);
    const cmpRock = document.querySelector("#cmp-rock");
    const cmpPaper = document.querySelector("#cmp-paper");
    const cmpScissor = document.querySelector("#cmp-scissor");

    //assigne 1 rock 2 scissor and 3 paper
    //return rock scissors paper
    if (cmpChoice == 1) {
        return cmpRock;
    }
    if (cmpChoice == 2) {
        return cmpScissor;
    }
    if (cmpChoice == 3) {
        return cmpPaper;
    }
}

function playerChoice() {
    const rock = document.querySelector("#player-rock");
    const paper = document.querySelector("#player-paper");
    const scissor = document.querySelector("#player-scissor");
    let run = true;
    startGame(rock);
    startGame(paper);
    startGame(scissor);
}

function startGame(playerChoice) {
    playerChoice.addEventListener("click", gamePlay);
}

function gamePlay() {
    ++round;
    console.log(round);
    if (round < 5) {
        addButtonClickAnimation(this);
        const cmpChoice = computerChoice();
        addButtonClickAnimation(cmpChoice);
        console.log(`player${this.getAttribute("id")} and cmp choose${cmpChoice}`);
        const winner = winnerCheck(this, cmpChoice);
        resultDisplay(winner);
        history.push(winner);
        recordHistory(history, round);
        removeButtonClickAnimation(this);
        removeButtonClickAnimation(cmpChoice);
        console.log(history);
    }
    if(round===4){
        hide("#game-play","hidden"); 
        hide(".home-page","hidden");    
    }
}

function hide(domName,add){
    const body=document.querySelector(`${domName}`);
    setTimeout((e)=>body.classList.add(`${add}`),time);

}

function unhide(domName,add){
    const body=document.querySelector(`${domName}`);
    body.classList.remove(`${add}`);

}

function resultDisplay(whoWon) {
    const display = document.querySelector("#result-display");
    if (whoWon === "USER WIN") {
        display.textContent = "YOU WIN!!";
        display.style.color="green";
    }
    if (whoWon === "CMP WIN") {
        display.textContent = "YOU LOOSE!!";
        display.style.color="Red";
    }
    if (whoWon === "IT'S A DRAW") {
        display.textContent = "SHOOT!! DRAW";
        display.style.color="blue";
    }
    setTimeout((e) => {
        display.textContent = "PICK ONE";
        display.style.color="black";
    }, time);
}

function addButtonClickAnimation(onWhich) {
    onWhich.classList.add("buttonOnClick");
}

function removeButtonClickAnimation(onWhich) {
    setTimeout((e) => onWhich.classList.remove("buttonOnClick"), time);
}

function winnerCheck(userChoice, cmpChoice) {
    //compare userChoice and cmpChoice rock>scissors scissors>paper paper>rock
    //return the result
    if (
        (userChoice.getAttribute("id") === "player-rock" &&
            cmpChoice.getAttribute("id") === "cmp-rock") ||
        (userChoice.getAttribute("id") === "player-paper" &&
            cmpChoice.getAttribute("id") === "cmp-paper") ||
        (userChoice.getAttribute("id") === "player-scissor" &&
            cmpChoice.getAttribute("id") === "cmp-scissor")
    ) {
        return console.log("IT'S A DRAW"), "IT'S A DRAW";
    }

    if (
        (userChoice.getAttribute("id") === "player-rock" &&
            cmpChoice.getAttribute("id") === "cmp-scissor") ||
        (userChoice.getAttribute("id") === "player-paper" &&
            cmpChoice.getAttribute("id") === "cmp-rock") ||
        (userChoice.getAttribute("id") === "player-scissor" &&
            cmpChoice.getAttribute("id") === "cmp-paper")
    ) {
        return console.log("USER WIN"), "USER WIN";
    }

    if (
        (userChoice.getAttribute("id") === "player-rock" &&
            cmpChoice.getAttribute("id") === "cmp-paper") ||
        (userChoice.getAttribute("id") === "player-paper" &&
            cmpChoice.getAttribute("id") === "cmp-scissor") ||
        (userChoice.getAttribute("id") === "player-scissor" &&
            cmpChoice.getAttribute("id") === "cmp-rock")
    ) {
        return console.log("CMP WIN"), "CMP WIN";
    }
}

function recordHistory(history, round) {
    const recordBox = document.querySelector(".record");
    const recordsNode = recordBox.children;
    const records = Array.from(recordsNode);
    records[round].textContent = `Round ${round + 1}:${history[round]}`;
}

function playAgain(){
    const playAgainButton=document.querySelector(".try-again");
    playAgainButton.addEventListener("click",reset);

}

function reset(){
    round=-1;
    unhide("#game-play","hidden")

}
const time=500;
let history = [];
let round = -1;
playerChoice();
playAgain();
