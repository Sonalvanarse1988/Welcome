

//firstElementChild
document.getElementById('inner').firstElementChild.style.border=" 2px dotted red";


//var a= document.getElementById('inner').firstElementChild;
var a= document.getElementById('inner').firstElementChild.innerHTML;

console.log(a);


//lastElementChild

document.getElementById('inner').lastElementChild.style.background="red";


var b= document.getElementById('inner').lastElementChild;
var b= document.getElementById('inner').lastElementChild.innerHTML;

console.log(b);

//firstChild--It target call means space enter commnets
//Do not apply styling beacause it includes textnodes.

//document.getElementById('inner').firstChild.style.background="red";


var c= document.getElementById('inner').firstChild;


console.log(c);

//lastChild
 var d= document.getElementById('inner').lastChild;


console.log(d);



