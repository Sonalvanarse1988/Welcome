//It is used to display message

  // alert("Hello World");

//confirm Box
 //confirm("Do you like Javascript"); //ok - true / cancel - false

// let a = confirm("Do you like Javascript");

//   //alert(a);
//   if(a){
//       alert("Yes");

//   } else{
//       alert("No");
//   }

  //Prompt Box - In this case we get values from users
   
//    let a = prompt("What is your name?");
//    alert(a);
//    document.write(a);

   var per = prompt("Enter your percantage !");

   if(per>=80 && per<=100){
       document.write("You are in Merit");
   }
   else if(per>=60 && per<80){
       document.write("You are in First class");
   }else if(per>=45 && per<60){
       document.write("You are in second class");
   }
   else if(per>=35 && per<45){
       document.write("You are in III class");
   }
   else if(per<35){
       document.write("You are fail!");

   }else{
       document.write("Please enter a valid percantage");
   }




