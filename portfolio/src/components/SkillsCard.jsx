/* eslint-disable comma-dangle */
import React, { Component } from 'react';
import skills from '../services/skills';

class SkillsCard extends Component {
  render() {
    return (
      <div className="skills-card-container">
        <div className="cards-container">
          {skills.map(({ icon, title }) => (
            <div
              key={`${icon}_${title}`}
              className="control-card"
            >
              <div className="skill-card">
                {icon}
                <span>{title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default SkillsCard;
