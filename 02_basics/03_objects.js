// singleton
// Object.create

// object literal

const mySym = Symbol("key1")

const JsUser = {
    name : "Arjun",
    "full Name" : "Arjun Pratap",
    [mySym] : "myKey1",
    age : 22,
    location : "Jaipur",
    email : "arjun@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full Name"])
// console.log( JsUser[mySym])

JsUser.email = "arjun@chatgpt.com"
// Object.freeze(JsUser);
JsUser.email = "arjun@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());