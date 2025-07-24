// .............................................................. MAP FUNCTION ...........................................................

// map() creates a new array from calling a function for every array element.

//  ........ Double Array Values ..............
//  ............. By For Loop .............

// let arr = [1, 2, 3, 4, 5, 6];
// let output = [];
// for (let i = 0; i < arr.length; i++) {
//     output[i] = arr[i] * 2;

// }
// console.log(output);

// ............. By Map Function.........
// let arrMap = arr.map(function (value) {
//     return value * 2;
// })

// console.log(arrMap);

//  ...... By Arrow Function ........

// let arr1=arr.map((value)=> value *2)
// console.log(arr1);

// ......... To find square values ..........
// let arr = [1, 2, 3, 4, 5, 6];
// let arrSquare=arr.map((value)=> value*value )
// console.log(arrSquare);


// ......... To  Convert String into  Uppercase ..........

// let fruit=["apple","banana","orange"];
// let upperString=fruit.map((fruits)=>fruits.toUpperCase()
// )

// console.log(upperString);

// ......... To  Convert String into  lowercase ..........

// let animals=["LION","LEOPARD","DEER","ELEPHANT"];
// let animalsLower=animals.map((animalName)=>animalName.toLowerCase())
// console.log(animalsLower);

// ............ Without map function ........

// let animals1=["LION","LEOPARD","DEER","ELEPHANT"];
// for(let i=0; i<animals.length; i++){
// let animalsLower=animals1.toLowerCase();
// }
// console.log(animalsLower);



// .................................................. Filter Method ...................................................

// let arr=[1,2,3,4,5,10,30];
// let arr1=arr.filter((value)=>value>5);
// console.log(arr1);

// let array=[1,2,3,4,5,10,30];
// let array1=array.filter((value)=>value%2!==0);
// console.log(array1);

// let array=[1,2,3,4,5,10,30];
// let array1=array.filter((value)=>value%2==0);
// console.log(array1);



// .................................................. Reduce Method ...................................................

// reduces an array in a single value

// To find total sum
// let arr=[1,2,3,4,5];
// let arr1=arr.reduce((val,currentVal)=> val + currentVal);
// console.log(arr1);

//  To find product
// let arr=[1,2,3,4,5];
// let arr1=arr.reduce((val,currentVal)=> val * currentVal);
// console.log(arr1);

// To concat string
// let str=["Hello", "world!","Welcome"];
// let concatStr=str.reduce((value , currentValue)=>value + " " +currentValue);
// console.log(concatStr);

//  To find max value
// let arr=[1,2,3,4,5];
// let arr1=Math.max(...arr);
// console.log(arr1);




























//################################################################  CLASS # 13 #################################################################


// .............................................................. WHAT IS OOPS ................................................................

// oops is basically a set of standard . It is not a part of any language simply it is a concept of programming.
// There is a two type of programming rules
//  1. OOPS
//  2. FUNCTIONAL
//  In javascript or react we follow functional programming rules
//  If we want to apply rules of oops so we have to used typescript



// ................................................................. What is Synchronous JavaScriptc................................

// In synchronous programming, operations are performed one after the other, in sequence. So, basically each line of code waits for the
// previous one to finish before proceeding to the next.

// console.log("Hi");
// console.log("Geek");
// console.log("How are you?");

// Output
// Hi
// Geek
// How are you?


// ..................................................... What is Asynchronous JavaScript .................................................

// Asynchronous programming, on the other hand, allows multiple tasks to run independently of each other. In asynchronous code, a task can be initiated, and while waiting for it to complete, other tasks can proceed.


// console.log("Hi");

// setTimeout(() => {
//     console.log("Geek");
// }, 2000);

// console.log("End");
// Output

// Hi
// End
// Geek





















//################################################################  CLASS # 14 #################################################################

// ........................................................ OBJECT .....................................................................

// An object is a collection of properties

//  ....................................................... SYNTAX OF OBJECT ....................................................................

let student={
    name:"Ahmed" ,
    email:"xyz123@gmail.com",
    phone: 3426960987,
    active: "True",
    timing:["Mon","Wed","Fri"],
    school:{
        name:"SMIT",
    }
}

// console.log(student)

// here name = property and Ahmed is a value
// and the value can be of any type
// .............................................................. Things to notice: ...........................................................

