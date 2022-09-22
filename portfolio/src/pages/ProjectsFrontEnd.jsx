import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import '../styles/ProjectsFrontEnd.css';

class ProjectsFrontEnd extends React.Component {
  render() {
    const navItems = ['ABOUT', 'CONTACT', 'HOME', 'SKILLS'];
    const pathNavItens = ['/about', '/contact', '/home', '/skills'];
    return (
      <div className="projects-main-container">
        <header>
          <Navbar
            navItems={navItems}
            pathNavItens={pathNavItens}
          />
        </header>
        <Card />
      </div>
    );
  }
}

export default ProjectsFrontEnd;
