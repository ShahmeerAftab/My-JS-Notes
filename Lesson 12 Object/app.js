// .............Syntax of Object...................
// const student = {
//   name: "Shahmeer",
//   id: 400862,
//   age: 22,
//   course: "Web & App Development",
//   email: "shahmeermalik259@gmail.com",
//   hobbies: ["Cricket", "Movie", "Travel"],
//   greet: function () {
//     console.log(`Hello from Shahmeer`);
//     console.log(`Hello from ${this.name}`);
//   }
// }


// console.log(student.name);
// console.log(student);

// // ............... How to access Array of Objects .......................
// console.log(student.hobbies[0]);

// // ..................... How to update Array of Objects ..................
// console.log(student.hobbies[0] = "Football");

// // ..............Update object into object..........................

// student.address = {
//   house: 12 / 11,
//   street: 3,
//   district: "Central",
//   town: "Nazimabad",
//   city: "Karachi",
//   country: "Pakistan"
// }

// console.log(student.address.city);

// console.log(student.greet());





// ................How to Add Property..............
// student.phone = 3426960987
// console.log(student);

// ..............How to update key value..............

// student.age = 21;
// console.log(student);


// var products = [
//     {
//       id: 101,
//       title: "Sony LED 40 inch",
//       variations: [
//         { id: 1, color: "black", price: 50000, quantity: 5 },
//         { id: 2, color: "red", price: 50000, quantity: 1 },
//         { id: 3, color: "silver", price: 55000, quantity: 8 },
//       ],
//       reviews: [
//         {
//           id: 1,
//           user: "Ahmad",
//           rating: 4.0,
//           title: "Good Product",
//           comments: "It is a very good product ....",
//           date: "06-02-2021",
//           status: true,
//         },
//         {
//           id: 2,
//           user: "Zubair",
//           rating: 4.5,
//           title: "Very Good Product",
//           comments: "zubair It is a very good product ....",
//           date: "05-02-2021",
//           status: false,
//         },
//         {
//           id: 3,
//           user: "Ali",
//           rating: 5.0,
//           title: "bad Product",
//           comments: "ali It is a very good product ....",
//           date: "04-02-2021",
//           status: true,
//         },
//       ],
//     },
//     {
//       id: 102,
//       title: "Mobile",
//       variations: [
//         { id: 1, color: "black", price: 50000, quantity: 5 },
//         { id: 2, color: "red", price: 50000, quantity: 1 },
//         { id: 3, color: "silver", price: 55000, quantity: 8 },
//       ],
//       reviews: [
//         {
//           id: 1,
//           user: "Ahmad",
//           rating: 4.0,
//           title: "Good Product",
//           comments: "It is a very good product ....",
//           date: "06-02-2021",
//           status: true,
//         },
//         {
//           id: 2,
//           user: "Zubair",
//           rating: 4.5,
//           title: "Very Good Product",
//           comments: "zubair It is a very good product ....",
//           date: "05-02-2021",
//           status: false,
//         },
//         {
//           id: 3,
//           user: "Ali",
//           rating: 5.0,
//           title: "bad Product",
//           comments: "ali It is a very good product ....",
//           date: "04-02-2021",
//           status: true,
//         },
//       ],
//     },
//     {
//       id: 103,
//       title: "Bike",
//       variations: [
//         { id: 1, color: "white", price: 55000, quantity: 5 },
//         { id: 2, color: "red", price: 50000, quantity: 1 },
//       ],
//       reviews: [
//         {
//           id: 1,
//           user: "Ahmad",
//           rating: 4.0,
//           title: "Good Product",
//           comments: "It is a very good product ....",
//           date: "06-02-2021",
//           status: true,
//         },
//         {
//           id: 2,
//           user: "Zubair",
//           rating: 3.0,
//           title: "Very Good Product",
//           comments: "zubair It is a very good product ....",
//           date: "05-02-2021",
//           status: false,
//         },
//       ],
//     },
//   ];

//   for(let i=0; i<products.length; i++){
//     console.log(products[i].title)
//   }

//   let a=products.map((val)=>val.title)
//   console.log(a);







//   for(let i=0; i<products.length; i++){
//     let variations=products[i].variations;
//     // console.log(variations)

//     for(let j=0; j<variations.length; j++){
// //  console.log(variations[j].color)
// if(variations[j].color==="black"){
//     console.log(variations[j])
// }
//     }
//   } 

