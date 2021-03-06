//function constructor

// function Circle(radius) {
//   this.radius = radius;
//   this.area = function () {
//     return Math.PI * Math.pow(radius, 2);
//   };
// }

// let c1 = new Circle(10);
// let c2 = new Circle(100);

// const [count, setCount] = useState(0);
// setCount(count + 1);

var obj = {};
//obj.key: arr of nums
//obj.sum: sum

function sum(a, b) {
    if (a > b) {
        let t = a;
        a = b;
        b = t;
    }
    let arr = [];
    arr.push(a);
    arr.push(b);
    let isAvailable = Object.keys(obj).some((item) => {
        item = item.split(",");
        item = item.map((elem) => parseInt(elem));
        let data = item.sort((x, y) => x - y);
        return data[0] === a && data[1] === b;
    });
    if (isAvailable) {
        return obj[arr];
    } else {
        obj[arr] = a + b;
        return a + b;
    }
}

console.log(sum(2, 3));
console.log(obj);

/* console.log(sum(2, 3));
console.log(obj);

console.log(sum(4, 5));
console.log(obj); */

console.log(sum(4, 5));
console.log(obj);

console.log(sum(3, 2));
console.log(obj);
