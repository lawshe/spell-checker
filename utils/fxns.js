import basic from '../constants/basic-words';

const allBasicWords = basic.operations.concat(basic.things, basic.qualities);

const removePunctuation = (str) => {
  return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

const makeArray = (str) => {
  return str ? str.split(' ') : [];
}

const isPlural = (word) => {
  let result = false;

  if (word.slice(-1) === 's' && basic.things.indexOf(word.slice(0, -1)) !== -1) {
    result = true;
  } else if (word.slice(-3) === 'ies' && basic.things.indexOf(word.slice(0, -3) + 'y') !== -1) {
    result = true;
  } else if (word.slice(-2) === 'es' && basic.things.indexOf(word.slice(0, -2)) !== -1) {
    result = true;
  }

  return result;
}

const spellCheck = (str) => {
  // Using BASIC English to spell check.
  // Also considering plural cases on `basic.things` words
  let misspelled = {};
  if (str) {
    const strArr = makeArray(str);
    const inputSet = new Set(strArr);
    for (var word of inputSet) {
      let w = removePunctuation(word);
      if (!misspelled[w]) {
        if (allBasicWords.indexOf(w) === -1 && !isPlural(w)){
          misspelled[w] = true;
        }
      }
    }

    // Exceptions
    if (Object.keys(misspelled).length) {
      // First word in input can be capitalized
      if (misspelled[strArr[0]] && strArr[0][0] === strArr[0][0].toUpperCase()) {
        // Word is capitalized. Spell check lowercase version.
        if (allBasicWords.indexOf(strArr[0].toLowerCase()) != -1 || isPlural(strArr[0].toLowerCase())) {
          delete misspelled[strArr[0]];
        }
      }
    }
  }

  return misspelled;
}

export default {
  makeArray,
  removePunctuation,
  spellCheck
}
