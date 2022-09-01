import React from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';
import FormContact from '../components/FormContact';
import Navbar from '../components/Navbar';
import '../styles/Contact.css';

class Contact extends React.Component {
  render() {
    const navItems = ['HOME', 'ABOUT', 'PROJECTS', 'SKILLS'];
    const pathNavItens = ['/', '/about', '/projects', '/skills'];
    return (
      <div className="contact-container">
        <Navbar
          navItems={navItems}
          pathNavItens={pathNavItens}
        />
        <div className="contact-content">
          <div className="contact-content-header">
            <div className="contact-header-title">
              <h1>
                Want to contact me?
              </h1>
            </div>
            <div className="contact-subtitle">
              <p>Want to work together or have any questions?</p>
              <div className="contact-socials-icons">
                <a
                  href="https://www.linkedin.com/in/viniciuslmn/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin />
                </a>
                <a href="https://github.com/ViniciusmnLacerda" target="_blank" rel="noreferrer">
                  <VscGithubAlt />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <FormContact />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
