/*
Element selectors:
1. Single Element selector
2. Multi Element selector
*/

/////////////////1. Single Element selector//////////////


let element = document.getElementById('myfirst');
console.log(element);


// let element = document.getElementById('myfirst');
// element = element.className;
// console.log(element);


// let element = document.getElementById('myfirst');
// element = element.childNodes;
// console.log(element);   //Node -> text node -> 'child 1'


// let element = document.getElementById('myfirst');
// element = element.parentNode;
// console.log(element);


// let element = document.getElementById('myfirst');
// element.style.color = 'red'
// console.log(element);


// let element = document.getElementById('myfirst');
// element.innerText = 'Harry is a good boy';   //Changing inner text
// console.log(element);


// let element = document.getElementById('myfirst');
// element.innerHTML = '<b> Harry is a good boy </b>';
// console.log(element);
// console.log(element.innerHTML);


// let sel = document.querySelector('#myfirst');
// console.log(sel);


// let sel = document.querySelector('.child'); //First element of class child
// console.log(sel);



// let sel = document.querySelector('b'); //Please comment out from above
// console.log(sel);



// let sel = document.querySelector('h1');
// console.log(sel);


// let sel = document.querySelector('div');  //first occurrence we will get
// console.log(sel);


// let sel = document.querySelector('#myfirst'); //or
// // let sel = document.querySelector('.child');
// sel.style.color = 'green';
// console.log(sel);




//////////2. Multiple Element selector////////////////


// let elems = document.getElementsByClassName('child');
// console.log(elems);


// let elems = document.getElementsByClassName('child');
// console.log(elems[0]);


// let elems = document.getElementsByClassName('child');
// console.log(elems[1]);


// let elems = document.getElementsByClassName('child');
// console.log(elems[2]);


// let elems = document.getElementsByClassName('child');
// console.log(elems[3]);


// let elems = document.getElementsByClassName('container');
// console.log(elems[0].getElementsByClassName('child'));
// console.log(elems[1]);


// let elems = document.getElementsByTagName('div');
// console.log(elems);


//////////////////////////////////////////////////////


// let elems = document.getElementsByTagName('div');
// // We can't apply forEach  on HTML collection directly
// //Wrong:
// // elems.forEach(element =>{

// // })  

// Array.from(elems).forEach(element =>{
//     console.log(element);
//     element.style.color = 'blue';

// })


////Alernative//////////
// let elems = document.getElementsByTagName('div');
// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
//     element.style.color = 'blue';
// }
