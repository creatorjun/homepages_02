import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <img 
        src="./images/main.webp" 
        alt="A luxurious and modern house exterior at dusk" 
        className="hero-background-image" 
      />
      <div className="hero-content" data-aos="fade-up">
        <img src="./images/logo_01.webp" alt="The Aether 로고" className="hero-logo-image" />
        <h1 className="hero-main-text">
          <span className="dark-navy">서울의</span> <span className="highlight-yellow">퍼스트</span>
          <br />
          <span className="dark-navy">동작의</span> <span className="highlight-yellow">라스트</span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;