let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

//transforms the story string to an array
let storyWords = story.split(' ');

//filters/iterates through storyWords array and creates a new array that meets the condition given
let betterWords = storyWords.filter(function(word) {
  //finds and returns the words that AREN'T included in the unnecessaryWords array so that filter can create a new array of those words
  return !unnecessaryWords.includes(word);
});
//filters the storyWords array and builds a new array with the overused words found
let overusedWordCount = storyWords.filter(function(word) {
  return overusedWords.includes(word);
});

let overusedWordCountNum = overusedWordCount.length;
//declares variables to be used to count the number of sentences
let period = '.';
let exclamationPoint = '!';
let sentenceCount = 0;
//function to count the number of sentences
let sentenceCountFunction = function(betterWords) {
  for (i = 0; i < betterWords.length; i++) {
    if(betterWords[i].includes(period)) {
      sentenceCount +=1;
    } else if(betterWords[i].includes(exclamationPoint)) {
      sentenceCount +=1;
    }
  }
};

sentenceCountFunction(betterWords);

console.log(betterWords.length);
console.log(sentenceCount);
console.log(overusedWordCountNum);

console.log(betterWords.toString());
