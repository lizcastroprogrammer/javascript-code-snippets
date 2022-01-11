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
//function to sort an array in descending order
const sortYears = array => {
    let newArray = [];
    let arrayElement = array.sort().reverse();
    newArray.push(arrayElement);
    return newArray;
  }
  
  const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
  // Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
  console.log(sortYears(years));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//function to take two arrays and create a new array with the elements that are the same
const justCoolStuff = (array1, array2) => {
    let newArray = [];
    array1.filter(element => {
      if(array2.includes(element)) {
        newArray.push(element);
      }
    });
    return newArray;
  };
  
  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  
  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ] 
  console.log(justCoolStuff(myStuff, coolStuff))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//function to iterate over an array of objects and determine if property meets a condition
const isTheDinnerVegan = array => {
    for ( let i = 0; i < array.length; i++) {
      if (array[i].source !== 'plant') {
        return false;
      } else {
        return true;
      }
    }
    };
  
  const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
  // Should print false  
  console.log(isTheDinnerVegan(dinner))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//function to sort an array of objects based on one of their property's values
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];


const sortSpeciesByTeeth = array => {
  const newArray = array.sort(function (a, b) {
  return a.numTeeth - b.numTeeth;
  });
  return newArray;
};

console.log(sortSpeciesByTeeth(speciesArray))

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////