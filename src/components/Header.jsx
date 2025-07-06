import React from 'react';
import './Header.css';
import { content } from '../data/contents.jsx';

function Header() {
  // contents.jsx 파일로부터 헤더 데이터를 가져옵니다.
  const { header, siteInfo } = content;

  return (
    <header className="main-header" id="main-header">
      <a href="#" className="logo">
        {/* 스크롤 전/후 로고 이미지를 데이터 파일에서 가져와서 표시합니다. */}
        <img src={header.logoImage.dark} alt={`${siteInfo.title} 로고`} className="logo-image dark-logo" />
        <img src={header.logoImage.light} alt={`${siteInfo.title} 로고`} className="logo-image light-logo" />
      </a>
      <nav className="main-nav">
        <ul>
          {/*
            메뉴 링크 데이터를 map 함수로 순회하며 동적으로 <li> 태그를 생성합니다.
            이를 통해 데이터만 변경하면 메뉴가 자동으로 업데이트됩니다.
          */}
          {header.navLinks.map((link) => (
            <li key={link.title}>
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;