import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './features.css'
import mainImage from '../assets/doc4.png'
import kaImage from '../assets/ka.png'
import smartBookingImage from '../assets/page1-removebg-preview.png'
import tokenQueueImage from '../assets/page2-removebg-preview.png'
import notificationImage from '../assets/page3-removebg-preview.png'
import panelImage from '../assets/page4-removebg-preview.png'
import familyImage from '../assets/pin-removebg-preview.png'
import dashboardImage from '../assets/dum-removebg-preview.png'
import supportImage from '../assets/dim-removebg-preview.png'
import doctorMgmtImage from '../assets/pum-removebg-preview.png'
import HowItWorks from '../components/howItWorks';
import HospitalProblems from '../components/hospitalProblems';
import CTASection from '../components/ctaSection';

const solutionCards = [
  {
    title: 'Real-Time Queue Visibility',
    description: 'Patients can track their exact position in the queue, reducing uncertainty, crowding, and frustration inside hospital premises.',
    image: tokenQueueImage
  },
  {
    title: 'Smart Appointment Booking',
    description: 'Enable structured appointment scheduling with optimized time slots to reduce overload and improve patient distribution.',
    image: smartBookingImage
  },
  {
    title: 'Doctor & OPD Management',
    description: 'Manage doctor schedules, patient load, and consultation flow in one centralized system.',
    image: doctorMgmtImage
  },
  {
    title: 'OPD Analytics & Insights',
    description: 'Get actionable insights on wait times, peak hours, and patient flow to improve operational decisions.',
    image: dashboardImage
  },
  {
    title: 'Automated Notifications',
    description: 'Send real-time alerts to patients about their turn, delays, or updates via SMS or app notifications.',
    image: notificationImage
  },
  {
    title: 'Multi-Patient / Family Booking',
    description: 'Allow patients to book and manage appointments for multiple family members in one place.',
    image: familyImage
  }
]

export default function Features() {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/contact')
  }

  return (
    <motion.section
      className="features-page"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="features-hero">
        <div className="features-hero-copy">
          <h1>
            Powerful Features<br />
            Built for Modern<br />
            OPD Management
          </h1>
          <p>
            From smart appointment booking to real-time queue<br />
            Curelystics provides everything hospitals need to<br />
            streamline outpatient operations and enhance patient<br />
            experience.
          </p>
          <button type="button" onClick={handleGetStarted}>Get Started</button>
        </div>

        <div className="features-hero-media" aria-label="Healthcare team visual">
          <img className="features-main-image" src={kaImage} alt="Hero visual" />
        </div>
      </div>

      <section className="features-problems">
        <h2 className="features-problems-heading" style={{ fontSize: '2.4rem', fontWeight: 800, lineHeight: 1.1, textAlign: 'center' }}>
          <span style={{ display: 'block', marginBottom: '12px' }}>Everything You Need to Run</span>
          <span style={{ display: 'block', marginBottom: '12px' }}>a Smarter OPD</span>
        </h2>
        <div className="features-grid">
          {solutionCards.map((card) => {
            const titleText = Array.isArray(card.title) ? card.title.join(' ') : card.title
            return (
              <article className="features-card" key={titleText}>
                <h3>{card.title}</h3>
                <img src={card.image} alt={titleText} />
                <p>{card.description}</p>
              </article>
            )
          })}
        </div>
        <div className="features-blue-strip">
          <strong>Live Wait Time Prediction</strong>
          <span>AI-driven analytics to give patients accurate expectations.</span>
        </div>
      </section>
      <HowItWorks />
      <HospitalProblems />
      <CTASection />
    </motion.section>
  )
}
