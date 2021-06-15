/*the odin project 
rock paper and scissor game in conslol
15 june 2021
-diwash nembang*/




// make a randomNumber function and return the random number that takes min and max as parameter

function randomNumber(min,max){

    return Math.floor(Math.random()*(max-min+1)+min) //returns us a random intetger max and min both inclusive 

}//end of randomNumber function 


//make a function that controls computer choice and returns cmpChoice
function computerChoice(){

    //create a integer variable call cmpChoice that store the computer choice  
    //make computer chose randome number (with randomNumber Function) from 1 to 3 and store it to cmpChoise 
    let cmpChoice=randomNumber(1,3);

    //assigne 1 rock 2 scissor and 3 paper
    //return rock scissors paper
    if(cmpChoice==1){
        return "ROCK";
    }
    if(cmpChoice==2){
        return "SCISSOR";
    } if(cmpChoice==3){
        return "PAPER";
    }
    
}//finish computer choice 

//make playerchoice function to take user input and return it 
function playerChoice(){

    // create  a string  variable userChoice that store the user input 
    let userChoice=prompt("ROCK PAPER SCISSOR SHOOT!!");
    // make user input  make it caseinsensitive 

    //return userChoice
    return userChoice;
    
}//end of playerChoice function 

//make  winnerCheck function that takes userChoice and cmpChoice returns the winner 
function winnerCheck(userChoice,cmpChoice){


    
    
    //compare userChoice and cmpChoice rock>scissors scissors>paper paper>rock
    //return the result 
    if( (userChoice.toUpperCase()==="ROCK" && cmpChoice==="ROCK") ||(userChoice.toUpperCase()==="PAPER" && cmpChoice==="PAPER")||(userChoice.toUpperCase()==="SCISSOR" && cmpChoice==="SCISSOR")){
        return "IT'S A DRAW"
    }


    if((userChoice.toUpperCase()==="ROCK" && cmpChoice==="SCISSOR")||(userChoice.toUpperCase()==="PAPER" && cmpChoice==="ROCK")||(userChoice.toUpperCase()==="SCISSOR" && cmpChoice==="PAPER")){
    return "USER WIN"
    }

    
    if((userChoice.toUpperCase()==="ROCK" && cmpChoice==="PAPER")||(userChoice.toUpperCase()==="PAPER" && cmpChoice==="SCISSOR")||(userChoice.toUpperCase()==="SCISSOR" && cmpChoice==="ROCK")){
    return "cmp WIN";
    }
    
}//end of winnerCheck 


// craete a gamePlay function that  runs the game returnn nothing
function gamePlay(){
    let userChoice;
    let cmpChoice;
    let winner;
    //run it five times and print the winner 
    for (let i = 0; i < 5; i++) {
        userChoice=playerChoice();
        cmpChoice=computerChoice();
        winner=winnerCheck(userChoice,cmpChoice);
        console.log(winner)
        
    }
  
} //end of the programe 


//run the game 
const paly =gamePlay();







