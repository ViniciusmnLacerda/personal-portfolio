/* eslint-disable react/no-array-index-key */
import React from 'react';
import '../styles/Title.css';

class Title extends React.Component {
  render() {
    const subTitle = 'FRONT-END DEVELOPER.';
    return (
      <div className="body-title animated fadeInDown">
        <h1 className="title">
          VINÍCIUS
          <span style={{ color: '#FF6363' }}>/</span>
          LACERDA
        </h1>
        <div className="subtitle-line typing-animation">
          {subTitle
            .split('')
            .map((letter, index) => (<span key={index} className="letter-subtitle">{letter}</span>))}

        </div>
      </div>
    );
  }
}

export default Title;
