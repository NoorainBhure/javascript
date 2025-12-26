//inversion of control(IOC) without(IOC)
function saveData(){
    console.log("Data Saved");
}
function process(){
    saveData();
}
process();

//inversion of control(IOC) using callback function
function saveData1(){
    console.log("Data Saved");
}
function process1(callback){
    callback();
}
process1(saveData1);
