async function lname(userId) {

    try{
        const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
        const user=await response.json();
        console.log(user);//log user data

    }
    catch(error){
        console.error("Error fetching user data:",error);
    }
    
}
lname(1);