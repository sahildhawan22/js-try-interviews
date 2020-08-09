let str = "29,39,40";
let arr = str.split(",");
let numarr = arr.map(item => parseInt(item));
console.log(typeof arr[0]);
console.log(typeof numarr[0]);