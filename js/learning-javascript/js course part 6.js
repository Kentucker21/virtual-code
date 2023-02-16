//DOM-Document Object Model(API)
//    An interface for changing the content of a page



/*console.dir(document)
console.log(document.title);


console.log(document.URL);
console.log(document.location);

document.body.style.backgroundColor='green'
document.getElementById('')*/


//Capitalize first letter
let namies=['red','brown','green']


for(names of namies){
    let names1=names.charAt(0).toUpperCase()+ names.slice(1)
    console.log(names1)
    
}


//ELEMENT SELECTORS

/*
let myMenuH1=document.getElementById('menu-title') //used to select element by id
myMenuH1.style.backgroundColor='lightgreen'


let myFruits=document.getElementsByName('fruits'); //useful for radio buttons
//console.log(myFruits[2]);
myFruits.forEach((value)=>{if(value.checked){
    console.log(value.value)
}})


let veggies=document.getElementsByTagName('li') //useful for lists
veggies[0].style.backgroundColor='blue'


let desserts=document.getElementsByClassName('desserts')
desserts[0].style.backgroundColor='lightgreen'

let query=document.querySelector('#menu-title')
query.style.backgroundColor='yellow'

let query2=document.querySelectorAll('li')

for(query of query2){
    query.style.color='red'
} */



//DOM TRAVERSAL
/*let elements=document.body

//first child
let firstCHild=elements.firstElementChild;
firstCHild.style.backgroundColor='red'


//last child
let lastChild=elements.lastElementChild;
lastChild.style.backgroundColor='green'
console.log(lastChild);


//siblings
let veggieLIst=document.querySelector('#the-vegetables');
let parent=document.body.parentElement
parent.style.backgroundColor='blue'
let sibling=veggieLIst.nextElementSibling;
sibling.style.backgroundColor='grey'


//element child
let childOfVeggies=veggieLIst.children[2]
childOfVeggies.style.backgroundColor='red'


//children array
let fruitss=document.querySelector('#the-fruits')
let childrenOfFruits=Array.from(fruitss.children)
childrenOfFruits.forEach((element)=>{console.log(element)})

*/


//ADD/CHANGE HTML ELEMENTS
//create element
/*const titleTag= document.createElement('h1')
titleTag.textContent='BRO';
document.body.append(titleTag);

//
neewListItem=document.createElement('li')
neewListItem.textContent='mango'
fruitss.append(neewListItem) //prepend to put at front

fruitss.insertBefore(neewListItem,fruitss.getElementsByTagName('li')[1])//add element to a specific place

*/



/*function isevenisodd(arr){
  let isodd=[];
  let iseven=[];

  for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        iseven.push(arr[i])
    }else if(arr[i]%2!=0){
        isodd.push(arr[i])
    }
  }

  return [iseven,isodd];
}

let numbe=[2,4,6,9,13]

evenOdd=isevenisodd(numbe)

document.getElementById('display').innerHTML=`even:${evenOdd[0]} odd:${evenOdd[1]}`
console.log(evenOdd)*/


//ADD/CHANGE CSS PROPERTIES
/*let menuTitle=document.getElementById('menu-title')
menuTitle.style.backgroundColor='rgb(50,200,250)'
menuTitle.style.fontSize='3em'
menuTitle.style.fontFamily='consolas'
menuTitle.style.textAlign='center'
menuTitle.style.border='1px solid #000000'
menuTitle.style.display='block' */


//EVENTS

//onclick
/*function doSomething(){
    alert('you did something')
}

let EventId=document.getElementById('eventbutton')*/

/*EventId.addEventListener('click',()=>{
    alert('you did something!')
})*/


//onload
/*EventId.onclick=doSomething

let boddy=document.body;
EventId.onload=doSomething()*/


//onchange
/*let eventText=document.getElementById('eventtextbox')
eventText.onchange=upper

function upper(){
   eventText.value=eventText.value.charAt(0).toUpperCase()+ eventText.value.slice(1)
}
//mousehover
let mousy=document.getElementById('mouseover')

mousy.onmouseover=changehover;
mousy.onmouseout=reverthover;
mousy.onmousedown=holdhover;
mousy.onmouseup=reverthover

function changehover(){
    mousy.style.backgroundColor='red'
}

function reverthover(){
    mousy.style.backgroundColor='lightgreen'
}
function holdhover(){
    mousy.style.backgroundColor='orange'
} */




//ADDEVENTLISTENER(EVENT,FUNCTION,useCAPTURE)

//you can add as many event handlers to one element
//even the sae event that invokes different functions

/*const listening=document.getElementById('listening-id')
const outerListening=document.getElementById('AEL-id')*/
/*listening.addEventListener('mouseover',()=>{
    listening.style.backgroundColor='blue'
})
listening.addEventListener('mouseout',()=>{
    listening.style.backgroundColor='lightgreen'
})*/

