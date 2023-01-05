import React, { Component } from 'react';
import CardBack from '../components/CardBack';
import Navbar from '../components/Navbar';
import '../styles/ProjectsBackEnd.css';

class ProjectsBackEnd extends Component {
  render() {
    const navItems = ['ABOUT', 'CONTACT', 'HOME', 'SKILLS'];
    const pathNavItens = ['/about', '/contact', '/', '/skills'];
    return (
      <div className="projects-main-container">
        <header>
          <Navbar
            navItems={navItems}
            pathNavItens={pathNavItens}
          />
        </header>
        <CardBack />
      </div>
    );
  }
}

export default ProjectsBackEnd;
