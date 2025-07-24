// HTML k code ko javascript me access krte hen html ka code object ki shakal js me store hota he js ko document kehte hen

// console.log(document);

// ............................................................ Console.dir .......................................................

// console.dir JavaScript ka ek powerful debugging tool hai jo primarily objects aur their properties ka structured aur detailed view dene 
// ke liye use hota hai. Yeh console.log se alag is liye hai kyun ke yeh objects ko DOM (Document Object Model) tree ke format mein show karta hai.

// document.body.style.background="green"

//  DOM Manipulation

// Selecting by id:

document.getElementById("myID");

// Seelcting by class:

document.getElementsByClassName("myClass");

// Selecting by tag:

document.getElementsByTagName("p");

console.log(document.body);  // console.log ye html ko access krta he 

console.dir(document.body);  // console.dir ye body k object ko show krwata he

// Command	      Kya Show Karta Hai?	                Kab Use Karein?
// console.log	  Element as HTML	                    Jab HTML structure dekhni ho.
// console.dir	  Element as JavaScript object	        Jab object properties/methods inspect karne ho.

// ..........................................................QUERY SELECTER ......................................................

// querySelector in DOM - Explanation in Roman Urdu:
// querySelector DOM ka ek powerful method hai jo pehla matching element return karta hai jo specified CSS selector ke sath match karta ho.

// Basic Syntax:
// javascript
// Copy
// Edit
// document.querySelector(selector);
// selector: Yeh ek CSS selector hota hai (e.g., .className, #id, tagName).

// Return Value: Yeh pehla matching element return karta hai, ya agar koi match nahi kare to null return karta hai.


// ....................Nested Selecter Example.................

// let element = document.querySelector(".parent .child");
// console.log(element); // Parent ke andar pehla child element

let head1=document.querySelector(".mainHeading");
console.log(head1);

let head2=document.querySelector(".mainHeading");
console.log(head2.innerHTML);

let head3=document.querySelector(".mainHeading");
console.log(head3.innerText);

// let abc=mainHeading.tagName;
// console.log(abc);

// ..........................................................QUERY SELECTER ALL....................................................

// ...................................INNER TEXT .......................................

// innerText element ke andar ka sirf visible text return karta hai.

// Yeh HTML tags ko ignore karta hai.

// Sirf woh text show karega jo browser me dikh raha ho.

// Iska use text content update karne ya dekhne ke liye hota hai.

// ............................ Get Inner Text of All li .............................


// let listItem=document.querySelectorAll("li");
// // console.log(listItem);
// listItem.forEach((item)=>{
//     if(item.tagName==="LI"){
//        console.log( item.innerText)
// }
// })



// let getPara=document.querySelector(".para");
// console.log(getPara);
// let abc=getPara.innerHTML;
// console.log(abc)

// ....................................Differences Between innerText and textContent............................................................
// Feature	                        innerText	                                           textContent
// Visible Text                	    Sirf visible text ko return karta hai.	           Visible aur hidden text dono ko return karta hai.
// Hidden Elements	                Hidden elements ka text ignore karta hai.	           Hidden elements ka text bhi include karta hai.
// Performance	                    Slower (rendered text ke saath sync hota hai).	       Faster (direct DOM access karta hai).
// Event Listeners ke Saath Sync	Text render hone ke baad update hota hai.	   DOM ke sath direct kaam karta hai, UI se independent.
// Use Case	                        Jab sirf user-visible text chahiye ho.	               Jab hidden aur visible text dono chahiye ho.

// ...........................PRACTICE ................................

let getHeading2=document.querySelector("#heading2");
getHeading2.innerText="Hello Shahmeer";
console.log(getHeading2.innerText);

let getAllDivs=document.querySelectorAll(".myDiv");
console.log(getAllDivs);
getAllDivs[0].innerText="First Box";
getAllDivs[1].innerText="Second Box";
getAllDivs[2].innerText="Third Box";
console.log("----",getAllDivs[0].innerText);

// .................................................getAttribute() in DOM ..................................................
// getAttribute() ek DOM method hai jo kisi element ke specific attribute ki value ko
// access karne ke liye use hota hai. Yeh method kisi bhi HTML element ke attribute ki current value return karta hai.

let getPara=document.querySelector("a");
console.log(getPara.getAttribute("href"));

let setPara=document.querySelector("a");
setPara.setAttribute("href","https://www.w3schools.com");
console.log(setPara);

// ...................................... STYLE ................................................
// style in DOM 
// JavaScript me style property ka use kisi HTML element ke inline styles ko access karne ya modify karne ke liye hota hai.
// Iske zariye aap kisi bhi element ke CSS properties ko directly change kar sakte ho.

// Syntax:
// element.style.propertyName = value;

let getColor=document.querySelector("h1");
getColor.style.color="red";
console.log(getColor);