/*listening.addEventListener('click',changeBlue)
outerListening.addEventListener('click',changeBlue,true)

function changeBlue(){
    alert(`you select ${this.id}`)
 this.style.backgroundColor='blue'
}*/



//SHOW/HIDE HTML ELEMENTS

/*const toggleImage=document.getElementById('mytoggleimage')
const togglebtn=document.getElementById('togglebtn')

togglebtn.addEventListener('click',()=>{
   /* if(toggleImage.style.display=='none'){
        toggleImage.style.display='block'
    } else{
        toggleImage.style.display='none'
    }*/

    /* if(toggleImage.style.visibility=='hidden'){
        toggleImage.style.visibility='visible'
    } else{
        toggleImage.style.visibility='hidden'
    }  

})*/



//DETECT KEY PRESSES
/*addEventListener('keydown',(event)=>{
    console.log(event.key)
})

const Keypress=document.getElementById('keypress')

window.addEventListener('keydown',move)
x=0
y=0
function move(event){
    switch(event.key){
        case 'ArrowDown':
            y+=10;
            Keypress.style.top=y+'px';
            break;
            case 'ArrowUp':
                y-=10;
                Keypress.style.top=y+'px';
                break;
                case 'ArrowLeft':
                    x-=10
                    Keypress.style.left=x+'px'
                    break;
                    case 'ArrowRight':
                        x+=10;
                        Keypress.style.left=x+'px'
                        break;

    }
}*/



//JS ANIMATIONS

/*const animationBtn=document.getElementById('animate-btn')
const myAnimation=document.getElementById('tobeanimated')

animationBtn.addEventListener('click',animate)

function animate(){

    
  let timerId=null;
  x=0;
  y=0;
  let degrees=0;
  let scaleX=1;
  let scaleY=0;
   timerId=setInterval(frames,4) */


   function frames(){
   /* if(y<=-200){
        clearInterval(timerId)
    }else{
        y-=1;
        myAnimation.style.top=y+'px'
    }
   }*/

   //Slide animation

    /*if(y>=200||x>=200){
        clearInterval(timerId)
    }else{
        x+=1
        y+=1;
        myAnimation.style.left=x+'px'
        myAnimation.style.top=y+'px'
    }
   }*/

  
   //Rotation

   /*if(degrees>=360){
    clearInterval(timerId)
   }else{
    degrees+=1
    myAnimation.style.transform='RotateY('+degrees+'deg)'
   }
   }*/


   //rotate diagonally
  /* if(x>=200||y>=200){
    clearInterval(timerId)
   }else{
    degrees+=5 //controls the speed of rotation
    x+=1
    y+=1
    myAnimation.style.transform='RotateZ('+degrees+'deg)'
    myAnimation.style.top=y+'px'
    myAnimation.style.left=x+'px'
   }*/

 
   //Scale
   /*if(scaleX>=2||scaleY>=2){
    clearInterval(timerId)
   } else{
    scaleY+=0.01
    scaleX+=0.01
    myAnimation.style.transform='scale('+scaleX+','+scaleY+')'
   }*/

   }
//}



//CANVAS API 

/*const canvas=document.getElementById('drawAPI')
let context=canvas.getContext('2d')*/

//draw lines on canvas
/*context.strokeStyle='white'
context.lineWidth=5;
context.beginPath();
context.moveTo(0,0)
context.lineTo(250,250)
context.lineTo(250,500)

context.moveTo(500,0)
context.lineTo(250,250)

context.stroke()*/

//draw triangle
/*context.fillStyle='yellow'
context.strokeStyle='grey'
context.lineWidth=5;
context.beginPath()
context.moveTo(250,0)
context.lineTo(0,250)
context.lineTo(500,250)
context.lineTo(250,0)
context.stroke()
context.fill()*/

//draw rectangle
/*context.fillStyle='yellow'
context.fillRect(0,0,250,250)
context.strokeRect(0,0,250,250)

context.fillStyle='blue'
context.fillRect(0,250,250,250)
context.strokeRect(0,0,250,250)


context.fillStyle='green'
context.fillRect(250,0,250,250)
context.strokeRect(250,0,250,250)


context.fillStyle='black'
context.fillRect(250,250,250,250)
context.strokeRect(250,250,250,250)*/


//draw circle
//(x,y,radius,sAngle,eAngle,counterClockwise)
/*context.fillStyle='lightblue'
context.strokeStyle='darkblue'
context.lineWidth=4;
context.beginPath()
context.arc(250,250,200,0,2*Math.PI)
context.stroke()
context.fill()


//draw text
context.font='50px MV Boli'
context.fillStyle='grey'
context.textAlign='center'
context.fillText('You Win!!',canvas.width/2,canvas.height/2) */




//WINDOW-interface used to talk to the web browser
//       the DOM is a property of a window

