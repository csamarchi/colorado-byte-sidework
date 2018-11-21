import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <div className="footer-container">
        <div className="footer-info">
          <img className="footer-logo" alt="cb logo" src="/color_logo_with_background.svg"/>
          <div className="footer-contact">
            <i className="material-icons">phone</i>
            <a href="tel:+13037475474">(303) 747-5474</a>
            <i className="material-icons">email</i>
            <a href="mailto:info@coloradobyte.com">info@coloradobyte.com</a>
          </div>
        </div>
        <p id="copyright">&copy; 2018 All Rights Reserved</p>
      </div>
    );
  }
}

export default Footer;
