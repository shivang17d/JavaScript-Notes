// If Else statement
const age = 29;
// const age = 19;
// const age = 65;
if (age == 19) {
    console.log('Age is 19');
}
else if(age == 65){
    console.log('Age is 65');
}
else{
    console.log('Age is not 19')
}
console.log('------------------------------------------');

// ===  -->  check type and value both
// == ---> only value

const age1 = '65';  //string
// const age1 = 65;  
// const age1 = '19';  //string
if (age1 == '19') {
    console.log('Age is 19');
}
else if(age1 === 65){
    console.log('Age is 65');
}
else{
    console.log('Age is not 19')
}

console.log('------------------------------------------');


const age2 = 65;
if (age2 != 19) {
    console.log('Age is not 19');
}
else if(age2 == 65){
    console.log('Age is 65');
}
else{
    console.log('Age is other')
}

console.log('------------------------------------------');


// const age3 = '65';
const age3 = 65;
if (age3 != 19) {
    console.log('Age is not 19');
}

if(age3 !== 65){
    console.log('Age is not 65');
}
else{
    console.log('Age is other');
}

console.log('------------------------------------------');

const vari = 34;
if (typeof vari != undefined) {
    console.log('Vari is defined');
}
else{
    console.log('Var is not defined');
}

console.log('------------------------------------------');


const doesDrive = true;
const age5 = 2;
if (doesDrive && age5 >18){
// if (doesDrive ||age5 >18){
    console.log('You can drive'); 
}
else{
    console.log('You cannot drive');
}

console.log('------------------------------------------');

// Conditional (ternary) operator:

const age9 = 45;
// const age9 = 54;
console.log(age9 == 45 ? 'Age is 45' : 'Age is not 45');
