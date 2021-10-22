//It gives a boolean value

var target = document.getElementById("test");

var find = target.hasAttribute("class");
console.log(find);

//hasChildNodes
//gives only boolean value
//if your document is empty that time it gives a false value.
//It count space,textnode,htmlelement.
/*var target = document.getElementById("test");

var find = target.hasChildNodes();
console.log(find);*/
