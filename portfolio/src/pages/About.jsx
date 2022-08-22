import React from 'react';
import DrawerAppBar from '../components/DrawerAppBar';

class About extends React.Component {
  render() {
    const navItems = ['HOME', 'PROJECTS', 'SKILLS', 'CONTACT'];
    const pathNavItens = ['/', '/projects', '/skills', '/contact'];
    return (
      <div>
        <DrawerAppBar
          navItems={navItems}
          pathNavItens={pathNavItens}
        />
      </div>
    );
  }
}

export default About;
