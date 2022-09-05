import React from 'react';
import Navbar from '../components/Navbar';

class Skills extends React.Component {
  render() {
    const navItems = ['ABOUT', 'CONTACT', 'HOME', 'PROJECTS'];
    const pathNavItens = ['/about', '/contact', '/home', '/projects'];
    return (
      <div>
        <Navbar
          navItems={navItems}
          pathNavItens={pathNavItens}
        />
      </div>
    );
  }
}

export default Skills;