// const blackColorProducts = products.filter(product => 
//     product.variations.filter(variation => variation.color === "black").length > 0
// )
// console.log(blackColorProducts)


// ......................................Stack and Heap Concept .......................................

// Stack ----------------> Primitive

// Stack wo memory hoti hai jahan JavaScript simple aur chhoti cheezein rakhta hai jaise:

// Numbers (let a = 10)  ,   Strings (let name = "Ali")   ,Booleans (true, false)
// null, undefined  , function calls (execution context)

// Example:
// let x=2;
// let y=x;
// y=3;
// console.log(x,y);
// Its called LIFO (last in first out)

// Heap -----------------> Non Primitive
// Heap memory mein objects aur arrays jaise bade cheezein store hoti hain.
// Objects , Arrays , Functions (as objects)

// Example:
// let obj1={name:"Shahmeer"};
// let obj2=obj1;
// obj2.name="Ali";
// console.log(obj1,obj2);

// // Solution
// let obj3={name:"Shahmeer"};
// let obj4={...obj3};
// obj4.name="Ali";
// console.log(obj3,obj4);


// ........................................... REST OPERATOR ......................................

// Jab tum multiple values ko ek single variable mein collect karna chaho — tab use hota hai rest operator.

// Example:
// function printNames(...names){
//     console.log(names)
//   }
//   printNames=["anus","ali"];


// let [first, ...rest] = [1, 2, 3, 4];
// console.log(first); // 1
// console.log(rest);  // [2, 3, 4]

// let user = {
//   name: "Ali",
//   age: 22,
//   city: "Karachi"
// };

// let { name, ...rest } = user;

// console.log(name); // Ali
// console.log(rest); // { age: 22, city: "Karachi" }



// .................................................... Constructor Function ........................................
// Constructor function JavaScript ka aik khaas tareeqa hai objects banane ka.

// Before Constructor Function We follow this method

// function user1(name, id, email) {
//   const user = {
//     name: name,
//     id: id,
//     email: email,
//   }

//   return user
// }

// console.log(user1("Shahmeer", 12345, "shahmeermalik@gmail.com"));

// function User(name, id, email) {
//   this.name = name;
//   this.id = id;
//   this.email = email;
// }

// const user2 = new User("Shahmeer", 254328, "abc@");
// console.log(user2);

//constructor function ek template ki tarah hai jisse aap similar type ke multiple objects easily bana sakte hain.

// .....................Example:2 Start ......................................
function Student1(name, id) {
  this.name = name;
  this.id = id;
}

//Student1 by itself: Just defining the function doesn't create any output. It's just a blueprint/template.
const Student2=new Student1("Ali",1234);
console.log(Student2)

// ..............................Protype...............................
/* JavaScript mein jab hum kisi object ki property access karte hain, aur woh property object mein nahi milti, toh JavaScript prototype 
chain mein check karta hai:
Pehle object itself mein dekhta hai.
Agar nahi mila, toh uska prototype mein dekhta hai.
Agar wahan bhi nahi mila, toh prototype ke prototype mein dekhta hai.
Yeh chain null tak jati hai. */

// ..................If we want to create function but not inobject itself but in prototype to save memory and make reusable code
Student1.prototype.greet=function () {
  console.log(`Hello ${this.name}`);
  
}

Student2.greet();
// .............................Example:2 Closed.....................


// ...................... To Check Constructor.......................
// console.log(Student2 instanceof Student1);


// ........................... Key Differences (Primitive vs Non-Primitive)..............................

/*Property:	          Primitive	                                   Non-Primitive
Storage	:             Direct value (Stack)	                       Reference (Heap)
Copy Behaviour:    	  Copy By Value (New ban jati hai)	           Copy By Reference (Same object)
Mutability:         	Immutable (No changes)	                     Mutable (Change hosakta hai)
Example	:              let a = 10;	                                 let arr = [1, 2, 3]; */


// .............................How to copy Object ....................................

const car={
color:"Black",
model:"2017",
company:"Suzuki Corolla"
}

console.log(car);

// ...............When we required only copy values of object.................
for (const key in car) {
 console.log(car[key]);
}

// ...............When we required only key of object................
for (const key in car) {
 console.log(key);
}

// Poora loop dobara chalana ho toh naya for...in likhna hoga

