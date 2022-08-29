import React, { Component } from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';
import '../styles/SocialSideBar.css';

export default class SocialSideBar extends Component {
  render() {
    return (
      <div className="socials-fixed">
        <div className="socials-icons">
          <a
            href="https://www.linkedin.com/in/viniciuslmn/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
          <a href="https://github.com/ViniciusmnLacerda" target="_blank" rel="noreferrer">
            <VscGithubAlt />
          </a>
        </div>
        <hr className="socials-fixed-line" />
      </div>
    );
  }
}
