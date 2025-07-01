import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="logo">
        <img src="./images/logo_02.webp" alt="상도 힐스 더원 로고" className="footer-logo-image" />
      </div>
      <div className="footer-info-container">
        <p>
          <strong>상도 힐스 더원</strong> | 사업주체: (주)구담<br />
          대표전화: 1666-8280 | 사업지 주소: 서울특별시 동작구 상도동 211-386번지 일원
        </p>
        <p className="footer-disclaimer">
          ※ 본 사이트의 CG, 이미지 및 내용은 소비자의 이해를 돕기 위해 제작된 것으로, 실제와 다소 차이가 있을 수 있습니다.
        </p>
        <p className="footer-copyright">
          © 2025 Sangdo Hills The ONE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;