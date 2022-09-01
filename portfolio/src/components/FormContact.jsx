import emailjs from 'emailjs-com';
import React from 'react';

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_tpa7z26', e.target, 'q1SHjoaqdNkNgTL4t')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <div className="contact-input">
        <label htmlFor="name">
          <input placeholder="Name" type="text" id="name" name="name" />
        </label>
      </div>
      <div className="contact-input">
        <label htmlFor="email">
          <input placeholder="Email" type="email" id="email" name="email" />
        </label>
      </div>
      <div className="contact-input">
        <label htmlFor="message">
          <textarea placeholder="Message" name="message" id="message" />
        </label>
      </div>
      <div className="contact-button">
        <input type="submit" value="Send" />
      </div>
    </form>
  );
}
