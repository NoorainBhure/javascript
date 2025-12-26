const multiply=(...nums)=>{
    return nums.reduce((a,b)=>a*b);
};
console.log(multiply(2,3,4));