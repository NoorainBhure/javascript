function display(result){
    console.log(result);

}
function add(a,b,callback){
    let sum=a+b;
    callback(sum);
}
add(10,20,display);

//another example
function greet(name,callback){
    callback("Hello" + name);
}
greet("Noorain",function(message){
    console.log(message)
});

//arrow function with callback
function cal(a,b,callback){
    callback(a*b);
}
cal(5,4,result=>console.log(result));

//callback with settimeout function
console.log("Start");
setTimeout(()=>{
    console.log("Executed after 2 seconds");
},2000);
console.log("End");


