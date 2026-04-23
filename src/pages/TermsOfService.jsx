import React from 'react';
import './terms.css';

export default function TermsOfService() {
  return (
    <div className="container terms-container">
      <h1 className="terms-title">Terms of Service</h1>
      <p className="terms-welcome">
        Welcome to Curelystics. These Terms govern your use of our platform, including<br/>
        appointment booking, token management, and real-time OPD queue services.<br/>
        Please read them carefully to understand your rights and responsibilities.
      </p>
      <section className="terms-section intro-section">
        <h2 className="terms-intro-title">Introduction</h2>
        <div className="terms-card">
          By accessing or using Curelystics, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you must immediately discontinue use of the platform.<br/>
          Curelystics is a digital platform designed to improve outpatient (OPD) experiences by enabling appointment booking, token generation, and real-time queue visibility for patients and healthcare providers.<br/><br/>
          Our platform provides clinical analytics and patient management tools designed for<br/>
          licensed healthcare professionals and medical facilities in Tier-2 and Tier-3 healthcare<br/>
          ecosystems.
        </div>
      </section>
      <section className="terms-section">
        <h2>Use of Services</h2>
        <div className="terms-row">
          <div className="terms-mini-card">
            <strong>Authorized Access</strong>
            <br />
            Access to Curelystics is permitted only for authorized users and purposes.
          </div>
          <div className="terms-mini-card">
            <strong>Data Accuracy</strong>
            <br />
            Users are responsible for providing accurate and up-to-date information.
          </div>
        </div>
      </section>
      <section className="terms-section">
        <div className="terms-warning">
          <span className="terms-warning-icon">⚠️</span>
          <div>
            <strong>Disclaimer of Medical Advice</strong>
            <br />
            The platform delivers information and tools for convenience only. No content is intended as medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for medical concerns.
            <br />
            In case of a medical emergency, seek care from professionals—never use Curelystics for emergency needs.
          </div>
        </div>
      </section>
      <section className="terms-section">
        <h2>Appointments & Queue System</h2>
        <div className="terms-card">
          Curelystics streamlines OPD appointments and queue management, helping hospitals and clinics improve patient flow and reduce waiting times.
        </div>
      </section>
      <section className="terms-section">
        <h2>Privacy & Data Security</h2>
        <div className="terms-card">
          We take privacy seriously. All user data is handled according to our Privacy Policy. Curelystics employs industry-standard security measures to protect your information.
        </div>
      </section>
      <section className="terms-section">
        <div className="terms-note">
          <strong>Key Compliance Note:</strong> Our platform is designed to align with applicable healthcare sector standards and regulations.
        </div>
      </section>
      <section className="terms-section">
        <h2>User Responsibilities</h2>
        <div className="terms-card">
          Users are responsible for maintaining the confidentiality of their account credentials and for all activities under their account.
        </div>
      </section>
      <section className="terms-section">
        <h2>Account Suspension & Termination</h2>
        <div className="terms-card">
          Curelystics reserves the right to suspend or terminate accounts for violations of these Terms or misuse of the platform.
        </div>
      </section>
      <section className="terms-section">
        <h2>Limitation of Liability</h2>
        <div className="terms-card">
          <div className="terms-liability">
            To the maximum extent permitted by law, Curelystics Healthcare and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising out of the use or inability to use the service, including but not limited to loss of clinical data or medical errors resulting from user-input inaccuracies.
          </div>
        </div>
      </section>
      <form className="terms-actions">
        <div style={{textAlign: 'center', marginBottom: '2px', color: '#222', fontSize: '1rem'}}>
          Before continuing, please confirm:
        </div>
        <div style={{textAlign: 'center', marginBottom: '8px', color: '#222', fontSize: '1rem'}}>
          I agree to the Terms of Service and Privacy Policy
        </div>
        <div className="terms-buttons">
          <button type="submit" className="accept-btn">Accept and Continue</button>
          <button type="button" className="close-btn">Close</button>
        </div>
      </form>
    </div>
  );
}
