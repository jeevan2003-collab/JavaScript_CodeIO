let age=22;
console.log((age), typeof(age));
age = String(age)
console.log((age), typeof(age));

//coercion method

console.log('2'/'2');
console.log('2'-'2');
console.log('2'*'2');
console.log('2'+'2');
console.log('2'**'3');

//string conversion 

let isadult=true;
console.log((isadult), typeof(isadult))

isadult=null;
console.log((isadult), typeof(isadult))

//Number conversion

let age ='true';
console.log(age, typeof(age));

age=Number(age);

console.log(typeof(age));
console.log(age);

let age =null;
console.log(age, typeof(age));

age=Number(age);

console.log(typeof(age));
console.log(age);

let age =undefined;
console.log(age, typeof(age));

age=Number(age);

console.log(typeof(age));
console.log(age);

let x='0';

console.log(typeof x);

x=Boolean(x);

console.log(typeof x);
console.log(x)