import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import BusinessIntro from './components/BusinessIntro';
import Location from './components/Location';
import Flats from './components/Flats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContainer from './components/FloatingContainer';
import Popup from './components/Popup';
import './App.css';

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000
    });

    const header = document.getElementById('main-header');
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (!isPopupVisible) return;

    const handlePopupScroll = () => {
        if (window.scrollY > 100) {
            setIsPopupVisible(false);
        }
    };

    window.addEventListener('scroll', handlePopupScroll);
    
    return () => {
        window.removeEventListener('scroll', handlePopupScroll);
    };
  }, [isPopupVisible]);


  const handleShowPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <BusinessIntro />
        <Location />
        <Flats />
        <Contact />
      </main>
      <Footer />
      <FloatingContainer onShowPopup={handleShowPopup} />
      <Popup isVisible={isPopupVisible} onClose={handleClosePopup} />
    </>
  )
}

export default App;