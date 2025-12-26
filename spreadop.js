var arr=[-1,2,3,43,5,367];
console.log(Math.min(...arr));

//with 2 array
let arr1=[1,2,3,4];
let arr2=[...arr1]; 
    console.log(arr2);
//merge array.
let a=[1,2,3,4];
let b=[1,2,3,4];
let c=[...a,...b];
console.log(c);

//add element to an array

let m=[1,2,3,4,5];
let newm=[0,...m,7];
console.log(newm);

//spread operator with objects
let x={name:"Noorain",age:22};
let y={...x}
console.log(y);

//merge objects with spreadopoerator
let a5={a:1};
let a6={b:2};
let a3={...a5,...a6};
console.log(a3);

//with function calls

function add(x,y,z){
    return x+y+z;
}
let nums=[5,10,15];
console.log(add(...nums));

//with string
let str="JS";
let str1=[...str];
console.log(str1);