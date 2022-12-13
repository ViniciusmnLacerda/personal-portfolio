/* eslint-disable comma-dangle */
import React, { Component } from 'react';
import { BiGitBranch } from 'react-icons/bi';
import { FaDocker, FaGithub, FaReact } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { IoLogoCss3, IoLogoHtml5, IoLogoNodejs } from 'react-icons/io';
import {
  SiJavascript,
  SiJest,
  SiMocha,
  SiRedux,
  SiTestinglibrary,
  SiTrello,
  SiTypescript,
  SiVisualstudiocode
} from 'react-icons/si';

class SkillsCard extends Component {
  render() {
    return (
      <div className="skills-card-container">
        <div className="cards-container">
          <div className="control-card">
            <div className="skill-card">
              <SiTypescript />
              <span>TypeScript</span>
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
              <IoLogoNodejs />
              <span>Node.js</span>
            </div>
          </div>
          <div className="control-card">
            <div className="skill-card">
              <FaDocker />
              <span>Docker</span>
            </div>
          </div>
          <div className="control-card">
            <div className="skill-card">
              <GrMysql />
              <span>MySQL</span>
            </div>
          </div>
          <div className="control-card">
            <div className="skill-card">
              <SiMocha />
              <span>Mocha</span>
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
              <SiRedux />
              <span>Redux</span>
            </div>
          </div>
          <div className="control-card">
            <div className="skill-card">
              <BiGitBranch />
              <span>Git</span>
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
          <div className="control-card">
            <div className="skill-card">
              <SiTrello />
              <span>Trello</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SkillsCard;
