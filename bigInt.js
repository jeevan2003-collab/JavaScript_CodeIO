//datatype: bigInt

var num, even, odd;

sum=9007199254740991;
odd=9007199254740991+1;//correct
even=9007199254740991+2;//wrong

console.log(sum,even,odd);

//using bigInt

var num, even, odd;

sum=9007199254740991n;
even=sum+1n;//correct
odd=sum+2n;//wrong

console.log(sum,even,odd);

console.log(typeof sum, typeof even, typeof odd);          

// note: bigInt not able to run in internet explorer

//store the numbers from 1 to 10 in the single variable and and add with the current year and typeof variable 
var periyanumber=12345678910n;
sum=periyanumber+2025n;
console.log(sum,typeof(periyanumber),typeof(sum))