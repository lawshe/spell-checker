import basic from '../constants/basic-words';

const allBasicWords = basic.operations.concat(basic.things, basic.qualities);

const removePunctuation = (str) => {
  return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

const makeArray = (str) => {
  return str ? str.split(' ') : [];
}

const spellCheck = (str) => {
  // Using BASIC English to spell check. Also considering plural cases on `basic.things` words
  let misspelled = {};
  if (str) {
    const strArr = makeArray(str);
    const inputSet = new Set(strArr);
    for (var word of inputSet) {
      let w = removePunctuation(word);
      if (!misspelled[w]) {
        if (allBasicWords.indexOf(w) === -1){
          // check if plural thing
          if (w.slice(-1) === 's' && basic.things.indexOf(w.slice(0, -1)) !== -1) {
          } else if (w.slice(-3) === 'ies' && basic.things.indexOf(w.slice(0, -3) + 'y') !== -1) {
          } else if (w.slice(-2) === 'es' && basic.things.indexOf(w.slice(0, -2)) !== -1) {
          } else{
            // not in list and not plural
            misspelled[w] = true;
          }
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
