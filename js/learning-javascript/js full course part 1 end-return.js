var msg;
var gor;
var og;
var w;
let str='steve';



msg=25;
gor=20;
w=5;
og=gor+msg;
console.log(2)
console.log(msg)
console.log(og)
console.log(w)

if (msg==22){
    console.log('true')
} else{
    console.log('false')
}

while(msg>=w){
    msg=msg-w
}
if(msg==0){
    console.log('yes')
} else{
    console.log('no')
}

//TAX CALCULATION//
/*var item;
var tax;
var price;
var newprice;
var taxpaid;
var kenny;
tax=0.15;
item=kenny;
price=1000
newprice=tax*price+price
taxpaid=tax*price
console.log('kenny')
console.log(newprice)
console.log(taxpaid)
console.log(myname,tax)
/*



let myname
let theirname
myname='kenny'
console.log(myname)
myname='greg'
console.log(typeof myname)

//NEW



//window.alert('This is an alert')

/*let text
let favDrink= prompt('WHat is your favorite drink?');
switch(favDrink) {
    case "Coca-cola":
        text='Excellent choice! Cocoa-cola is good for your soul.'
     
}*/


//document.getElementById('brown-text').innerHTML='hello ' + myname + ' nice to meet you';
let students=20
//students=students+1
//students=students*2
//students=students/2

//let extraStudents=20
//extraStudents=extraStudents%3
console.log(students)
//console.log(extraStudents)

students +=2

//HOW TO ACCEPT USER INPUT

//EASY WAY WITH WINDOW PROMPT

/*let username=window.prompt('What is your name')
console.log(username)*/

/*let num1=window.prompt('enter num1')
let num2=window.prompt('enter num2')
let sum=num1+num2;
console.log(sum)*/

//DIFFICULT WAY WITH HTML

/*let username
document.getElementById('mybtn').onclick=function()
{
    username=document.getElementById('mytext').value;
    console.log(username)

}*/

let num1
let num2
/*document.getElementById('mybtn-1').onclick=function(){
    num1=document.getElementById('num-1').value
    console.log(num1)
}
document.getElementById('mybtn-2').onclick=function(){
    num2=document.getElementById('num-2').value
    console.log(num2+num1);
    console.log(typeof num1)
}*/


//CHANGE LABEL

/*let username
document.getElementById('mybtn').onclick=function()
{
    username=document.getElementById('mytext').value;
    console.log(username)
    document.getElementById('mylabel').innerHTML='Hello ' +username;
}*/

//ADDING USER INPUT

/*let a= parseInt(prompt('what is your number'))
console.log( a)
let b= parseInt(prompt('what is your second number'))
console.log( b)
console.log(b+a)*/

//NEW AND IMPROVED TAX CALC FUNCTION
/*let itemName=prompt('what is the name of your item');
console.log(itemName)
let tax=0.15;
let Price=parseInt(prompt('enter price of item'));
let newPrice=tax*Price+Price
let taxPaid=tax*Price
console.log('Your price with tax of '+itemName+ ' is '+newPrice)
console.log('Your tax paid is ' + taxPaid)*/


//HTML TAX CALC FUNCTION
let tax=0.15
let price


document.getElementById('item-btn').onclick=function(){
    item=document.getElementById('item').value
    console.log(item)
}
document.getElementById('item-price-btn').onclick=function(){
   
    price=document.getElementById('item-price').value
    price=parseInt(price)
    console.log(price)
    console.log(typeof price)
    let newprice=tax*price+price;
    document.getElementById('newprice').innerHTML='The price of '+ item + ' with tax is '+ newprice;
    let taxPaid=tax*price;
    document.getElementById('taxpaid-1').innerText='Tax paid for '+ item + ' is ' + taxPaid;

}

