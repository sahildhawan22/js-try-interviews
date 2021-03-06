//Base case: if b is undefined or null
/* let sum = function (a) {
    return function (b) {
        return b ? sum(a + b) : a;
    };
}; */

//ES6 way:
let sum = (a) => {
    return (b) => {
        return b ? sum(a + b) : a;
    };
};
//return can be removed if 1 line of code. So above can be written as:
let sum = (a) => (b) => {
    return b ? sum(a + b) : a;
};
//again 1 return statement can be removed which gives the final code as:
let sum = (a) => (b) => (b ? sum(a + b) : a);

console.log(sum(1)(2)(3)(4)());
