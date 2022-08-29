import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/BackgroundAnimation.css';
import Button from './Button';

class BackgroundAnimation extends Component {
  render() {
    const { children } = this.props;
    return (
      <div id="nc-main" className="nc-main bg-cover bg-cc">
        <div className="full-wh">

          <div className="bg-animation">
            {children}
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div id="stars4" />
          </div>
          <Button />
        </div>
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
