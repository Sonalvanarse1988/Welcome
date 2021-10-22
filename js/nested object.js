let student = {
    FisrtName : 'Snehal',
    lastName : 'Kamble',
    age: 24,
    marks :90,
    subjects :{
        maths: 70,
        engllish : 80,
        hindi :90
    },

getFullName :function(){
    return this.FisrtName +' '+ this.subjects.maths
} 
}
console.log(student.getFullName());