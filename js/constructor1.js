//consructor
function Student (name,age){
    this.name = name;
    this.age = age;
    this.getFullName = function(){    //using method
        console.log(this.name);

    }
}

let student1 = new Student ('Athrva',22);
let student2 = new Student('Snehal',24);
let student3= new Student('Krishna',24);
console.log(student1);

console.log(student2.getFullName());
console.log(student3.age);