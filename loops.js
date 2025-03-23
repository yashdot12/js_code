//for loop 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//while loop
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}
// do while loop
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);
//for in loop - itterates over the keys/properties of an object.used for objects but not suitable for arrays
const fruits = ['apple', 'orange', 'cherry', 'orange',]
for (let index in fruits) {
    console.log(index);// output 0 1 2 3
    console.log(fruits[index]);// output apple orange cherry orange
}
const bio = {
    name: "John Doe",
    age: 30,
    city: "New York"
}
for (let key in bio) {
    console.log(key + ':' + bio[key])
}
// for of loop iterable objects like arrays strings or maps.
let check = [1, 'yash', 3, 4, 5]
for (let obj of check) {
    console.log('for of loops' + ':' + obj);
}
let str = 'hello';
for (let obj of str) {
    console.log(obj);
}
const usermap = ([["name", "alice"],
["age", "alice"],
["age", 25],
["city", "paris"]]);
for (let [key, value] of usermap) {
    console.log(`${key}:${value}`);
}
//advanced concepts in loops
//break statements-immediately exit the loop as break conditions met
for (let k = 0; k < 10; k++) {
    if (k == 5) break; //
    console.log(k);
}
//continue statment:- its skip that part were continue conditions met
for (let i = 0; i < 10; i++) {
    if (i === 6) continue;
    console.log(i);
}
//nested loops- loops within loops
for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 2; j++) {
        console.log(`i:${i},:j:${j}`)
    }

}
//which loop to use when
/* use for - when you know the number of iteration 
 use while-when the number of iterations depends on a condition .
use do_while -when the code must be exexuted at least once.
us.
 for_in-for objects.
 use for_of-for arrays ,strings ,or other itearbles.
*/