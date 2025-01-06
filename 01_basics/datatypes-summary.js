// Primitive 

// 7  types : String , Numnber , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

// const bigNumber = 3456543576654356754n



// Refence  (Non Primitive)

// Array , Objects,Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "Arjun",
    age:22,
}

const myfunction = function(){
    console.log("Hello world")
}

console.log(typeof anotherId);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(Non-Primitive)

let myYoutubename = "hitestchoudhary.com"

let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "user.gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "arjun@google.com"

console.log(userOne.email)
console.log(userTwo.email)