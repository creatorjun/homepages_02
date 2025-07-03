import React from 'react';
import './Hero.css';
import { content } from '../data/contents.jsx';

function Hero() {
  const { hero } = content;

  return (
    <section className="hero">
      <img 
        src={hero.backgroundImage}
        alt={hero.altText}
        className="hero-background-image" 
      />
      <div className="hero-content" data-aos="fade-up">
        <img src={hero.logoImage} alt="메인 로고" className="hero-logo-image" />
        <h1 className="hero-main-text">
          <span className="dark-navy">{hero.mainText.line1[0]}</span> <span className="highlight-yellow">{hero.mainText.line1[1]}</span>
          <br />
          <span className="dark-navy">{hero.mainText.line2[0]}</span> <span className="highlight-yellow">{hero.mainText.line2[1]}</span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;