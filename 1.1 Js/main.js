console.time('Your code Took');
console.log('hello console');
console.log("hello console");
console.log(4+34);
console.log(34);
console.log(typeof 34);
console.log(34.14);
console.log(typeof 34.14);
console.log(true);
console.log(typeof true);
console.log('\n\n');


// An array is a type of object used for
// storing multiple values in single variable.
console.log([34,2,1,2]);
console.log(typeof ([34,2,1,2])); 
console.log('\n\n');
var l = ["2",3,4,5,"a",23,false];
console.log(l);
console.log(typeof l);
console.log('\n\n');


// JavaScript objects are containers for named values
// called properties or methods.
console.log({harry:'this',marks:34});
console.log(typeof {harry:'this',marks:34});
console.table({harry:'this',marks:34});
console.table(typeof {harry:'this',marks:34});
console.log('//////////////////');
var car = {type:"Fiat", model:"500", color:"white"};
console.log(car['type']);
console.log(car.type);
console.log(typeof car);
console.log(car);
console.table(car);
console.log('\n\n');

console.warn('This is a warning');
console.error('This is an error');
console.log('\n\n');


var age1 = 34;
var age2 = 45;
console.log('////////////////////')
console.assert(age1 > age2,'age1 is not greater than age2');
console.log('////////////////////')
console.assert(age1 < age2,'age2 is not greater than age1');
console.log('////////////////////\n\n')


console.timeEnd('Your code Took');
// console.clear();
