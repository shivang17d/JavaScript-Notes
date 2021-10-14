for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('///////////////////////////');

let j = 0;
while (j < 10) {
    console.log(j + 1);
    j++;
}

console.log('///////////////////////////');

let k = 0;
do {
    console.log(k + 1);
    k++;
} while (k < 10);

console.log('///////////////////////////');

let r = 0;
do {
    console.log(r + 1);
    if (r == 5) {
        break;
    }
    r++;
} while (r < 10);
console.log('done');

console.log('///////////////////////////');



let l = 0;
do {
    if (l == 5) {
        l++;
        continue;
    }
    console.log(l + 1);

    l++;
} while (l < 10);
