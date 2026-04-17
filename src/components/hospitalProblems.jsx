import React from 'react';
import './hospitalProblems.css';

export default function HospitalProblems() {
  return (
    <section className="hospital-problems-section">
      <h2 className="hospital-problems-title">Built to Solve Real Hospital Problems</h2>
      <div className="hospital-problems-subtitle">Optimizing efficiency for Tier-2 and Tier-3 healthcare institutions.</div>
      <div className="hospital-problems-grid">
        <div className="hospital-problem-item">
          <strong>Reduce OPD waiting time</strong>
          <span>Drastic reduction in congestions through predictive load balancing.</span>
        </div>
        <div className="hospital-problem-item">
          <strong>Improve patient satisfaction</strong>
          <span>Enhanced experience leads to better patient retention and trust.</span>
        </div>
        <div className="hospital-problem-item">
          <strong>Increase hospital efficiency</strong>
          <span>Automated workflows free up administrative staff for high-value tasks.</span>
        </div>
        <div className="hospital-problem-item">
          <strong>Eliminate overcrowding</strong>
          <span>Smart scheduling ensures waiting areas remain calm and airy.</span>
        </div>
        <div className="hospital-problem-item">
          <strong>Digitize manual systems</strong>
          <span>Transition from paper to cloud-native operations effortlessly.</span>
        </div>
        <div className="hospital-problem-item">
          <strong>Optimize doctor workflow</strong>
          <span>Clear visibility of patient queues allows better time management.</span>
        </div>
      </div>
      <div className="coming-next-section">
        <h3 className="coming-next-title">What's Coming Next</h3>
        <div className="coming-next-subtitle">The future of clinical excellence at Curelystics.</div>
        <div className="coming-next-grid">
          <div className="coming-next-item"><strong>AI Diagnosis Helper</strong><br /><span>Preliminary symptom check to assist pre-consultation triage.</span></div>
          <div className="coming-next-item"><strong>Telehealth Sync</strong><br /><span>Seamless transition between physical and virtual appointments.</span></div>
          <div className="coming-next-item"><strong>Inventory Link</strong><br /><span>Direct integration with hospital pharmacies and labs.</span></div>
          <div className="coming-next-item"><strong>Predictive Analytics</strong><br /><span>Advanced population health trend forecasting for admins.</span></div>
        </div>
      </div>
    </section>
  );
}
