//let arr = [15, -2, 2, -8, 1, 7, 10, 23];
//let arr =  [1, 2, -2, 4, -4];
//let arr = [ -19, 8, 2, -8, 19, 5, -2, -23 ];
//let arr = [ -1, 1, 1, -1, -1, 1, 1, -1 ];
let arr = [ 0, -10, 20, 3, 23, 10, -20, 2, 19, -29, 0 ];
let subarr = [];
let result = [];
let counter = 0;
let max = 0;

for(let i = 0; i < arr.length; i++){
    let sum = arr[i];
    if(arr[i] == 0){
        let innerArr = [];
        //console.log("arr[i] when 0: ", arr[i]);
        innerArr.push(arr[i]);
        subarr.push(innerArr);
        max = 1;
    }
    counter = 1;
    //max = counter;
    for(let j = i+1; j < arr.length; j++){
        sum += arr[j];
        if(sum == 0){
            counter += 1;
            makeSubArr(i, j);
            if(counter > max)
                max = counter;
        }
        counter++;
    }
}

function makeSubArr(i, j){
    let innerArr = [];
    for(let start = i; start <= j ; start++){
        innerArr.push(arr[start]);
    }
    subarr.push(innerArr);
}

console.log(max-1);
console.log("Subarrays: ", subarr);

let maxlen = 0, index = 0;
for(let i = 0; i < subarr.length; i++){
    if(subarr[i].length > maxlen){
        maxlen = subarr[i].length;
        index = i;
    }
}

console.log("index of largest subarr in subarr variable: ", index);

for(let i = 0; i<subarr[index].length; i++){
    result.push(subarr[index][i]);
}

console.log("Max subarr = ", result);