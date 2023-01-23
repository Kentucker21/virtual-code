//OBJECT-A group of properties and methods
//     properties-what an object has
//     methods-what an object can do
//     use '.' to access properties/methods

/*const car= {
    model:'mustang',
    color:'red',
    year:'2023',

    drive : function(){
        console.log('you drove the car')
    },

    brake:function(){
        console.log('you stepped on the brakes')
    }
}


    console.log(car.color)
    console.log(car.model)
    car.brake()
    */



    
    //ThIS-reference to a particular object
    //     the object depends on immediate context

    /*const cars= {
        model:'mustang',
        color:'red',
        year:'2023',
    
        drive : function(){
            console.log(`you drove the ${this.model}`)
        },
    
        brake:function(){
            console.log('you stepped on the brakes')
        }
    }
    const cars2= {
        model:'corvette',
        color:'blue',
        year:'2024',
    
        drive : function(){
            console.log(`you drove the ${this.model}`)
        },
    
        brake:function(){
            console.log('you stepped on the brakes')
        }
    }

    cars.drive() */


    //CLASS-a blueprint for creating objects
    //      define what properties and methods they have
    //      use a constructor for unique properties

    /*class player{
        score=0;

        pause(){
            console.log('you paused the game')
        }

        exit(){
            console.log('you exited the game')
        }
    }
    
    const player1= new player()
    const player2= new player()

    player1.score+=10;
    player2.score+=90;

    console.log(player1.score);
    console.log(player2.score);

    player1.pause()
    player2.exit()

    if(player1.score>player2.score){
        console.log(`player1 score is ${player1.score}. he wins`)

    } else if(player2.score>player1.score) {
        console.log(`player 2 score is ${player2.score}. he wins`)
    }*/



//CONSTRUCTORS- a special method of a class
//                accepts arguments and assigns properties
 
/*class Students {
    constructor(name,age,gpa){
        this.name=name;
        this.age=age;
        this.gpa=gpa
    }

    study(){
        console.log(`${this.name} is studying`)
    }
}

const Student1= new Students('kenny',18,2.7)

console.log(Student1.name)

Student1.study()
const Student1=new Students()

document.getElementById('objbtn').onclick=()=>{
    Student1.name=document.getElementById('objtext').value;
    console.log(Student1.name)
    console.log(Student1)
} */




//STATIC-belongs to the class,not the objects
//       properties: useful for caches,fixed-configuration
//       methods: useful for utility functions

/*class Car{
    static numberOfCars=0;

    constructor(model){
        this.model=model;
        Car.numberOfCars+=1;
    }

     static startRace(){
        console.log('3...2...1..GO!');
    }
}

const Car1= new Car('mustang');
const Car2= new Car('chevy');
const Car3= new Car('Lambo');

console.log(Car.numberOfCars)
Car.startRace()*/



//INHERITANCE- a child class can inherit all the
// methods and properties from another class. 'extends'


/*class animals{
    alive=true;
    eat(){
        console.log(`this ${this.name} is eating`)
    }
    sleep(){
        console.log(`this ${this.name} is sleeping`)

    }
}

class Rabbit extends animals{
    name='Rabbit';

    run(){
       console.log(`this ${this.name} is running`) 
    }
}


class Hawk extends animals{
    name='Hawk';

    fly(){
        console.log(`this ${this.name} is flying`)
    }

}

class Fish extends animals{
    name='Fish';

    swim(){
        console.log(`this ${this.name} is swimming`)
    }
}


const rabbit= new Rabbit()
const hawk= new Hawk()
const fish= new Fish()

console.log(fish.alive)
rabbit.eat() */



//SUPER KEYWORD-refers to the parent class.
//             commonly used to invoke constructor of a parent class

/*class Animals{
  constructor(name,age){
    this.name=name;
    this.age=age
  }
}

class Rabbit extends Animals{
  constructor(name, age,runSpeed){
    super(name,age);
    this.runSpeed=runSpeed;
  }
}

class Hawk extends Animals{
    constructor(name, age,flySpeed){
        super(name,age);
        this.flySpeed=flySpeed;}
}

class Fish extends Animals{
    constructor(name, age,swimSpeed){
        super(name,age);
      this.swimSpeed=swimSpeed;}
}

const newFish= new Fish('fish',2,40)
const newHawk= new Hawk('hawk',3,200)
const newRabbit= new Rabbit('rabbit',1,20)

console.log(newRabbit.name)
console.log(newHawk.age)
console.log(newFish.swimSpeed) */


//Getters- binds an object property to a function
//    when that property is accessed

//Setters-binds an object property to a function 
//       often that property is assigned a value

/*class car{
    constructor(power){
        this._power=90;
        this._gas=25;
    }

    get power(){
        return `${this._power}hp`
    }

    get gas(){
        return `${this._gas}L (${this._gas/50*100}%)`
    }

    set gas(value){
        if (value>50){
            value=50;
        } else if(value<0){
            value=0;
        }
        this._gas=value;
    }

    set power(value){
        if(value>600){
            value=600;
        }
        this._power=value;
    }
    
}

let Car=new car()

Car.gas=60;
Car.power=900;
console.log(Car.power)
console.log(Car.gas) */



//USE AN OBJECT AS AN ARGUMENT

/*class Cars{
    constructor(model,year,color){
        this.model=model;
        this.year=year;
        this.color=color;
    }
}

const Car1= new Cars('Mustang',2023,'red');
const Car2= new Cars('corvette',2024,'blue');
const Car3= new Cars('Lambo',2022,'yellow');

displayInfo(Car1)

function displayInfo(car){
 console.log(`${car.model},${car.year},${car.color}`)
}

function changeColor(original,newColor){

 console.log(original.color)
 original.color=newColor;
 console.log(original)
}

changeColor(Car1,'kenny') */




//ARRAY OF OBJECTS
/* class Cars3{
    constructor(model,year,color){
        this.model=model;
        this.year=year;
        this.color=color;
    }

    drive(){
        console.log(`you drive the ${this.model}`)
    }
}

const Car01= new Cars3('Mustang',2023,'red');
const Car02= new Cars3('corvette',2024,'blue');
const Car03= new Cars3('Lambo',2022,'yellow');
const Car04= new Cars3('ferrari',2022,'white');

const allCars=[Car01,Car02,Car03,Car04]

console.log(allCars[0].color)
console.log(allCars[1].color)
console.log(allCars[2].model)

//allCars[0].drive()
//allCars[2].drive()


//MY VERSION

allCars.forEach((element)=>{
    element.drive()
})

function startRace(cars){
    for (const car of cars){
        car.drive()
    }
}

startRace(allCars)*/




//ANONYMOUS OBJECTS-objects without a name 
//                  not directly referenced
//                  less syntax.No need for unique names

/*class Card{
    constructor(value,suit){
        this.value=value;
        this.suit=suit;
    }

    

     
}

let Cards=[
    new Card('A','Hearts'),
    new Card('A','Spades'),
    new Card('A','Clubs'),
    new Card('A','Diamonds'),
    new Card('2','Clubs'),
    new Card('2','Hearts'),
    new Card('9','Diamonds'),
    new Card('2','Spades')
]


console.log(Cards[0].value + '' ,Cards[0].suit)

function compare(a,b){
    if(a.suit<b.suit){
        return -1;
    }
    if(a.suit>b.suit){
        return 0;
    }
}

Cards.sort(compare)

console.table(Cards) */



