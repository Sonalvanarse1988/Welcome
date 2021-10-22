// for of loop
// multiple array of objects and array
//mostly we use it in array

const students = [
    {
        name: 'Prathamesh',
        age: 34
    },
    {
        name: 'Aniket',
        age: 30
    }
];

for (let student of students) {
    console.log(student.age); //dot or bracket notation
}

const colours = ['Blue', 'Green', 'Yellow'];

for (let color of colours) {
    console.log(color);
}