
// console.log("Hello World...")
//System.out.println();
/**/


//datatype => number(int,float,short,double,long),string(""/''),boolean,any
// mise. null & undefined,void (netural datatype)

var a1;
var a2:number=10; // Forward declaration & defination

// console.log('Value of a2 '+a2);
// console.log(`value of a2  ====> ${a2}`);
var a3:number;
// console.log("Value of a3 is "+a3);

// Type Assertion
//1 Angle Bracket
//2 as syntax
var a4;
var temp=(<string>a4);
// temp.
// as syntax
var temp2=(a4 as string );
// temp2.

//operator
// Arithemathic => +,-,/,*,%
// Logical =>&&,||,!
//Bitwise => &,| ~,!,^,<<,>>
//Ternary Oprator => condition?expression1:expression2
// Unarnary => ++,--
//Relational=> <=,>=,==, === (Strongly Equality => i.e. it checks both datatype as well as value)
// a===b
//Assignment => =,+=,-=

//Control Statement
// if,if-else, nested i-else,switch,if-else if-else, break,continue
//Loop
// while, do-while, for,foreach

var count=5;
// while(count!=0){
//     console.log("Count is "+count);
//     count--;
// }

for(var i=0;i<5;i++){
    console.log("Value of i is "+i);
}
// console.log("Value of I is After the Loop "+i);
//var Vs let Vs const

//var has global scope
// let has =>scope within nearest block 

for(let j=0;j<4;j++)
{
    console.log("Value of j is "+j);
}
// console.log("Value of j is After the Loop "+j);

const pi=3.14;
//const has a global scope



