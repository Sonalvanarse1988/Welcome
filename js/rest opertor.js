// function add (a,b){
//     console.log(a+b);
// }
// add(3,4);

// function add (...number){
//      console.log(number);

//  }
//  add (3,4,5,6,7);

//  function add (a,...number){
//      console.log(number);

//  }
//  add(3,4,5,6,7,8,9);

 function add(a,b,...number){
     let sum =0;
      for(let n of number){
         sum=sum+n
    }
     console.log(sum);
 }
  add(3,4,6,7,8,8,9);