//TYPE CONVERSION=ability to convert any datatype to another:number,string,boolean
/*let age=window.prompt('what is your age')
/*age=parseInt(age) //parseInt converts age variable to a number from a string*/
/*age=Number(age) //the number function converts the age variable to a number
age+=1;
console.log('Happy Birthday! You are '+ age+ ' years old')

console.log(typeof age)*/
/*
let x
let y
let z

x=Number(3.14)
console.log(x, typeof x)

y=String(3.14)
console.log(y, typeof y)

z=Boolean('')
console.log(z,typeof z)*/

//CONST-a variable that cannot be changed
//Circumfrence of a circle

/*let pi=3.14159;
let radius;
let Circumfrence;*/

//Without const
/*radius=window.prompt('enter radius')
radius=Number(radius)
Circumfrence=2*radius*pi;
console.log('The circumfrence is '+ Circumfrence)*/

//With const
/*const PI=3.14159;
let radius;
let Circumfrence;
radius=window.prompt('enter radius')
radius=Number(radius)
Circumfrence=2*radius*PI;
console.log('The circumfrence is '+ Circumfrence)*/

//JAVASCRIPT MATH-function used for simple arithmetic
let pi=3.14;
/*pi=Math.round(3.14)
console.log(pi)*/
/*pi=Math.floor(3.99);
pi=Math.ceil(3.14)*/
/*pi=Math.pow(pi,2);*/
/*pi=Math.sqrt(pi)*/
/*pi=Math.abs(pi)*/
console.log(pi)

//max minimum function
/*let x=82
let y=45
let z=32
let minimum
let maximum
maximum=Math.max(x,y,z)
console.log(maximum)
minimum=Math.min(x,y,z)
console.log(minimum)*/

//HYPOTENUSE PRACTICE PROGRAM
/*let a;
let b;

a=window.prompt('enter A')
a=Number(a)
console.log(a)
b=window.prompt('enter B')
b=Number(b)
console.log(b)
let c=MAth.sqrt(Math.pow(a,2)+Math.pow(b,2));
console.log(c)*/

//HTML HYPOTENUSE CALC FUNCTION
/*let A
let B
document.getElementById('A-btn').onclick=function(){
    A=document.getElementById('Side-A').value
    A=Number(A);
    console.log(A)
}
document.getElementById('B-btn').onclick=function(){
    B=document.getElementById('Side-B').value
    B=Number(B);
    console.log(B)
    let c=Math.sqrt(Math.pow(A,2)+Math.pow(B,2));
    c=Math.round(c)
    document.getElementById('Hypo-result').innerHTML='The hypotenuse of this triangle is '+c;
}*/

//COUNTER
let count=0

document.getElementById('decrease-btn').onclick=function(){
    count-=1
    document.getElementById('the-counter').innerHTML=count;
}
document.getElementById('increase-btn').onclick=function(){
    count+=1
    document.getElementById('the-counter').innerHTML=count
}
document.getElementById('reset-btn').onclick=function(){
    count=0
    document.getElementById('the-counter').innerHTML=count
}

//RANDOM NUMBER GENERATOR
/*let x;//generate numbers between 1-6
let y
console.log(x);

document.getElementById('generate-btn').onclick=function(){
    x=Math.floor(Math.random()*6)+1;
    y=Math.floor(Math.random()*6)+1;
    document.getElementById('random-1').innerHTML=x;
    document.getElementById('random-2').innerHTML=y;
}*/

//USEFUL STRING PROPERTIES & METHODS
/*let userName='bro code'
let phoneNumber='1876-2956-906';
console.log(userName.length)
console.log(userName.slice(7))
console.log(userName.charAt(4))
console.log(userName.indexOf('o'))
console.log(userName.lastIndexOf('o'))

userName=userName.trim()
userName=userName.toUpperCase()
userName=userName.toLowerCase()

console.log(userName)
phoneNumber=phoneNumber.replaceAll('-','')
console.log(phoneNumber)*/

//SLICE METHOD-extracts a string and returns it as a new string without modifying the original

