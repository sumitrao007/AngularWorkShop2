//core java Array int a[]={4,5}
// int a[]=new int[5];
// In Typescript Array is growable & shrinkable
var a1 = [4, 5, 6, 7, 8, 9];
var a2 = [4, 5, 6, 7];
var a3 = [4, 'sumit', 2.5, true, 'Raokhande'];
var a4 = [];
// for (let i = 0; i < a1.length; i++) {
//    console.log(`a1[${i}]=${a1[i]}`)    
// }
// console.log("Array Value is "+a1);
// console.log("Array Using Join "+a1.join("  "))
//foreach
// a1.forEach((myvalue,i)=>{
//     console.log("value is "+myvalue+" & index is "+i)
// });
var a5 = [];
//1 using Push & Pop Method
// 2 Using Splice method
//1 push & pop LIFO
a4.push(12);
// console.log(a4)
a4.push(44, 25, 36, 41);
// console.log(a4);
var res = a4.pop();
// console.log("Poped Value is "+res);
// console.log(a4);
var a6 = [12, 11, 52, 45, 66, 78];
a6.splice(3, 0, 99);
// console.log(a6);
a6.splice(2, 1);
// console.log(a6);
a6.splice(1, 2);
// console.log(a6);
a6.splice(2, 1, 100);
// console.log(a6);
a6.splice(2, 2, 200);
// console.log(a6);
//slice
// It copy a section of array 
var a7 = [11, 2, 4, 5, 33, 6, 7, 88, 9, 34, 10];
console.log(a7);
var temp = a7.slice(1, 6);
console.log("Copied Array is " + temp);
