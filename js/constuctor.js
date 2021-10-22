/*
factory function

function createStudent(name, age) {
    return {
        name, // name: name
        age,
        getFullName() {
            console.log(this.name + ' ' + this.age);
        }
    };
}
*/

// constructor

function Student(name, age) {
    this.age = age;
    this.name = name;
    this.getFullName = () => {
        console.log(this.name);
    }
}

let student1 = new Student('Vishank', 34);

let student2 = new Student('Aniket', 40);
console.log(student1);

/*console.log(student2.getFullName());*/

student1.marks = 45;

student1.subject ={
    maths :70,
    english:80,
    hindi :70,}
    console.log(student1);
student1.getMarks = () => {
    console.log(this.subject);}