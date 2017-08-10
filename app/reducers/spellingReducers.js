import { UPDATE_TEXT } from '../actions/actionTypes';
import fxns from 'fxns';

const initialState = {
  input_text: '', // User input
  input_text_arr: [],  // Array of input text - used in JSX in TextOutput
  misspelled: {} // Keys are words from user input and values are arrays of indices where word occurs
};

export default function accessibilityReducers(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TEXT: {
      let misspelled = {};
      let input_text_arr = [];

      if (action.input_text) {
        misspelled = fxns.spellCheck(action.input_text);
        input_text_arr = fxns.makeArray(action.input_text);
      }

      return Object.assign({}, state, { input_text: action.input_text, input_text_arr, misspelled });
    }
    default:
      return state;
  }
}
