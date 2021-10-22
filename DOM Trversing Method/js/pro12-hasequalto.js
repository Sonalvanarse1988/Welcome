//It gives a boolean value
/*It has some criteria
1> Same Node Type : means its a same in <p> or <li> ..etc

2>same nodeName : means if you have li type then its compare to only li value.etc

3> Same NodeValue : if both the value/textnode is same

4> Same childNodes:
5> Same attributes:
6> Same attribute value

those all conditions are true then it gives a answer is true.etc
 */

 var target1 = document.getElementById("list-1").firstElementChild;

  var target2 = document.getElementById("list-2").firstElementChild;

  var eqaul = target1.isEqualNode(target2);

  console.log(equal);

  var target1 = document.getElementById("list-1").firstElementChild;

  var target2 = document.getElementById("list-2").children[1];

  var eqaul = target1.isEqualNode(target2);
  
  console.log(equal);


