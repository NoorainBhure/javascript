
// //10000 means 10 sec 1 sec=1000milisecond
// //settime out only execute once
// setTimeout(()=>{
//     console.log("Hello Everyone ")
// },10000);


//setinetral is used to display every after the set timer
// setInterval(()=>{
//     console.log("Hello Universe")
// },1000);

let data=setInterval(()=>{
    console.log("hello")
},2000);
clearInterval(data);