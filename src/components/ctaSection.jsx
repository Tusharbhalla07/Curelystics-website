import React from 'react';
import './ctaSection.css';
import ctaImage from '../assets/dy-removebg-preview.png';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">
          Ready to transform your<br /><span style={{ display: 'inline-block', height: '12px' }}></span>hospital operations?
        </h2>
        <button className="cta-btn">Partner With Us</button>
      </div>
      <div className="cta-image-wrap">
        <img src={ctaImage} alt="Doctor and patient" className="cta-image" />
      </div>
    </section>
  );
}