// ...................................................Create  element.......................................................
// let newParagraph = document.createElement("p");

// // Add text to the paragraph
// newParagraph.innerText = "This is a dynamically created paragraph.";

// Append the paragraph to the body
// document.body.appendChild(newParagraph);
// Output in Browser:
// <p>This is a dynamically created paragraph.</p>

// .................................................. EXAMPLE ...................................................................

// let listItem = document.createElement("li");
// listItem.innerText = "Dynamically added list item";

// Add the <li> to an existing <ul> with id "myList"


// let ul = document.getElementById("myList");
// ul.appendChild(listItem);
// HTML Structure:


// <ul id="myList">
//   <li>Existing Item</li>
//   <li>Dynamically added list item</li>
// </ul>


// Method	          Description
// appendChild()	  Parent ke end me element insert karta hai.
// prepend()	      Parent ke start me element insert karta hai.
// insertBefore()	  Kisi existing element ke pehle naya element insert karta hai.
// replaceChild()	  Ek existing element ko naya element se replace karta hai.

// ...................................................Remove element.......................................................

// ................Methods to Remove Elements..............................

// element.remove()
// Directly kisi element ko DOM se remove karta hai.
// parentElement.removeChild(childElement)
// Parent element ke through child element ko remove karta hai.

// ....................................................... PRACTICE ......................................................

// let newBtn=document.createElement("button");
// newBtn.innerText="Enter";
// newBtn.style.backgroundColor="red";
// document.body.prepend(newBtn);

// let myPara=document.querySelector(".myPara");
// console.log(myPara.getAttribute("class"));
// console.log(myPara.setAttribute("class","newClass"));

// ................................................... Exercise 01 .......................................................

const selectDiv=document.querySelector(".content")
const newParagraph=document.createElement("p")
newParagraph.innerText="This is new Paragraph"
selectDiv.appendChild(newParagraph);
console.log(newParagraph.innerText);

// ................................................... Exercise 02 .......................................................

const getDiv=document.querySelector("#mainHead");
getDiv.innerText="Hello Ali";
console.log(getDiv.innerText);

// ................................................... Exercise 03 .......................................................

const getToggle=document.querySelector(".toggle");
const getThisPara=document.querySelector(".highlights");
getToggle.addEventListener("click",()=>{
    getThisPara.classList.toggle("highlights");
})

// ................................................... Exercise 04 .......................................................

let myLists=document.querySelector("#myList");
let creatLi=document.createElement("li");
creatLi.innerText="My First list";
myLists.appendChild(creatLi);

//............................................................Step-by-Step DOM Topics.........................................
// .............Step 1: Selecting Elements............

// Importance: DOM elements ko select karna har manipulation ka pehla step hai.

// Methods to Learn:
// getElementById
// getElementsByClassName
// getElementsByTagName
// querySelector (most widely used)
// querySelectorAll


// const changeHeading=document.querySelector("#heading2");
// changeHeading.innerText="Hello Umair";


// .......................Step 2: Manipulating Text and HTML....................

// Importance: Web content ko dynamically update karne ke liye.

// Key Properties:
// innerText
// textContent
// innerHTML

const thisPara=document.querySelector("#thisPara");
const getBtn=document.querySelector("#btn");
getBtn.addEventListener("click",()=>{
    // thisPara.style.color="green";
    thisPara.innerText="You Clicked";
})

// ................Step 3: Handling Attributes...........................
// Importance: Element attributes (e.g., src, href, id) ko read aur modify karne ke liye.

// Key Methods:

// getAttribute
// setAttribute
// hasAttribute
// removeAttribute

const getLink=document.querySelector("#link");
const getButton=document.querySelector("#changeBtn");
getButton.addEventListener("click",()=>{
    getLink.setAttribute("href","https://www.w3schools.com/");
    getLink.innerText="W3 School Link"
})

// ...................Step 4: Styling Elements.................
// Importance: Elements ka appearance dynamically change karna.

// Key Concepts:

// Inline styling via element.style
// Managing classes via classList (add, remove, toggle, contains)

const ayaan=document.querySelector("#ayaan");
const enter=document.querySelector("#enter");
enter.addEventListener("click",()=>{
    ayaan.style.backgroundColor="maroon";
})

// .......................Step 5: Creating and Removing Elements................

// Importance: Naye elements dynamically create karne aur existing elements ko delete karne ke liye.

// Key Methods:

// createElement
// appendChild
// prepend
// removeChild
// replaceChild

const getUL=document.querySelector("#myul");
const myLI=document.createElement("li");
myLI.innerText="This is li"
getUL.appendChild(myLI);

//.................Step 6: Traversing the DOM........................
// Importance: Parent, child, aur sibling elements ke beech navigate karne ke liye.

// Key Properties:
// parentNode
// childNodes
// firstChild / lastChild
// nextSibling / previousSibling























