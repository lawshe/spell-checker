import React from 'react';
import { connect } from 'react-redux';
import Intro from 'prtls/Intro.js';
import TextInput from 'prtls/TextInput.js';
import TextOutput from 'prtls/TextOutput.js';
import glob from 'style';
/**
  *
  * Homepage
  *
  * Uses accessibility preferences set in state
  *
*/

const mapStateToProps = (state) => {
  return {
    parallax: state.accessibility.parallax
  }
}

class Home extends React.Component {

  componentDidMount() {
    $('.collapsible').collapsible();
  }

  render() {
    return (
      <div>
        <Intro parallax={this.props.parallax} />
        <div className={`row container ${glob.pad_lg}`}>
          <div className="col s6">
            <TextInput />
          </div>
          <div className="col s6">
            <TextOutput />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Home);
