const name = "Girish"
const Height = 6

console.log(name + Height + " Hello World"); // Outdated syntax

console.log(`Hi this is ${name} , my height is ${Height} foot`)

const gameName = new String("Girish") //Another way to create a string : by creating object of string class

console.log(name.length)
console.log(name.at(2))
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.big())
console.log(name.blink())
console.log(name.bold())
console.log(name.charAt(3))
console.log(name.charCodeAt())
console.log(name.indexOf('i'))

console.log(name.substring(0,4)) //dosen't support negative index
console.log(name.slice(-3,4))

const newString = "  Girish  "
console.log(newString.trim())
console.log(newString.trimStart())
console.log(newString.trimEnd())

const url = "https://hitesh.com/hitesh%20choudhary"

console.log( url.replace("%20",'_'))
console.log(url.includes('https:%'))

let str1 = "hi-i-am-Girish"

console.log(str1.split('-'))