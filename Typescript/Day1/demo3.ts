
// Anonymous Function

let temp1=function (){
    console.log("Funct type 1");
}
// temp1();

var temp2=function (a:number,b:number):number{
    return (a+b);
}

// var res=temp2(4,4);
// console.log(`Addition is ${temp2(2,3)}`);

// Fat Arrow Function/ Arrow Function

  var temp3=()=>{
        console.log("Fat arrow function is called....");
    }

    // temp3();

    var temp4=(a:number,b:number):number=>{
        return (a+b);
    }


    // console.log(`Fat Arrow is ${temp4(6,6)}`);

// optional parameter functiuon

    function add1(a:number,b?:number){
            console.log("Value Of a is "+a);//2
            console.log("Value Of b is "+b);//undefined
            console.log("Addition Of a+b is "+(a+b));//NAN =>Not a Number
    }

    // add1(2);


//     function add2(a?:number,b:number){
//         console.log("Value Of a is "+a);//2
//         console.log("Value Of b is "+b);//undefined
//         console.log("Addition Of a+b is "+(a+b));//NAN =>Not a Number
// }

// add2(2);


function add2(a?:number,b?:number){
    console.log("Value Of a is "+a);//2
    console.log("Value Of b is "+b);//undefined
    console.log("Addition Of a+b is "+(a+b));//NAN =>Not a Number
}

// add2();

// default parameter function

function add3(a:number,b:number=6){
    console.log("Value Of a is "+a);//2
    console.log("Value Of b is "+b);//undefined
    console.log("Addition Of a+b is "+(a+b));//NAN =>Not a Number
}

// add3(5);
// add3(5,2)

function add4(a:number=9,b:number){
    console.log("Value Of a is "+a);//2
    console.log("Value Of b is "+b);//undefined
    console.log("Addition Of a+b is "+(a+b));//NAN =>Not a Number
}

// add4()


