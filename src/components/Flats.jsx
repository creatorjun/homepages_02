import React from 'react';
import './Flats.css';
import { content } from '../data/contents.js';
import SectionTitle from './SectionTitle.jsx';

function Flats() {
  const { flats } = content;

  return (
    <section id="types" className="flats">
      <div className="container">
        <SectionTitle title={flats.sectionTitle} aosType="fade-up" />
        <div className="plans-grid">
          
          {flats.plans.map((plan) => (
            <div className="plan-item" data-aos={plan.aos} data-aos-delay={plan.delay} key={plan.id}>
              <img src={plan.imageSrc} alt={plan.altText} className="plan-image" />
              <div className="plan-info">
                <h3 className="plan-title">{plan.title}</h3>
                <p className="plan-details">
                  {plan.details.map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < plan.details.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Flats;