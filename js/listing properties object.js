let student ={
    FirstName : 'Swapnja',
    lastName :'Vanarse',
    age : 35,
    marks :60,
    subject :{
        maths :70,
        english:80,
        hindi :70,
},

}
getFullName= function(){//method
    return this.firstName + ' ' + this.lastName;

}
//console.log (student);
console.table(student);