/*we have three methods:
createElement --If we want to add any tag for ex- <p><h2> then we use this createElement.

createTextNode= If we want to add only text then we use createTextNode.

createComment= If we want to add any comment in html using <!--  -->

*/

var newElement = document.createElement("p");
console.log(newElement);


var newText = document.createTextNode("This is just text");
console.log(newText);

var newcomment= document.createComment("This is comment");
console.log(newcomment);