//ternary example1 
// function example(...){
//     return condition1 ? value
//     :condition2 ? value
//     : condition3 ? value3
//     : value;
// }
age = 10
console.log((age>15)? "hello":"hi");
setTimeout(()=>console.log("3"),2000);
console.log("run before mathi ko")

console.log("1");
console.log("2");
console.log("3")

console.log("1")
setTimeout(()=> console.log("2"), 2000);
console.log("3")

//synchronous-serially and Asynchronous unserial


let myPromise = new Promise((resolve, reject)=>{
    let sucess = true;
    if (sucess){
        resolve ("Task comp;lete sucessfully")
    }else{
        reject("something went wrong")
    }
})

