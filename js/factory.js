// student object name, age

/*let student1 = {
    name: 'Sonal',
    age: 34
};

let student2 = {
    name: 'Hemant',
    age: 33
};*/

// DRY

// factory function

function createStudent(name, age) {
    return {
        name, // name: name
        age,
        getFullName() {
            console.log(this.name);
        }
    };
}

let student1 = createStudent('Sonal', 34);

let student2 = createStudent('Hemant', 29);

console.log(student2);

console.log(student1);