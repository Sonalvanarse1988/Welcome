//number()
//parseInt()
//parseFloat()
//infinte()
//isinteger()
//toFixed()
//toPrecision()

//Number() --It converts the number

// let a = "99";
// let num = Number(a);
// document.write(num);

// let a = true; 
// let num = Number(a);
// document.write(num);

//ParseInt()--- It converts decimal number in to integer without decimal.

// let a= "87.88";
// let num = parseInt(a);
// document.write(num);

//parseFloat -- It returns a value with decimal points.
// let a= "87.88";
// let num = parseFloat(a);
// document.write(num);

//isFinite -- It returns the value only in true or false
// let a=100;
// let num = Number.isFinite(a);
// document.write(num);

//isInteger --Given Value is checked integer or not.
// let a= 45;
// let num = Number.isInteger(a);
// document.write(num);

//toFixed()--Its returns the decimal values
// let a = 9.9874567;
// let num = a.toFixed(4);
// document.write(num);

//toPrecision --It returns the round value.
let a = 26.887667;
let num = a.toPrecision(2);
document.write(num);
