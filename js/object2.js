//A javascript object of name:value pairs.
//Properties are the values associated with a JavaScript object.

//A JavaScript object is a collection of unordered properties.

//Properties can usually be changed, added, and deleted, but some are read only.



let student = {
    firstName: 'Sonal', // properties
    lastName: 'Vanarse',
    age: 35,
    marks: 60,
    subjects: {
        maths: 50,
        english: 40,
        hindi: 70
    },
    getFullName() { // methods
        return this.firstName + ' ' + this.lastName;
    } // ES6
}

console.log(student.getFullName());

// name, age, marks are properties

// function - methods

//delete is also a keyword of object.
//delete keyword deletes both the value of the property and the property itself.
//After deletion, the property cannot be used before it is added back again.
//not be used on predefined JavaScript object properties. It can crash your application.



 delete student.age;
 console.log(student.age)
/*document.getElementById("demo").innerHtml=
student.firstname + "is" + student.age + "years old.";*/