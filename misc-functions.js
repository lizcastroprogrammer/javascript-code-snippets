////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//takes array as an argument and transforms it into all uppercase and adds '!' to the end, creates new array
const shoutGreetings = array => {
    //newArray is declared inside the function so it can be an empty array each time the function is called
    let newArray = [];
   for (let i = 0; i < array.length; i++) {
    let newString = array[i].toUpperCase();
    newArray.push(newString + '!');
   }
   return newArray;
  };
  
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
  //Prints [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
  console.log(shoutGreetings(greetings))


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//function to square each number in an array by 2 
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:

const squareNums = array => array.map(number => Math.pow(number, 2));

squareNums(numbers);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//function to log a statement to the console for each item in an array
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = (array) => {
  array.forEach(politelyDecline);
}

declineEverything(veggies);

const acceptEverything = (array) => {
  array.forEach(element => console.log(`Ok, I guess I will eat some ${element}.`));
};

acceptEverything(veggies);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//function that takes an array and creates a new array with all strings prepended with 'baby'
const convertToBaby = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      let newString = 'baby ' + array[i];
      newArray.push(newString);
    }
    return newArray;
  }
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)); 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //function that takes an array and creates a new array with all elements in reverse
  const reverseArray = (array) => {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i]);
    }
    return newArray;
  };

  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//