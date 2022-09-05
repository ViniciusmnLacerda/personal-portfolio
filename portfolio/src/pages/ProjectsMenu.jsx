import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/ProjectsMenu.css';

class ProjectsMenu extends Component {
  render() {
    const navItems = ['ABOUT', 'CONTACT', 'HOME', 'SKILLS'];
    const pathNavItens = ['/about', '/contact', '/', '/skills'];
    return (
      <div className="projects-menu-container">
        <header>
          <Navbar
            navItems={navItems}
            pathNavItens={pathNavItens}
          />
        </header>
        <h1 className="h1-projects-menu">Projects</h1>
        <nav className="nav-menu-projects">
          <ul className="ul-menu-projects">
            <li className="li-menu-projects"><Link to="/projects/front-end">Front-end</Link></li>
            <li className="li-menu-projects"><Link to="/projects/back-end">Back-end</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default ProjectsMenu;
