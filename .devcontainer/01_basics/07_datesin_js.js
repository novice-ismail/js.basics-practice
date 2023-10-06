// Dates

let myDate = new Date() // Object
//console.log(myDate.toString());
//console.log(myDate.toDateString()); // Fri Oct 06 2023
// console.log(myDate.toISOString());// 2023-10-06T12:38:20.955Z
// console.log(myDate.toJSON());// 2023-10-06T12:37:18.827Z
//console.log(myDate.toLocaleDateString()); // 10/06/2023
// console.log(myDate.toLocaleString()); // 10/6/2023, 12:40:55 PM
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,5,3)
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
 console.log(newDate.getMonth() + 1);
 console.log(newDate.getDay());
