import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <span className="footer__logo">
            <span className="footer__logo-dot" />
            YC
          </span>
          <span className="footer__copy">© 2026 Yuvraj Chaudhari</span>
        </div>
        <div className="footer__right">
          <span className="footer__tag">Made with curiosity & late nights</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
