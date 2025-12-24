let n=[1,2,3,4];
let squares=n.map(function(num){
    return num*num;
});
console.log(squares);

console.log("to add +5");
let n1=[1,2,3,45,6];
let result=n1.map(n1=>n1+5);
console.log(result);
console.log("Map with index");
let a=["apple","mango","banana"];
let output=a.map((items,index)=>{
    return index +":"+items;
});
console.log(output);

console.log("Maps With Object");
let student=[
    {name:"Amit", marks:"80"},
    {name:"Neha", marks:"90"},
    {name:"Ravi", marks:"70"},
];
let names=student.map(stud=>stud.name);
console.log("names");

let student1=["noorain","faizan"];
let upperName=student1.map(name=>name.toUpperCase());

console.log(upperName);
