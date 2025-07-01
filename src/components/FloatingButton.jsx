import React from 'react';
import { FaPen } from 'react-icons/fa';
import './FloatingButton.css';

function FloatingButton() {
  return (
    <div className="floating-buttons-container">
      <a href="#contact" className="floating-button contact-button" title="상담신청 바로가기">
        <FaPen size={24} />
      </a>
      <a href="tel:1666-8280" className="floating-button call-button" title="전화 상담하기">
        <img src="./images/phone.png" alt="전화 상담하기" />
      </a>
    </div>
  );
}

export default FloatingButton;