/*document.getElementById("header").onclick =abc();
function abc(){
	document.getElementById("header").style.background= "greeen";
}*/
 /*syntax of addEventListner
document.getElementById("ID").addEventListener("click",functionName);
or 
document.getElementById("ID").addEventListener("eventName", function(){

});*/
// document.getElementById("header").addEventListener("click",abc);
// function abc(){
// 	document.getElementById("header").style.background = "grey";

// }

// Multiple Events apply

// document.getElementById("header").addEventListener("mouseenter",abc);

// document. getElementById("header").addEventListener("click", function(){
// 	document.getElementById("header").style.border ="10px solid red";
// })

// function abc(){
// 	document.getElementById("header").style.background ="green";
// }


//Multiple function on one event

// document.getElementById("header").addEventListener("click",abc);
// document.getElementById("header").addEventListener("click",function(){
// 	document.getElementById("header").style.border = "5px dotted grey";
// });

// function abc(){
// 	document.getElementById("header").style.background = "purple";
// }

//when we pass a parameter

// document.getElementById("header").addEventListener("mousemove",abc);
//  document.getElementById("header").addEventListener("mousemove", function(){
//  	this.style.border= "10px solid red";

//  })

//    function abc(){
//    	document.getElementById("header").style.color ="white";
//    }


//removeEventListener() method

//element.removeEventListener("dblclick", function())

document.getElementById("header").addEventListener("mousemove",abc);

document.getElementById("header").addEventListener("click",xyz);

function abc(){
	document.getElementById("header").style.background ="green";

}
function xyz(){
	document.getElementById("header").removeEventListener("mousemove",abc);
}




