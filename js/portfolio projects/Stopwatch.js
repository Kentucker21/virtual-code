let stopWatchDisplay=document.getElementById('stopwatchDisplay')
let startBtn=document.getElementById('StartBtnId')
let pauseBtn=document.getElementById('PauseBtnId')
let resetBtn=document.getElementById('ResetBtnId')


let StartTime=0;
let elapsedTIme=0;
let currentTime=0;
let paused=true;
let intervalId;
let hrs=0;
let mins=0;
let secs=0;

startBtn.addEventListener('click',()=>{
    if(paused){
        paused=false;
        StartTime=Date.now()-elapsedTIme;
        intervalId=setInterval(updateTime,1000)
        
        }
})
pauseBtn.addEventListener('click',()=>{
    if(!paused){
        paused=true;
        elapsedTIme=Date.now()-StartTime;
        clearInterval(intervalId);
    }
})
resetBtn.addEventListener('click',()=>{
    secs=0;
    mins=0;
    hrs=0;
    let StartTime=0;
    elapsedTIme=0;
    currentTime=0;
    paused=true;
    stopWatchDisplay.textContent=`00:00:00`
    clearInterval(intervalId)
})

function updateTime(){
   elapsedTIme=Date.now()-StartTime;
   secs=Math.floor((elapsedTIme/1000) % 60) 
   mins=Math.floor((elapsedTIme/(1000*60)) % 60)
   hrs=Math.floor((elapsedTIme/(1000*60*60))) % 60
   
   secs=pad(secs)
   mins=pad(mins)
   hrs=pad(hrs)
   stopWatchDisplay.textContent=`${hrs}:${mins}:${secs}`

   function pad(unit){
    return(('0')+unit).length>2? unit:'0'+unit
   }
}

console.log(Date.now())
   


let kenDate=Date.now()

console.log(Math.floor((kenDate/1000)%60) )