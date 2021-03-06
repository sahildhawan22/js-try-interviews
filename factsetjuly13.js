let name = "Mark";

let user = {
    name: "John",
    hi() {
        return this.name;
    },
};

console.log("user.hi(): ", user.hi());

let hi = user.hi;
let username = hi();
console.log("username: ", hi());

let userContext = hi.apply(user);
console.log("usercontext: ", userContext);
console.log(username);

//undefined at 2nd line maybe because let hi is in global scope and no hi() method in global scope

/* --------------------- */

/* 
let a,b,c,d,e;
b= null
c = {}
d = function() {}
e = 'object'

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e) */

/* ---------------------- */

/* const a = "" - 1 + 0;
const b = true + false;
console.log(b); */
