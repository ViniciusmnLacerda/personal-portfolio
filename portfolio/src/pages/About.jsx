/* eslint-disable max-len */
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FiLinkedin } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/About.css';

class About extends React.Component {
  render() {
    const navItems = ['CONTACT', 'HOME', 'PROJECTS', 'SKILLS'];
    const pathNavItens = ['/contact', '/', '/projects', '/skills'];
    return (
      <div className="about-container">
        <Navbar
          navItems={navItems}
          pathNavItens={pathNavItens}
        />
        <div className="about-content">
          <div className="about-title">
            <h1>About me</h1>
          </div>
          <div className="about-main">
            <div className="about-text">
              <p>
                Hi!
                {' '}
                {'I\'m'}
                {' '}
                <span>Vinícius Lacerda</span>
                {' '}
                and I enjoy creating things that live on the internet. My interest in web development started back in 2022 when I decided to change careers, I was physics teacher.
              </p>
              <p>
                I know how to develop responsive layouts and I am constantly studying and learning new skills.
                {' '}
                <span><Link to="/projects">See my projects</Link></span>
              </p>
            </div>
            <div className="about-image">
              <img src="/profile.jpg" alt="vinicius lacerda" />
            </div>
          </div>
          <div className="footer-about">
            <div className="about-socials-icons">
              <a
                href="https://www.linkedin.com/in/viniciuslmn/"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://github.com/ViniciusmnLacerda"
                target="_blank"
                rel="noreferrer"
              >
                <VscGithubAlt />
              </a>
              <Link to="/contact">
                <AiOutlineMail />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
