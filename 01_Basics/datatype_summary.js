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