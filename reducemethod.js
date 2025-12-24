//reduce method only give single value
let n=[10,20,30,40];
let sum=n.reduce((total,num)=>total+num,0);//initaial value is always zero
console.log(sum);


//find maximum value
let n1=[23,3344,53,456];
let max=n1.reduce((a,b)=>a>b?a:b);
console.log(max);

let student=[
    {name:"Amit", marks:80},
    {name:"Neha", marks:90},
    {name:"Ravi", marks:70},
];
let totalMarks=student.reduce((total,student)=>{
    return total+student.marks;

},0);
console.log(totalMarks);

//count occurences

let a=["apple","mango","banana","apple","banana","orange"];
let count=a.reduce((acc,fruit)=>{
    acc[fruit]=(acc[fruit] || 0)+1;
    return acc;
},{});
console.log(count);