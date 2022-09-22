/* eslint-disable comma-dangle */
import React, { Component } from 'react';
import { FaGithub, FaReact } from 'react-icons/fa';
import { IoLogoCss3, IoLogoHtml5 } from 'react-icons/io';
import {
  SiJavascript, SiJest, SiRedux, SiTestinglibrary, SiVisualstudiocode
} from 'react-icons/si';

class SkillsCard extends Component {
  render() {
    return (
      <div className="skills-card-container">
        <div className="cards-container">
          <div className="control-card">
            <div className="skill-card">
              <IoLogoHtml5 />
              <span>HTML5</span>
            </div>
          </div>
          <div className="control-card">
            <div className="skill-card">
              <IoLogoCss3 />
              <span>CSS3</span>
            </div>
          </div>
          <div className="control-card">
            <div className="skill-card">
              <SiJavascript />
              <span>JavaScript</span>
            </div>
          </div>
          <div className="control-card">
            <div className="skill-card">
              <FaReact />
              <span>ReactJS</span>
            </div>
          </div>
          <div className="control-card">
            <div className="skill-card">
              <SiRedux />
              <span>Redux</span>
            </div>
          </div>
          <div className="control-card">
            <div className="skill-card">
              <SiJest />
              <span>Jest</span>
            </div>
          </div>
          <div className="control-card">
            <div className="skill-card">
              <SiTestinglibrary />
              <span>RTL</span>
            </div>
          </div>
          <div className="control-card">
            <div className="skill-card">
              <FaGithub />
              <span>Github</span>
            </div>
          </div>
          <div className="control-card">
            <div className="skill-card">
              <SiVisualstudiocode />
              <span>VS Code</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SkillsCard;
