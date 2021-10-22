//value
let x= 20; //memory location x=123

let y =x; // memory location value y=456
 x=y;
 x=30;
 console.log(y);

//reference
 let p = {
     value:10
 };
 let q = p; // q memory location 999
  p.value = 30;
 console.log(q);
 
