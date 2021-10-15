// Manipulating Websites using JS Window object

// window is global object

let a = window;
console.log(a);

// window.alert('Hello Shivang'); //or
// alert('Hello Shivang');

// a = prompt('This will destory your computer. Type your name');
// console.log(a);

// a = confirm('Are you sure you want to delete this page?');
// console.log(a);


let b = window.document;

// b = window.innerHeight;  //or
b = innerHeight;
console.log(b);
b = innerWidth;
console.log(b);


// b = windows.scrollX;   //or
b = scrollX;
console.log(b);
b = scrollY;
console.log(b);

b = location;
console.log(b);


// Do this in console for particular website :
// location.reload()  ---> reloading
// location.href  ----> current web page url
// location.href = 'website-link/url'  ----> going to the given url



b = location.toString();
console.log(b);


console.log('///////////////////////////////////');


b = window.history;
console.log(b);

// After wisting diff website on same tab do this in console :
// history.length
// history.go(-1) (one step behind)
// history.go(+1) (one step ahead)
