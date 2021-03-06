//Following calls on every char you enter in your input.
let counter = 0;
const getData = () => {
    //calls an API and gets data
    console.log("Fetching data...");
};

const debounce = function (fn, delay) {
    let timer;
    //return a better function
    return function () {
        //create a timer, so that when this function is again created before 300ms, we should clear this timeout
        let context = this,
            args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => fn.apply(context, args), delay);
    };
};

//To avoid above write a better function, which calls getData only when difference between 2 keypress events is like 300ms
const betterFunction = debounce(getData, 500);

//For arguments object:
//https://javascript.info/rest-parameters-spread#:~:text=The%20%E2%80%9Carguments%E2%80%9D%20variable,()%20%7B%20alert(%20arguments.
