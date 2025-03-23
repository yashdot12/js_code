//equals to(==) just checks values
let a = 5 == '5';
console.log(a);//true
//equals to(===)
let b = 5 === '5';
console.log(b);//false
//(!= not equals to) just checks values 
let c = 5 != '5';
console.log(c); a//false
//(!== strictly not equals to) check value and data types
let d = 5 !== '5';
console.log(d, a, c);//true
//logical operator
// && and ||
let e = (5 == 5) || (5 != 5);
let f = (5 == 5) && (5 != 5);
console.log(e, f);
//increment and decrement operators
let g = 9;
console.log(g++);//preincrement
console.log(++g);//postincrement
//decrement operators
let h = 10;
console.log(--h, h--);
console.log(h);
/*edge cases
increment and decrement on non numeric values
javascript automatically converts non-numeric values to numbers(string as a number) when using ++ or --
*/
let str = "5";
console.log(str++);
console.log(++str);

let str1 = 'hello';
console.log(str1++);//NaN not a number (output) because it can not convert to a number

let val;
val++;
console.log(val);//(undefined is Nan);

let val1 = null;//output will be 1 because null is treated as a 0
++val1;
console.log(val1);

//combining it with other operators
let x = 5;
x += ++x;

console.log(x);

let y = 5;
y += y++;
console.log(y);