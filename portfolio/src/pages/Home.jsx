import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <main className="page">
          <div className="left-section-container">
            <img
              className="home-image"
              src="/prev-image.png"
              alt="Vinícius Lacerda"
            />
            <div className="footer-container">
              <footer>
                <a href="https://www.instagram.com/viniciuslmn/" target="_blank" rel="noreferrer">
                  <img
                    className="social-media-logo"
                    src="/instagram.png"
                    alt="logo instagram"
                  />
                </a>
                <a href="https://www.linkedin.com/in/viniciuslmn/" target="_blank" rel="noreferrer">
                  <img
                    className="social-media-logo"
                    src="/linkedin.png"
                    alt="logo linkedin"
                  />
                </a>
                <a href="https://github.com/ViniciusmnLacerda" target="_blank" rel="noreferrer">
                  <img
                    className="social-media-logo"
                    src="/github.png"
                    alt="logo github"
                  />
                </a>
              </footer>
            </div>
          </div>
          <div className="right-section-container">
            <div className="h1-container">
              <div className="header-text-container">
                <h1 className="header-text">
                  Hello,
                </h1>
              </div>
              <div className="header-text-container">
                <h1 className="header-text">
                  I am
                </h1>
              </div>
              <div className="header-text-container">
                <h1 className="header-text">
                  Vinícius
                </h1>
              </div>
            </div>
            <div className="paragraph-container">
              <p className="paragraph">Here you will find the highlights of my professional life.</p>
            </div>
            <div className="buttons-container">
              <button
                className="button"
                type="button"
              >
                <Link to="/about">ABOUT</Link>
              </button>
              <button
                className="button"
                type="button"
              >
                <Link to="/projects">PROJECTS</Link>

              </button>
              <button
                className="button"
                type="button"
              >
                <Link to="/skills">SKILLS</Link>

              </button>
              <button
                className="button"
                type="button"
              >
                <Link to="/contact">CONTACT</Link>

              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
