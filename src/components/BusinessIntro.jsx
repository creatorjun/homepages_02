import React from 'react';
import './BusinessIntro.css';
import { content } from '../data/contents.js';
import SectionTitle from './SectionTitle.jsx';

function BusinessIntro() {
  const { businessIntro } = content;

  return (
    <section id="business-intro" className="business-intro">
      <div className="container">
        <SectionTitle title={businessIntro.sectionTitle} aosType="fade-up" />
        
        <div className="intro-image-container" data-aos="fade-up" data-aos-delay="200">
          <img src={businessIntro.mainImage} alt="상도 힐스 더원 메인 조감도" className="intro-main-image" />
          <h3 className="intro-image-text">
            <span className="white">{businessIntro.imageText.line1.white}</span> <span className="highlight-yellow">{businessIntro.imageText.line1.yellow}</span>
            <br />
            <span className="white">{businessIntro.imageText.line2.white}</span> <span className="highlight-yellow">{businessIntro.imageText.line2.yellow}</span>
          </h3>
        </div>

        <p className="section-description" data-aos="fade-up" data-aos-delay="300">
          {businessIntro.description}
        </p>
        <div className="benefits-grid">
          {businessIntro.benefits.map((benefit) => (
            <div className="benefit-item" data-aos={benefit.aos} data-aos-delay={benefit.delay} key={benefit.id}>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessIntro;