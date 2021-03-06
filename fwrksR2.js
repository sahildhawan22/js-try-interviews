/* let foo = {
    baz: function () {
        console.log(this);
    },
};
foo.baz(); //logs bar object

let bar = foo.baz;
bar(); //logs Window object */
/* _______________________________________________________________________________  */

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}
//O/P with var in loop: 5,5,5,5,5
//O/P with let in loop: 0,1,2,3,4

/*____________________________________________________________________________________*/
/* for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 0);
} */
//O/P: 0,1,2,3,4

/* _______________________________________________________________________________  */
/* a = 10;
console.log(a); //10
console.log(b); //undefined
var b = 20;
console.log(c); //not defined */
