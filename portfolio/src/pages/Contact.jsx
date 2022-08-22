import React from 'react';
import DrawerAppBar from '../components/DrawerAppBar';

class Contact extends React.Component {
  render() {
    const navItems = ['HOME', 'ABOUT', 'PROJECTS', 'SKILLS'];
    const pathNavItens = ['/', '/about', '/projects', '/skills'];
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

export default Contact;
