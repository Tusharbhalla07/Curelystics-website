import React, { useState } from 'react';
import './plans.css';
import securityIcon from '../assets/security-removebg-preview.png';
import arrowIcon from '../assets/arrow-removebg-preview.png';

const plans = [
  {
    name: 'Basic',
    price: '₹999',
    period: '/mo',
    features: [
      'Appointment booking',
      'Basic token system',
      'QR code-based booking',
      'Support for one doctor',
      '1 basic dashboard',
    ],
    button: 'Select Plan',
    highlight: false,
  },
  {
    name: 'Standard',
    price: '₹1,499',
    period: '/mo',
    features: [
      'Live queue visibility',
      'Multi-doctor management',
      'Patient flow dashboard',
      'Reception & nurse panel',
      'Basic analytics',
      'Up to 2 dashboards',
      'Priority support',
    ],
    button: 'Select Plan',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Premium',
    price: '₹2,500',
    period: '/mo',
    features: [
      'Everything in Standard',
      'Advanced analytics',
      'AI assistant support',
      'Patient history tracking',
      'Custom workflows',
    ],
    button: 'Select Plan',
    highlight: false,
    extra: 'Advanced data features',
    extraFeatures: ['Data export', 'Custom data analysis'],
  },
  {
    name: 'Custom',
    price: 'Contact Us',
    features: [
      'Custom integrations',
      'Advanced data solutions',
      'Dedicated onboarding & support',
      'Scalable infrastructure',
    ],
    button: 'Contact Sales',
    highlight: false,
    isContact: true,
  },
];

export default function Plans() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="plans-page">
      <div className="plans-container">
        <h1 className="plans-title">Choose Your Partner Plan</h1>
        <p className="plans-sub">Transparent pricing designed to scale with your healthcare facility’s growth.</p>
        <div className="plans-toggle-row">
          <span className={!yearly ? 'active' : ''}>Monthly</span>
          <label className="switch">
            <input type="checkbox" checked={yearly} onChange={() => setYearly(v => !v)} />
            <span className="slider round"></span>
          </label>
          <span className={yearly ? 'active' : ''}>Yearly</span>
        </div>
        <div className="plans-cards-row">
          {plans.map((plan, idx) => (
            <div key={plan.name} className={`plan-card${plan.highlight ? ' highlighted' : ''}${plan.isContact ? ' contact' : ''}`}> 
              {plan.badge && <div className="plan-badge">{plan.badge}</div>}
              <div className="plan-header">
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price">{plan.price} {plan.period && <span className="plan-period">{plan.period}</span>}</div>
              </div>
              <ul className="plan-features">
                {plan.features.map(f => <li key={f}>✓ {f}</li>)}
                {plan.extra && <li className="plan-extra-title">{plan.extra}</li>}
                {plan.extraFeatures && plan.extraFeatures.map(f => <li key={f} className="plan-extra">{f}</li>)}
              </ul>
              <button className={`plan-btn${plan.isContact ? ' contact-btn' : ''}`}>{plan.button}</button>
            </div>
          ))}
        </div>
        <div className="plans-security-row">
          <div className="security-left">
            <div className="security-title">Enterprise-Grade Security</div>
            <div className="security-desc">Curelystics Vital is built with patient privacy at its core. Every plan includes end-to-end encryption, HIPAA compliance readiness, and distributed data architecture to ensure zero-downtime operations for your facility.</div>
          </div>
          <div className="security-right">
            <div className="security-icon-card">
              <img src={securityIcon} alt="Secure Data" className="security-img" />
              <div className="security-label">SECURE DATA</div>
            </div>
            <div className="security-icon-card">
              <img src={arrowIcon} alt="99.9% Uptime" className="security-img" />
              <div className="security-label">99.9% UPTIME</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
