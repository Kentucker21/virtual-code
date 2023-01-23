//SPREAD OPERATOR- allows an iterable such as an array or string to be expanded
//                 in places where zero or more
//                 arguments are expected

/*let numbers=[1,2,3,4,5,6,7,8,9]
let maximum=Math.max(...numbers)
console.log(maximum)

let class1=['spongebob','patrick','sandy']
let class2=['squidward','mr.krabs','plankton']

class1.push(...class2)

console.log(class1)

for(i=0;i<class1.length;i++){
    console.log(class1[i])
}*/

//REST PARAMETERS-represents an indefinite number
// '...'           of parameters
//                (packs arguments into an array)
/*let a=1;
let b=2;
let c=3;
let d=4;
let e=5;


function sum(...numbers){
    let total=0;
    for(let number of numbers){
        total=total+number;
    }
    return total
}

console.log(sum(a,b,c,d,))*/

/*function Push(...numbers){
    let array1=[] 
    array1.push(numbers)
    return array1
}
console.log(Push(a,b,c,d))*/

//CALLBACKS-a function passed as an argument to another function
/*Ensures that a function is not going to run
before a task is completed. helps us to develop
asynchronous code. (When one function has to wait for another function)
that helps us to avoid errors and potential problems
eg. waits for a file to load*/

/*sum(2,3,displayDom)


function sum(x,y,callBack){
    let result=x+y;
    callBack(result)
}

function displayConsole(output){
    console.log(output);
}

function displayDom(output){
    document.getElementById('callback').innerHTML=output
}*/


/*let cars=[['benz','mercedes','lambo'],
         ['wish','probox','crown'] ]

         function iterate(list,callback){
            for(i=0;i<list.length;i++){
                for(j=0;j<list[i].length;j++){
                    console.log(list[i][j])
                }
            }
            callback(list)
         }

         let capitalize=function capitalize(word){
            for (let words of word){
                for(let letters of words){
                    letters=letters.charAt(0).toUpperCase()+letters.slice(1)
                    console.log(letters)
                }
            }
           
          
         }

         iterate(cars,capitalize)*/


 //array.ForEach()-executes a provided callback function
 // once for each array element 

  /*let students1=['spongebob','patrick','squidward'];
     students1.forEach(capitalize)
     students1.forEach(printAll)
  function capitalize(element,index,array){
    array[index]=element[0].toUpperCase()+ element.substring(1)
  }

  function printAll(element){
    
        console.log(element)
    
  }

  console.log(students1[0])*/


  //ARRAY.MAP()= executes a provided callback function

  //once for each array element and creates a new array

  /*let numbers=[1,2,3,4,5];
  let squares=numbers.map(square)
  squares.forEach(printAll)

  function square(element){
    return Math.pow(element,2)
  }
  function printAll(element){
   console.log(element)
  }*/

  //ARRAY.FILTER()- creates a new array with all elements
  //                that pass the test provided by a function 
  /*let ages=[18,16,21,17,19,90]
  ages=ages.sort()
  console.log(ages)
  filteredAges=ages.filter(ageFilter)

  filteredAges.forEach(printAll)

  function printAll(element){
    console.log(element)
  }

  function ageFilter(age){
   return age>=18;
  }*/


  //ARRAY.REDUCE()-reduces an array to a single value

  /*let prices=[5,10,15,20,25]
   total=prices.reduce(checkOut)

  function checkOut(prices,total){
    return total=prices+total
    
  }

  console.log(`the total is $${total}`)*/



//FInd average of an array of numbers
/*numberArray=[5,4,2,6]
numberArray2=[2,7,6,2,6]

function Averagearray(array){
    function Reduce(total,value){
        return total=total+value;
    }
    let average=array.reduce(Reduce)/array.length;
    return average
}

console.log(Averagearray(numberArray2))*/




  //SORT AN ARRAY OF NUMBERS

  /*let grades=[100,50,90,60,80,70]

  grades=grades.sort(descendingSort);
 grades.forEach(printAll)

  function ascendingSort(x,y){
    return x=x-y
  }
  function descendingSort(x,y){
    return y=y-x
  }

  function printAll(element){
    console.log(element)
  }

  console.log(grades)*/



  //FUNCTION EXPRESSIONS- function without a name(anonymous function)
  // used to avoid polluting the global scope with names
  //write it,then forget about it

  /*const greeting= function(){
    console.log('hello')
  }

  greeting()

  //counter function
   count=0;
   
   document.getElementById('inc-btn').onclick= function(){
    count=count+1
    document.getElementById('counter').innerHTML=count

   }

  document.getElementById('dec-btn').onclick= function(){
    count=count-1
    document.getElementById('counter').innerHTML=count

   }*/


   //ARROW FUNCTION-compact alternative to a traditional function expression
   //=>
   
/*const greeting=(username)=>console.log(`hello ${username}`)

greeting('kenny')

const percentage=(number,divider)=>{
    let result=number/divider*100
    return result
}

console.log(percentage(55,80))


let grades=[100,50,90,60,80,70]

grades.sort((x,y)=>{
return x=x-y
})

grades.forEach((element)=>{
    console.log(element)
})*/



//SHUFFLE AN ARRAY

/*let cards=['A','2','3','4','5','6','7','8','9','10','J','Q','K']


let shuffle=(array)=>{
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

shuffle(cards)

//console.log(cards)

cards.forEach(cards=>{console.log(cards)}) */


//NESTED FUNCTIONS-functions inside other functions
//                outer functions have access to inner functions
//                inner functions are hidden from outside the outer function
//                used in closures


/*let username='bro';
let userInbox=0;

function login(){
 

  let displayUserName=()=>{
   console.log(`welcome ${username}`)
  }

  let displayUserInbox=()=>{
    console.log(`you have ${userInbox} new messages`)
  }

  displayUserName();
  displayUserInbox();
}

login()*/



//MAP-an object that holds key-value pairs of any data type

/*const store= new Map([
  ['t-shirt',20],
  ['jeans',30],
  ['socks',10],
  ['underwear',50]
]);

store.forEach((key,value)=>{
  console.log(value,key)
})

//get method
let shoppingCart=0;

shoppingCart+=store.get('t-shirt')
shoppingCart+=store.get('underwear')
console.log(shoppingCart)


//set method
addItem=store.set('necklace',12)
deleteItem=store.delete('necklace')

store.forEach((key,value)=>{
  console.log(value,key)
})

//has method
console.log(store.has('t-shirt'))


//size method
console.log(store.size)
*/



