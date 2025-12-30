// Primitive Type

// types : Number, String, Boolean, null, undefined, Symbol, BigInt

// Return types :

// Number => number
// String => string
// Boolean => boolean
// null => object
// undefined => undefined
// Symbol => symbol
// BigInt => bigint
let num = 37563453563458973n
console.log(typeof num)
console.log(typeof undefined)

// Reference Type ( Non-Primitive)

// arrays, objects, Functions

// Return Types :

// arrays => object
// object => object
// Functions => object function

let arr = ["Girish", "ModiJi", "Superman"]
console.log("arr = ", typeof arr)

let obj = {
    name : "Girish",
    age : 20
}
console.log("obj = ", typeof obj)

let fun = function(){
    console.log("Hello World")
}
console.log("fun = ", typeof fun)

// *************Stack and Heap Memmory **************

// Stack ( Primitive ) and Heap ( Non-primitive )

//Example of Stack where a copy of variable is made
let value1 = "one"
let value2 = value1
console.log(value2)
value2 = "Three"

console.log(value1)
console.log(value2)

//Example of Non-primitive where the reference of the variable is given

let user1 ={
    name : "Girish",
    email : "girish@gamil.com"
}

let user2 = user1

console.log("\n", user2)

user2.email = "girish@yahoo.com"

console.log(user1.email)
console.log(user2.email)