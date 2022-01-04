const input = 'hello fish friends';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log(i);
  for (let j = 0; j < vowels.length; j++) {
    if (vowels[j] === input[i]){
      resultArray.push(input[i]);
    };
  } if (input[i] === 'e') {
    resultArray.push(input[i]);
  } if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
};

var resultArrayUpperCased = resultArray.map( upperCase => upperCase.toUpperCase());


console.log(resultArrayUpperCased.join(""));