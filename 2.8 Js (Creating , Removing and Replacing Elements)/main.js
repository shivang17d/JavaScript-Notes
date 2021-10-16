let element = document.createElement('li');
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');
// element.innerText = '<b>Hello this is created by harry</b>';
element.innerHTML = '<b>Hello this is created by harry</b>';
console.log(element);


let ul = document.querySelector('ul.this');
console.log(ul);
ul.appendChild(element);
console.log(ul);


///////////////////////////////////////////////////////////////////////////



// let element = document.createElement('li');
// let text = document.createTextNode('I am a text node');
// element.appendChild(text);
// element.className = 'childul';
// element.id = 'createdLi';
// element.setAttribute('title', 'mytitle');

// let ul = document.querySelector('ul.this');
// console.log(ul);
// ul.appendChild(element);
// console.log(element);


////////////////////////////////////////////////////////////////////////////

// let element = document.getElementById('temp')
// let elem2 = document.createElement('h3');
// elem2.id = 'elem2';
// elem2.className = 'elem2';
// let tnode = document.createTextNode('This is a created node for elem2');
// elem2.appendChild(tnode);
// element.replaceWith(elem2);


////////////////////////////////////////////////////////////////////////////

// let element = document.createElement('li');
// let text = document.createTextNode('I am a text node');
// element.appendChild(text);
// element.className = 'childul';
// element.id = 'createdLi';
// let myul = document.getElementById('myul');
// myul.replaceChild(element, document.getElementById('fui'));

// myul.removeChild(document.getElementById('lui'));


////////////////////////////////////////////////////////////////////////////

// let elem2 = document.getElementById('temp')
// let pr1 = elem2.getAttribute('id');
// let pr2 = elem2.getAttribute('class');
// console.log(pr1);
// console.log(pr2);

// let ptr1 = elem2.hasAttribute('class');
// console.log(ptr1);
// let ptr2 = elem2.hasAttribute('id');
// console.log(ptr2);
// let ptr3 = elem2.hasAttribute('href');
// console.log(ptr3);


// elem2.removeAttribute('id');
// console.log(elem2);

// elem2.removeAttribute('class');
// console.log(elem2);

// elem2.setAttribute('title','myelem2title');
// console.log(elem2);


