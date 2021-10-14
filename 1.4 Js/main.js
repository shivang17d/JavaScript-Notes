// type conversion ::::

let myVar;
myVar = String(34);
console.log(myVar,(typeof myVar));

// let booleanVar = true;
let booleanVar = String(true);
console.log(booleanVar,typeof booleanVar);

// let date = new Date();
let date = String(new Date());
console.log(date,(typeof date))

// let arr = [1,2,3,4,5];
let arr = String([1,2,3,4,5]);
console.log(arr,arr.length,(typeof arr))

let i = 8;
console.log(i.toString()); 
console.log(i); //blue color --> integer

let j = true;
console.log(j.toString()); 

let k = new Date();
console.log(k.toString()); 

console.log('\n\n')

let stri = "3444";
// let stri = Number("3444");
// let stri = Number("34d44"); //NaN
// let stri = Number(true);
// let stri = Number(false);
console.log(stri,(typeof stri))


console.log('\n\n')


let number1 = '34';
// let number1 = parseInt('34');
// let number1 = parseInt('54.45');
// let number1 = parseInt('54.85');
// let number1 = parseFloat('54.45');
console.log(number1,(typeof number1));


console.log('\n\n')


let n2 = 34.6748;
// let n2 = 34.3748;
console.log(n2.toFixed());
console.log(n2.toFixed(3));
console.log(n2.toFixed(7));

console.log('\n\n')


// type coercion :::Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. 
let mystr = "698";
// let mystr = Number("698");
let mynum = 34;
// in Js number is converted in string and then concatenated
console.log(mystr + mynum);

