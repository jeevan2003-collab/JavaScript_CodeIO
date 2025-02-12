// <
let a=10, b=12;
result=b<a;
console.log(result, typeof(result));

// >
 a=10, b=12;
result=b>a;
console.log(result, typeof(result));

// ==
let a=10, b=12;
result=b==a;
console.log(result, typeof(result));

// ===
let a=10, b=12;
result=b===a;
console.log(result, typeof(result));

// !=
let a=10, b=12;
result=b!=a;
console.log(result, typeof(result));

// <(using unicode k=like dictionary method)
let a='spa', b='Strict';
result=b>a;
console.log(result, typeof(result));

//conversion of assignment operators:

let a=1;
let b='5';
let result= a>=b;
console.log(result);

//conversion
// <
 a='10', 
a=Boolean(a);
console.log(a, typeof(a));
b=0, 
b=Boolean(b);
console.log(b, typeof(b));

console.log(a==b);

console.log(0=='0')
console.log('0'=== 0)           

//null and undefined

console.log(null==undefined)
console.log(null===undefined);

console.log(null>0)
console.log(null<=0)
console.log(null<0)

console.log(null==0)

console.log(undefined>0)
console.log(undefined<=0)
console.log(undefined<0)

console.log(undefined==0)