/////////////// Primitive data types////////////
// String::
let name1 = "harry";
console.log("My name is "+ name1);
console.log("My name is",name1);
console.log("Data type is "+ (typeof name1));

let name2 = 'shivang';
console.log("My name is "+ name2);
console.log("Data type is "+ (typeof name2));

console.log('\n\n');

// Numbers::
// let marks = 34;
let marks = 34.45;
console.log("Data type is "+ (typeof marks ));

//Boolean::
let isDriver = true;
console.log("Data type is "+ (typeof isDriver ));

console.log('\n\n');

//null :: primitive data type but bogus return value in javascript is object
let nullVar = null;
console.log("Data type is "+ (typeof nullVar ));

// undefined ::
let undef = undefined;
console.log("Data type is " + (typeof undef));

////////////////// Reference data types////////////////////////
console.log('\n\n\n');
//Arrays
let myarr = [1,2,3,4];
// let myarr = [1,2,3,4,false];
// let myarr = [1,2,3,4,"string"];
console.log("Data type is " + (typeof myarr));

console.log('\n\n\n');

// Object Literals
let stMarks = {
    harry: 34,
    Shubham: 36,
    RohanDas: 34,
    // RohanDas: '34',
}
console.log(stMarks,(typeof stMarks));
console.log('\n\n\n');

function findName() {

}
console.log(typeof findName);

let date = new Date();
console.log(typeof date);
console.log(date);
