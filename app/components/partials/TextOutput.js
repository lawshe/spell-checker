import React from 'react';
import { connect } from 'react-redux';
import glob from 'style';

/**
  *
  * Text Output
  *
*/

const mapStateToProps = (state) => {
  return {
    misspelled: state.spelling.misspelled,
    TextInputArr: state.spelling.input_text_arr
  }
}

class TextInput extends React.Component {

  render() {

    const outputText = () => {
      return (
        <div>
          {this.props.TextInputArr.map((word, index) => {
            var wordClass = '';
            if (this.props.misspelled[word.toLowerCase()]) {
              wordClass = glob.misspelled;
            }
            return <span key={index} className={wordClass}>{word} </span>
          })}
        </div>
      );
    }

    return (
      <div className="card"><div className="card-content">
        <span className="card-title">Spell Checked</span>
        <div className={glob.output_text}>{outputText()}</div>
      </div></div>
    );
  }
}

export default connect(
  mapStateToProps
)(TextInput);
