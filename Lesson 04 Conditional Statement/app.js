// if ki condition agr true hogi to ye execute hoga wrna nhi
// Comparison Operator me values agr match hogi to wo true return krega wrna false
// for example:
// "SMIT" === "SMIT"
// Difference b/w == and ===
// == match only values
// === match values and also data type

// for example:
// var city=prompt("Enter your city");
// if(city== "karachi"){
// console.log("Biryani");
// }

// Not Operator
// var userName=prompt("enter your name");
// if(userName !== "Ali"){
//     console.log("you are not eligible");

// }

// ID Card Policy Example :

// var age=+prompt(" Enter your Age : ")
// if(age>=18){
// console.log("You are eligible for ID Card")
// }else{
//     console.log("You are not eligible for ID Card")  
// }

// STUDENTS RESULT CARD

// var studPerc=prompt("Please enter your percentage");
// if(studPerc >= 90 && studPerc <= 100 ){
//     console.log("A1 Percentage")
// }
// else if(studPerc >= 80 && studPerc < 90){
// console.log("A Grade")
// }
// else if(studPerc >= 70 && studPerc < 80){
//     console.log("B Grade")
// }
// else if(studPerc >= 60 && studPerc < 70){
//     console.log("C Grade")
// }
// else if(studPerc >= 50 && studPerc < 60){
//     console.log("D Grade")
// }
// else{
//     console.log("You Failed");
// }





// **************************************************** How to swipe variable value *************************************************************

// Solution 1
// var a=7;
// var b=3;
// a=a+b // 10
// b=a-b // 7
// a=a-b // 3
// console.log(a,b)

// Solution 2

// debugger
// var a=12;
// var b=15;
// var c=a;
// a=b;
// b=c;
// console.log(a,b);


//  WRONG WAY
// var a=12;
// var b=15;
// a=b;
// b=a;





// ************************************************** How to check maximum integer limit in JavaScript? ****************************************

// var b = Number.MAX_SAFE_INTEGER;
// console.log(b)



// **************************************************** How to check the type of js variable ****************************************************
// var name = "Muhammad Umair";
// console.log(name);
// console.log(typeof name);