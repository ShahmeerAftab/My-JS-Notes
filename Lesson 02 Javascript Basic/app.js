// *****************************************************Semicolons ;****************************************************************************

// Semicolons separate JavaScript statements.
// When separated by semicolons, multiple statements on one line are allowed:
// but it is not nessessory in javascript





// *************************************************** JavaScript White Space ***************************************************************

// JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.
// The following lines are equivalent:

// let person = "Hege";
// let person="Hege";

// A good practice is to put spaces around operators ( = + - * / ):
// let x = y + z;




// ............................................................. WHAT IS AN EXPRESSION ......................................................

//An expression is a combination of values, variables, and operators, which computes to a value.





// *****************************************************  WHAT IS ALERT ************************************************************************

//  Alerts shows the popup message to the user
//  for example:
//  Alert("Hello World");
//  Alert is basically a method






// ************************************************************  WHAT IS METHOD **************************************************************

// Method: Ksi bhi cheez ko phle se predefined kr k ya bna k rkh dena or jb bhi need ho usko call kr walena
// kch methods aise hote hen jn ko hm khud bnate hen or kch aise hote hen jo javascript ne hmare lie phle se bna k rkhe hen
// How to recognize method?            Whenever we see the word/name and after that Round bracket with openning and closing than its called method

// .trim(): The trim() method removes whitespace from both sides of a string
// .toLowerCase(): The toLowerCase() method converts a string to lowercase letters. 
// .toUpperCase(): The toUpperCase() method converts a string to uppercase letters. The toUpperCase() method does not change the original string.
// .charAt():The charAt() method returns the character at a specified index (position) in a string.






// ********************************************************* HOW BROWSER CAN UNDERSTAND ******************************************************

// How browser read the code and understand what to do?    hmara sara data 1 object/box me convert hota he or wo object he window than browser 
// window se understand kr k code run krwa deta he thats some people write window.alert k window k object k ander jo alert he usko run krao but
// its not necessory javascript give this option to call alert without window.





// ........................................................... CONFIRM .......................................................................

// It confirms any statement from user through Pop up message

// confirm("Are you shure you want to add this value");






// ***********************************************  DOCUMENT.WRITE() ****************************************************************

// For testing purposes, it is convenient to use document.write(), should only be used for testing.
// Document ye 1 object he js k andr javascript ne bht saari cheezen phle se rkhi hui hen or unhi cheezon me different methods bhi he
// So Document.write me Document is an object and .write is one of the method of object.
// Document.write me jo kch hm HTML likhenge wo window me chla jyga or window k through browser us code ko understand kr k run kr dega
// for example:
// document.write("<h1> Hello World </h1>");
// document.write("<p>Welcome to the World of Javascript </p>");





// **************************************************Using console.log() *****************************************************************

// For debugging purposes, you can call the console.log() method in the browser to display data.


//                                                            PROMPT

// Prompt is a method , it shows popup in front of user and take input from user
// method 2 types ki hoti hen
// 1. jo apna kaam krte hen or khatam ho jate hen koi response return ni krte like alert
// 2. jo apna kaam bhi krte hen or phr response bhi return krte hen like prompt
// prompt return value in a string form so if we want to convert string into number than we have to use + sign before prompt
// prompt take 2 values 
// 1. label
// 2. default value
// for example:
// var userName=prompt("Enter your name :", "John");
// alert(userName);
// but both values are optional

// ******************************************************* JavaScript Variables **************************************************************

// JavaScript Variables can be declared in 4 ways:

// Automatically
// Using var
// Using let
// Using const

// The var keyword was used in all JavaScript code from 1995 to 2015.
// The let and const keywords were added to JavaScript in 2015.
// The var keyword should only be used in code written for older browsers.

// 1. Always declare variables
// 2. Always use const if the value should not be changed
// 3. Always use const if the type should not be changed (Arrays and Objects)
// 4. Only use let if you can't use const
// 5. Only use var if you MUST support old browsers.

//Creating a variable in JavaScript is called "declaring" a variable.

// *******************************************************  HOW TO CREATE VARIABLE *********************************************************

// var abc="ali";           // Varible with string
// var abc=1233;            // variable with numbers
// var abc=true;            // variable  with boolean

//*******************************************************  HOW TO UDDATE VARIABLE  *********************************************************** 

// var name="ali";
// name="shahmeer";
// alert(name);

// It is also possible that we create variable first than assign its value after that when we want   //  for example
// var num;
// num=123;
// alert(num);












































































