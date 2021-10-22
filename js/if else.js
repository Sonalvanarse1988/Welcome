//if else

//marks >=40 result pass
//marks <40 result fail

/*let marks = 20; 

if ( marks >=40){
    document.write('result:passed' + '<br/>');

}
else{
    document.write('result:failed' + '<br/>');
}*/

//marks 40 to 59 grade = B;
 //marks 60 to 80 grade = A;
//grade unknown;
let marks =38;
if (marks >=40 && marks < 60){
    document.write('grade B');
}
else if (marks >=60 && marks > 80){
        document.write('grade A');
    }
    else {
        document.write('grade unknown');
    }

    
