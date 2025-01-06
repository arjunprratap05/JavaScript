// const name = "arjun"
// const repoCount = 50

// console.log(name + repoCount + " value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

 const gameName = new String('Arjun-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


//  console.log(gameName.length)
//  console.log(gameName.toUpperCase())
//  console.log(gameName.charAt(2))
//  console.log(gameName.indexOf('n'))

const newString = gameName.substring(0,4)
//  console.log(newString)

const ansotherString = gameName.slice(-8,4)
// console.log(ansotherString)

const newStringOne = "   arjun    "
console.log(newStringOne)
console.log(newStringOne.trim())

const URL = "https://hitest.com/hitesh%20choudhary"
console.log(URL.replace('%20','-'))

console.log(URL.includes('hitesh'))

console.log(gameName.split('-'))
