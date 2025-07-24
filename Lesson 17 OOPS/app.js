






// ................................................................OOPS Class.................................................

/* What is OOP in JavaScript?

OOP (Object-Oriented Programming) ek programming paradigm hai jo objects ko use karke code ko organize karta hai. Objects real-world
entities ko represent karte hain, jaise cars, users, products, etc.
JavaScript mein, OOP ke concepts ko implement karne ke liye Classes aur Objects ka use hota hai. Yeh approach code ko reusable,
modular, aur maintainable banata hai. */
// class ek blueprint hai jo objects banane ke liye use hoti hai. Is se manually properties define karne ki zarurat nahi hoti.
// Ek baar class define karne ke baad, uska use karte huye multiple objects banaye ja sakte hain.

// ................Use Case of Simple Objects, cunstructor or classes.............

/* Feature	                  Simple Objects	           Constructor Functions	             Classes

Use Case	                 Static or one-time use	       Legacy code	                     Modern and scalable
Reusability	                    Low	                       Medium	                              High
Modern Syntax	                 No	                          No	                              Yes */

// .................Syntax...............
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year
    }

    getDetails() {
        return `This is  a ${this.year} ${this.model} ${this.brand}`
    }
}

const newCar= new Car(2020,"Corolla","Suzuki");
console.log(newCar.getDetails());


