let ac = 10; //global variable 
function functionName(){
    let ac = 20; 
    document.write(ac);//local varibale
}
functionName();
document.write(ac);
 

var ab = "Javascript";
  function hello(){
      document.write(ab);
  }
  hello();
  document.write(ab);


//   function hello(){
//       var a ="Java";
//       document.write(a + "<br>");
//   }
// hello();
document.write (ac);