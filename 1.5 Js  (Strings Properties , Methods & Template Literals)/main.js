// Strings Properties , Methods & Template Literals in JS

const name1 = 'Harry';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name1);

let html;
html = "<h1> this is hEAding</h1>" +
    "<p>thiS is my para</p>";
console.log(html);
html = html.concat('tHis', ' str2')
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);  ///note
console.log(html[3]);

console.log('/////////////');

console.log(html.indexOf('hEAding'));
console.log(html.indexOf('hEAd3272ing'));
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3));

console.log('/////////////');

console.log(html.endsWith('str2'));
console.log(html.endsWith('s2jddkd'));
console.log(html.startsWith('<'));
console.log(html.startsWith('<jddk'));

console.log('/////////////');

console.log(html.includes('hEAding'))
console.log(html.includes('hsjkskj'))

console.log('/////////////');

console.log(html.substring(1,3)); // 1,2   
console.log(html.substring(1,6)); // 1,2,3,4,5

console.log('\n\n');

console.log('/////////////////////////////');
console.log(html.slice(-4)); // last four
console.log(html.slice(0,4)); // from first four
console.log(html.split(' '));  // splits when space is there
console.log(html.split('>'));  // splits when > is there

console.log(html.replace('this','it')); //replace first occurrence

console.log('/////////////////////////////');


/////TEMPLATE LITERALS ////////////////////////////////
let fruit1 = 'Orange'
let fruit2 = 'Apple'
let myHTML = `Hello ${name1}
             <h1> This is heading </h1>
             <p> You like ${fruit1} and 
             ${fruit2} </p> `;
document.body.innerHTML = myHTML;

////////////

let a = 'Shivang';
let b = 'shivangArena';
let mycode = `${a} is good boy. His website name is ${b}`;
console.log(mycode);
