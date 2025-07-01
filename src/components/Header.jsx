import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="main-header" id="main-header">
      <a href="#" className="logo">
        <img src="./images/logo_01.webp" alt="The Aether 로고" className="logo-image dark-logo" />
        <img src="./images/logo_02.webp" alt="The Aether 로고" className="logo-image light-logo" />
      </a>
      <nav className="main-nav">
        <ul>
          <li><a href="#business-intro">사업소개</a></li>
          <li><a href="#location">입지안내</a></li>
          <li><a href="#types">타입안내</a></li>
          <li><a href="#contact">상담요청</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;