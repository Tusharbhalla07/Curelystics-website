import React from 'react';
import './terms.css';
import shiIcon from '../assets/shi-removebg-preview.png';
import shineIcon from '../assets/shine-removebg-preview.png';
import treeIcon from '../assets/tree-removebg-preview.png';

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
            <div className="terms-mini-header">
              <img src={shiIcon} alt="Authorized Access" className="terms-mini-header-icon" />
              <h4 className="terms-mini-title">Authorized Access</h4>
            </div>
            <p className="terms-mini-text">Access to Curelystics is intended for patients and<br/>registered healthcare providers. You are responsible for<br/>maintaining the confidentiality of your account credentials and<br/>for all activities under your account.</p>
          </div>
          <div className="terms-mini-card">
            <div className="terms-mini-header">
              <img src={shineIcon} alt="Data Accuracy" className="terms-mini-header-icon" />
              <h4 className="terms-mini-title">Data Accuracy</h4>
            </div>
            <p className="terms-mini-text">Users are responsible for ensuring that all personal and<br/>appointment-related information entered into the platform<br/>is accurate and up to date. Curelystics is not responsible for<br/>issues arising from incorrect or incomplete information.</p>
          </div>
        </div>
      </section>
      <section className="terms-section">
        <div className="terms-warning">
          <img src={treeIcon} alt="Medical Advice Disclaimer" className="terms-warning-tree-icon" />
          <div className="terms-disclaimer-content">
            <h3 className="terms-disclaimer-title">Disclaimer of Medical Advice</h3>
            <p className="terms-disclaimer-text">CURELYSTICS IS NOT A MEDICAL PROVIDER.</p>
            <p className="terms-disclaimer-text">The platform does not provide medical advice, diagnosis, or treatment. It is intended solely to facilitate appointment booking and patient flow management.</p>
            <p className="terms-disclaimer-text">All medical decisions, diagnoses, and treatments must be made by licensed healthcare professionals.</p>
            <p className="terms-disclaimer-text">In case of a medical emergency, do not rely on the platform. Please contact emergency services or a qualified medical practitioner immediately.</p>
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
        <div className="terms-compliance-note">
          <h3 className="terms-compliance-title">Key Compliance Note:</h3>
          <p className="terms-compliance-text">
            <span className="terms-compliance-line">Our platform is designed to align with applicable healthcare data standards and regulations,</span>
            <span className="terms-compliance-line">ensuring that patient data remains secure, confidential, and protected.</span>
          </p>
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
