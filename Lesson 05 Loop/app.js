// ............................................................... FOR LOOP ...............................................................

//  Ye repitition k kaam ata he

//................................................................. SYNTAX OF FOR LOOP  ....................................................

// for(var i=0; i<=10; i++){
//     console.log(i);
// }

// first value= variable initialization
// second value=condition
// third value=increment

// for(var i=0; i<=10; i++){
//     console.log(i);
// }

// console.log(i);












// ............................................................... +SIGN EXAMPLE  ..............................................................

// var str;

// str +=" Saylani";

// console.log(str);


//.............................................................. NESTED LOOP .................................................................

// for(var i=0; i<=5; i++){
// console.log(i);
// break;
// }

// for(var i=0; i<=5; i++){
// console.log(i);
// if(i===2){
//     break;
// }

// }

// for(let numeral=1; numeral<=10; numeral++){
//     console.log(numeral);

//     for(let greet=1; greet<=2; greet++){
//         console.log("Hello");
//     }
// }


// ................................................................ BREAK IN LOOP ...........................................................

// for(let count=1; count<=10; count++){
//     if(count===5){
//         break;
//     }

//     console.log(count);
// }

// .............................................................. CONTINUE IN LOOP ..........................................................

// for(let counter=1; counter<=10; counter++){

//     if(counter=== 5){
// continue;
//     }
//     console.log(counter);
// }

// .............................................................. FOR OF LOOP ..........................................................

// Jab aapko sirf values par focus karna ho aur index ki zarurat na ho.
let students=["Ali","Zain","Raza"];
for(let student of students){
    console.log(student)
}

let word="Javascript";
for(let letter of word){
    console.log(letter);
}




//............................................Comparison Table b/w normal for loop or for off loop............................................

// Feature	Normal for Loop	                                                for...of Loop
// Use Case	Index-based iteration, custom step, reverse iteration.	        Value-based iteration for arrays, strings, maps.
// Indexes	Index available.	                                            Index not accessible directly.
// Performance	Slightly faster for arrays.	                                Easier to write, but slightly slower.
// Readability	More verbose (needs initialization and condition).	        Cleaner and more readable.
// Best For	Complex iteration with index control.	                        Iterating over values of iterable objects.

// .............................................................. FOR IN LOOP ..........................................................

// .............................................................. FOR EACH LOOP ..........................................................

// Jab aapko array ke elements ke saath kuch action perform karna ho, lekin result ko store na karna ho.

// Example:

// javascript
// Copy
// Edit
// let numbers = [1, 2, 3];
// numbers.forEach((num) => console.log(num * num)); 

let getSquare=[1,2,3,4,5,6,7,8,9];
getSquare.forEach((element)=>console.log(element*element))





