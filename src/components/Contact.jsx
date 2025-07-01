import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [visitDate, setVisitDate] = useState(null);
  const [agree, setAgree] = useState(true);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name.trim()) {
      alert('이름을 입력해주세요.');
      return;
    }
    if (!phone.trim()) {
      alert('연락처를 입력해주세요.');
      return;
    }
    if (!visitDate) {
      alert('방문 희망일을 선택해주세요.');
      return;
    }
    if (!agree) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData();
    // 서버(send_sms.php)에서 사용하는 필드명('Name', 'Mobile' 등)과 일치시킵니다.
    formData.append('Name', name);
    formData.append('Mobile', phone);
    if (visitDate) {
      formData.append('Visit_Day', visitDate.toLocaleDateString('ko-KR'));
    }
    formData.append('AgreeYN', agree ? 'Y' : 'N');
    
    // 이전에 알려주신 Request URL을 사용합니다.
    const phpApiUrl = 'https://qtlab.shop/sample02/send_sms.php';

    try {
      const response = await fetch(phpApiUrl, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      setSubmitMessage(result.message);

      if (result.success) {
        setName('');
        setPhone('');
        setVisitDate(null);
        setAgree(false);
      }
    } catch (error) {
      setSubmitMessage('네트워크 오류가 발생했습니다. 확인 후 다시 시도해주세요.');
      console.error('Fetch Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content" data-aos="fade-up">
        <div className="contact-header">
          <h2>상담신청</h2>
          <p>상도 힐스 더원에 대해 궁금한 점이 있으신가요?<br />전문 상담사가 신속하게 안내해 드립니다.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group-container">
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input type="text" id="name" name="name" placeholder="이름을 입력하세요" value={name} onChange={(e) => setName(e.target.value)} disabled={isSubmitting} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">연락처</label>
              <input type="tel" id="phone" name="phone" placeholder="'-' 없이 숫자만 입력" value={phone} onChange={(e) => setPhone(e.target.value)} disabled={isSubmitting} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="visitDate">방문 희망일</label>
            <div className="date-picker-container">
              <DatePicker
                id="visitDate"
                selected={visitDate}
                onChange={(date) => setVisitDate(date)}
                dateFormat="yyyy / MM / dd"
                placeholderText="방문 희망일을 선택하세요"
                className="date-picker-input"
                disabled={isSubmitting}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="privacy-policy">
            <div className="privacy-checkbox-container">
              <input type="checkbox" id="privacy-agree" checked={agree} onChange={(e) => setAgree(e.target.checked)} disabled={isSubmitting} />
              <label htmlFor="privacy-agree">개인정보 수집 및 이용 동의</label>
              <span className="privacy-details-toggle" onClick={() => setDetailsVisible(!detailsVisible)}>
                {detailsVisible ? '[내용 닫기]' : '[내용 보기]'}
              </span>
            </div>
            
            {detailsVisible && (
              <div className="privacy-content">
                <strong>개인정보 수집 및 이용 안내</strong>
                <p>1. 수집하는 개인정보 항목: 이름, 연락처</p>
                <p>2. 수집 및 이용 목적: 분양 상담 및 안내, 마케팅 활용</p>
                <p>3. 보유 및 이용 기간: 수집일로부터 1년 (고객 동의 철회 시 즉시 파기)</p>
              </div>
            )}
          </div>
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? '전송 중...' : '상담신청'}
          </button>
          {submitMessage && <p className="submit-message">{submitMessage}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;