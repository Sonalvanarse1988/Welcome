
//Both are only append child.

var newElement = document.createElement("h2");

var newText = document.createTextNode("This is Just Text");
//var newComment= document.createComment("This is comment");
  newElement.appendChild(newText);

document.getElementById("test").appendChild(newElement);

console.log(newElement);

//everytime it include or merge in last of the element.[appendChild]

//insertbefore:

var newElement = document.createElement("h2");

var newText = document.createTextNode("This is Just Text2");
newElement.appendChild(newText);

 var target= document.getElementById("test");

target.insertBefore(newElement,target.childNodes[0]);
