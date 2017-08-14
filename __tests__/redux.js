import * as actions from '../app/actions/actionCreators';
import * as types from '../app/actions/actionTypes';
import reducer from '../app/reducers/index'

describe('actions', () => {
  it('should create an action to toggle parallax', () => {
    const expectedAction = {
      type: types.TOGGLE_PARALLAX
    };
    expect(actions.toggleParallax()).toEqual(expectedAction)
  });
  it('should create an action to update text', () => {
    const input_text = 'A robot may not injure a human being.';
    const expectedAction = {
      type: types.UPDATE_TEXT,
      input_text
    };
    expect(actions.updateText(input_text)).toEqual(expectedAction)
  });
});

describe('accessibility reducer', () => {
  it('should return the initial state', () => {
    expect(reducer.accessibility(undefined, {})).toEqual({
      parallax: true
    })
  });

  it('should toggle the initial state', () => {
    expect(reducer.accessibility(undefined, {
      type: types.TOGGLE_PARALLAX
    })).toEqual({
      parallax: false
    })
  });

  it('word is spelled correctly', () => {
    expect(reducer.spelling(undefined, {
      type: types.UPDATE_TEXT,
      input_text: "I"
    })).toEqual({
      input_text_arr: ["I"],
      input_text: "I",
      misspelled: {}
    })
  });

  it('words not spelled correctly', () => {
    // To Do - There is a to do to handle capitalized first words
    expect(reducer.spelling(undefined, {
      type: types.UPDATE_TEXT,
      input_text: "The dog is here"
    })).toEqual({
      input_text_arr: ["The", "dog", "is", "here"],
      input_text: "The dog is here",
      misspelled: {
        "The": [0],
        "is": [2]
      }
    })
  });
});
