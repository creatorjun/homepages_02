import React from 'react';
import './Footer.css';
import { content } from '../data/contents.jsx';

function Footer() {
  const { footer } = content;

  return (
    <footer className="main-footer">
      <div className="logo">
        <img src={footer.logoImage} alt={`${content.siteInfo.title} 하단 로고`} className="footer-logo-image" />
      </div>
      <div className="footer-info-container">
        <p>
          {/* info와 address의 모든 정보를 유연하게 표시하도록 수정 */}
          {footer.info.replace(/\|/g, ' | ')}
          <br /><br /><br />
          {footer.address.replace(/\|/g, ' | ')}
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