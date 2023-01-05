/* eslint-disable no-console */
import emailjs from 'emailjs-com';
import PropTypes from 'prop-types';
import React from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';
import Navbar from '../components/Navbar';
import '../styles/Contact.css';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      isDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validate);
  };

  validate = () => {
    const { name, email, message } = this.state;
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isValid = [
      emailRegex.test(email),
      name.length > 3,
      message.length > 4,
    ].every(Boolean);
    this.setState({ isDisabled: !isValid });
  };

  sendEmail = (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push('/thanks');
    emailjs.sendForm('gmail', 'template_tpa7z26', e.target, 'q1SHjoaqdNkNgTL4t')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  render() {
    const navItems = ['ABOUT', 'HOME', 'PROJECTS', 'SKILLS'];
    const pathNavItens = ['/about', '/', '/projects', '/skills'];
    const {
      name, email, isDisabled, message,
    } = this.state;
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
                Have any questions?
              </h1>
            </div>
            <div className="contact-subtitle">
              <p>
                In case you have any doubts or comments to make,
                please do not hesitate to enter in contact with us. Thank you.
              </p>
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
          <form className="contact-form" onSubmit={this.sendEmail}>
            <div className="contact-input">
              <label htmlFor="name">
                <input
                  autoComplete="off"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="contact-input">
              <label htmlFor="email">
                <input
                  autoComplete="off"
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="contact-input">
              <label htmlFor="message">
                <textarea
                  autoComplete="off"
                  placeholder="Message"
                  name="message"
                  id="message"
                  value={message}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="contact-button">
              <input type="submit" value="Send" disabled={isDisabled} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Contact;
