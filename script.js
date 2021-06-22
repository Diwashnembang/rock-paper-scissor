/*the odin project 
rock paper and scissor game in conslol
15 june 2021
-diwash nembang
 
modification: 1


*/




// generate random number 

function randomNumber(min,max){

    return Math.floor(Math.random()*(max-min+1)+min);


}


function computerChoice(){
    let cmpChoice=randomNumber(1,3);
    console.log("cmp-choice is",cmpChoice);
    const cmpRock=document.querySelector('#cmp-rock');
    const cmpPaper=document.querySelector('#cmp-paper');
    const cmpScissor=document.querySelector('#cmp-scissor');


    //assigne 1 rock 2 scissor and 3 paper
    //return rock scissors paper
    if(cmpChoice==1){
        return cmpRock;
    }
    if(cmpChoice==2){
        return cmpScissor;
    } if(cmpChoice==3){
        return cmpPaper;
    }
    
}

function playerChoice(){
    const rock=document.querySelector('#player-rock');
    const paper=document.querySelector('#player-paper');
    const scissor=document.querySelector('#player-scissor');

    startGame(rock);
    startGame(paper);
    startGame(scissor);

  
    
}

function startGame(playerChoice){
    playerChoice.addEventListener('click',(e)=>{
        addButtonClickAnimation(playerChoice);
        const cmpChoice=computerChoice();
        addButtonClickAnimation(cmpChoice);
        console.log(`player${playerChoice.getAttribute('id')} and cmp choose${cmpChoice}`)
        const winner=winnerCheck(playerChoice,cmpChoice);
        resultDisplay(winner);
        removeButtonClickAnimation(playerChoice);
        removeButtonClickAnimation(cmpChoice);

        
    })
}

function resultDisplay(whoWon){
    const display= document.querySelector("#result-display");
    if(whoWon==="USER WIN"){
        display.textContent="YOU WIN!!" 
    }
    if(whoWon==="CMP WIN"){
        display.textContent="YOU LOOSE!!"
    }
    if(whoWon==="IT'S A DRAW"){
        display.textContent="SHOOT!! DRAW"
    }
    setTimeout((e)=>{display.textContent="PICK ONE"},1500)
}

function addButtonClickAnimation(onWhich){
    onWhich.classList.add("buttonOnClick");

}

function removeButtonClickAnimation(onWhich){
    setTimeout((e)=>onWhich.classList.remove('buttonOnClick'),1500);
}

playerChoice();



function winnerCheck(userChoice,cmpChoice){
    //compare userChoice and cmpChoice rock>scissors scissors>paper paper>rock
    //return the result 
    if( (userChoice.getAttribute('id')==="player-rock"&& cmpChoice.getAttribute('id')==="cmp-rock") ||(userChoice.getAttribute('id')==="player-paper" && cmpChoice.getAttribute('id')==="cmp-paper")||(userChoice.getAttribute('id')==="player-scissor" && cmpChoice.getAttribute('id')==="cmp-scissor")){
        return console.log("IT'S A DRAW"),"IT'S A DRAW";
    }


    if((userChoice.getAttribute('id')==="player-rock"&& cmpChoice.getAttribute('id')==="cmp-scissor") ||(userChoice.getAttribute('id')==="player-paper" &&  cmpChoice.getAttribute('id')==="cmp-rock")||(userChoice.getAttribute('id')==="player-scissor" && cmpChoice.getAttribute('id')==="cmp-paper")){
    return console.log("USER WIN"),"USER WIN";
    }

    
    if(((userChoice.getAttribute('id')==="player-rock"&& cmpChoice.getAttribute('id')==="cmp-paper")) ||(userChoice.getAttribute('id')==="player-paper" && cmpChoice.getAttribute('id')==="cmp-scissor")||(userChoice.getAttribute('id')==="player-scissor" && cmpChoice.getAttribute('id')==="cmp-rock")){
    return console.log("CMP WIN"),"CMP WIN";
    }

    // if(userChoice.getAttribute('id')==="player-rock"){
    //     return 'rock';
    // }else if(playerChoice.getAttribute('id')==="player-paper"){
    //     return'paper';
    // }else {
    //     return "scissor" ;
        
    // }

    
}



// function gamePlay(){
//     let userChoice;
//     let cmpChoice;
//     let winner;
    
//     for (let i = 0; i < 5; i++) {
//         userChoice=playerChoice();
//         cmpChoice=computerChoice();
//         winner=winnerCheck(userChoice,cmpChoice);
//         console.log(winner)
        
//     }
  
// } 


// //run the game 
// const paly =gamePlay();







