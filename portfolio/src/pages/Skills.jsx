import React from 'react';
import Navbar from '../components/Navbar';

class Skills extends React.Component {
  render() {
    const navItems = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'];
    const pathNavItens = ['/', '/about', '/projects', '/contact'];
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
