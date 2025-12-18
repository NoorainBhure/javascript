let student=["Faizan","Noorain", "Kunal","Shoeb"]
let data=[10,"HELLO" , true,{name:"Boss"}]
// // console.log(data[0]);//Accessing array
// // console.log(student[2]);//Accessing array
// // console.log("*************");

// // for(i=0;i<student.length;i++){//accessing the element through loop
// //     console.log(student[i])
// // }

// // console.log(student.length);//to find the lenght of an array
// // //Common arrray methods
// // student.push("Kunal");

// // for(i=0;i<student.length;i++){
// //     console.log(student[i])
// // }
// // student.pop();

// // for(i=0;i<student.length;i++){
// //     console.log(student[i])
// // }


// // for each method
// // student.forEach(function(item)){
// //     console.log(item)
// // }

// //to acces thgrough the index value
// // console.log("Welcome"+ student.at(3))

// // student.unshift("Naufil");//to aadd element at the  beginning
// // for(i=0;i<student.length;i++){
// //     console.log(student[i]) }

// student.shift();//delete first element
// for(i=0;i<student.length;i++){
//          console.log(student[i])

// }
// console.log(student.includes("avenger"));//avenger nhi hai isliye false aaya


// console.log(student.find(str=>str=="Ali"));//to find we have to add str and a arrow function



// // console.log(typeof student);//to get which form of o/p is
// let data1=[1,2,3,4,5,1,4,5,1];


// // let combinedArray=student.concat(data);//for two arrays
// // console.log(data)
// // let combinedArray=student.concat(student,data);
// // console.log(combinedArray);


// //sort method
// data1.sort();
// console.log("After Sort" + data1);
// data1.reverse();//Reverse method

// console.log("After Reverse" + data1);

// //slice mathod
// console.log(data1.slice(1,5));//isme  index 1 se (5-1)=4 tak dekhe ga

let data3=[12,23,23,45,67,89,91];
// //splice method
// data3.splice(1,0,15,25);//isme zero likhe toh toh add krega and array me  zero elemnt ko delete krega and jo  bhi h woh display krega or zero nhi likhe toh only woh hi index pr woh add krega

// console.log(data3);

console.log(data3.indexOf(23));


let str1=["Apple" ,"Banana"]
let str2=["Red" ,"Yellow"]
let str3=str1.join(''+ str2+'')
console.log(str3)