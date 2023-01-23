//TERNARY OPERATOR-Shortcut for an 'if/else statement
//                 Takes 3 operands

//                1. condition with ?
//                2.expression if true:
//                3.expression if false

//eg  condition ? expIfTrue:exprIfFalse

/*let adult= checkAge(18);
console.log(adult)

function checkAge(age){
    if(age>=18){
        return true
    } else{
        return false
    }
}*/
//Easier method
/*let adult= checkAge(20);
console.log(adult)

function checkAge(age){
    return age>=18? true:false
}*/

/*checkWinner(false)
function checkWinner(win){
win ? console.log('YOU WIN!'):console.log('YOU LOSE!')
}*/


//VARIABLE SCOPE= where a variable is accessible
//let=variables are limited to a block scope{}
//var= variable are limited to a function(){}
//global variable=is declared outside any function
// (if global, var will change browsers window properties)

/*for (var i =2; i <= 4;i+=1) {
   
    
}
console.log(i)*/


//TEMPLATE LITERALS=delimited with (`)
//                  instead of double or single quotes
//                  allows embedded variables and expressions

let userName='bro'
let items= 1;
let total= 75;

/*console.log('hello', userName)
console.log('you have', items, 'items in your cart')
console.log('your total is $', total)*/

/*console.log(`Hello ${userName}`)
console.log(`You have ${items} items in your cart`)
console.log(`YOur total is $${total}`)

let text=(`Hello ${userName}. 
You have ${items} items in your cart. 
Your total is $${total}`)

console.log(text)

document.getElementById('myCartLabel').innerHTML=text

emptyCart()
oneItem()


 function emptyCart(){if(items==0){
   document.getElementById('myCartLabel').innerHTML='you currently dont have any items in your cart'
 } }

 function oneItem(){if(items==1){
   document.getElementById('myCartLabel').innerHTML=`You have 1 item in your cart. 
   Your total is $${total}`
 } }*/



 //TOLOCALESTRING(toLocaleString())=
 // returns a string with a language sensitive
 // representation of this number

 // number.toLocalString(locale,{options});

 //'locale'= specify that language (undefined=default set in your browser)
 //'options'= is an object with formatting options

 /*let myNum=2

 myNum=myNum.toLocaleString('en-US') US English
 myNum=myNum.toLocaleString('hi-IN') Hindi
 myNum=myNum.toLocaleString('de-De') Standard German

 //options method

 currency
 myNum=myNum.toLocaleString('en-US', {style:'currency',currency:'USD'})
 myNum=myNum.toLocaleString('hi-IN', {style:'currency',currency:'INR'})
 myNum=myNum.toLocaleString('de-DE', {style:'currency',currency:'EUR'})

 percentage
 myNum=myNum.toLocaleString(undefined, {style:'percent'});
 myNum=myNum.toLocaleString(undefined, {style:'unit',unit:'celsius'});

 console.log(myNum)

 myNum=myNum.toLocaleString(undefined, {style:'unit',unit:'Kelvin'});
 console.log(myNum)*/


 //NUMBER GUESSING GAME

 //my version


 
 /*let userGuessedNumber
 let guessedNumber

 let result
 

 

 function guessingGame(userGuessedNumber,guessedNumber){
     guessedNumber=Math.floor(Math.random()*10)+1;

    console.log(guessedNumber)

  document.getElementById('guess-btn').onclick=function(){
    userGuessedNumber=document.getElementById('number-input').value;
   
    
    if(userGuessedNumber==guessedNumber){
    document.getElementById('result-of-guess').innerHTML=
    `The number you guessed is ${userGuessedNumber}
    and the right number is ${guessedNumber}, YOU WON!`
    }
    else{
        document.getElementById('result-of-guess').innerHTML=`
        The number you guessed is ${userGuessedNumber}
        and the right number is ${guessedNumber},YOU LOSE!  `   
    }
  }

 
  if(userGuessedNumber<10){
    document.getElementById('result-of-guess').innerHTML=`
    Please enter a number`
    document.getElementById('result-of-guess').style.color ='#DF1418'
  }
  
 }

 result=document.getElementById('result-of-guess')



 

 guessingGame()*/

 //Bro-code tutorial method

 /*const answer= Math.floor(Math.random()*10)+1
 console.log(answer)
 let guesses=0;

document.getElementById('guess-btn').onclick=function(){
    let guess=document.getElementById('number-input').value;
    guesses+=1

    if(guess==answer){
        alert(`${answer} is the #. it took you ${guesses} guesses`)
    } else if(guess<answer){
        alert('too small')
    } else(
        alert('too large')
    )
}*/


//TEMPERATURE CONVERTER

/*my version
document.getElementById('submit-temp-btn').onclick=function(){
    temp=document.getElementById('entered-temp').value

   
    if(document.getElementById('celsius-unit').checked){
        document.getElementById('conversion-result').innerHTML=`${toCelsius(temp)}°C` }
    else if(document.getElementById('fahrenheit-unit').checked){
        document.getElementById('conversion-result').innerHTML=`${toFahrenheit(temp)}°F`
    } else(
        document.getElementById('conversion-result').innerHTML='please select a conversion method'
   
      
    )
}

let temp


function toCelsius(temp){
    return (temp-32)*(5/9);
}
/*temp=toCelsius(temp)
console.log(temp)*/

/*function toFahrenheit(temp){
    return temp*9/5+32;
}
/*temp=toFahrenheit(temp)
console.log(temp)*/

//console.log(toCelsius(2))

//Bro code tutorial version

