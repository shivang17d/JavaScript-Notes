// Arrow Functions in Js
const greet = function(){
    console.log('Hello Gentlemen');
}
greet();

// Alternative

const greeting = () =>{
    console.log("Good Morning");
}
greeting();

///////////////////////////////////////////

const say = function(){
    return "Good Night";
}
console.log(say());

// Alternative

const saying = () => "Good Nighty";  //IMP
console.log(saying());

///////////////////////////////////////////

//Object return  //IMP
const temp = () => ({name: "Shivang" , age: 20});
console.log(temp());

//////////////////////////////////////////

// Single Parameters do not require parenthesis but you will have
// to put parenthesis if there are multipe parameters


//Correct
// const main = (name) => "Good Morning " + name;
// console.log(main("Shivang"));

//Correct
// const main = name => "Good Morning " + name;
// console.log(main("Shivang"));

//Correct
// const main = (name,ending) => "Good Morning " + name +" "+ ending;
// console.log(main("Shivang","Bye"));

// Incorrect
// const main = name,ending => "Good Morning " + name +" "+ ending;
// console.log(main("Shivang","Bye"));
