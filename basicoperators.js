//7+11=18
//where 7 and 11 are operands
//+ is operator 

//unary 
x=-1;
x=-x;
console.log(x);

x=-1;
x=+x;
console.log(x);

//binary operators (+,-,*,/,%,**)

let a=15, b=10;
let sum=a+b;
console.log(sum);

let a='hi',b='hello';
let sum=a*b;
console.log(sum);

let sum=+a++b;
console.log(sum);

let a=5, b=15;
let sum=Number(a)+Number(b);
console.log(sum);

//assignment operator (==, +=, -=, /=, *=)

let a=b=c=12;
console.log(a,b,c);

//modify in place

let x=12;
//x=x+5;
x+=5;
console.log(x);

//increment and decrement

let x=15;
x=x++
console.log(x);
x=x--
console.log(x);
x=--x
console.log(x);
x=++x
console.log(x);

let a=12;
let b=13;

let c=++a + b--;

console.log(c);