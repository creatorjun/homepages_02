import React from 'react';
import './Footer.css';
import { content } from '../data/contents.js';

function Footer() {
  const { footer } = content;

  return (
    <footer className="main-footer">
      <div className="logo">
        <img src={footer.logoImage} alt="하단 로고" className="footer-logo-image" />
      </div>
      <div className="footer-info-container">
        <p>
          <strong>{footer.info.split(' | ')[0]}</strong> | {footer.info.split(' | ')[1]}<br />
          {footer.address}
        </p>
        <p className="footer-disclaimer">
          {footer.disclaimer}
        </p>
        <p className="footer-copyright">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}

export default Footer;