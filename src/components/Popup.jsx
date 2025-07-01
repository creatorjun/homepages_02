import React, { useState, useEffect } from 'react';
import './Popup.css';

function Popup({ isVisible, onClose }) {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 400); 
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleClose = () => {
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleLinkClick = () => {
    handleClose();
  };

  if (!shouldRender) {
    return null;
  }

  return (
    <div className={`popup-overlay ${isVisible ? 'visible' : ''}`} onClick={handleOverlayClick}>
      <div className="popup">
        <button className="popup-close" onClick={handleClose}>&times;</button>
        
        <img src="images/popup.webp" alt="팝업 안내" className="popup-image" />
        
        <div className="popup-action">
          <a href="#contact" className="popup-button" onClick={handleLinkClick}>
            상담신청 바로가기
          </a>
        </div>
        
        <div className="popup-footer">
        </div>
      </div>
    </div>
  );
}

export default Popup;