import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/NavBar';

class Projects extends React.Component {
  render() {
    const navItems = ['HOME', 'ABOUT', 'SKILLS', 'CONTACT'];
    const pathNavItens = ['/', '/about', '/skills', '/contact'];
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

export default Projects;
