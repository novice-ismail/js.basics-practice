
function sayMyName() {
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
    
}

// sayMyName()

// function addTwoNumbers(num1, num2) {
    
//     console.log(num1 + num2);
    
// }

function addTwoNumbers(num1, num2) {
    
    // let result = num1 + num2
    // return result

    return num1 + num2
    
}

const result = addTwoNumbers(3,5)

// console.log("Result : ",result);


// function loginUserMessage(username){
    
//     return `${username} just logged in`
// }

function loginUserMessage(username="sam"){
    if(!username ){
        console.log("Please enter a username");
        return
    }
    
    return `${username} just logged in`
}


//console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage("hitesh"));

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500,2000));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([200,400,500,1000]));





