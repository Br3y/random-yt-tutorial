// Object.method()
// const s1 = "hello";
// console.log(typeof s);
// // getting an object
// const s2 = new String("Hello");
// console.log(typeof s2);
// console.log(window)
// window.alert(1);
// console.log(navigator.appVersion);


// OBJECT LITERALS
// const book1 = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: '2013',
//     getSummary: function(){
//         // return `${book1.title} was written by ${book1.author} in ${book1.year}`;
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// }
// const book2 = {
//     title: 'Book Two',
//     author: 'Jane Doe',
//     year: '2016',
//     getSummary: function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// }
// console.log(book1.title);
// console.log(book1.getSummary());
// console.log(Object.values(book2));
// console.log(Object.keys(book1));


// CONSTRUCTORS
// function Book(title, author, year){
//     // console.log("Book INitialized...");
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.getSummary = function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// }
// // //instatiate an object
// const book1 = new Book('Book One', 'John Doe', '2013');
// const book2 = new Book('Book Two', 'Jane Doe', '2016');
// console.log(book1.title);
// console.log(book1.getSummary());
// console.log(book1);


// PROTOTYPE
// function Book(title, author, year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }
// // getSummary using prototype
// Book.prototype.getSummary = function(){
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// }
// // getAge 
// Book.prototype.getAge = function(){
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
// }
// // revise / change year
// Book.prototype.revise = function(newYear){
//     this.year = newYear;
//     this.revised = true;
// }
// // instatiate an object
// const book1 = new Book('Book One', 'John Doe', '2013');
// const book2 = new Book('Book Two', 'Jane Doe', '2016');
// console.log(book1.title);
// console.log(book1.getSummary());
// console.log(book1);
// console.log(book1.getAge());
// console.log(book2);
// book2.revise("2018");
// console.log(book2);
// console.log(book2.getSummary());

// // INHERITANCE
// // constructor
// function Book(title, author, year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }
// // inheritance
// Book.prototype.getSummary = function(){
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// }
// // assigning book to book1 and console it
// const book1 = new Book("Book One", "John Doe", "2013");
// console.log(book1.getSummary());

// // Magazing Constructor
// function Magazine(title, author, year, month){
//     Book.call(this, title, author, year);
//     this.month = month;   
// }
// Magazine.prototype = Object.create(Book.prototype); 
// // instantiate magazine object
// const mag1 = new Magazine('Mag One', 'John Mic', '2018', 'Jan');

// // user magazine constructor
// Magazine.prototype.constructor = Magazine;
// // Inherit Prototype
// console.log(mag1);
// console.log(mag1.getSummary());
