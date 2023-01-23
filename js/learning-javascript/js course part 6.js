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



//Item shuffle test
/*let item1Pic1=document.querySelector('#item-1-pic-id')
let item1Pic2=document.querySelector('#item-2-pic-id')
let item1Pic3=document.querySelector('#item-3-pic-id')

let itemPrice1=document.querySelector('#item-1-price-id')
let itemPrice2=document.querySelector('#item-2-price-id')
let itemPrice3=document.querySelector('#item-3-price-id')

itemName1=document.querySelector('#item-1-name-id')
itemName2=document.querySelector('#item-2-name-id')
itemName3=document.querySelector('#item-3-name-id')

itemStatus=document.querySelectorAll('.item-status')

class theProducts{
    constructor(name,price,prePrice,){
        this.name=name
        this.price=price
        this.prePrice=prePrice

    }
}


 
 function shuffle(array){
    let currentIndex=array.length
    
    while(currentIndex !=0){
      let randomIndex=Math.floor(Math.random()*array.length)
      currentIndex=currentIndex-1;
    
      let temp=array[currentIndex];
      array[currentIndex]=array[randomIndex];
      array[randomIndex]=temp;
    }
    
    return array
    
    }

let item1=[item1Pic1,new theProducts('YEEZYFOAMS',89,189)]

var item2=[item1Pic2,new theProducts('YEEZY SLIDE RESIN',75)]

var item3=[item1Pic3,new theProducts('YEEZY SLIDES BROWN',98)]



var allMyItems=[ item1,item2,item3]
shuffle(allMyItems)
console.table(allMyItems);


itemName1.textContent=allMyItems[0][1].name
itemPrice1.textContent=`$${allMyItems[0][1].price}`
item1Pic1.textInnerHTML=allMyItems[0][0]

itemName2.textContent=allMyItems[1][1].name
itemPrice2.textContent=`$${allMyItems[1][1].price}`
item1Pic2.textInnerHTML=allMyItems[1][0]

itemName3.textContent=allMyItems[2][1].name
itemPrice3.textContent=`$${allMyItems[2][1].price}`
item1Pic3.textInnerHTML=allMyItems[2][0]


let Pic=document.createElement('img')

Pic.src='../html/yeezy.jpg'


document.getElementById('firstpic').prepend(Pic)
Pic.style.width='200px' */


function isevenisodd(arr){
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

console.log(isevenisodd(numbe))