
var target = document.getElementById("list1").children[0];

var copyElement= target.cloneNode();

console.log(copyElement);

//In clone method we get a two values true or false by deafault value is false
//In false case it only print element/tag
//In true case its copy the element and its value also.
//Clonenode copy the target values.



document.getElementById("list2").appendChild(copyElement);