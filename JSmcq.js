/* let arr = [1,2,3,4];
delete arr[3];
console.log(arr.length); */

/* let arr = [1,2,3,4,5,6];
arr.forEach((num) => {
    console.log(num);
    if(num === 4){
        break;
    }
}); */

/* var arr = [10,20,30,40];
for(var i = 0; i < arr.length; i++) {
    setTimeout(function(){
        console.log(`Index: ${i}, element: ${arr[i]}`);
    }, 3000);
} */

/* function test() {
    return new Promise(function(resolve, reject){
        throw new Error("Whoops");
    }).catch(function(error){
        console.log("Error detected");
    }).then(function() {
        console.log("Next...");
    })
}

test().then(function(){
    console.log("Promise complete");
}) */

/* Promise.resolve(1)
    .then((x) => x + 1)
    .then((x) => {throw new Error("My Error")} )
    .catch(() => 1)
    .then((x) => x + 1 )
    .then((x) => console.log(x))
    .catch(console.error) */

//REVIEW QUES: 12, 13, 2

/* var x = 1;
var output  = ( function() {
    delete x;
    return x;
})();
console.log(output); 
//maybe because delete only deletes references/objects? */

/* let name = "Mark";
let user = {
    name: "John",
    hi() { return this.name; }
};

let hi = user.hi;
let userName = hi();
console.log(userName); */

/* (function() {
    var objA = {
        foo: 'foo',
        bar: 'bar'
    };
    var objB = {
        foo: 'foo',
        bar: 'bar'
    };
    console.log(objA == objB);
    console.log(objA === objB);
}())
 */

const a = "" - 1 + 0;
const b = true + false;
console.log(true);
