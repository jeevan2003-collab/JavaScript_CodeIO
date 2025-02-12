let isadult=false;
let person; 

let age =23;

if (age>=18)              //if(true)=always runs         //if(false)=won't runs
{
    isadult=true;
    person='adult'
    console.log(person)
}
else if (age<=60)
{
    isadult=true;
    person='overaged'
    console.log(person)
}
else if (age>12)
{
    isadult=false;
    person='teenager'
    console.log(person)
}
else if(age<12)
{
    isadult=false;
    person='child'
    console.log(person)
}
else
{
    isadult=isadult;
    person='either not born or died'
    console.log(person)
}
console.log(isadult)

let age=20;
person=(age>18)?'adult':'child';

console.log(person);