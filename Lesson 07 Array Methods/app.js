//.............................................................. ARRAY METHODS .............................................................

// .................................................................  .PUSH  ..............................................................

// Using the keyword, push, you can add one or more elements to the end of an array.

// var students=["Ali","Zain","Owais","Anus","Rehan"];
// students.push("Aqib","Saad");
// console.log(students);





//..................................................................  .POP  .................................................................

// Using the keyword, pop, you can remove the last element of an array.


// var students=["Ali","Zain","Owais","Anus","Rehan"];
// students.pop();
// console.log(students);





//..................................................................   .SHIFT  ...............................................................

// Use the shift method to remove an element from the beginning of an array

// var students=["Ali","Zain","Owais","Anus","Rehan"];
// students.shift();
// console.log(students);





//  ................................................................    .UNSHIFT  ............................................................

// To add one or more elements to the beginning of an array, use the unshift method

// var students=["Ali","Zain","Owais","Anus","Rehan"];
// students.unshift("Babar","Salman");
// console.log(students);




//.......................................................................  .SPLICE ...........................................................

// ye ksi bhi position se element ko delete bhi kr skta he add bhi kr skta or replace bhi kr skta he

// If we only want to delete an element

// For Example:

// var arr = ["Ali", "Asad", "Farhan", "Talha", "Zain"];
// arr.splice(2, 4);
// console.log(arr);

// If we want to delete an element and also want to add value on deleted place

// for example:

// var arr = ["Ali", "Asad", "Farhan", "Talha", "Zain"];
// arr.splice(2, 4, "Ahmed", "Ehsan", "Osama", "Amir");
// console.log(arr);

// If we write 0 in the splice than only add

// for example:




// ................................................................. ADD VALUE BY USING ARRAY ...............................................
// var arr=["Ali","Asad","Farhan","Talha","Zain"];
// arr.splice(2,0,"Ahmed","Ehsan","Osama","Amir");
// console.log(arr);





// ................................................................ REPLACE VALUE BY USING SPLICE METHOD .....................................
// var array=["Ali","Asad","Faiz","Raza"];
// array.splice(1,1,"Asim");
// console.log(array);





//  ...............................................       .SLICE   .........................................................................

// ye Array me se data split krwa kr lata he





//     ...............................................   RULE OF SLICE   ............................................... ................

// js index tk bhi copy krna ho us se hmesha 1 index ki value brha kr likhenge

// If we want to split this array in two parts

// for example:

// var studentsofSMIT=["Asif","Samad","Haseeb","Rohan","Shayan","Hamza"];

// console.log(studentsofSMIT.slice(0,3));

// console.log(studentsofSMIT.slice(3,6));

// Slice method can also work on string

// for example:

// var school="SMIT";
// console.log(school.slice(0,2));
// console.log(school.slice(2,5));
