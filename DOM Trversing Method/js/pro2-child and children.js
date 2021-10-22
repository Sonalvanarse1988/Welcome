//It targets parents to children.
//Children targets only elements


// document.getElementById('inner').children.innerHTML.style.color="red";

// var a= document.getElementById('inner').children.innerHTML;
// console.log(a);

//If we want to  target some particular children then :-

// document.getElementById('inner').children[0].style.background="red";

// var a= document.getElementById('inner').children[0];
// console.log(a);

//If we want his innerHTML 
// var a= document.getElementById('inner').children[3].innerHTML;
// console.log(a);


//childNodes --It includes a text, spaces, comments return it's value

// var a= document.getElementById('inner').childNodes;
// console.log(a);



 var a= document.getElementById('inner').childNodes[0].innerHTML;
 console.log(a);
