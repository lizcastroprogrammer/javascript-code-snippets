// This is the array that contains numbers for you to work with
var myArray = [1, 2, 5, 6, 12, 23, 15, 31];

// This array should only contain even numbers
var evenArray = [];

function filterArray(myArray, isEvenCallBack) {
  // TODO: use filterArray to determine if a number is even or odd.
  //If the number is even, add it to the array 'evenArray'
  evenArray = myArray.filter(number => {
    return (isEvenCallBack(number));
  })

  return evenArray;
}

// This function should return 'true' if a number is even and 'false' if a number is odd
function isEvenCallBack(number) {
  // TODO: use the mod operator (%) to determine if number is even or odd
  if (number % 2 === 0) {
      console.log(number)
      return true;
  } else {
      return false;
  }
}
console.log(filterArray(myArray, isEvenCallBack))
console.log(evenArray)