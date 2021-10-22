//It targets parents to children.
//Children targets only elements


//document.getElementById('inner').parentNode.style.background="red";

//var a= document.getElementById('inner').children;
//console.log(a);

//If we want to  target some particular children then :-

//document.getElementById('inner').children[1].style.background="red";

//var a= document.getElementById('inner').children[1];
//console.log(a);

//If we want his innerHTML 
//var a= document.getElementById('inner').children[2].innerHTML;
//console.log(a);


//childNodes --It includes a text, spaces, comments return it's value

//var a= document.getElementById('inner').childNodes;
//console.log(a);



var a= document.getElementById('inner').childNodes[1].innerHTML;
console.log(a);
