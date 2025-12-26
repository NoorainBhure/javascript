fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response)=>{
    if(!response.ok){
        throw new Error("Network Response was not ok");
    }
    return response.json();//parse json from response
})
.then((data)=>console.log(data))//use the data
.catch((error)=>console.error("Fetch error:",error));//handle errror