import React from 'react';
import Navbar from '../components/Navbar';
import SkillsCard from '../components/SkillsCard';
import '../styles/Skills.css';

class Skills extends React.Component {
  render() {
    const navItems = ['ABOUT', 'CONTACT', 'HOME', 'PROJECTS'];
    const pathNavItens = ['/about', '/contact', '/', '/projects'];
    return (
      <div className="skills-container">
        <Navbar
          navItems={navItems}
          pathNavItens={pathNavItens}
        />
        <div className="skills-content">
          <div className="skills-content-header">
            <div className="skills-header-title">
              <h1>My Toolbox</h1>
            </div>
            <div className="skills-subtitle">
              <p>The skills, tools and technologies I use to bring your products to life:</p>
            </div>
          </div>
          <SkillsCard />
        </div>
      </div>
    );
  }
}

export default Skills;
