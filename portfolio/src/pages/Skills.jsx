import React from 'react';
import DrawerAppBar from '../components/DrawerAppBar';

class Skills extends React.Component {
  render() {
    const navItems = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'];
    const pathNavItens = ['/', '/about', '/projects', '/contact'];
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

export default Skills;
