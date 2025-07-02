import React, { useEffect, useRef } from 'react';
import './Location.css';
import { content } from '../data/contents.js';

function Location() {
  const { location } = content;
  const gridRef = useRef(null);

  useEffect(() => {
    const timers = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (timers.has(target)) {
            clearTimeout(timers.get(target));
            timers.delete(target);
          }

          if (entry.isIntersecting) {
            const timer = setTimeout(() => {
              target.classList.add('is-visible');
            }, 1000);
            timers.set(target, timer);
          } else {
            target.classList.remove('is-visible');
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.2
      }
    );

    const gridItems = Array.from(gridRef.current.children);
    gridItems.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      gridItems.forEach(item => {
        if (item) observer.unobserve(item);
      });
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <section id="location" className="location">
      <div className="container" data-aos="fade-up">
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2>{location.sectionTitle}</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>{location.sectionDescription}</p>
        </div>

        <div className="location-content" data-aos-delay="200">
            <div className="location-map">
              <img src={location.mapImage} alt={`${location.sectionTitle} 지도`} />
            </div>
            <div className="location-text">
              {location.advantages.map(advantage => (
                <React.Fragment key={advantage.title}>
                  <h3>{advantage.title}</h3>
                  <ul>
                    {advantage.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </React.Fragment>
              ))}
            </div>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="300">
        <div className="location-advantage-grid" ref={gridRef}>
            {location.advantageGrid.map((item) => (
            <div className="location-item" key={item.id}>
                <img src={item.imageSrc} alt={item.heading} className="location-image" />
                <div className="location-text-overlay">
                <span className="location-title">{item.title}</span>
                <h3>{item.heading}</h3>
                <p>{item.description}</p>
                </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Location;