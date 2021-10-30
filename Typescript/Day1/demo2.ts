
// How to use Function 
//1 function without paramter & without return Type
//2 function with paramter & without return Type
//3 function without paramter & with return Type
//4 function with paramter & with return Type

//1 function without paramter & without return Type
function add1(){
    console.log("U r in First Type of Function");
}

// add1();

//2 function with paramter & without return Type
function add2(a:number,b:number){
    console.log("Addition is "+(a+b));
}

// add2(2,3);

//3 function without paramter & with return Type
function add3():any{
    return (5+5+"sumit");
}

var res=add3();
// console.log("value of res is "+res);

function add3_1():number{
        return (5+4);
}

// var res1:string=add3_1();

//4 function with paramter & with return Type
 function add4(a:number,b:number):number{
    return (a+b);
 }

 console.log(`Addition is ${add4(4,4)}`)
