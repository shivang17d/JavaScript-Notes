// Arrays and Objects in Js
let marks = [34,23,24,23,73,25];
const fruits = ['Orange','Apple','Pineapple'];
const mixed = ['str',89,[3,5]]; ////////////

const arr  = new Array(23,123,21,'Orange');
console.log(arr);
console.log(mixed);
console.log(mixed[2]);
console.log(mixed[2][0]);
console.log(mixed[2][1]);
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);


console.log(arr.length);
console.log(Array.isArray('jdskd'));
console.log(Array.isArray(arr));

let arrelement = arr[0];
console.log('element  : ',arrelement);
console.log('element  : '+arrelement);

arr[0] = 'harry';
console.log(arr);

console.log('******\n\n');

console.log(marks);
let value1 = marks.indexOf(23);
let value2 = marks.lastIndexOf(23);
console.log(value1,value2);

console.log('*******\n\n');

//Mutating or Modifing Arrays
marks.push(3564);
console.log(marks);

marks.unshift(1009); //Adding in beginning
console.log(marks);

marks.pop();
console.log(marks);

marks.shift();  //-------------->NOTE its effect //removing 1009
console.log(marks);

marks.splice(1,2); //start from index 1 and remove 2 elements
console.log(marks);

marks.reverse();
console.log(marks);

let marks2 = [1,2,3,7];
marks = marks.concat(marks2);
console.log(marks);


//OBJECTS:
let myobj = {
    name1 : 'Shivang',
    channel : 'ShivangArena',
    isActive : true,
    marks : [1,5,3,6],
    'last name' : 'Gupta'
}
console.log(myobj);
console.log(myobj.name1);
console.log(myobj.channel); //same
console.log(myobj['channel']);  //same
console.log(myobj.isActive);
console.log(myobj.marks);

//for 'space in key' use below syntax
console.log(myobj['last name']);

