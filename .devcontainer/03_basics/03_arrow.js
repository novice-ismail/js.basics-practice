const user = {
    username: "harish",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     console.log(this);
    
// }
// chai()

// const chai = function (){
//     let username  = "ashwin"
//     console.log(this.username);

// }

const chai = () => {
        let username  = "ashwin"
        console.log(this); 
}




//chai()

// const addTwo = (num1, num2) =>{

//     return num1 + num2      // ecplicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2 //implicit return

// const addTwo = (num1, num2) =>  (num1 + num2) // implicit return

const addTwo = (num1, num2) =>  ({username: "ashwin"})


console.log(addTwo(3,4));
