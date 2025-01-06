// let myName = "Arjun      "
// let myChannel = "chai    "

// console.log(myName.truelength);


let myHeros = ["thor","spiderman"]


let heroPower ={
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function() {
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log('Arjun is present in all Objects')
}

Array.prototype.heyHitesh = function() {
    console.log(`Arjun Says hello`);
}
//heroPower.hitesh()
//myHeros.hitesh()
//heroPower.heyHitesh()

//inheritance

const User = {
    name : "chai",
    email : "chai@google.com"
}

const Teacher ={
    makeVideo :true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ :TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True lenghth is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()