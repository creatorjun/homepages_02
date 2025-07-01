import React from 'react';
import './Flats.css';

function Flats() {
  return (
    <section id="types" className="flats">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">타입안내</h2>
        <div className="plans-grid">
          
          <div className="plan-item" data-aos="fade-right">
            <img src="./images/flats_01.webp" alt="59㎡ 타입 평면도" className="plan-image" />
            <div className="plan-info">
              <h3 className="plan-title">59 Type</h3>
              <p className="plan-details">
                전용면적: 59.99㎡<br />
                분양면적: 80.00㎡<br />
                246세대
              </p>
            </div>
          </div>

          <div className="plan-item" data-aos="fade-up" data-aos-delay="200">
            <img src="./images/flats_02.webp" alt="71㎡ 타입 평면도" className="plan-image" />
            <div className="plan-info">
              <h3 className="plan-title">71 Type</h3>
              <p className="plan-details">
                전용면적: 71.58㎡<br />
                분양면적: 94.58㎡<br />
                37세대
              </p>
            </div>
          </div>

          <div className="plan-item" data-aos="fade-left" data-aos-delay="400">
            <img src="./images/flats_03.webp" alt="84㎡ 타입 평면도" className="plan-image" />
            <div className="plan-info">
              <h3 className="plan-title">84 Type</h3>
              <p className="plan-details">
                전용면적: 84.99㎡<br />
                분양면적: 111.52㎡<br />
                107세대
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Flats;