//  The code begins like any variable definition, with the keyword var, followed by the
//  object name, and then an equal sign.
//  But then, instead of a value, there's a curly bracket, whose twin comes at the end of the block.
// Each property begins with a name, followed by a colon, and then a value.
//  Each property definition except the last ends with a comma.
//  The closing curly bracket is followed by a semicolon, because of the equal sign in the
//  first line.

// If we want to get the name property from this object
// console.log(student.name);

// If we want to get last class in a week
// console.log(student.timing[student.timing.length-1]);

// If we want to add or update another property in the object
// student.rollNo=400283;
// console.log(student);


// If we want to add another value in the array
// student.timing.push("Sun");
// console.log(student);

// If we want to add location with school in this object
// student.school.location="Bahadurabad";

// If we want to delete any property from object

// delete student.school;
// console.log(student);

// To check any property present in an object or not

// console.log("email" in student);

// let students={
//     name:"ali",
//     email:3426960987,
// }

// let arr=[
//     {
//         name:"ali",
//         email:3426960987,
//     },
//     {
//         name:"zain",
//         email:3426960987,
//     },
//     {
//         name:"raza",
//         email:3426960987,
//     },
// ]


// Accessing Object Properties
// You can access object properties in two ways:

// objectName.propertyName
// objectName["propertyName"];

// Examples
// person.lastName;
// person["lastName"];



// If we want to get an object key or object value.

// for(let key in student){
// console.log(key + " : " + student[key]);
// }



// ................................................. JAVASCRIPT METHODS .................................................................

// ................................................... Math OBJECT ......................................................................

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

// Math.min      // can be used to find the lowest value in a list of arguments
// Math.max     // can be used to find the highest value in a list of arguments
// Math.floor   //  Returns x rounded down to its nearest integer
// Math.round   // 	Returns x rounded to its nearest integer
// Math.random  //  returns a random number
// Math.trunc   //  Returns the integer 
// Math.ceil    // 	Returns x rounded up to its nearest integer
// Math.pow     //  returns the power 
// Math.sqrt    //  returns the square root 
// Math.sign    //  returns if x is negative, null or positive


// ................................................. Generate Random Number ..............................................................



let guessingGame=()=>{
    let randomNumber=Math.round(Math.random()*99)+1;
    // console.log(randomNumber);
    let guessNumber=+prompt("Enter any number");
    let result=(guessNumber===randomNumber)?"You Win!":((guessNumber===randomNumber+1|| guessNumber===randomNumber-1)?"Close Enough":"You Loose!");
    console.log(`${result} random number was ${randomNumber} ` );  
}
guessingGame();




// ................................................ Generate Random Number ..............................................................

// let randomNo=(min, max)=>{
//    let x= Math.floor(Math.random()*(max-min+1)+ min);
//  console.log(x);
// }

// randomNo(15,25);


// ............................................... getter and Setter Function ..........................................................

// let user={

// _name:"Anus",

// get name(){
// return this._name
// },
// set name(n){
// this._name=n
// }
// }
// console.log(user.name="ali");




// let userAccount={
//     password:"123",

//     get userPass(){
// return this.password
//     },

//     set userPass(newPassword){
// if(newPassword.length>8){
//  this.password=newPassword
//     }else{
//         console.log("Password must be above 8 characters ")
//     }
// }
// }

// userAccount.userPass="1267";


// .......................................................... Map Function ..........................................................

// .............................Program to store double value  of array ..............................

// ............................. By Using Loop .........................
// let arr=[2,3,4,5,6];
// let newArr=[]
// for(let i=0; i<arr.length; i++){
// newArr[i]=arr[i]*2
// }

// console.log(newArr);

// ......................... By Using Map Function  .......................
// .................. With anonymous function ....................

// let array=[2,3,4,5,6];
// let newArray=array.map(function(val){
// return val*2;
// })
// console.log(newArray);

// ........................ with arrow function ....................
// let array1=[2,3,4,5,6];
// let newArray1=array1.map((val)=>val*2);
// console.log(newArray1);



// .............................. Filter Function .....................................

// .............................Program to store filter value of an array .............................. 

// let arr=[2,4,8,12,16,19];
// let filterArr=[];
// for(let i=0; i<arr.length; i++){
// if(arr[i]>10){
// filterArr.push(arr[i]);
// }
// }
// console.log(filterArr);


// let arr1=[2,4,8,12,16,19];
// let newArr=arr1.filter(val=> val>10)
// console.log(newArr)

// let arr2=[2,4,8,12,16,19];
// let newArr2=arr2.filter(function(val){
//     return val>10
// })
// console.log(newArr2)