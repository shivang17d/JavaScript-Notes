//Children,Parent and Traversing the DOM (Document object module)

// let cont = document.querySelector('.no');
// console.log(cont);


//NOTE : Consider text as a new-line


let cont = document.querySelector('.container');
console.log(cont.childNodes); //It will consider texts and comments
console.log(cont.children);//It will not consider texts and comments



// let cont = document.querySelector('.container');
// console.log(cont.childNodes); //It will consider texts and comments
// let nodeName = cont.childNodes[0].nodeName;
// // let nodeName = cont.childNodes[1].nodeName;
// // let nodeName = cont.childNodes[2].nodeName;
// // let nodeName = cont.childNodes[3].nodeName;
// console.log(nodeName);



//NODE TYPES:
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
//10. docType




// let cont = document.querySelector('.container');
// console.log(cont.childNodes);

// let nodeType1 = cont.childNodes[0].nodeType;
// let nodeType2 = cont.childNodes[0];

// let nodeType1 = cont.childNodes[1].nodeType;
// let nodeType2 = cont.childNodes[1];

// let nodeType1 = cont.childNodes[2].nodeType;
// let nodeType2 = cont.childNodes[2];

// console.log(nodeType1);
// console.log(nodeType2);




// let container = document.querySelector('div.container');
// console.log(container.children);
// console.log('//////////////////////////')
// console.log(container.children[0]);
// console.log(container.children[1]);
// console.log('//////////////////////////')
// console.log(container.children[1].children);
// console.log('//////////////////////////')
// console.log(container.children[1].children[0].children);



// let container = document.querySelector('div.container');
// console.log(container.childNodes);
// console.log(container.firstChild);
// console.log(container.firstElementChild); //Give me the first child which is element and not text or comment
// console.log(container.lastChild);
// console.log(container.lastElementChild); //Give me the first child which is element and not text or comment




// let container = document.querySelector('div.container');
// console.log(container.childNodes);
// console.log(container.children);
// console.log(container.childElementCount); //Count of child elements



// let container = document.querySelector('div.container');
// console.log(container.firstElementChild);
// console.log(container.firstElementChild.parentNode);
// console.log(container.firstElementChild.nextSibling);
// console.log(container.firstElementChild.nextElementSibling);
// console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
// console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);

