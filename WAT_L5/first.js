console.log("hello")
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(b); // 10 ReferenceError: b is not defined
     console.log(c);
}
console.log(a); // 
 // ReferenceError: c is not defined

const hello = "hello";
console.log (typeof(hello))
const str = " i am a string";
 
console.log (str.lastIndexOf("g")) // 12
console.log (str.indexOf("i")) // 1
console.log (str.slice(5,7)) // am
console.log (str.replace("string", "variable")) // i am a variable

let arr = [1,2,3,4,5];
for (let val of arr){
    console.log(val);
}

const person= {
    id : 1,
    name :"John",
    age : 30,
    address:{
        city: "New York",
        country: "USA"
    }

}
const jsonString = JSON.stringify(person);
console.log(jsonString);

const  personOnj = JSON.parse(jsonString);
console.log(personOnj)


function greet(name){return name}

console.log(true? greet(hello):'No greet')

const emplooyes =[
    {id:1, name:"hello", salary: 4000, skills:['helloo', 'ji']},
    {id:2, name:"john", salary: 5000, skills:['johnny', 'doe']},
    {id:3, name:"smith", salary: 6000, skills:['smitty', 'jones']},  
         
]

emplooyes.forEach((emp) =>  console.log(emp.name))
emplooyes.map((emp)=>{
    if (emp.salary >4500){
        console.log(emp.name)
        return
    }
})
emplooyes.filter((emp)=>{
    if (emp.salary >4500){
        console.log(emp.name)
    }

})

console.log (emplooyes.map((k)=>k.name).join(','))
console.log(emplooyes.map((s)=>s.salary).reduce((p,c)=>p+c,0));
console.log(emplooyes.filter((x)=>x.salary>4999))

console.log(emplooyes.some((e,i)=>{
    console.log(`${i} : ${e.name}   `);
    return e.salary>5500
}))