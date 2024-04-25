// console.log(`Hello`)
// console.log(`I like pizza!`)

// window.alert(`This is an alert!`)
// window.alert(`I like pizza!`)

// document.getElementById("myh1").textContent = `Hello`
// document.getElementById("myp").textContent = `I like pizza!`;

// This is a comment

/*
  This is 
  a
  multiline
  comment
*/


// variable = A container that stores a value. Behaves as if it were the value it contains
// 1. declaration let x 
// 2. assignment x = 100

// let x = 100
// // let age = 25
// let price = 10.99
// let gpa = 2.1

// console.log(typeof price)

// let firstName = 'br3y'
// let favoriteFood = "pizza"
// let email = "br3y@gmail.com"

// console.log(typeof firstName)
// console.log(`Your name is ${firstName}`)
// console.log(`Your like is ${favoriteFood}`)
// console.log(`Your email is ${email}`)

// let online = true
// let forSale = false
// let isStudent = true

// console.log(`Bro is online: ${online}`)
// console.log(`Is this car for sale: ${forSale}`)
// console.log(`Enrolled: ${isStudent}`)

// let fullName = "Aubrey Llanes Lizardo"
// let age = 25
// let student = true

// document.querySelector("#p1").textContent = "my name is " + fullName
// document.getElementById("p2").textContent = "my age is " + age
// document.getElementById("p3").textContent = `Enrolled: ${student}`



/*
  arithmatic operators = operands (values, variables, etc/)
                         operators ( + - * / )
                         ex. 11 = x + 5
*/

// let students = 30

// // students += 1
// // students = students - 1
// // students = students * 2
// // students = students / 2
// // students **= 2
// // students = students % 2
// // let extraStudents = students % 3
// // students--;
// // student++;

// console.log(students)

// /*
//   operator precedence
//   1. parenthesis
//   2. exponents
//   3. multiplication & division & modulo
//   4. addition & subtraction
// */
// let result = 1 + 2 * 3 + 4 ** 2

// console.log(result)



// How to accept user input
// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

// let username = window.prompt("What's your username?")
// console.log(username)

// let username 
// document.getElementById("mySubmit").onclick = function(){
//   username = document.getElementById("myText").value
//   console.log(username)
//   document.getElementById("myH1").textContent = `Hello ${username}`
// }

// let username = document.getElementById("myText")
// document.getElementById("mySubmit").addEventListener("click", ()=>{
//   console.log(username.value)
//   document.querySelector("#myH1").textContent = `Hello ${username.value}`
// })



// type conversion = change the datatype of a value to another
//                   (strings, numbers, booleans) 

// let age = window.prompt("How old are you?");
// age = Number(age)
// age += 1;
// console.log(age, typeof age);

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x)
// console.log(y, typeof y)
// console.log(z, typeof z)



// // const = a variable that can't be changed

// const PI = 3.14159;
// // let radius = document.getElementById("myText");
// let circumference;

// // radius = window.prompt('Enter the radius of a circle')
// // radius = Number(radius)
// // document.getElementById("mySubmit").addEventListener("click", ()=>{
  
// //   circumference = 2 * PI * radius.value
  
// //   console.log(circumference)
// // })

// document.getElementById("mySubmit").onclick = function(){
//   radius = document.getElementById("myText").value
//   radius = Number(radius)
//   circumference = 2 * PI * radius
//   console.log(circumference)
//   document.getElementById("myh3").textContent += circumference
// }