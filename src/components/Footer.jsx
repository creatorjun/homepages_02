import React from 'react';
import './Footer.css';
import { content } from '../data/contents.jsx';

function Footer() {
  const { footer } = content;

  // 텍스트를 | 기준으로 분리하여 JSX로 변환하는 함수
  const renderInfoText = (text) => {
    return text.split('|').map((item, index, arr) => (
      <React.Fragment key={index}>
        <span className="footer-info-item">{item.trim()}</span>
        {index < arr.length - 1 && <span className="footer-info-separator">|</span>}
      </React.Fragment>
    ));
  };

  return (
    <footer className="main-footer">
      <div className="logo">
        <img src={footer.logoImage} alt={`${content.siteInfo.title} 하단 로고`} className="footer-logo-image" />
      </div>
      <div className="footer-info-container">
        <p className="footer-info">
          {renderInfoText(footer.info)}
        </p>
        <p className="footer-info">
          {renderInfoText(footer.address)}
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