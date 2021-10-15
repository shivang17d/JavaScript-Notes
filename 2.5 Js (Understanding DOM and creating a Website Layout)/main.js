// Understanding DOM and creating a Website Layout
// DOM ----> Document Object Model

let a = document;
console.log(a);
console.log(typeof document);
a = document.all;
console.log(a);

console.log('////////////////////////////////////')

Array.from(a).forEach(function(element){
    console.log(element);

})

console.log('/////////////////////////////////////')

a = document.body;
console.log(a);
a = document.forms;
console.log(a);

a = document.forms[0]; //forms[0] ,forms[1]..........
console.log(a);

console.log('//////////////////////////////////////')

a = document.links;
console.log(a);

a = document.links[0];
console.log(a);

a = document.links[0].href;
console.log(a);

a = document.links[1];
console.log(a);

a = document.links[1].href;
console.log(a);
