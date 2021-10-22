function Student(name,age){
    this.age =age;
    this.name= name;
    this.getFullName =() =>{
        console.log(this.name);
    }
}
let student1 = new Student('Athrva',22);
let student2 = new Student('Omkar',24);

console.log(student2);

student2.marks = 45;

Student.getMarks = ()=>{
    console.log(this.marks);

}
//console.log(student2.marks);