//Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

function cleanString(str) {
  return str.replace(/[^a-zA-Z]/g, '');
}

function wordSizes(string) {
  if (!string.trim()) return {};
  
  let wordFrequency = {};
  let words = string.split(' ');

  words.forEach((word) => {
    let cleanWord = cleanString(word);
    let wordLength = cleanWord.length;
    if (!wordFrequency.hasOwnProperty(wordLength)) {
      wordFrequency[wordLength] = 0;
    };
    wordFrequency[wordLength] += 1;
  });

  return wordFrequency;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}