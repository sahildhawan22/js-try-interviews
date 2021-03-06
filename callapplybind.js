/* let name = {
    firstName: "Sahil",
    lastName: "Dhawan",
    //printFullName: () => console.log(`${this.firstName} ${this.lastName}`) //this doesn't work. why?? Because arrow functions don't have their own 'this'
    printFullName: function(){
        console.log(this.firstName + " " + this.lastName)
    }
    
} */

/* name.printFullName();

let name2 = {
    firstName: "Kartik",
    lastName: "Dhawan",
} */

/* 
Now to print full name of name2 object, we could have done the same thing as printFullName method here. But that's a waste! 
**** So we use call for function borrowing ****
Syntax:
<fn which needs to be called>.call(<what we want our this in called function to be pointing to>)
i.e here printFullName.call(name2) (of course, printFullName should be independent fn and not inside name1 or name2)
*/

/* So this is how our resultant code will be */

let name1 = {
  firstName: "Sahil",
  lastName: "Dhawan",
};

let name2 = {
  firstName: "Kartik",
  lastName: "Dhawan",
};

//let printFullName = () => console.log(`${this.firstName} ${this.lastName}` );
let printFullName = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};

printFullName.call(name1);
printFullName.call(name2);

//Application:

let printDetails = function (city, state) {
  console.log(`${this.firstName} ${this.lastName} lives in ${city}, ${state}.`);
};

printDetails.call(name1, "Mohali", "Punjab");

/******  apply is similar to call, just args passed are different  *******/

printDetails.apply(name2, ["Mohali", "Punjab"]);

/****** bind: bind returns the copy of the function which can be invoked later *******/
let printDetailsLater = printDetails.bind(name1, "Mohali", "Punjab");
//Print the function:
console.log(printDetailsLater);
//Invoke the bound function
printDetailsLater();

/* 
In Summary:

let sahil = {
  fname: "Sahil",
  lname: "Dhawan",
};

let kartik = {
  fname: "Kartik",
  lname: "Dhawan",
};

let printFullName = function (city, state) {
  console.log(`${this.fname} ${this.lname} lives in ${city}, ${state}.`);
};

printFullName.call(kartik, "Chandigarh", "Chandigarh");

printFullName.apply(sahil, ["Mohali", "Punjab"]);

let boundPrint = printFullName.bind(kartik, "Chandigarh", "Punjab");
console.log("Bound function: ", boundPrint);
boundPrint();
*/
