var myPromise= new Promise((success,reject)=>{
    var userId="noorain";
    var password="test@12345";
    if(userId==="noorain" && password==="test@12345"){
        success();
    }
    else{
        reject();
    }
});
myPromise
.then(()=>{
    console.log("Correct User ID and Password");
})
.catch(()=>{
    console.log("Incorrect user Id & password");
})