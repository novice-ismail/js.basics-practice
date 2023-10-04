// Primitive

// 7 types : String, number,Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let undefined;

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId);

//const bigNumber = 3445643278878788787n

// Reference (Non primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagarjun", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp);
console.log(typeof bigInt);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof id);
console.log(typeof anotherId);