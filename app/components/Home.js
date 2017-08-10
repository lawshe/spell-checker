import React from 'react';
import { connect } from 'react-redux';
import Intro from 'prtls/Intro.js';
import glob from 'style';
/**
  *
  * Homepage
  *
  * Uses accessibility preferences in set in state
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
        <div className={`section ${glob.no_pad} green darken-4 ${glob.pattern}`}>
          <div className={`row ${glob.no_margin}`}>
            <div className={`col s12 light-green darken-4 ${glob.pad_lg}`}>
              <h4 className="grey-text text-lighten-4" style={{ marginTop: '0' }}>Subheader</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Home);
