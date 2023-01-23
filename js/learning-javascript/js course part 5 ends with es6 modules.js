

//ERROR HANDLING-object with a description 
//               of something went wrong



//throw-executes a user-defined error

//TypeError
//Lose connection
//User types incorrect input
//can't open a file

/*try{
  let X=window.prompt('enter a #');
  X=Number(X);

  if(isNaN (X)) throw "That wasn't a number!"
  if(X=='') throw " that was empty"
  console.log(`${X} is a number`);
  console.log(typeof(X));
 
}

catch(error){
    console.log(error);
}

finally{
    console.log("this always executes");
} */



//SETTIMEOUT()-invokes a function after a number of milliseconds
//             asynchronous function (doesn't pause execution)
/*let item='cryptocurrency';
let Price=420.69;

alert1=setTimeout(firstMessage,4000, item, Price);
alert2=setTimeout(secondMessage,7000);
alert3=setTimeout(thirdMessage,9000);

function firstMessage(item,Price){
   alert(`buy this ${item} for $${Price}`)
}
function secondMessage(){
    window.alert('this is not a scam')
}
function thirdMessage(){
    window.alert('DO IT')
}

document.getElementById('Buy').onclick= function(){
    clearTimeout(alert1);
    clearTimeout(alert2);
    clearTimeout(alert3);
    setTimeout(()=>alert('thanks for buying our course'),2000)
 } */




 //SETINTERVAL()-invokes a function repeatedly after a number of milliseconds
 //             asynchronous function(doesn't pause execution)
 
 /*let Count=0;
 let maxCount=window.prompt('how much do you want to count to')
 maxCount=parseInt(maxCount)
 // Count=maxCount;

const myTimer=setInterval(countUp,1000)

function countUp(){
    Count+=1
    console.log(Count)

    if(Count>=maxCount){
        clearInterval(myTimer)
    }
}
function countDown(){
    Count=Count-1
    console.log(Count)
    if(Count<=0)(
        clearInterval(myTimer)
    )
}*/



//DATE OBJECTS-used to work with dates & times
/* let date= new Date()


let date2= new Date(0) //reference date
 date2=new Date(100000) //adding milliseconds to reference date
 date2= new Date(2021,0,12,3,6,32)
 date2= new Date('January 8,2023 00:00:00')

 
console.log(date2)

//get dates
let year=date2.getFullYear();
 let dayOfMonth =date2.getDate();
 let dayOfWeek=date2.getDay();
 let month=date2.getMonth();
 let hour=date2.getHours();
 let minutes=date2.getMinutes();
 let seconds=date2.getSeconds()
 console.log(year);
 console.log(dayOfMonth);
 console.log(dayOfWeek);
 console.log(month);
 console.log(seconds);

 //set dates
 date2.setFullYear(2025)
 date2.setMonth(1)
 date2.setDate(30)
 date2.setHours(20)
 date2.setMinutes(59)
 console.log(date2);

//date=date.toDateString('en-US',{timeZone:'UTC'})
document.getElementById('DateandTime').innerText=formatDate(date)+' '+ formatTime(date);

function formatDate(date){
 let year=date.getFullYear();
 let month=date.getMonth()+1;
 let day=date.getDate();

 return `${month}/${day}/${year}`
}

function formatTime(time){
  let hours=time.getHours()
  let minutes=time.getMinutes()
  let seconds=time.getSeconds()
  let amOrPm=hours>=12 ? "pm":'am';
  
  hours= (hours%12) ||12;

  return `${hours}:${minutes}:${seconds} ${amOrPm}`
} */


//CLOCK PROGRAM
/*const myClock=document.getElementById('myclock')
function clockProgram(){
    let Time=new Date()
    //Time=Time.toTimeString()

   //to get time
    let hours= Time.getHours();
    let minutes=Time.getMinutes();
    let seconds=Time.getSeconds()
    let amOrPm=hours>=12? 'pm':'am';
     hours= hours%12 ||12;

     //to add zeros
    hours=formatZeros(hours)
    minutes=formatZeros(minutes)
    seconds=formatZeros(seconds)

    return  myClock.innerHTML= `${hours}:${minutes}:${seconds} ${amOrPm}`
   

    function formatZeros(time){
        time=time.toString()
        return time.length<2? '0'+time:time;
    }
    
}
//setInterval(clockProgram,1000)
clockProgram()
setInterval(clockProgram,1000) */




