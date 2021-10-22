//A javascript object is a collection of named values.
//The named value in javascript objectsometimes it may be same.
// The named values in Javascript object are called propeties.
// object are containing variables.
// If we want to write in object{}
//Name and value separated by colon=>Properties
//When we declare a function its called method.

let student ={
     firstName:'Vishank', //properties
     lastName : 'Vanarse',
     age: 10,
     marks:80,
      
    SecondFirstName: 'Vidip',
     SecondLastName: 'vanarse',

    getFullName :function(){   //method
    return this.firstName + ' ' + this.age

},
getFullName2 : function(){
    return this.SecondFirstName + ' ' + this.SecondLastName

}
}
console.log(student.getFullName());
console.log(student.getFullName2());