/*let fullName='keneil watson';
let firstName
let lastName
//lastName=fullName.slice(7)
console.log(lastName)
//firstName=fullName.slice(0,6)
console.log(firstName)

//indexof method
lastName=fullName.slice(fullName.indexOf(" ")+1)
console.log(lastName)

firstName=fullName.slice(0,fullName.indexOf(" "))
console.log(firstName)*/

//METHOD CHAINING-Calling on one method after another in one continuous line of code
/*let userName='bro';
let letter=userName.charAt(0).toUpperCase().trim();
//letter=letter.toUpperCase()
console.log(letter)*/

//IF STATEMENTS
/*let age
age=window.prompt('what is your age')
if(age>=65){console.log('you are a senior citizen')}

else if(age>=18){
console.log('you are an adult!')
} else if(age<0){
    console.log('you haven`t been born yet')
}

else{console.log('you are underaged!')}*/

//checking booleans with if statements
let online=true;

if(online){
    console.log('you are online')
} else{
    console.log('you are offline')
}


//CHECKED PROPERTY
document.getElementById('myButton').onclick=function(){
    const myCheckBox=document.getElementById('myCheckBox')
    if (myCheckBox.checked==true) {
        console.log('you are subscribed')
    } else {
        console.log('you are not subscribed')
    }

    //using radio button property
    const visaBtn=document.getElementById('visaBtn')
const mastercardBtn=document.getElementById('mastercardBtn')
const PayPalBtn=document.getElementById('payPalBtn')
 if (visaBtn.checked) {
    console.log('you are using a visa')
 } else if(mastercardBtn.checked){
    console.log('you are using mastercard')
 }
else if(payPalBtn.checked){
    console.log('you are using paypal')
}
else{
    console.log('you must select a payment type')
}
}

//SWITCH-statement that examines a value
//       for a match against many case clauses
//       more efficient than many if statements

//Program to check grade else if method
/*let grade='A'

if (grade=='A') {
   console.log('You did great') ;
} else if (grade=='B' ){
    console.log('you did good');
}
 else if (grade=='C' ){
    console.log('you did okay');
 }
 else if (grade=='D' ){
    console.log('you passed...barely');
 }
else if (grade=='F' ){
    console.log('YOU FAILED!');
}

else {
    console.log(grade, 'is not a letter grade');
}*/

//Program to check grade-switch method
/*let grade=window.prompt('what is your grade')*/

/*switch(grade){
    case 'A':
        console.log('you did great')
        break;
    case 'B':
        console.log('you did good')
        break;
    case 'C':
        console.log('you did okay')
        break;
    case 'D':
        console.log('you passed...barely')
        break;
    case 'F':
        console.log('YOU FAILED!')
        break;
        default:
            console.log(grade, 'is not a letter grade')
}*/

//second switch boolean method
/*switch(true){
    case grade>=90:
        console.log('you did great')
        break;
    case grade>=80:
        console.log('you did good')
        break;
    case grade>=70:
        console.log('you did okay')
        break;
    case grade>=60:
        console.log('you passed...barely')
        break;
    case grade<60:
        console.log('YOU FAILED!')
        break;
        default:
            console.log(grade, 'is not a number grade')
}*/


//AND OR OPERATORS
//Gives us the ability to checkmore than 1 condition concurrently
//&& AND (both conditions must be true)
//|| OR(either condition can be true)

/*let temp=15;*/
/*if(temp>0 && temp<30){ //If both conditions are true this will run
    console.log('the weather is good')
} else{
    console.log('the temperature is bad')
}*/
 /*temp=30;
if(temp<=0 || temp>=30){ //If either conditions are true this will run
    console.log('the weather is bad')
} else{
    console.log('the temperature is good')
}*/

/* temp=15;
 let sunny=true;
if(temp>0 && temp<30 && sunny==true){ //If both conditions are true this will run
    console.log('the weather is good')
} else{
    console.log('the weather is bad')
}*/


