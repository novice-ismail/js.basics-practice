const name = "tony stark"
const repoCount = 50

//console.log(name +" "+ repoCount + "Value");// outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // String interpolation

const gameName = new String('tony-stark-america')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-8.4)
// console.log(anotherString);

const newStringOne = "  nitesh   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://nitesh.com/nitesh%20verma"
//console.log(url.replace('%20','-'));

//console.log(url.includes('nitesh'));

//console.log(gameName.split('-'));

const hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.

const greetList = ["Hello", " ", "Venkat", "!"];
console.log("".concat(...greetList));; // "Hello Venkat!"

console.log("".concat({}));; // "[object Object]"
console.log("".concat([]));; // ""
console.log("".concat(null));; // "null"
console.log("".concat(true));; // "true"
console.log("".concat(4, 5));; // "45"

// endsWith
const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// Expected output: true

console.log(str1.endsWith('best', 17));
// Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// Expected output: false

