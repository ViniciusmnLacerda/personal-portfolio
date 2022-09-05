import React from 'react';
import Navbar from '../components/Navbar';

class About extends React.Component {
  render() {
    const navItems = ['CONTACT', 'HOME', 'PROJECTS', 'SKILLS'];
    const pathNavItens = ['/', '/contact', '/projects', '/skills'];
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
