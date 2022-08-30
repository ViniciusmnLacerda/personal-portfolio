import React from 'react';
import Navbar from '../components/NavBar';

class Contact extends React.Component {
  render() {
    const navItems = ['HOME', 'ABOUT', 'PROJECTS', 'SKILLS'];
    const pathNavItens = ['/', '/about', '/projects', '/skills'];
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

export default Contact;
