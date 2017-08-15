import React from 'react';
import { connect } from 'react-redux';
import glob from 'style';
import fxns from 'fxns';

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

class TextOutput extends React.Component {

  render() {

    const outputText = () => {
      return (
        <div>
          {this.props.TextInputArr.map((word, index) => {
            var wordClass = '';
            if (this.props.misspelled[fxns.removePunctuation(word)]) {
              wordClass = glob.misspelled;
            }
            return <span key={index}><span className={wordClass}>{word}</span> </span>
          })}
        </div>
      );
    }

    return (
      <div className="card"><div className="card-content">
        <div className={glob.output_text}>{outputText()}</div>
      </div></div>
    );
  }
}

export default connect(
  mapStateToProps
)(TextOutput);
