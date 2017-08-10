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
});
