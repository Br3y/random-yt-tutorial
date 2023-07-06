// console
// console.log("Hello World");
// console.error("This is an error");
// console.warn("This is a warning");

// variables ( var, let, const )
// let age = 30;
// age = 31;
// console.log(age);

// datatypes (string, numbers, boolean, null, undefined)
const name = 'John';
const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof x);

// Concatenation
// console.log('My name is' + name + 'and I am age');
// console.log(`my name is ${name} and I am ${age}`);

// string property and method
// touppercase substring lowercase
const s = "Hello World";
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.split(''));
// const a = s.split("");
// console.log(a);

/* 
 multiline
 comments
*/

// Arrays - variables that hold multiple values
// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);
// const fruits = ["apple", "oranges", "pears", 10, true];
// fruits[3] = "grape";
// fruits.push("mangos");
// fruits.unshift("strawberries");
// fruits.pop();
// console.log(Array.isArray());
// console.log(Array.isArray("hello"));
// console.log(fruits);
// console.log("index " + fruits.indexOf("oranges"));

// Object literals
// const person = {
//     firstName : 'John',
//     lastName : 'Doe',
//     age: 30,
//     hobbies : ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city : 'Boston',
//         state: 'MA'
//     }
// }
// console.log(person);
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);
// const { firstName, lastName, address: {city}} = person;
// console.log(firstName);
// const myFirst = person.firstName;
// console.log(myFirst)
// console.log(city);
// person.email = 'john@gmail.com';
// console.log(person);

// Arrays of Object & JSON

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true,
//     },
//     {
//         id: 2,
//         text: 'Meeting with boos',
//         isCompleted: true,
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false,
//     }
// ]
// console.log(todos[1].text);
// convert to JSON
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// for loop
// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }
// for(let todo of todos){
//     console.log(todo.text);
// }
// while loop
// let i = 0;
// while (i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

// forEach, map, filter

// todos.forEach(function(todo){
//     console.log(todo.text);
// });
// const todoText = todos.map(function(todo){
//     return todo.text;
// });
// console.log(todoText);

// filter with map
// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text;
// })
// console.log(todoCompleted);

// if statement and ||, &&, !
// const x = 4;
// const y = 11;

// if(x > 5 || y > 10){
//     console.log('x is 10');
// } else if(x > 10){
//     console.log('x is greater than 10');
// } 
// else {
//     console.log('x is NOT 10');
// }

// shorthand if statement
const x = 9;
// const color = x > 10 ? "red" : "blue";
const color = "green";
// console.log(color);

// switch(color){
//     case 'red':
//         console.log("color is red");
//         break;
//     case 'blue':
//         console.log("color is blue");
//         break;
//     default:
//         console.log("color is NOT read or blue");
//         break;
// }

// function
// function addNums(num1 = 0, num2 = 0){
//     return num1 + num2;
// }
// console.log(addNums(5, 5));

// arrow function
const addNums = (num1 = 1, num2 = 1) => num1 + num2;
// console.log(addNums());

// todos.forEach((todo) => console.log(todo));

// Constructor functions and prototype
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//can be used using person.prototype
//     this.getBirthYear = function(){
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// Instantiate object
// const person1 = new Person("John", 'Doe', '4-3-1980');
// const person2 = new Person("May", 'Smith', '3-6-1920');

// console.log(person1.getBirthYear())
// console.log(person2.getFullName())
// console.log(person1);

// ES6 Classes (prettier way to create --constructor function and prototype--)

// class Person {
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const person1 = new Person("Aubrey", "Lizardo", "5-8-1999");

// console.log(person1.getFullName());


// DOM

// Single Element
// console.log(document.getElementById("my-form"));
// const form = document.getElementById("my-form");
// console.log(form);
// console.log(document.querySelector(".container"));
// Multiple Element
// console.log(document.querySelectorAll(".item"));
// older version and recomment queryselectorall to use often
// console.log(document.getElementsByClassName("item"));
// console.log(document.getElementsByTagName("ul"));
// const items = document.querySelectorAll(".item");
// items.forEach((item) => console.log(item));

// manipulating DOM 
// const ul = document.querySelector('.items');

// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = "<h4>Hello</h4>"
// btn.style.background = 'red';

// Events
// const btn = document.querySelector('.btn');
// btn.addEventListener("click", function(event){
//     event.preventDefault();
//     // console.log("click");
//     // console.log(event.target);
//     document.querySelector("#my-form").style.background = "#ccc";
//     document.querySelector('body').classList.add('bg-dark');
//     const ul = document.querySelector(".items");
//     ul.lastElementChild.innerHTML = '<h1>Hello</h1>'
// });

// manipulate form
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList  = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(event){
    event.preventDefault();
    // console.log(nameInput.value);
    if(nameInput.value === "" || emailInput === ""){
        msg.classList.add("error");
        msg.innerHTML = "Please enter fields";

        // setTimeout(function(){
        //     msg.remove(); 
        // }, 3000);
        setTimeout(()=> msg.remove(), 3000);
        // alert("Please enter fields");
    } else{
        // console.log("success");
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        
        // clear fields
        nameInput.value = "";
        emailInput.value = "";
    }
}