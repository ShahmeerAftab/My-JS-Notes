//   ..............................................................   ARRAY ..................................................................

// An array in JavaScript is a type of global object used to store data. Arrays can store multiple values in a single variable,
//  which can condense and organize our code.




// ............................................................ ARRAY STRUCTURE  ...............................................................

// var students=["Ali","Zain","Owais","Anus","Rehan"];
// console.log(students);

// var students=["Ali","Zain","Owais","Anus","Rehan"];
// console.log(students[2]);






// ........................................... DIFFERENCE B/W JS OBJECT NOTATION OR LITERAL NOTATION ............................................

// In JavaScript, there are two ways to create an array:

// 1. Literal Notation: Using square brackets [] to create an array.
// 2. Object Notation: Using the Array constructor and the new keyword.

// Literal Notation

// let studentNames = [];

// Concise, easy to read, and widely used.

// Object Notation

// let student_Names = new Array();

//  Can be used to create an array with a specific length, e.g., new Array(5).
//  Verbose, less common, and can be confusing for beginners.

// In general, the literal notation [] is the preferred way to create an array in JavaScript, unless you need to create an array with a specific 
// length.




// .................................................... HOW TO FIND LENGTH OF AN ARRAY  .......................................................

// var students=["Ali","Zain","Owais","Anus","Rehan"];
// console.log(students.length);





// ......................................................... HOW TO UPDATE AN ARRAY .............................................................

// students[5]="Raza";
// console.log(students)



//  ...................................................... PALINDROME WORDS TASK .............................................................


// var word=prompt("Enter word");

// var reverse="";

// for(var i=word.length-1; i>=0; i--){
//     reverse+=word[i]
// }
// console.log(reverse);

// if(word===reverse){
// console.log("Its a Palindrome")
// }
// else{
// console.log("Its not a palindrome")
// }






// ........................................................  +Sign after variable name  .....................................................

// ksi bhi var k bad +sign use krne se us variable me jo kch phle se mojood hota he wo bhi baqi rehta he or new value bhi include kr leta he




//   ........................................................   STEP # 01  ........................................................ 

// var word = prompt("Enter Word");

// for(var i=0; i<word.length; i++){
//     console.log(i);
// }






//   ........................................................   STEP # 02  ........................................................ 

// var word = prompt("Enter Word");

// for(var i=0; i<word.length; i++){
//     console.log(word[i]);
// }





//   ........................................................   STEP # 03  ........................................................ 

// var word = prompt("Enter Word");

// for(var i=word.length-1; i>=0; i--){
//     console.log(word[i]);
// }






//   ........................................................   STEP # 04  ........................................................ 

// var word = prompt("Enter Word");
// var reverse="";

// for(var i=word.length-1; i>=0; i--){
//     reverse+=word[i];
// }

// console.log(reverse);







//   ........................................................   STEP # 05  ........................................................ 

// var word = prompt("Enter Word");
// var reverse="";

// for(var i=word.length-1; i>=0; i--){
//     reverse+=word[i];
// }

// console.log(reverse);

// if(word===reverse){
//     console.log("Its a paladram");
// }
// else{
//     console.log("Its not a palindram");
// }

//    





// ..........................................................  HOW TO FIND MINIMUM ARRAY ..................................................

// var arr=[11,23,34,45,56,67,78,10];
// var min=arr[0];
// for(var i=0; i<arr.length; i++){
// if(min>arr[i]){
// min=arr[i];
// }
// }
// console.log(min);






// ........................................................... HOW TO FIND MAXIMUM ARRAY  .....................................................

// var array=[22,46,13,49,56,32,41,88,96];
// var max=[0];
// for(var i=0; i<array.length; i++){
//     if(max<array[i]){
//         max=array[i];
//     }
// }

// console.log(max);










// .......................................................HOW TO FIND MISSING NUMBER ........................................................
// var arr=[11,13];
// for(var i=0; i<arr.length; i++){
//     if(arr[i+1]- arr[i]>1){
// console.log(arr[i]+1)
//     };
// }








//..................................................... HOW TO  CHECK WHERE NUMBER IS MISSING ................................................

// var arr=[11,12,13,14,16,17,18,19,20];
// for(var i=0; i<arr.length; i++){
//     console.log(arr[i],arr[i+1]);
// }




//........................................................ Another Method TO FIND MISSING NUMBER ...............................................

// var arr=[11,12,13,14,16,17,18,19,20];
// for(var i=0; i<arr.length; i++){
//     if(arr[i+1]-arr[i]===2){
//         console.log(arr[i]+1);
//     }

// }





//...........................................................  Method TO FIND MORE THAN ONE MISSING NUMBER ......................................

// var arr=[11,13,14,15,20];
// for(var i=0; i<arr.length; i++){
//     if(arr[i+1]- arr[i]>1){
// console.log(arr[i]+1)
//     };
// }

// var arr=[11,13,14,15,20];

// for(var i=0; i<arr.length; i++){
//     var diff=arr[i+1]-arr[i];
//     if(diff>1){
//         for(var j=1; j<diff; j++){
//             console.log(arr[i]+j)
//         }

//     };
// }






// ..............................................................HOW TO SET THIS ARRAY IN SERIES ..............................................

// var arr=[11,13,14,15,20];

// for(var i=0; i<arr.length; i++){
//     var diff=arr[i+1]-arr[i];
//     if(diff>1){
//         for(var j=1; j<diff; j++){
//             arr.splice(i+j,0,arr[i]+j)
//         }

//     };
// }
// console.log(arr)



