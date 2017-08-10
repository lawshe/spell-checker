import basic from '../constants/basic-words';

const allBasicWords = basic.operations.concat(basic.things, basic.qualities);

const wordsToObj = (arr) => {
  // create an object where keys are words from input text and values are arrays, containing indices where words occur
  var wordsObj = {};
  arr.forEach((word, idx) => {
    var w = word.toLowerCase();
    if (!wordsObj[w]) {
      wordsObj[w] = [idx];
    } else {
      wordsObj[w].push(idx);
    }
  });
  return wordsObj;
}

const makeArray = (str) => {
  return str ? str.match(/\w+/g) : [];
}

const spellCheck = (str) => {
  // Using BASIC English to spell check.
  var misspelled = {};
  if (str) {
    var strArr = makeArray(str);
    var wordsObj = wordsToObj(strArr);
    // Object keys are words from user input
    for (var word in wordsObj) {
      if(allBasicWords.indexOf(word) === -1) {
        misspelled[word] = wordsObj[word];
      }
    }
  }
  return misspelled;
}

export default {
  makeArray,
  spellCheck
}
