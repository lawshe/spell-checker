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
        <div className="section">
          <div className="container">
            <div className={`row center ${glob.no_margin} ${glob.dark_bg}`}>
              <p style={{ marginBottom: 0 }}>
                Check your spelling using the 850 words in <a href="http://ogden.basic-english.org/words.html" target="_BLANK"  rel="noopener">BASIC English</a> + plural variations of things.
              </p>
            </div>
          </div>
        </div>
        <div className={`row container ${glob.dark_bg}`}>
          <div className="col s6">
            <h2>Text Input</h2>
          </div>
          <div className="col s6">
            <h2>Spell Checked</h2>
          </div>
        </div>
        <div className={`row container`}>
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
