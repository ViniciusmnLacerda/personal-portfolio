import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../styles/ProjectsBackEnd.css';

class ProjectsBackEnd extends Component {
  render() {
    const navItems = ['ABOUT', 'CONTACT', 'PROJECTS', 'SKILLS'];
    const pathNavItens = ['/about', '/contact', '/projects', '/skills'];
    return (
      <div className="backend-container">
        <header>
          <Navbar
            navItems={navItems}
            pathNavItens={pathNavItens}
          />
        </header>
        <h1>Coming soon...</h1>
      </div>
    );
  }
}

export default ProjectsBackEnd;
