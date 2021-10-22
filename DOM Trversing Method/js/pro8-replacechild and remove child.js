var newElement = document.createElement("li");

var newText = document.createTextNode("Replace text");

newElement.appendChild(newText);
console.log(newText);

var target = document.getElementById("list");
var oldElement = target.children[0];
console.log(oldElement);

target.replaceChild(newElement,oldElement);

// //removeChild
var target = document.getElementById("list");
 var oldElement = target.children[1];
 target.removeChild(newElement,oldElement);
