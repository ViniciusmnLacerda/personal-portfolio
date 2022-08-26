import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/BackgroundAnimation.css';

class BackgroundAnimation extends Component {
  render() {
    const { children } = this.props;
    return (
      <div id="nc-main" className="nc-main bg-cover bg-cc">

        <div className="full-wh">

          <div className="bg-animation">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div id="stars4" />
          </div>

        </div>
        {children}
      </div>
    );
  }
}

BackgroundAnimation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BackgroundAnimation;
