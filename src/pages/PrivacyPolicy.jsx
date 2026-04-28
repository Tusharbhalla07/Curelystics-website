import React, { useEffect } from 'react';
import './privacyPolicy.css';
import mailIcon from '../assets/mail.png';
import telephoneIcon from '../assets/telephone.png';
import locationIcon from '../assets/location.png';
import personalIcon from '../assets/zero-removebg-preview.png';
import appointmentIcon from '../assets/line-removebg-preview.png';
import detailsIcon from '../assets/dess-removebg-preview.png';
import familyIcon from '../assets/line2-removebg-preview.png';
import securityIcon from '../assets/dil-removebg-preview.png';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-header">
        <h1>Your health data is <br/><span className="text-blue">a sacred trust.</span></h1>
        <p>At Curelystics Technologies, we are committed to protecting your personal information. Our platform is designed to securely manage appointment and queue data while ensuring your information is used only for healthcare service delivery.</p>
      </div>

      <div className="privacy-sections">
        <div className="privacy-box gray-box">
          <h2>How We Value Your Data</h2>
          <p>We follow the principle of data minimization. We collect only the information required to enable appointment booking, token management, and queue tracking.<br/>Your data is never sold or shared with third parties for advertising or marketing purposes.</p>
        </div>

        <div className="privacy-box transparent-box">
          <h2>Collection</h2>
          <p>We only collect essential information required to provide our services.</p>
          <div className="collection-grid">
            <div className="collection-item">
              <span className="icon-box">
                <img src={personalIcon} alt="personal" />
              </span> Personal Information
            </div>
            <div className="collection-item">
              <span className="icon-box">
                <img src={appointmentIcon} alt="appointment" />
              </span> Appointment Information
            </div>
            <div className="collection-item">
              <span className="icon-box">
                <img src={detailsIcon} alt="details" />
              </span> Basic Details
            </div>
            <div className="collection-item">
              <span className="icon-box">
                <img src={familyIcon} alt="family" />
              </span> Family Member Details
            </div>
          </div>
        </div>

        <div className="privacy-box gray-box">
          <h2>Usage</h2>
          <p>Your data is used only to:</p>
          <div className="list-container">
            <ul className="usage-list">
              <li>Enable appointment booking</li>
              <li>Provide real-time queue updates</li>
              <li>Generate tokens and manage queues</li>
              <li>Facilitate communication with hospitals</li>
            </ul>
          </div>
          <p>We do not use your data for medical diagnosis, automated decision-making, or profiling.</p>
        </div>

        <div className="privacy-box blue-box">
          <div className="icon-shield-container">
            <span className="icon-shield">
              <img src={securityIcon} alt="security" />
            </span>
          </div>
          <h2>Data Security</h2>
          <p>We implement industry-standard security measures to protect your data:</p>
          <div className="list-container">
            <ul className="security-list">
              <li>Access control and authentication systems</li>
              <li>Continuous monitoring and system protection</li>
              <li>Secure data transmission using encryption (HTTPS)</li>
            </ul>
          </div>
          <p>While we take reasonable steps to protect your data, no system can guarantee complete security.</p>
        </div>

        <div className="privacy-box transparent-box">
          <h2>Data Sharing</h2>
          <p>We share your data only when necessary:</p>
          <div className="list-container">
            <ul className="sharing-list">
              <li>With the hospital or doctor you select</li>
              <li>With trusted service providers required to operate the platform</li>
            </ul>
          </div>
          <p>We do not sell or rent your data to third parties.</p>
        </div>

        <div className="privacy-box transparent-box">
          <h2>Data Retention</h2>
          <p>We retain your data only for as long as necessary to:</p>
          <div className="list-container">
            <ul className="retention-list">
              <li>Provide our services</li>
              <li>Maintain appointment records</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>
        </div>

        <div className="privacy-box gray-box">
          <h2>Your Data, Your Rights</h2>
          <div className="rights-grid">
            <div className="right-item">
              <h3>Right to Access</h3>
              <p>You have the right to request access to your personal data stored on our platform.</p>
            </div>
            <div className="right-item">
              <h3>Right to Deletion</h3>
              <p>You may request deletion of your account and associated data, subject to applicable legal requirements.</p>
            </div>
          </div>
        </div>

        <div className="privacy-box transparent-box contact-section">
          <h2>Contact Us</h2>
          <p>For any privacy-related concerns or requests:</p>
          <div className="contact-list1">
            <div className="contact-item">
              <span className="icon">
                <img src={mailIcon} alt="mail" />
              </span>
              <div className="contact-info">
                <strong>Send a Mail</strong>
                <span>curelysticsofficial@gmail.com</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">
                <img src={telephoneIcon} alt="phone" />
              </span>
              <div className="contact-info">
                <strong>Call us</strong>
                <span>+91 9362647579</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">
                <img src={locationIcon} alt="location" />
              </span>
              <div className="contact-info">
                <strong>Visit us</strong>
                <span>New Jawahar Nagar Kota<br/>Rajasthan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
