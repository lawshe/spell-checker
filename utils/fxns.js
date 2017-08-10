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
  // Using BASIC English to spell check. Also considering plural cases on `basic.things` words
  var misspelled = {};
  if (str) {
    var strArr = makeArray(str);
    var wordsObj = wordsToObj(strArr);
    // Object keys are words from user input
    for (var word in wordsObj) {
      if(allBasicWords.indexOf(word) === -1) {
        // check if plural thing
        if (word.slice(-1) === 's' && basic.things.indexOf(word.slice(0, -1)) !== -1) {
        } else if (word.slice(-3) === 'ies' && basic.things.indexOf(word.slice(0, -3) + 'y') !== -1) {
        } else if (word.slice(-2) === 'es' && basic.things.indexOf(word.slice(0, -2)) !== -1) {
        } else{
          // not in list and not plural
          misspelled[word] = wordsObj[word];
        }
      }
    }
  }
  return misspelled;
}

export default {
  makeArray,
  spellCheck
}