/*console.dir(window)
console.log(window.innerHeight)
console.log(window.innerWidth)
console.log(window.scrollX)
console.log(window.scrollY)
console.log(window.location.href);
//.location.href='https://google.com';
console.log(window.location.hostname);
console.log(window.location.pathname);

const windowButton=document.querySelector('#windowbutton')

windowButton.addEventListener('click',()=>{
// window.open('https://google.com')
//window.close()
//window.print()
//window,alert('you clicked this button')
//window.confirm('press OK to continue')
let age=window.prompt('enter age')
if(age<18){
    window.alert('you must be over 18 to enter this site')
    window.close()
}
}) */



//COOKIES-a small text file stored on your computer
//        used to remember information about the user
//        saved in name=value pairs

/*console.log(navigator.cookieEnabled);


document.cookies='firstName=Kenny;expires=Sun, 1 January 2019 12:00:00 UTC;path=/'
document.cookies='lastName=Star;expires=Sun, 1 January 2020 12:00:00 UTC;path=/'
//console.log(document.cookie);

function setCookie(name,value,daysToLive){
    const myDatee=new Date()
    myDatee.setTime(myDatee.getTime()+(daysToLive*24*60*60*1000))
  

   let expire='expires='+myDatee.toUTCString()

   document.cookie=`${name}=${value};${expire};path=/`
   
}

function deleteCookie(name){
 return setCookie(name,null,null)
}

function getCookie(name){
    let dcoded=decodeURIComponent(document.cookie)
    let cArray=dcoded.split('; ');
    let result;
    cArray.forEach((element)=>{
        if(element.indexOf(name)==0){
             result=element.substring(name.length+1);

        }
    })

    return result
   

}

setCookie('email','kenkoar3x2@gmail.com',365)
setCookie('lastName','squidward',365)
deleteCookie('emai3')
deleteCookie('emaile')
//deleteCookie('email')
deleteCookie('K')


console.log(getCookie('email'))




//cookies section
let firstText=document.getElementById('firstText')
let lastText=document.getElementById('lastText')
let submitCookies=document.getElementById('submitcookiebtn')
let getCookiesBtn=document.getElementById('getcookiebtn')

submitCookies.addEventListener('click',()=>{
    setCookie('firstName1',firstText.value,365)
    setCookie('lastName2',lastText.value,365)
    console.log(document.cookie)
})

getCookiesBtn.addEventListener('click',()=>{
    firstText.value=getCookie('firstName1')
    lastText.value=getCookie('lastName2')
})



deleteCookie('firstName2')
deleteCookie('firstname1')
//deleteCookie('lastName2')
deleteCookie('lastName')
deleteCookie('firstname')

console.log(Date.now()) */




/*const phoneBook=[
    {name:'kenny',
      tel:18762956906},
    {name:'Zan',
      tel:18764804625},
      {name:'mom',
      tel:18764804625}
    
]


function phoneSearch(names){
    for(i=0;i<phoneBook.length;i++){
        if(phoneBook[i].name.includes(names)){
            return phoneBook[i]
        }
    }
}

console.log(phoneSearch('kenny'))
console.log(phoneBook[0].name)*/




//ASYNC and Promises and callbacks

//callbacks
/*console.log('start');
function loginUser(email,password,callback){
    setTimeout(()=>{
        console.log('now we have the data')
        callback({useremail:email})
    },3000)
}

function getUserVideos(email,callback){
    setTimeout(()=>{
     callback( ['video1','video2','video3'])
    },1000)
}

const user=loginUser('keneilwatson0@gmail.com',123456,(user)=>{
   console.log(user);
   getUserVideos(user.useremail,(videos)=>{
    console.log(videos)
   })
}) */


console.log('finish');


//promises

/*let newPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve({user:'ed'});
        reject(new Error('user not logged in'))

    },2000)
})

newPromise.then((user)=>{
 console.log(user);
}).catch((error)=>{
    console.log(error)
})

//refactoring promises
function loginUser(email,password){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            console.log('now we have the data')
            resolve({userEmail:email})
        }
        ,3000) }  )
    }
    
   


function getUserVideos(email){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve( ['video1','video2','video3'])
           },1000)
    })
   
}



loginUser('ed','bumba').then((user)=>{
    console.log(user)
    
})

getUserVideos('ed').then(videos=>console.log(videos)) */


//promise.all
//Promise.all([loginUser('ken','bumba'),getUserVideos('ed')]).then((result)=>{console.log(result);})

/*let yt=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('getting stuff from youtube');
        resolve({videos:[1,2,3,4]})
    },2000)
})

let fb=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log('getting stuff from fb');
    resolve({user:'name'})
    },2000)
    
})

Promise.all([fb,yt]).then((results)=>{console.log(results);})

//ASYNC
function loginUser(email,password){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            console.log('now we have the data')
            resolve({userEmail:email})
        }
        ,3000) }  )
    }
    
   


function getUserVideos(email){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve( ['video1','video2','video3'])
           },1000)
    })
   
}
 */




 /*async function displayUsers(){
 let logged= await loginUser('ed','bumba');
 let videos=await getUserVideos(logged.userEmail)
 console.log(logged,videos);
}

displayUsers()*/