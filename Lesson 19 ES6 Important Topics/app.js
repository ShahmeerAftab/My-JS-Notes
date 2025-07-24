// ................................. DESTRUCTING...........................

// easily extract values from an array or object

// Syntax with example
const number = [2, 3, 4];
const [a, b, c] = number;
console.log(a);
console.log(b);
console.log(c);

//  Example 2 (Partial Destructuring):
const arr = ["Ali", "Raza", "Faiz"];
const [s1, s2] = arr;
console.log(s1);
console.log(s2);

// With Object
const obj = {
  name: "Ahmed",
  id: 3564,
  course: "Amazon",
};

const { name, id, course } = obj;
console.log(name);
console.log(id);
console.log(course);

//  Example:2 Object Destructuring with Rename:
const user = {
  phone: 78234173,
  email: "abc@gmail.com",
};

const { phone: conatct, email: mail } = user;
console.log(conatct);
console.log(mail);

// Example:3 Function Parameters Destructuring:
const printUser = ({ userName, age }) => {
  console.log(`${userName} is ${age} old`);
};

const info = { userName: "Arham", age: 23 };
console.log(info);

// Practice Questions
// 1.
const fruit = ["apple", "banana", "mango"];
const [fruit1, fruit2, fruit3] = fruit;
console.log(fruit1);
console.log(fruit3);

// 2.
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
};

const { brand, model, year } = car;
console.log(brand);

// 3.
const employee = {
  name: "Zubair",
  role: "Admin",
  salary: 55000,
};

const { name: fullName, salary: package } = employee;
console.log(fullName);
console.log(package);

// ...................................SPREAD OPERATOR...............................................

/* Spread ka matlab hota hai: "Cheezon ko expand kar dena"
Ye array ya object ko copy karne ya combine karne ke liye use hota hai. */

// With Array
const fruitArr = ["apple", "banana", "mango"];
const newFruitArr = [...fruitArr, "strawberry", "Orange"];
console.log(fruitArr);
console.log(newFruitArr);

// With Object
const data = {
  name: "Mohsin",
  age: 22,
  email: "abc@gmail.com",
};

const newData = {
  ...data,
  role: "Civil Enginner",
};

console.log(data);
console.log(newData);

const spreadArr = [1, 2, 3];
const newSpreadArr = [...spreadArr, 4, 5, 6];
console.log(newSpreadArr);

// ..........................................REST OPERATOR.......................................

// Rest Operator ... JavaScript mein use hota hai jab hume kisi array, object, ya function ke multiple
// values ko ek hi variable mein ikattha (collect) karna hota hai.

const colorsArr = ["red", "green", "blue"];
const [first, ...restColors] = colorsArr;
console.log(colorsArr);
console.log(first);
console.log(restColors);

// With Object
const hospital = {
  nurses: 15,
  staff: 7,
  doctor: 4,
};

const { nurses, ...rest } = hospital;
console.log(hospital);
console.log(nurses);
console.log(rest);

// Task 1: Rest Operator in Function
const sumAll = (...numbers) => {
  let total = numbers.reduce((sum, num) => sum + num, 0);
  return total;
};
console.log(sumAll(20, 40, 60, 5, 25));

// Task 2: Array Destructuring + Rest

let numArr = [10, 20, 30, 40, 50];
let [firstval, secondVal, ...num] = numArr;
console.log(numArr);
console.log(firstval);
console.log(secondVal);
console.log(num);

const numArray = [2, 3, 4, 5, 6, 7];
const [firstValue, secondValue, ...restNum] = numArray;
console.log(firstValue);
console.log(secondValue);
console.log(restNum);

// Task 3: Object Destructuring + Rest
const student = {
  age: 22,
  course: "MWA",
  city: "Karachi",
};

const { age, ...restKeys } = student;
console.log(age);
console.log(restKeys);

// ........................................Ternary Operator.......................................................

// The ternary operator is a simplified conditional operator like if / else.
// Syntax: condition ? <expression if true> : <expression if false>
// Here is an example using if / else:
// ExampleGet your own React.js Server
// Before:

// if (authenticated) {
//   renderApp();
// } else {
//   renderLogin();
// }

// Here is the same example using a ternary operator:
// Example
// With Ternary
// authenticated ? renderApp() : renderLogin();

// ............................................... CLASS .................................................

// Example:

class User {
  constructor(name, age, email, city) {
    (this.name = name),
      (this.age = age),
      (this.email = email),
      (this.city = city);
  }

  greet() {
    console.log(`Hi ${this.name}`);
  }
}

const student1 = new User("Shahmeer", 22, "abc@gmail.com", "Karachi");
const student2 = new User("Anus", 20, "abc@gmail.com", "KPK");
console.log(student1);
student1.greet();

console.log(student2);

// Task:1

class Student {
  constructor(name, marks) {
    (this.name = name), (this.marks = marks);
  }

  checkresult() {
    if (this.marks >= 70) {
      console.log("Pass");
    } else {
      console.log("Fail");
    }
  }
}

const std1 = new Student("Ali", 86);
std1.checkresult();

// Task:2

class Book {
  constructor(name, price) {
    (this.name = name), (this.price = price);
  }

  applyDiscount(percentage) {
    const discountPrice = (this.price * percentage) / 100;
    this.price = this.price - discountPrice;
    console.log(this.price);
  }
}

const book1 = new Book("Faiz", 1000);
book1.applyDiscount(10);

// Task:3

class Account {
  constructor(accountHolder, balance) {
    (this.accountHolder = accountHolder), (this.balance = balance);
  }

  depositAmount(depositAmount) {
    const total = this.balance + depositAmount;
    console.log(total);
  }

  withDraw(withDrawAmount) {
    if (withDrawAmount > this.balance) {
      console.log("Insufficient Funds");
    } else {
      const totalAmount = this.balance - withDrawAmount;
      console.log(totalAmount);
    }
  }
}

const account1 = new Account("Raza", 5000);
account1.depositAmount(2000);
account1.withDraw(7000);

// Task:4

class ProductList {
  constructor() {
  this.product=[];
  }

  addProduct(product){
  this.product.push(product);
  console.log(this.product);
  }

removeProduct(product){
const index=this.product.indexOf(product)
this.product.splice(index,1);
console.log(this.product);
}

}

const productList1=new ProductList();
productList1.addProduct("Laptop");
productList1.addProduct("LED");
productList1.addProduct("Mobile");

productList1.removeProduct("LED");
