// .......................................Javascript Execution Context.................................

// javascript ka jtna bhi code hota he wo Execution Context me ja kr run hota he. ye basically ek container ki trh 
// hota he js me code execute hota he

// JavaScript Execution Context (EC) ek fundamental concept hai jo batata hai ki JavaScript engine kaise code execute karti
// hai. Har execution context do phases mein kaam karta hai:

// 1. Creation Phase (Memory Allocation)

// 2. Execution Phase (Code Run Hota Hai)

// ..........................................Types of Execution Context...............................................
// Global Execution Context (GEC) → Sabse pehle banta hai.
// Function Execution Context (FEC) → Jab function call hota hai, tab banta hai.

// ..................................Phase 1: Creation Phase (Hoisting)...............................................
// JavaScript engine pehle memory allocate karti hai before executing code.

// Variables (var): undefined se initialize hote hain.

// Functions: Pura definition memory mein store ho jata hai.

// let & const: Hoisted hote hain, but Temporal Dead Zone (TDZ) mein rehte hain (uninitialized).

// Example:

let val1=5;
let val2=7;

function addNum(num1,num2) {
    let total = num1+num2;
    return total;
}

let result1=addNum(val1,val2);
let result2=addNum(2,2);
console.log(result1);
console.log(result2);

