let playerRock=document.getElementById('player-rock-imgId')
let playerScissors=document.getElementById('player-scissors-imgId');
let playerPaper=document.getElementById('player-paper-imgId')

let cpuRock=document.getElementById('CPU-rock-imgId')
let cpuScissors=document.getElementById('CPU-scissors-imgId')
let cpuPaper=document.getElementById('CPU-paper-imgId')

let displayVerdict=document.getElementById('game-verdictId')

let rockBtn=document.getElementById('rock-buttonId')
let paperBtn=document.getElementById('paper-buttonId')
let scissorsBtn=document.getElementById('scissors-buttonId')

let playerScore=document.getElementById('playerwinId')
let cpuScore=document.getElementById('cpuwinId')
let cpuScoreCount=0;
let playerScoreCount=0;

let playerHasRock=false;
let playerHasPaper=false;
let playerHasScissors=false;
let cpuHasRock=false;
let cpuHasPaper=false;
let cpuHasScissors=false;
let output

output=Math.ceil(Math.random()*3);

function tie(){
    displayVerdict.style.color='blue'
}
function win(){
    displayVerdict.style.color='green'
}
function cpuWin(){
    displayVerdict.style.color='red'
}

function theRules(){
    
    console.log(output);
    
    //CPU randomizer
    if(output==1){
        cpuRock.style.visibility='visible'
        cpuHasRock=true
    } else if(output==2){
        cpuPaper.style.visibility='visible'
        cpuHasPaper=true
    } else if (output==3){
     cpuScissors.style.visibility='visible'
     cpuHasScissors=true
    }

    //TIE
    if(cpuHasPaper&&playerHasPaper){
        displayVerdict.innerHTML='ITS A TIE'
        tie()
    } else if(cpuHasRock&&playerHasRock){
        displayVerdict.innerHTML='ITS A TIE'
        tie()
    } else if(cpuHasScissors&&playerHasScissors){
        displayVerdict.innerHTML='ITS A TIE'
        tie()
    }

    //Player wins
    if(playerHasRock && cpuHasScissors){
        displayVerdict.innerHTML='YOU WIN'
        win()
    } else if(playerHasPaper&&cpuHasRock){
        displayVerdict.innerHTML='YOU WIN' 
        win()
    } else if(playerHasScissors&&cpuHasPaper){
        displayVerdict.innerHTML='YOU WIN'
        win()
    }


    //CPU wins
    if (cpuHasRock&&playerHasScissors){
        displayVerdict.innerHTML='CPU wins'
        cpuWin()
    } else if(cpuHasPaper&&playerHasRock){
        displayVerdict.innerHTML='CPU wins'
        cpuWin()
    } else if(cpuHasScissors&&playerHasPaper){
        displayVerdict.innerHTML='CPU wins'
        cpuWin()
    }
}

function Scoreboard(){
    if(displayVerdict.innerHTML=='YOU WIN'){
        playerScoreCount+=1
        playerScore.innerHTML=playerScoreCount
    } else if(displayVerdict.innerHTML=='CPU wins'){
        cpuScoreCount+=1
        cpuScore.innerHTML=cpuScoreCount
    }
}



rockBtn.addEventListener('click',()=>{
 
    playerRock.style.visibility='visible'
    playerHasRock=true;
    scissorsBtn.style.display='none'
    paperBtn.style.display='none'
    theRules()
    Scoreboard()
}
)


paperBtn.addEventListener('click',()=>{
    
    playerPaper.style.visibility='visible'
    playerHasPaper=true;
    scissorsBtn.style.display='none'
    rockBtn.style.display='none'
    theRules()
    Scoreboard()
})


scissorsBtn.addEventListener('click',()=>{
    
    playerScissors.style.visibility='visible'
    playerHasScissors=true;
    rockBtn.style.display='none'
    paperBtn.style.display='none'
    theRules()
    Scoreboard()
})



