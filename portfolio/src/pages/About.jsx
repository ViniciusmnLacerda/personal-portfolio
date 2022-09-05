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
    const pathNavItens = ['/', '/contact', '/projects', '/skills'];
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
                Lorem ipsum dolor sit amet. Ab aperiam sunt est enim voluptas hic inventore vitae est facere dolor qui ducimus blanditiis eum necessitatibus fuga est quibusdam fugit. Non itaque fugiat et beatae autem est quibusdam dicta et vitae officia et nobis laudantium aut voluptate quia sed animi numquam. Eum quas omnis ex ipsa voluptatem ut nihil minus.
              </p>
              <p>
                Et quas sunt est nemo quas ea voluptates galisum. Ea commodi voluptate ad omnis quis vel neque quisquam ea nulla quod.
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
