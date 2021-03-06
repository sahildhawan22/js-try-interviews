function multiplyBy100(arr) {
    return arr.map((item) => item * 100);
}

function swap(obj) {
    let t = obj.a;
    obj.a = obj.b;
    obj.b = t;
}

console.log(multiplyBy100([1, 2, 3, 4, 5]));

let obj = { a: 1, b: 2 };
console.log(obj);
swap(obj);
console.log(obj);
