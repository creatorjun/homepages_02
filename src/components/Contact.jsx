import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Contact.css';
import { content } from '../data/contents.js';
import SectionTitle from './SectionTitle.jsx';

function Contact() {
  const { contact } = content;
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
    formData.append('Name', name);
    formData.append('Mobile', phone);
    if (visitDate) {
      formData.append('Visit_Day', visitDate.toLocaleDateString('ko-KR'));
    }
    formData.append('AgreeYN', agree ? 'Y' : 'N');
    
    const phpApiUrl = 'send_sms.php';

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
        <SectionTitle 
          title={contact.sectionTitle} 
          description={contact.description}
        />
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
                <strong>{contact.privacyPolicy.title}</strong>
                {contact.privacyPolicy.clauses.map((clause, index) => (
                  <p key={index}>{clause}</p>
                ))}
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