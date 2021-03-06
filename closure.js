//Closure is function bind together with its lexical environment.
//i.e function along with its lexical scope forms a closure.

/* function x() {
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 300);
    console.log("Namaste ji");
}

x(); */

(function timer() {
    for (var i = 0; i <= 5; i++) {
        setTimeout(function clog() {
            console.log(i);
        }, i * 1000);
    }
})();
//O/P: 0,1,2,3,4,5
