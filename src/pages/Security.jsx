import React, { useEffect } from 'react';
import './security.css';

export default function Security() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="security-page">
      <div className="security-header">
        <h1>How can we help<br/><span className="text-blue">you today?</span></h1>
        <div className="search-container">
          <div className="search-input-wrapper">
            <span className="search-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <input type="text" placeholder="Search for guides ..." />
          </div>
          <button className="search-btn">Search</button>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        
        <div className="faq-item">
          <h3>How to book an appointment?</h3>
          <p>Log in, select '<b>Search for doctors or hospitals</b>', choose your preferred doctor and hospital, select an available time slot, and confirm by paying the nominal convenience fee.</p>
        </div>

        <div className="faq-item">
          <h3>Where can I see my reports?</h3>
          <p>Your digital health records are securely stored under the '<b>History</b>' tab in your dashboard. You can view, download, and share them with your doctors instantly.</p>
        </div>

        <div className="faq-item">
          <h3>How do I cancel a booking?</h3>
          <p>Go to '<b>Manage Bookings</b>' in your dashboard, select the active appointment, and click 'Cancel'. Full refunds are provided for cancellations made at least 2 hours prior to the slot.</p>
        </div>

        <div className="faq-item">
          <h3>What is a digital token? <span className="badge">MOST SEARCHED</span></h3>
          <p>A digital token is your virtual place in the OPD queue. It allows you to monitor your live position and estimated wait time from anywhere, so you only need to arrive at the hospital when it's nearly your turn.</p>
        </div>
      </div>

      <div className="still-help-section">
        <h2>Still need help?</h2>
        <p>Our support team is available 24/7 to assist you with any medical queries or technical issues.</p>
        <button className="contact-support-btn">
          <span className="icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 18V15C3 10.0294 7.02944 6 12 6C16.9706 6 21 10.0294 21 15V18M3 18C3 19.6569 4.34315 21 6 21H7C8.10457 21 9 20.1046 9 19V15C9 13.8954 8.10457 13 7 13H3V18ZM21 18C21 19.6569 19.6569 21 18 21H17C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H21V18Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span> Contact Support
        </button>
      </div>
    </div>
  );
}
