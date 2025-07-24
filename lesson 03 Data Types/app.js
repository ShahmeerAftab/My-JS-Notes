// ...........................................................JavaScript Primitives ..........................................................
// A primitive value is a value that has no properties or methods.

// 3.14 is a primitive value

// A primitive data type is data that has a primitive value.

// JavaScript defines 7 types of primitive data types:

// string
// number
// boolean
// null
// undefined
// symbol
// bigint





// ******************************************************************  UNDEFINED ***************************************************************

// Undefined = Value is not defined





//.............................................. DIFFERENCE B/W NOT DEFINED AND UN DEFINED ....................................................

// undefined is a value that can be assigned to a variable, while "not defined" indicates that a variable does not exist.
// Not Defined is referred as error
// Un defined is not referred as error






// ******************************************* HOW TO PERFORM ARITHMATIC OPERATIONS *********************************************************

// var num1=4;
// var num2=7;
// var result = num1+num2;
// alert(result);

// var num1=4;
// var num2=7;
// var result = num1-num2;
// alert(result);

// var num1=4;
// var num2=7;
// var result = num1*num2;
// alert(result);

// var num1=14;
// var num2=7;
// var result = num1/num2;
// alert(result);

// var num1=5;
// var num2=2;
// var result = num1%num2;
// alert(result);






// ****************************************************  CONCATINATION RULES ****************************************************************

// String + String = String
// Number + Number = Addition
// String + Number = String
// Number + String = String
// For Example:
// var course="Web Development";
// document.write("<h1>" + course + "</h1>");

// var num1=2;
// var num2="4";
// var result=num1+num2;
// alert(result);

// var no1=2;
// var no2=4;
// var sum=no1+no2;
// alert(sum);

// var number1="2";
// var number2="4";
// var output=number1+number2;
// alert(output);

// var val1="2";
// var val2=4;
// var final=val1+val2;
// alert(final);







// ********************************************* WHEN WE CALL STRING  **********************************************************************

// Jhan bhi javascript me value k andr alphabet ajy wo 1 hi q na ho wo value string hogi
// for example:
// var account="a1123455"       // That is also string     







// ********************************************** INCREMENT AND DECREMENT  *******************************************************************

// Two types of Increment and Decrement
// Pre Increment
// var value=3;
// ++value
// alert(value);

// Post Increment
// value++;
// alert(value);

// Pre Decrement
// --value;
// alert(value);

// Post Decrement
// value--;
// alert(value);








// ***************************************************  DIFFERENCE B/W PRE AND POST  *********************************************************

// Pre Increment or decrement me increment ya decrement phle hota he phr print hota he 
// Post Increment or decrement me print phle hota he or increment ya decrement bad me








// ***************************************************** BODMAS RULES ***********************************************************************

// Bracket 
// Orders
// Divide
// Multiply
// addition
// Subtraction

// For Example:
// var num = 2 + 2 * 4 - 1
// alert(num);

// var num = 2 + 2 * 4 - 5 * 2
// alert(num);

// var num = (2 + 2) * 4 - 5 * 2
// alert(num);

// var a = 2;
// var b = 3;

// var num=(a++ + --b) - b++ - --a * a++ ;
// //      ( 2   +  2 ) -  2   -  2   *  2
// alert(num);

// Precedence	Operator	Description
// 1	()	Parentheses
// 2	**	Exponentiation
// 3	*, /, %	Multiplication, Division, Remainder
// 4	+, -	Addition, Subtraction




// *********************************************************Associativity in Math Operators****************************************************

// Operators that have the same precedence are evaluated according to their associativity:

// Left-to-right associativity: Operators like +, -, *, / are evaluated from the left.
// Right-to-left associativity: The exponentiation operator ** is evaluated from the right.

// var num1 = 2 * 2 + 6;
// var num2 = 2 * (2 + 6);

// var num3 = 6 / 2 + 2 ** (2 ** 2) + 2 * 6;
// var num4 = 6 / 2 + 2 ** 4 + 2 * 6;
// var num5 = 6 / 2 + 16 + 2 * 6;
