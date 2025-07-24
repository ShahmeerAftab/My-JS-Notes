//...............Cookies vs  LocalStorage vs   SessionStorage............................

/* Feature	              Cookies	                          LocalStorage	                 SessionStorage

   Capacity	              4KB	                              5-10MB	                     5-10MB
   Expiry	          Manual set karna parta hai	         Kabhi expire nahi hoti	         Tab close hone pe khatam
   Server Access      Automatically server pe bhejti hain	 Sirf client-side	             Sirf client-side
   Use Case	          Authentication, Tracking	             App Data	                     Temporary Data */


// .................................................... LOCAL STORAGE...............................

// Syntax of set 
/* localStorage.setItem("Key", "Value");

// Example
localStorage.setItem("Name", "Shahmeer");

// Syntax of get
localStorage.getItem("Key");

// Example
console.log(localStorage.getItem("Name"));

// Syntax to Remove
localStorage.removeItem("Name"); */





//  .................................................... SESSION STORAGE...............................

// Syntax:
// (Same as Local Storage)



//............................JSON (Javascript Object Notation)........................................

// JSON is a text format for storing and transfering data
// Commonly used for API and config.file(Setting or Rules of App, Bina code change kiye settings modify kar sakte hain)

// ................ How to store json data ....................

/* const data = {
    "name": "Ali",
    "id": 345,
    "isActive": true
}

const dataObj=JSON.parse(data);
console.log(data.name);


// If we have multiple jason data

const students = [
    {
        "name": "Ali",
        "id": 345,
        "isActive": true
    },

    {
        "name": "Ali",
        "id": 345,
        "isActive": true
    },

    {
        "name": "Ali",
        "id": 345,
        "isActive": true
    }
] */


// ............................................ Practice Exercises of Local Storage...........................................


// Access Button to implement event
const saveName = document.querySelector("#saveName");

// Add Functionality
saveName.addEventListener("click", () => {

    // Access Input Value
    const nameInput = document.querySelector("#nameInput").value.trim();

    //  Save to Local Storage
    localStorage.setItem("User Name", nameInput);

    // Show Popup message
    alert("Name Saved Successfully");
})

// 
const showName = document.querySelector("#showName");
showName.addEventListener("click", () => {
    const getName = localStorage.getItem("User Name") || "Name does not exist";
    document.querySelector("#displayName").innerHTML = getName;
})


const deleteName = document.querySelector("#deleteName");
deleteName.addEventListener("click", () => {
    localStorage.removeItem("User Name");
    document.querySelector("#displayName").innerHTML = "Deleted"
})












// ................................Stored in Array Form ..............................................

/* // Access Button to implement event
const saveName = document.querySelector("#saveName");

// Add Functionality
saveName.addEventListener("click", () => {

    const newName = document.querySelector("#nameInput").value.trim();

    // Save karte time
    let allNames = JSON.parse(localStorage.getItem('nameInput')) || [];
    allNames.push(newName);
    localStorage.setItem('nameInput', JSON.stringify(allNames));

    // Retrieve karte time
    let savedNames = JSON.parse(localStorage.getItem('nameInput'));

}) */