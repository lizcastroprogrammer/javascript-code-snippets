//sets constant variable myAge to the number 32
const myAge = 32;
//variable earlyYears is set to 2
let earlyYears = 2;
earlyYears *= 10.5;
//creates variable laterYears and assigns it the value of myAge minus 2
let laterYears = myAge - 2;
//multiplies and reassigns laterYears by 4
laterYears *= 4;
//declares and assigns myAgeInDogYears to the sum of earlyYears and laterYears
let myAgeInDogYears = earlyYears + laterYears; 
//declares and assigns myName to a string and uses toLowerCase method on it
let myName = 'Elizabeth';
myName = myName.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);