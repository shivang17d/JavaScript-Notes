// For-Each Loop 
// Syntax : array.forEach(function(currentValue, index, arr), thisValue)
// currentValue ---> Compulsory parameter and rest other optional

let arr = [2,5,6,4,2,3];

arr.forEach(function(element){
    console.log(element);
})

arr.forEach(function(element,index,array){
    console.log(element,index,array);    
})

console.log('////////////////////////////');

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);  
}

console.log('////////////////////////////');

let obj = {
    name : "Rohan Das",
    age : 78,
    type : "Dangerous Programmer",
    os : "Ubuntu"
}
for(let key in obj)
{
    console.log(`The ${key} of object is ${obj[key]}`);
}
