// nested loops to create new array with common elements
const bobsFollowers = ['Sam', 'David', 'James', 'Kirsten'];
const tinasFollowers = ['Victoria', 'Kirsten', 'Sam'];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if(bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
};