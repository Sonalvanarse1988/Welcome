

//refer image


var newElement = document.crrateElement("h2");

var newText = document.createTextNode("This is just Text");

newElement.appendChild(newText);

var target= document.getElementById("test");

target.insertAdjacentElement("beforebegin", newElement);

//target.insertAdjacentElement("afterbegin", newElement);
//document.write(target);


//newAdjacentHTML

/*var target= document.getElementById("test");

var newElement = "<h2>This is heading</h2>"

target.insertAdjacentHTML("afterend", newElement);

target.insertAdjacentHTML("beforeend", newElement);


//insertAdjacentText

var target= document.getElementById("test");

var newText ="This is Heading";

target.insertAdjacentText("beforeend",newText);


target.insertAdjacentText("beforebegin",newText);*/






//It creates a appendChild and also create a html elments .

/*tag
|
<p></p>
|
insertAdjacentElement=It creates a html element and also append the element/child*/

/*tag with text
|
<p>This is just text</p>
|
insertAdjacentHTML=It creates a html element and also append the element/child also create text*/

/*Text
|
This is just text
|
insertAdjacentText=It creates only text*/

/* It has a four types of position
beforebegin
afterbegin
beforeend
afterend*/