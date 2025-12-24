function add(...num){
let sum=0;
for(let total of num){
    sum=sum+total;
}
return  sum;
}
console.log(add(1,2,3,4,5,6,6,8,879,98,9));
console.log(add(1,2,3,9));
console.log(add(1,2,3,4,5,6,6));
console.log(add(1,2,3,8,9));
console.log(add(1,2,3,4,5,6));
console.log(add(98,9));
console.log(add(1,2,3,4,));
console.log(add(1,2,3,4,5));

//restparameter will be at last of the parameter

//restparameter with other parameter

function showDetails(name,...skills){
    console.log("Name:",name);
    console.log("Skills:",skills);

}
showDetails("Sanoj","HTML","CSS","JAVASCRIPT");
showDetails("Noorain","HTML","CSS","JAVASCRIPT");