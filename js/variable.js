//string(text)
//number
//true or false-bulleans
//undefined
//null
//object

//We cannot define the variable name  in reserved keyword or number or any symbol; 
//only one symbol is allowed is underscore(_)

// called as comments
/*Multiple comments*/

let name="Sonal"; //string literal

console.log(name);

let age=20; //number literal

console.log(age);

undefined
let marks;

console.log(marks);

null
let selectedcolor=null;

console.log(selectedcolor);

//var is a also a declaring a keyword but it has some issue thats why ES6 Suggest to not use the variable.

//another keyword is const it is used if the value is  not change/constant e.g. pi value

//const mathPi =3.142;

//const mathPi =1;

/*console.log(mathPi);


//How to declare name: In programming lanuage we have some conventions
//e.g. Pascal Case
let StudentName = "Vishank";

let AgeOfTheStudent = 10;

//Camel case
//Name of Student

let studentName = "vishank"; 

let ageOfTheStudent = 15;

//kebab case
//it is not allowed in javascript
*/
//typeof name/age- check in console
//dynamic Convention
let score =20;

score=true;
//type in console is boolean
 
score="pass";
//type in console is string.

//javascript is dynamically type
//staticaly type-  means it is not changing type.-ex-java,c#net. 
var no1 = 100.5;
	
var no2 = 200.2;
	
document.write("Number1 = " + no1 + "<br/>" + "Number2 = " + no2);