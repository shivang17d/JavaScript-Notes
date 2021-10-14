let name1 = 'SkillF';
let name2 = 'Rohan';

function greet(name, thank = 'Bye') {
    console.log(`I’m wishing you…
Laughter each single day
Overflowing blessings along the way
Promotion in your career
Friends to give you cheers
Dreams to keep you going
And all the best this life could bring.
Happy birthday ${name} !
${thank} !`);
    // return 5;
    return 'msg';
}

greet(name1, 'Thanks a lot');
greet(name1); //undefined
let val = greet(name2);
console.log(val, typeof val);

console.log('/////////////////////////////////////////')

function greet2(name, thank = 'Bye') {
    let msg = `I’m wishing you…
Laughter each single day
Overflowing blessings along the way
Promotion in your career
Friends to give you cheers
Dreams to keep you going
And all the best this life could bring.
Happy birthday ${name} !
${thank} !`;
    return msg;
}
let val1 = greet2(name2);
console.log(val1);

console.log('/////////////////////////////////////////')

//Putting function in variable mygreet
const mygreet = function (name, thank = 'Bye') {
    let msg = `I’m wishing you…
Laughter each single day
Overflowing blessings along the way
Promotion in your career
Friends to give you cheers
Dreams to keep you going
And all the best this life could bring.
Happy birthday ${name} !
${thank} !`;
    return msg;
}
let val2 = mygreet(name1, 'Thanks a lot');
console.log(val2);

const myobj = {
    name: "SkillF",
    game: function () {      //Note
        return "GTA";
    }
}
console.log(myobj.game());


arr = ['fruit', 'vegetable', 'furniture'];
arr.forEach(function (element, index, array) {
    // console.log(element,array,index);
    console.log(element, index, array);
});
