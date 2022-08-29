import React, { Component } from 'react';
import '../styles/EmailSideBar.css';

export default class EmailSideBar extends Component {
  render() {
    return (
      <div className="email-fixed">
        <a
          href="mailto:viniciuslmn@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className="email-text"
        >
          viniciuslmn@gmail.com
        </a>
        <hr className="email-fixed-line" />
      </div>
    );
  }
}
