// ........................................ Git ...................................................................
/* Git ek version control system (VCS) hai jo developers ko apne code ka track rakhne aur collaboration mein madad karta hai. 

.........................Iska kaam ye hai.................................
Code ke changes ko track karna.
Alag alag versions create karna (e.g., agar code mein koi bug aata hai toh purane version pe waapis ja sakte hain).
Multiple developers ke saath team collaboration ko easy banana. */


// Git is basically a software and github is a service to host git online

// ...........Command to check version of git.......................
// git --version

// .......... Command to check Status............
//  git status



// ..............To set name or email etc....................................
/* git config --global user.name "Apka Naam"
git config --global user.email "apkaemail@example.com" */

// ......................Check Specific Setting (Jaise user.name ya user.email)....................................
/* git config user.name
git config user.email */


// ............................git init.............................................
/* Istamal: Ye command ek nayi Git repository banane ke liye hoti hai.

..............Kya karta hai.............................

Ek empty .git folder create karta hai jo Git ka local repository banata hai.
Aap apne files ko manually add karte ho aur unhe track karte ho.

Use case: 
Jab aap kisi naye project par kaam shuru kar rahe ho aur usse Git ke through track karna chahte ho. */

// ...................................................touch file.name.ext.............................
// To create new file
// Eg: touch Contact.html

// ....................Create Multiple File...............................................
// touch index.html style.css script.js