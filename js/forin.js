// for in loop
//  this loop is used as objects

let student = {
    name: 'Prathamesh',
    age: 34,
    marks: 65
};
//name age is a key and properties also */
for (let key in student) {
    document.write(key + ':' + student[key]);
}
//it prints the object key value