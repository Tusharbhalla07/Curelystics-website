import React, { useEffect } from 'react';
import './terms.css';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page">
      <div className="terms-header">
        <h1>Terms of Service</h1>
        <p>
          Welcome to Curelystics. These Terms govern your use of our platform, including<br />
          appointment booking, token management, and real-time OPD queue services.<br />
          Please read them carefully to understand your rights and responsibilities.
        </p>
      </div>

      <div className="terms-content">

        <div className="terms-section">
          <div className="intro-box">
            <h2>Introduction</h2>
            <p className="exact-wrap">By accessing or using Curelystics, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you must immediately discontinue use of the platform.</p>
            <p className="exact-wrap">Curelystics is a digital platform designed to improve outpatient (OPD) experiences by enabling appointment booking, token generation, and real-time queue visibility for patients and healthcare providers.</p>
            <div style={{ height: '32px' }}></div>
            <p className="exact-wrap">Our platform provides clinical analytics and patient management tools designed for<br/>licensed healthcare professionals and medical facilities in Tier-2 and Tier-3 healthcare<br/>ecosystems.</p>
          </div>
        </div>

        <div className="terms-section">
          <h2>Use of Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>
                <span className="icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 12L11 14L15 10" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Authorized Access
              </h3>
              <p>Access to Curelystics is intended for patients and registered healthcare providers. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
            </div>
            <div className="service-card">
              <h3>
                <span className="icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 12L11 14L15 10" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Data Accuracy
              </h3>
              <p>Users are responsible for ensuring that all personal and appointment-related information entered into the platform is accurate and up to date. Curelystics is not responsible for issues arising from incorrect or incomplete information.</p>
            </div>
          </div>
        </div>

        <div className="terms-section">
          <div className="warning-box">
            <div className="warning-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L22 20H2L12 2Z" fill="#111" />
                <path d="M12 16V18M12 8V14" stroke="#FFEAE0" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h2>Disclaimer of Medical Advice</h2>
            <p>CURELYSTICS IS NOT A MEDICAL PROVIDER.</p>
            <p>The platform does not provide medical advice, diagnosis, or treatment. It is intended solely to facilitate appointment booking and patient flow management.</p>
            <p>All medical decisions, diagnoses, and treatments must be made by licensed healthcare professionals.</p>
            <p>In case of a medical emergency, do not rely on the platform. Please contact emergency services or a qualified medical practitioner immediately.</p>
          </div>
        </div>

        <div className="terms-section">
          <h2>Appointments & Queue System</h2>
          <p>Curelystics provides real-time queue tracking and estimated waiting times.</p>
          <br />
          <p>Waiting times are indicative and not guaranteed.</p>
          <p>Actual queue progression may vary based on hospital conditions.</p>
          <p>Curelystics is not responsible for delays, cancellations, or rescheduling by hospitals.</p>
        </div>

        <div className="terms-section">
          <h2>Privacy & Data Security</h2>
          <p>Your privacy is important to us. Curelystics implements appropriate technical and organizational measures to protect user data. We collect only necessary patient and appointment data. Data is shared only with the selected hospital or provider. We do not sell personal data.</p>
        </div>

        <div className="terms-section">
          <div className="compliance-box">
            <h2>Key Compliance Note:</h2>
            <p>Our platform is designed to align with applicable healthcare data standards and regulations, ensuring that patient data remains secure, confidential, and protected.</p>
          </div>
        </div>

        <div className="terms-section">
          <h2>User Responsibilities</h2>
          <div className="responsibilities-list">
            <p>Provide accurate and truthful information</p>
            <p>Maintain confidentiality of their account</p>
            <p>Use the platform ethically and responsibly</p>
            <p>Not misuse or attempt unauthorized access</p>
          </div>
        </div>

        <div className="terms-section">
          <div className="suspension-box">
            <h2>Account Suspension & Termination</h2>
            <p>Curelystics reserves the right to suspend or terminate access to the platform if these Terms are violated. fraudulent or suspicious activity is detected. The platform is misused and limitation of liability</p>
          </div>
        </div>

        <div className="terms-section">
          <div className="liability-box">
            <h2>Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Curelystics Healthcare and its affiliates shall not be liable for any indirect, incidental, special or consequential damages arising out of the use or inability to use the service, including but not limited to loss of clinical data or medical errors resulting from user-input inaccuracies.</p>
          </div>
        </div>

        <div className="terms-actions">
          <p className="confirm-text">Before continuing, please confirm:</p>
          <p className="agree-text">I agree to the Terms of Service and Privacy Policy</p>
          <div className="action-buttons">
            <button className="btn-accept">Accept and Continue</button>
            <button className="btn-close">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
