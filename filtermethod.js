let numbers=[1,2,3,4,5,6];
let evenNumbers=numbers.filter(num=>num%2===0);

console.log(evenNumbers);

let numbers1=[1,2,3,4,5,6];
let oddNumbers=numbers1.filter(num=>num %2 );
console.log(oddNumbers);
//filter with string
let names=["Kunal","Shoeb","Faizan"];
let result=names.filter(nam=>nam.startsWith("S"));
console.log(result);


let student=[
    {name:"Amit", marks:"80"},
    {name:"Neha", marks:"90"},
    {name:"Ravi", marks:"70"},
];
let passedStudents=student.filter(pass=>pass.marks>=80);
console.log(passedStudents);

//filter with index
let a=["apple","mango","banana"];
let res=a.filter((items,index)=>index % 2 ===0);
console.log(res);

//removing duplicate values
let numbers3=[1,22,3,5,6,8,6,5,4,3,4,5,6];
let uniqueNumber=numbers3.filter((value,index,self)=>{
    return self.indexOf(value)===index;
});
console.log(uniqueNumber);