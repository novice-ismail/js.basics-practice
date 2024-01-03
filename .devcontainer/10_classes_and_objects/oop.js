const user = {
    username: "Yash",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}




// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

// const userOne = User("Mohit", 12, true)
// const userTwo = User("Arjun",11, false)
// console.log(userOne)  //  username: 'Arjun',loginCount: 11,isLoggedIn: false  here usertwo overrides the userOne

const userOne = new User("Arjun", 12, true)
const userTwo = new User("Yash", 11, false)
console.log(userOne)
console.log(userTwo)