//SYNCHRONOUS CODE-in an ordered sequence.
//                 step-by-step linear instructions
//                  (start now,finish now)
/*console.log('START')
console.log('This step is synchronous')
console.log('END')

//ASYNCHRONOUS CODE- out of sequence.
//                  External.Access a database
//                   fetch a file
//                  Task that take time
//                  (start now,finish sometime later)


console.log('START');
setTimeout(()=>console.log('This step is asynchronous'),5000)
console.log('END');*/




//CONSOLE.TIME()-starts a timer you can use to
//               track how long an operation takes
//               give each timer a unique value

/*console.time('my response time');

window.alert('click the ok button!')

console.timeEnd('my response time')*/

/* let count2=10;

setInterval(()=>{
    count2--;
    if(count2>=0){
        document.getElementById('entervalue').innerHTML='enter a number in '+count2+' seconds'
    }

    if(count2<=0){
        document.getElementById('timeup').innerHTML='you took too long'
    }
},1000)*/




//PROMISE-object that encapsulates the result of an asynchronous operation
//        let asynchronous methods return values like synchronous methods
//        'i promise to return something in the future'

//        the STATE is 'pending' then: 'fulfilled' or 'rejected'
//        the RESULT is what can be returned
//        2 parts producing & consuming


/*const promise= new Promise((resolve,reject)=>{
    let fileLoaded=false;

    if(fileLoaded){
        resolve('file loaded');
    } else{
        reject('file not loaded');
    }
})

promise.then((value)=>{console.log(value)})
.catch((error)=>{console.log(error)})

//pass argument to a promise
const wait=(time) =>new Promise(resolve=>{
    setTimeout(resolve,time);
});

wait(5000).then(()=>{console.log('thanks for waiting')})


//web dev simplified promises
let UserLeft=false;
let userWatchingCatMeme=false;
function watchTutorialPromise(){
    return new Promise((resolve,reject)=>{

         if(UserLeft){
            reject({name:'User left',
                     message:':('
                    })
         }
        else if(userWatchingCatMeme){
            reject({name:'user watching cat meme',
                message:'webdevsimplified<Cat'
                   }) 
        } else{
            resolve('Thumbs up and subscribe')
        }

    })


}

watchTutorialPromise().then((message)=>{console.log('Success:'+ message)})
.catch(
    (error)=>{console.log('Failed:'+ error.name+' '+ error.message)}
)*/

//promise.ALL
/*const recordVIdeoOne= new Promise((resolve,reject)=>{
    resolve('VIdeo 1 Recorded')
})
const recordVIdeoTwo=new Promise((resolve,reject)=>{
    resolve('video 2 Recorded')
})
const recordVIdeoThree=new Promise((resolve,reject)=>{
 resolve('video 3 Recorded')
})


Promise.all([
    recordVIdeoOne,
    recordVIdeoTwo,
    recordVIdeoThree
]).then((value)=>{console.log(value)}) */




//ASYNC FUNCTION-makes a function return a promise
/*
async function loadFile(){
    let fileLoaded=true;

    if(fileLoaded){
       return 'file loaded';
    } else{
        throw'file not loaded';
    }
}

loadFile().then((value)=>console.log(value))
.catch(error=>console.log(error))*/


//AWAIT-makes an async function wait for a promise
/*async function loadFile2(){
    let fileLoaded=false;

    if(fileLoaded){
       return('file loaded');
    } else{
        throw('file not loaded');
    }
}

async function startLoad(){
   try{let message=await loadFile2();
    
    console.log(message);}
    catch(error){
     console.log(error)
    }
    
}

startLoad()*/


//ES6 MODULES-the idea behind a module is that it's a file of reuseable code
//we can import sections of pre-written code to use whenever
//great for any general utility values and functions
//helps to make your code more reusable and maintainable
//think of a module as a separate chapter of a book

/*import {PI,CircleArea,circleCircumference} from './math-utility.js';
console.log(PI)
console.log(CircleArea(7))*/




//Downloader
/*let spinnerLoader=document.querySelector('.spinner1')
let DownloadBtn=document.querySelector('.downloader')


DownloadBtn.onclick=function (){
 spinnerLoader.style.display='block'
 setTimeout(()=>{
    spinnerLoader.style.border='none'
    spinnerLoader.style.animation='none'
    DownloadBtn.style.display='none'
    spinnerLoader.style.fontSize ='1.5em'
    spinnerLoader.innerHTML='download complete'
 },4000)
}*/
