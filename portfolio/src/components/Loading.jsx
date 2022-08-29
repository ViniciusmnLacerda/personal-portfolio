import React, { Component } from 'react';
import '../styles/Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loader">
        <div className="dot dot1" />
        <div className="dot dot2" />
        <div className="dot dot3" />
        <div className="dot dot4" />
      </div>
    );
  }
}

export default Loading;