/*let temp


function toCelsius(temp){
    return (temp-32)*(5/9);
}


function toFahrenheit(temp){
    return temp*9/5+32;
}

document.getElementById('submit-temp-btn').onclick=function(){
    

   
    if(document.getElementById('celsius-unit').checked){
        temp=document.getElementById('entered-temp').value
        temp=Number(temp)
        temp=toCelsius(temp)
        document.getElementById('conversion-result').innerHTML=`${temp}°C`
     }
    else if(document.getElementById('fahrenheit-unit').checked){
        temp=document.getElementById('entered-temp').value
        temp=Number(temp)
        temp=toFahrenheit(temp)
        document.getElementById('conversion-result').innerHTML=`${temp}°F`
    } else(
        document.getElementById('conversion-result').innerHTML='please select a conversion method'
   
      
    )
}*/


//ARRAYS-Think of it as a variable that can store multiple values
 
/*let fruits=['apple','orange','bannana']


//update indexes of an array
fruits[2]='coconut';
console.log(fruits)

//add an element to an array
fruits.push('lemon')

//remove last element of an array
fruits.pop()

//add element to the beginning of an array
fruits.unshift('kiwi')

//removes first element of array
fruits.shift()

//returns the length of an array
let length=fruits.length;
console.log(length)

//returns the index of an element in an array
index=length
console.log(fruits.indexOf('apple')) */


//LOOP THROUGH AN ARRAY
/*let prices=[5,10,15,20]

for(let i=0; i<prices.length;i+=1){
 console.log(prices[i])
}

//loop through an array backwards
for(let i=prices.length-1;i>=0;i-=1){
    console.log(prices[i])
}

//loop though an array easy method
for(let price of prices){
    console.log(price)
}*/

//SORT AN ARRAY OF STRINGS
/*let fruits=['banana','apple','orange','mango']
fruits= fruits.sort().reverse()
for(let fruit of fruits){
    console.log(fruit)
}*/

//2D ARRAYS-An array of arrays
/*let fruits=['apples','oranges','bananas'];
let vegetables=['carrots','onions','potatoes'];
let meats=['eggs','chicken','fish'];

let groceryList=[fruits,vegetables,meats]

//change in value of an index in a 2d array
groceryList[0][0]='mangoes';

//make 2d array with nested for loop
for(let list of groceryList){
    for(let food of list){
        console.log(food)
    }
}

console.table(groceryList)

//standard for loop 2d array
for(i=0;i<groceryList.length;i++){
    for(j=0;j<groceryList[i].length;j++){
        console.log(groceryList[i][j])
    }
}*/


//Write a function makeMatrix(m,n,value) that accepts three arguments.The function should return
// a 2d array of height'm' and width'n' that contains the value as every element

/*let makeMatrix= function(m,n,value){
    let matrix=[]

    for(let i=0; i<m; i++){
        let row=[]

        for(let j=0; j<n;j++){
            row.push(value);
        }

        matrix.push(row);

    }

    return matrix
}

console.log(makeMatrix(3,5,null))*/



//Write a function totalProduct(array) that accepts a 2d array of numbers.The function should  return
//the total product of all numbers in the array

/*let totalProduct=function (array1,array2){
    let product=1;
   

    for (i=0;i<array1.length;i++){
        let subArray=array1[i]
        for(j=0;j<subArray.length;j++){
           product*=subArray[j]
        }
    }
    return product
}

let array1=[
    [3,5,2],
    [6,2],
];
let array2=[
    [4,6],
    [3,2],
    [1,2],
];

console.log(totalProduct(array1))
console.log(totalProduct(array2))*/

/*let totalProduct=function (array){
    let product=1;
   

    for (i=0;i<array.length;i++){
        let subArray=array[i]
        for(j=0;j<subArray.length;j++){
           product*=subArray[j]
        }
    }
    return product
}

let array1=[
    [3,5,2],
    [6,2],
];
let array2=[
    [4,6],
    [3,2],
    [1,2],
];

console.log(totalProduct(array1))
console.log(totalProduct(array2))*/


//Write a function toSumPairs(numbers,target) that accepts an array of numbers and a target number
//as arguments.The function should return 2d array containing all unique pairs of elements that
//sum to the target

/*let toSumPairs=function(numbers,target){
    let pairs=[]

    for(let i=0;i<numbers.length;i++){
        for(j=i+1;j<numbers.length;j++){        
            if(numbers[j]+numbers[i]===target){
                let pair=[numbers[i],numbers[j]]
                pairs.push(pair)
            }
            
        }
    }
    
    return pairs
}
console.log(toSumPairs([2,3,4,6,5], 8))*/

//Write a function 'zipper' that accepts two arrays as argiments.
//the function should return a 2d array containing
//pairs of elements at the same indices

//my solution
/*let array1=['a','b','c','d']
let array2=[-1,-2,-3,-4]

function zipper(array,array2){
    let zipped=[]

    for (i=0;i<array.length;i++){
        let arrayIndex=array.indexOf(array[i])

       for(j=0;j<array2.length;j++){
        let array2Index=array2.indexOf(array2[j])
        //console.log(array[i],array2[j])

        if(arrayIndex===array2Index){
            let unzipped=[array[i],array2[j]]
            zipped.push(unzipped)
           }
        
       }
       
    }
 
    return zipped
}

let unpackedZipper=zipper(array1,array2)

for(let unzipped of unpackedZipper){
    for (let fullyUnzipped of unzipped){
        console.log(fullyUnzipped)
    }
}

console.log(unpackedZipper)*/










  

