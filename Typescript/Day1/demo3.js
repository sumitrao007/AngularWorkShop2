// Anonymous Function
var temp1 = function () {
    console.log("Funct type 1");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
// var res=temp2(4,4);
// console.log(`Addition is ${temp2(2,3)}`);
// Fat Arrow Function/ Arrow Function
var temp3 = function () {
    console.log("Fat arrow function is called....");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
// console.log(`Fat Arrow is ${temp4(6,6)}`);
// optional parameter functiuon
function add1(a, b) {
    console.log("Value Of a is " + a); //2
    console.log("Value Of b is " + b); //undefined
    console.log("Addition Of a+b is " + (a + b)); //NAN =>Not a Number
}
// add1(2);
//     function add2(a?:number,b:number){
//         console.log("Value Of a is "+a);//2
//         console.log("Value Of b is "+b);//undefined
//         console.log("Addition Of a+b is "+(a+b));//NAN =>Not a Number
// }
// add2(2);
function add2(a, b) {
    console.log("Value Of a is " + a); //2
    console.log("Value Of b is " + b); //undefined
    console.log("Addition Of a+b is " + (a + b)); //NAN =>Not a Number
}
// add2();
// default parameter function
function add3(a, b) {
    if (b === void 0) { b = 6; }
    console.log("Value Of a is " + a); //2
    console.log("Value Of b is " + b); //undefined
    console.log("Addition Of a+b is " + (a + b)); //NAN =>Not a Number
}
// add3(5);
add3(5, 2);
