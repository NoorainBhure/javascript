let n=[10,20,30];
let[a,b,c]=n;
console.log(a);
console.log(b);
console.log(c);

//if we want specific element 
let n1=[10,20,40,50,60,30];
let[a1,,,a4]=n1;//if we want to skip one elemet one coms if we want to skip 5 elemnt 5 coma
console.log(a1);
console.log(a4);


//defaults value
let color=["red"];
let [c1,c2="blue"]=color;//c1 will be default value ie red ie in the array
console.log(c1);
console.log(c2);
