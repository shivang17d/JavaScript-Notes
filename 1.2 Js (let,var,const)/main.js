// Variable in js: var,let,const
// let && const --> Block Scope variables (and constants)
// Variables declared with the var keyword cannot have Block Scope.

var name$ = 'harry';
var name1 = 'ha`r"ry';
var name2 = `ha'''r"ry`;
var name3 = "ha'''r``ry";
console.log(name$);
console.log(name1);
console.log(name2);
console.log(name3);


var channel;
channel = 'ShivangArena';
console.log(name$,channel);
console.log('names$ = ',name$,'\nchannel = ',channel);

var marks1 = 34 + 6; // -->pure no
var marks2 = '34' + '6'; // -->pure string
console.log(marks1, marks2);
console.log(typeof marks1,typeof marks2);
var marks3 = 34 + '6'; // Partial string // 34 treated as string
console.log(marks3);
console.log(typeof marks3);

var marks = 0;
console.log(marks);

var city = 'DELHI';  //
console.log(city);

console.log('-----------------------------------\n\n');
//--------------------------------------------------//
const n1 = 'Hari nam';  //-->Permanent
console.log(n1);
// n1 = 'harry';  //---> we can't override const
// console.log(n1);
// const fruit;  //--> Can't do this

//---------------------------------------------------//

console.log('-----------------------------------');

let n2 = 'Hari nam';  
// var n2 = 'Hari nam';  
console.log(n2);
n2 = 'harry';  //---> we can override let / var
console.log(n2);
let fruit2;  //--> Can do this
// var fruit2;  //--> Can do this

console.log('-----------------------------------');

//---------------------------------------------------//
console.log('\n\nlet:');
{
    let city = 'Rampur';  //line 31
    console.log(city);
    city = 'Kolkata'
    console.log(city);
    console.log(marks);
    let a = 3;  //defined within this block

}
console.log(city);
// console.log(a); // error

//---------------------------------------------------//
console.log('\n\nlet:');
let c = 5;
console.log(c);
{
    let c = 3;
    console.log(c);     //Not-Permanent Change

    // c = 34;
    // console.log(c);  //Permanent Change ###
}
console.log(c);

//---------------------------------------------------//

console.log('\n\nconst:');
const b = 45;
console.log(b);
{
    const b = 73;
    console.log(b);

    // // Error
    // b = 34;
    // console.log(b);


    const m = 1;
}
console.log(b);
// console.log(m); //error
//---------------------------------------------------//
////// NOTE  /////////////
console.log('\n\nvar:');
var t = 15;
console.log(t);
{
    var t = 33;
    console.log(t); ///PERMANENT CHANGES

    // or

    // t = 23;
    // console.log(t); ///PERMANENT CHANGES

    var nm = 9;
}
console.log(t);
console.log(nm); //doesn't give error
//---------------------------------------------------//

console.log('\n\n');
const arr1 = [12,1,2,3,4,2];
// arr1 = [34,23,21] // wrong // sice arr1 is const ,we can't redeclare
console.log(arr1);
arr1.push(45);
console.log(arr1);
arr1.pop(45);
console.log(arr1);

//---------------------------------------------------//

console.log('\n\n');
let arr2 = [12,1,2,3,4,2];
console.log(arr2);
arr2 = [34,23,21]; // since arr2 is let,we can redeclare
console.log(arr2);
//---------------------------------------------------//

console.log('\n\n');
var arr3 = [12,1,2,3,4,2];
console.log(arr3);
arr3 = [34,23,21];// since arr3 is var ,we can redeclare
console.log(arr3);

