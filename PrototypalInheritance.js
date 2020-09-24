function Person(fname, lname, age) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;

  Object.defineProperty(this, "fullname", {
    get: function () {
      return this.fname + " " + this.lname;
    },
  });
}

function Student(fname, lname, age) {
  Person.call(this, fname, lname, age);
  this.courses = [];
  this.enrollCourses = function (courseId) {
    this.courses.push(courseId);
  };
  this.getEnrolledCourses = function () {
    return `${
      this.fullname
    } is enrolled in following courses: ${this.courses.join(", ")}.`;
  };
}

console.log("Student.prototype.constructor: ", Student.prototype.constructor);
console.log("Student.prototype: ", Student.prototype);
Student.prototype = Object.create(Person.prototype);
console.log("Student.prototype.constructor:", Student.prototype.constructor);
Student.prototype.constructor = Student;

let sahil = new Student("Sahil", "Dhawan", 25);
console.log("sahil.__proto__ :", sahil.__proto__);

sahil.enrollCourses("Calculus");
sahil.enrollCourses("Algorithms");
sahil.enrollCourses("OS");
sahil.enrollCourses("ES6");

console.log(sahil.getEnrolledCourses());