//! NOT LOGICAL OPERATOR
// typically used to reverse a conditions boolean value
// true->false false->true

/*let temp=-1
let sunny=true;
if (!(temp<0)) {
    console.log('its warm outside')
    
} else{
    console.log('its cold outside')
}

if (!sunny) {
    console.log('its cloudy outside')
} else{
    console.log('its sunny outside')
}


let mood='sleep'
let tirednessLevel=8
 if (!(mood=='sleepy')&& !(tirednessLevel>=8)){
    console.log('not sleepy')
 } else {
    console.log('time for bed')
 }*/

 //WHILE LOOPS=repeat some code
 //            while some condition is true
 //            potentially infinite


/*let userName=''

while (userName==''||userName==null) {
    userName=window.prompt('what is your username')
}

console.log('your username is '+ userName)*/

//DO WHILE LOOP-do something
//            then check the condition
//           repeat if condition is true
/*let userName=''

 do {
    userName=window.prompt('what is your username')
} while (userName==''||userName==null)

console.log('your username is '+ userName)
*/


//FOR LOOP-repeat some code a certain amount of times

/*for (let i = 1; i <= 10;i+=1) {
    console.log(i)
    
}*/
/*for (let i = 10; i > 0;i-=1) {
    console.log(i);
    
}
console.log('happy new year')*/

//BREAK AND CONTINUE
//break-breaks out of a loop entirely
//continue-skis an iteration of a loop
/*for(let i=1; i<=20;i+=1){
    if(i==13){//Break
        break;
    }
    console.log(i)
}
for(let i=1; i<=20;i+=1){
    if(i==13){//continue
        continue;
    }
    console.log(i)
}*/


//NESTED LOOPS-a loop inside of another loop
/*for(let i=1; i<=3; i+=1){
    for(let j=1; j<=3; j+=1){
        console.log(j)
    }
}*/
/*let symbol='*';
let rows=window.prompt('enter number of rows')
let columns=window.prompt('enter number of columns')
for(let i=1; i<=rows; i+=1){//Outer loop for the rows
    for(let j=1; j<=columns; j+=1){//inner loop for the columns 
       document.getElementById('myRectangle').innerHTML+=symbol;

       
    }
    document.getElementById('myRectangle').innerHTML+='<br>';
}*/

//FUNCTIONS-Define code once, and use it many times
//          To perform some code, call the function
/*let i=1
while (i<=3) {
    console.log('Happy birthday')
    i+=1
    
}*/


/*function Birthdayfunc(Birthdayage,Birthname){
    console.log('Happy birthday to you!')
    console.log('Happy birthday to you!')
    console.log('Happy birthday dear '+Birthname)
    console.log('Happy birthday to you')
    console.log('You are ' + Birthdayage + ' years old')
}
function startBdayProgram(){
    let Birthname=window.prompt('enter birthname')
let Birthdayage=window.prompt('enter birthday age')
Birthdayfunc(Birthdayage,Birthname)
Birthdayfunc(Birthdayage,Birthname)
Birthdayfunc(Birthdayage,Birthname)}

startBdayProgram()*/

//RETURN-returns a value back to the place
// where you invoked a function

/*let area;
let width;
let height;

width=window.prompt('enter width')
height=window.prompt('enter height')
area=getArea(width,height)

console.log('The area is '+area)

function getArea(width,height){
    result=width*height;
    
    return result;;
}*/

//password checker program
/*let password=window.prompt('enter password')
let login=userPassword(password)


function userPassword (password) {
    if(password==='test123'){
       return 'password is correct'
    } else{
        return 'wrong password'
    }
}


console.log(login)*/


//fav number return example
/*let num;

num=favNum();


function favNum(num){
 num=window.prompt('enter fav num')
 num=Number(num)
 if (num==Number(num)) {
    return num
 } else {
    return'this is not a number';
 }
}

console.log('my fav num is ' + num)*/


//

