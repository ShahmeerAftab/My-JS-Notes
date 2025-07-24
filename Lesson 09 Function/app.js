
// ..............................................................FUNCTION ...................................................................

//  A function is a block of JavaScript that robotically does the same thing again and again,whenever you invoke its name.

//  ...........................................................SYNTEX OF FUNCTION...........................................................

// function getDate(){
//     console.log(new Date())
// }

// getDate();

// function sum(num1, num2){
// return num1+num2;

// }

// result=sum(2,5);
// console.log(result);



// .......................................... Create table by using Function ............................................................

// let table= num =>{
//     for(let i=1; i<=10; i++){
// console.log(`${num} x ${i} = ${num*i}`);
//     }
// }

// table(4);


// ...................................................... ARGUMENT OBJECT ...........................................................

// function add(){

//     if (arguments.length == 0) {
//         console.log("No argument Passed");
//     }

//     else {
//         let sum = 0;

//         for (let i = 0; i < arguments.length; i++) {
//             sum = sum + arguments[i];
//         }

//         console.log(sum);
//     }
// }

// add(5, 9);




// .................................... DIFFERENCE B/W GLOBAL VARIABLE AND LOCAL VARIABLE...................................................

// Global variable: Variable outside function called global variable and we can access it anywhere in script.

// eg:
let marks = 100; // Global Variable

// Local variable: Variable inside function called local variable. we can access this variable only inside a function.

// eg:
// function result(){
//     let marks=23;     // Local Variable
// }


// .......................................................... What are Anonymous Functions? .................................................

//An anonymous function is simply a function that does not have a name.

// ......Syntax of Anonymous Functions......

//  function() {
// Function Body
// }

// ......With arrow function......

// ( () => {
//     // Function Body...
// } )();

// Instead of giving a function name we can place a function into a variable with anonymous function.

// Eg:

// let greet = function () {
//     console.log(`Welcome! `);
// };

// greet();

// let greet = function (userName) {
//     console.log(`Welcome to! ${userName} `);
// };

// greet("Shahmeer");


// ...................... Set Time Out method.............................

// let greet = function (userName) {
//     console.log(`Welcome to! ${userName} `);
// };

// Call with normal function
// setTimeout(greet("Shahmeer"),3000);

// Call with arrow function
// setTimeout(()=>greet("Shahmeer"),5000);

// In a short way
// setTimeout(function (userName) {
//     console.log(`Welcome to! ${userName} `);
// }, 5000,"Shahmeer");


// ........................................................ Immediately inwoked function ........................................................

// Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. 
// They are typically used to create a local scope for variables to prevent them from polluting the global scope.

// Syntax:

// (function (){ 
// Function Logic Here. 
// })();

// Eg:
// (function(userName){
//     let greet="hello!"
// console.log(`${greet} ${userName}`);
// })(userName="Shahmeer");

// ................................................... Create Method to convert number into string .........................................

// function myString(num){
//     let convertedNum=num.toString();
//     return convertedNum;

// }

// let finalOutput=myString(1234);
// console.log(finalOutput);
// let checkType=typeof finalOutput;
// console.log(checkType);

// let finalOutput2=myString(1239);
// console.log(finalOutput2);



// ........................................................ CALL BACK FUNCTION ...............................................................

// function getName(name){
//     return name;
// }

// function greet(name){
// console.log(`Hello ${name}`);
// }

// let name=getName("Shahmeer");
// greet(name);



// function greet(name,callBack){
// console.log(`Hello  ${name}`)
// callBack();
// }

// function askQuestion(){
// console.log(`How are you`)
// }

// greet("Shahmeer", askQuestion);



// function sayHello(){
//     console.log("Hello");

// }

// function add(a,b,callBack){
// console.log(a+b);
// callBack();
// }

// add(20,12,sayHello);

// ....................................................... SIMPLE CALCULATOR BY USING FUNCTION ..............................................

// function basicCalculator(x,y,operator){

// if(operator==="+"){
//     return(x+y)
// } 

// else if(operator==="-"){
//     return(x-y)
// }

// else if(operator==="*"){
//     return(x*y)
// }

// else if(operator==="/"){
//     return(x/y)
// }

// else if(operator==="%"){
//     return(x%y)
// }

// }

// let num1=+prompt("Enter first value");
// let num2=+prompt("Enter second number");
// let opr=prompt("Enter operator");
// let output=basicCalculator(num1,num2,opr);
// console.log(output);

// .............................................................. ARROW FUNCTION ..........................................................

// Normal Function

// function sum(a,b){
//     return a+b;
// }

//  if the function has only one statement.

// let result=sum(3,5);
// console.log(result);

// Arrow Function

// let sum1=(a,b)=>a+b;
// console.log(sum1(3,5));

// if the function has more than one statement.

// let sumA=(a,b)=>{
//     let result = a+b;
//     console.log(result);
//     return result;
// }

// sumA(3,2);

// let output=sumA(4,4);
// console.log(output);

// Normal Function

// document.addEventListener("click",function(){
//     console.log("Hello");
// });

// Arrow Function

// document.addEventListener("click",()=>
//     console.log("Hello"));