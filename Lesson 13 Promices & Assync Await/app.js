// <!-- ksi bhi prograaming lanuage ka behavior 2 trh ka hota he -->
//     <!-- 1.  Synchronus   (it execute line by line )                          
//     2. Asyncronous( agr koi line time gain krta he execute hone me to tb tk 2sri line execute ho jy 1st line ka wait ni kre )-->

// <!-- Easy example -->
//  alert("Hello World");
//  console.log("Hello Pakistan");

// in this eg console.log does not execute untill alert execution

// 2nd example

// for (let index = 0; index < 500; index++) {
//    console.log(index);
// }

// console.log("hello");

// Set time out : Code ko ek baar run karta hai after a specified delay.

// Example:

// setTimeout(() => {
//     console.log("3 second baad chala!");
// }, 3000);


// // console.log("ali"); // for testing

// // Ye message sirf ek baar ayega, 3 seconds ke baad.

// //  setInterval (Bar-Bar Chalne Wala)
// // Kaam: Code ko har fixed interval ke baad repeat karta rehta hai.

// let counter = 0;
// let intervalID = setInterval(() => {
//     counter++;
//     console.log(`Ye har 2 second baad chalta rahega (${counter})`);
//     if (counter >= 5) clearInterval(intervalID); // 5 baar ke baad stop
// }, 2000);

// // Ye message har 2 seconds baad ayega jab tak hum clearInterval na kar dein.


// // .............................................................CALLBACK FUNCTION...........................................................
// // Callback ek aisa function hota hai jo dusre function ke andar as an argument pass hota hai

// // let greet=(name,Callback)=>{
// //     console.log(`"Hello" ${name}`);
// //  Callback();
// // }

// // let Callback=()=>{
// //     console.log("Congrats");

// // }

// // greet("Shahmeer",Callback);

// //............................................................  Callback Hell (Problem)....................................................
// // Jab bahut saare nested callbacks hote hain, code samajhna mushkil ho jata hai.

// //  ...................................................................Promise..............................................................
// // Jaise kisi se "Wada" karna:
// // "Main tumhe 5 minute mein pizza deliver kar dunga, warna paise wapis!"

// // .......................Promise Ka Structure........................
// // let pizzaDelivery = new Promise((resolve, reject) => {
// //   // Kaam ho gaya? => resolve()
// //   // Nahin hua? => reject()
// // });

// // .................Real-Life Example.......................

// let orderBurger = new Promise((resolve, reject) => {

//     isShopOpen = false;
//     if (isShopOpen) {
//         resolve("Burger Ready");
//     } else {
//         reject("kitchen is Closed");

//     }
// })

// orderBurger
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error));

// // ..........Example 2 ..................

// let mobileRecharge = new Promise((resolve, reject) => {
//     let currentBalance = 80;
//     let rechargeAmount = 100;

//     if (currentBalance >= rechargeAmount) {
//         resolve("Recharge Successfull")
//     } else {
//         reject("Your Balance is insufficient")
//     }
// })

// mobileRecharge.then((resolve) => console.log(resolve)).catch((reject) => console.log(reject))


// // .......................Example 3 ...........................

// let weatherCheck = new Promise((resolve, reject) => {
//     let isInternetWork = false;

//     setTimeout(() => {
//         if (isInternetWork) {
//             resolve("Weather is good")
//         } else {
//             reject("Weather is not good");
//         }
//     }, 2000)
// }
// )

// weatherCheck.then((resolve) => console.log(resolve)).catch((reject) => console.log(reject));


// // .......................Example 4 ...........................

// let LibraryBookReturn = new Promise((resolve, reject) => {
//     let isBookReturn = false;

//     setTimeout(() => {
//         if (isBookReturn) {
//             resolve("Thank You")
//         } else {
//             reject("Plz Submit Your Book")
//         }
//     }, 1000);
// })

// LibraryBookReturn.then((resolve) => console.log(resolve)).catch((reject) => console.log(reject))

// // .......................Example 5 ...........................

// let onlinePayment = new Promise((resolve, reject) => {
//     let isPaymentAccessible = false;

//     setTimeout(() => {
//         if (isPaymentAccessible) {
//             resolve("Payment Successfull")
//         }
//         else {
//             reject("Payment Failed")
//         }

//     }, 1000);
// })

// onlinePayment.then((resolve)=>console.log(resolve)).catch((reject)=>console.log(reject))

// ............................................Assync Await ..........................................................
// Async/Await Promises ka "makeup" hai - kaam same, likhne ka tareeka aasan!

// ................Example...........................

let onlinePayment = new Promise((resolve, reject) => {
    let isPaymentAccessible = true;

    setTimeout(() => {
        if (isPaymentAccessible) {
            resolve("Payment Successfull")
        }
        else {
            reject("Payment Failed")
        }

    }, 1000);
})

const processPayment = async () => {
    try {
        let result = await onlinePayment;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

processPayment();

// ................Example...........................

let resultcheck = new Promise((resolve, reject) => {
    let marks = 40;

    setTimeout(() => {
        if (marks >= 70) {
            resolve("Congratulations you Passed")
        } else {
            reject("Try Again")
        }
    }, 1000);
})

const showResult = async () => {
    try {
        let resolve = await resultcheck;
        console.log(resolve);

    } catch (reject) {
        console.log(reject);
    }
}

showResult();




