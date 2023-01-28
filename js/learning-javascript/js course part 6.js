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
let menuTitle=document.getElementById('menu-title')
menuTitle.style.backgroundColor='rgb(50,200,250)'
menuTitle.style.fontSize='3em'
menuTitle.style.fontFamily='consolas'
menuTitle.style.textAlign='center'
menuTitle.style.border='1px solid #000000'
menuTitle.style.display='block'


//EVENTS

//onclick
function doSomething(){
    alert('you did something')
}

let EventId=document.getElementById('eventbutton')

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
addEventListener('keydown',(event)=>{
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
}