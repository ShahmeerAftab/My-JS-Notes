// ............................................. HTTPS Request .........................................

// https k zrye hm ksi bhi server se data get kren k lie request krte hen
// For Example:
// jb hm hmne browser pr google.com likhte hen hmara browser https request send krta he google k browser
//  ko than hmare pas google ka data ajata he

// ..................................... HTTP Request ke Types (Methods)..................................

// GET - Data ko "mangne" ke liye use hota hai. (Example: Google pe search karna)
// POST - Data ko "bhejne" ke liye use hota hai. (Example: Form submit karna)
// PUT - Data ko "update" karne ke liye.
// DELETE - Data ko "hatane" ke liye.

// ...................................API......................................................
// full form: Application Programming Interface

fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
