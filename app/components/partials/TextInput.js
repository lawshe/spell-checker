import React from 'react';
import { connect } from 'react-redux';
import { updateText } from '../../actions/actionCreators'
import glob from 'style';

/**
  *
  * Text Input
  *
  * Includes redux actions
  *
*/

const mapStateToProps = (state) => {
  return {
    inputText: state.spelling.input_text
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTextChange: (str) => {
      dispatch(updateText(str))
    }
  }
}

class TextInput extends React.Component {

  handleTextChange() {
    const textValue = document.getElementById('textarea1').value;
    if (textValue) {
      this.props.onTextChange(textValue);
    }
  }

  render() {
    return (
      <div className={glob.pad_lg}>
        <div className="card"><div className="card-content">
          <span className="card-title">Text Input</span>
          <textarea className="materialize-textarea" id="textarea1" onChange={() => this.handleTextChange()}>{this.props.input_text}</textarea>
        </div></div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput);
