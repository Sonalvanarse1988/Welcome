/*let student1 ={
    name :'snehal',
    age :24,
};
let student2 = {
    name:'Athrva',
    age : 22
}*/

//factory function
function createStudent(name,age){
    return{
        name, //name: keys second : parameter
        age, 
        getfullName(){
            console.log(this.name + ' '+ this.age);
        }
    };
}
let student1 = createStudent('Snehal',24);
let student2 = createStudent('Athrva',22);


console.log(student2.getfullName());


