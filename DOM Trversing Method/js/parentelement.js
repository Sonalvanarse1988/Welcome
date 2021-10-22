//document.getElementById('inner').parentElement.style.background="red";

var a= document.getElementById('inner').parentElement;
console.log(a);

 /*both rendered as same only the difference is if we dont have any value in
 parentElement it gives a null value but in ParentNode it gives a same value.*/


//parentNode
document.getElementById('inner').parentNode.style.background="red";

var a= document.getElementById('inner').parentNode;
console.log(a);