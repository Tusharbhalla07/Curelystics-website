import React from 'react';
import './howItWorks.css';

export default function HowItWorks() {
  return (
    <section className="how-works-section">
      <h2 className="how-works-title">How Curelystics Works</h2>
      <div className="how-works-steps">
        <div className="how-works-step">
          <div className="how-works-circle">1</div>
          <div className="how-works-step-title">Book Appointment</div>
          <div className="how-works-step-desc">Seamlessly schedule via web or mobile app in seconds.</div>
        </div>
        <div className="how-works-step">
          <div className="how-works-circle">2</div>
          <div className="how-works-step-title">Get Token & Track Queue</div>
          <div className="how-works-step-desc">Instant digital token and real-time live status updates.</div>
        </div>
        <div className="how-works-step">
          <div className="how-works-circle">3</div>
          <div className="how-works-step-title">Visit at the Right Time</div>
          <div className="how-works-step-desc">Arrive exactly when you need to, minimizing wait time.</div>
        </div>
      </div>
    </section>
  );
}
