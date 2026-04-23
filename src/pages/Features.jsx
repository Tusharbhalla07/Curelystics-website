import React from 'react'
import { motion } from 'framer-motion'
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
  { title: ['Smart Appointment', 'Booking'], image: smartBookingImage },
  { title: ['Real-Time Token &', 'Queue System'], image: tokenQueueImage },
  { title: 'Notification Systems', image: notificationImage },
  { title: 'Multi-Panel System', image: panelImage },
  { title: 'Family Member Booking', image: familyImage },
  { title: 'Hospital Dashboard', image: dashboardImage },
  { title: 'Multi Medical System Support', image: supportImage },
  { title: 'Doctor Management System', image: doctorMgmtImage }
]

export default function Features(){
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
          <button type="button">Get Started</button>
        </div>

        <div className="features-hero-media" aria-label="Healthcare team visual">
          <img className="features-main-image" src={kaImage} alt="Hero visual" />
        </div>
      </div>

      <section className="features-problems">
        <h2 className="features-problems-heading" style={{ fontSize: '2.4rem', fontWeight: 800, lineHeight: 1.1, textAlign: 'center' }}>
          <span style={{ display: 'block', marginBottom: '12px' }}>Comprehensive OPD</span>
          <span style={{ display: 'block', marginBottom: '12px' }}>Solutions</span>
        </h2>
        <div className="features-grid">
          {solutionCards.map((card) => {
            const titleText = Array.isArray(card.title) ? card.title.join(' ') : card.title
            return (
              <article className="features-card" key={titleText}>
                <h3>
                  {Array.isArray(card.title)
                    ? card.title.map((line, idx) => (
                        <React.Fragment key={idx}>
                          {line}
                          {idx < card.title.length - 1 && <br />}
                        </React.Fragment>
                      ))
                    : card.title}
                </h3>
                <img src={card.image} alt={titleText} />
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
