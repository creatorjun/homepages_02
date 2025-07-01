import React from 'react';
import './BusinessIntro.css';

function BusinessIntro() {
  return (
    <section id="business-intro" className="business-intro">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">상도 힐스더원</h2>
        
        <div className="intro-image-container" data-aos="fade-up" data-aos-delay="200">
          <img src="./images/main-perspective.webp" alt="상도 힐스 더원 메인 조감도" className="intro-main-image" />
          <h3 className="intro-image-text">
            <span className="white">10년동안</span> <span className="highlight-yellow">내집처럼</span>
            <br />
            <span className="white">10년후에</span> <span className="highlight-yellow">내집으로</span>
          </h3>
        </div>

        <p className="section-description" data-aos="fade-up" data-aos-delay="300">
          상도 힐스더원만의 프리미엄 
        </p>
        <div className="benefits-grid">
          <div className="benefit-item" data-aos="fade-right">
            <h4>청약제한 無</h4>
            <p>만 19세 이상 누구나 신청 가능하며, 청약통장이 필요 없습니다.</p>
          </div>
          <div className="benefit-item" data-aos="fade-up" data-aos-delay="100">
            <h4>자격제한 無</h4>
            <p>주택 소유 여부, 소득 수준, 거주지 제한 등 까다로운 자격 요건이 없습니다.</p>
          </div>
          <div className="benefit-item" data-aos="fade-left" data-aos-delay="200">
            <h4>세금부담 無</h4>
            <p>10년간 취득세, 재산세, 종합부동산세, 양도세 부담 없이 거주할 수 있습니다.</p>
          </div>
          <div className="benefit-item" data-aos="fade-right">
            <h4>안정적 거주</h4>
            <p>최소 10년동안 이사 걱정 없이 안정적인 임대차 계약이 보장됩니다.</p>
          </div>
          <div className="benefit-item" data-aos="fade-up" data-aos-delay="100">
            <h4>안전한 보증금</h4>
            <p>HUG 주택도시보증공사의 보증보험 의무 가입으로 보증금을 100% 안전하게 보호합니다.</p>
          </div>
          <div className="benefit-item" data-aos="fade-left" data-aos-delay="200">
            <h4>자유로운 전매</h4>
            <p>임차인의 지위를 자유롭게 명의변경및 전매할 수 있습니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessIntro;