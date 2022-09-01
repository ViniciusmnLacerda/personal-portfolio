import React from 'react';
import Navbar from '../components/Navbar';

class About extends React.Component {
  render() {
    const navItems = ['HOME', 'PROJECTS', 'SKILLS', 'CONTACT'];
    const pathNavItens = ['/', '/projects', '/skills', '/contact'];
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

export default About;
