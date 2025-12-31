
let date = new Date()
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());

//Months count start with 0
//let myCreatedDate = new Date(2025,0,23) 
//let myCreatedDate = new Date(2025,0,23,5,3)
//let myCreatedDate = new Date("2025-01-23") //(YYYY-MM-DD) here months start with 1

let myCreatedDate = new Date("01-25-2026")
//console.log(myCreatedDate.toString())

let timeStamp = Date.now()
// console.log(timeStamp)
// console.log(myCreatedDate.getTime())

// how to get the result of getTime() method is seconds -> divide the result value by 1000
//console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

// console.log(newDate.getDate())
// console.log(newDate.getDay())
// console.log(newDate.getFullYear())
// console.log(newDate.getHours()) 
// console.log(newDate.getMonth()+1) 

console.log(newDate.toLocaleString('Default',{
    weekday: "long",
    day: "2-digit"
}))