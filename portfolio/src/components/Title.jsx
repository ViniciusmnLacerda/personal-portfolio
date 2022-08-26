import React from 'react';
import '../styles/Title.css';

class Title extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Hi!</h1>
        <span className="text1">{'I\'m Vinícius.'}</span>
        <div className="badge">
          <span className="text2">Front-End Developer</span>
        </div>
      </div>
    );
  }
}

export default Title;
