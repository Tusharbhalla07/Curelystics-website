import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CountUp from '../components/CountUp'
import { NavLink } from 'react-router-dom'
import './home.css'
import woman from '../assets/woman.png'
import onlineBookingIcon from '../assets/online-booking.png'
import timeIcon from '../assets/time.png'
import notificationIcon from '../assets/notification.png'
import chartIcon from '../assets/chart.png'
import lockedIcon from '../assets/locked.png'
import iphoneIcon from '../assets/iphone.png'
import doctor0 from '../assets/page1-removebg-preview.png'
import doctor1 from '../assets/page2-removebg-preview.png'
import doctor2 from '../assets/page3-removebg-preview.png'
import doctor3 from '../assets/page4-removebg-preview.png'
import doctor4 from '../assets/page5-removebg-preview.png'
import doctor5 from '../assets/page6-removebg-preview.png'
import doctor6 from '../assets/page6-removebg-preview.png'
import hero from '../assets/dy-removebg-preview.png'
import appPhoneLeft from '../assets/i-removebg-preview.png'
import appPhoneRight from '../assets/i1-removebg-preview.png'
import partnerImg from '../assets/new.png'
import mailIcon from '../assets/mail.png'
import telephoneIcon from '../assets/telephone.png'
import locationIcon from '../assets/location.png'
import connectorImg from '../assets/A-removebg-preview.png'
import hospital1 from '../assets/8-removebg-preview.png'
import hospital2 from '../assets/9-removebg-preview.png'
import hospital3 from '../assets/10-removebg-preview.png'
import hospital4 from '../assets/11-removebg-preview.png'
import hospital5 from '../assets/12-removebg-preview.png'

const heroVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] } })
}

const sectionVariant = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, when: 'beforeChildren' } }
}

export default function Home() {
  const [showQuick, setShowQuick] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '' })

  // Scroll to contact section if hash is #contact
  React.useEffect(() => {
    if (window.location.hash === '#contact') {
      const section = document.getElementById('contact')
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
      }
    }
  }, [])

  const highlightItems = [
    { title: 'Booking', subtitle: 'Appointment scheduling' },
    { title: 'Queue', subtitle: 'Patient flow management' },
    { title: 'Calendar', subtitle: 'Schedule tracking' },
    { title: 'Notification', subtitle: 'Real-time alerts' },
    { title: 'Hospital', subtitle: 'Healthcare facility' }
  ]

  const partnerLogos = [hospital1, hospital2, hospital3, hospital4, hospital5].slice().reverse()

  const featureRows = [
    {
      title: ['Smart Appointment', 'Booking'],
      description: [
        'Intelligent scheduling system that',
        'optimizes appointment slots and reduces no-shows with',
        'automated reminders.'
      ],
      image: doctor0,
      icon: onlineBookingIcon,
      reverse: false
    },
    {
      title: ['Real-Time Queue', 'Updates'],
      description: [
        'Keep patients informed with live wait time updates and',
        'queue position tracking through mobile notifications.'
      ],
      image: doctor1,
      icon: timeIcon,
      reverse: true
    },
    {
      title: 'Automated Notifications',
      description: [
        'Send SMS and email alerts to patients when their turn is',
        'approaching, reducing crowding in waiting areas.'
      ],
      image: doctor2,
      icon: notificationIcon,
      reverse: false
    },
    {
      title: 'Advanced Analytics',
      description: [
        'Gain insights into patient flow, peak hours, and staff',
        'performance with comprehensive analytics',
        'dashboards.'
      ],
      image: doctor3,
      icon: chartIcon,
      reverse: true
    },
    {
      title: 'Data Security',
      description: [
        'We prioritize patient privacy with enterprise-grade',
        'encryption and secure data handling practices.'
      ],
      image: doctor4,
      icon: lockedIcon,
      reverse: false
    },
    {
      title: 'Mobile-First Design',
      description: [
        'Seamless experience across all devices, allowing',
        'patients to manage appointments from',
        'anywhere.'
      ],
      image: doctor5,
      icon: iphoneIcon,
      reverse: true
    }
  ]

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    try {
      const resp = await fetch(form.action, {
        method: form.method || 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      if (resp.ok) {
        setToast({ show: true, message: 'Successful submission of the email message' })
        form.reset()
      } else {
        setToast({ show: true, message: 'Submission failed. Please try again.' })
      }
    } catch (err) {
      setToast({ show: true, message: 'Submission failed. Please try again.' })
    }
    setTimeout(() => setToast({ show: false, message: '' }), 4000)
  }

  return (
    <>
      <div className="page-screen">
        <div className="main-body">
          <AnimatePresence mode="wait">
            <motion.section initial="hidden" animate="show" exit={{ opacity: 0 }} className="hero" variants={sectionVariant}>
              <div className="hero-inner">
                <div className="hero-card">
                  <div className="hero-content">
                    <motion.h1 className="hero-title" custom={0} variants={heroVariants} initial="hidden" animate="show">
                      <span className="hero-line-fixed">Transform Patient</span>
                      <span className="hero-line-fixed">Waiting Experience</span>
                      <span className="hero-line-fixed">Seamlessly</span>
                    </motion.h1>

                    <motion.p className="hero-sub" custom={1} variants={heroVariants} initial="hidden" animate="show">
                      Streamlining outpatient care to reduce wait times,
                      <br />
                      improve patient flow, and help hospitals operate
                      <br />
                      more efficiently.
                    </motion.p>

                    <motion.div className="hero-cta" custom={2} variants={heroVariants} initial="hidden" animate="show">
                      <a href="#contact" className="hero-inline-btn">Get Started <span className="cta-arrow">⟶</span></a>
                    </motion.div>
                  </div>

                  <motion.div className="hero-visual" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.15 }}>
                    <img src={hero} alt="Doctor" />
                  </motion.div>
                </div>
              </div>
            </motion.section>
          </AnimatePresence>

          {/* Partner logos strip (inserted between patients and Features) */}
          <section className="partner-strip" aria-label="Our partners">
            <div className="partner-inner">
              <div className="partner-marquee">
                <div className="partner-track">
                  {[...partnerLogos, ...partnerLogos].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      className={src === hospital2 || src === hospital3 ? 'logo-boost' : ''}
                      alt={`hospital-${(i % partnerLogos.length) + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features / Why Curelystics section (separate full-width section) */}
          <section className="features-section">
            <div className="fs-inner">
              <h2 className="fs-title">Why Curelystics healthcare<br />platform ?</h2>
              <p className="fs-sub">A comprehensive **Enterprise SaaS platform** designed to streamline operations and enhance<br />patient experience from the cloud. Smart Appointment Booking Intelligent scheduling system<br />that optimizes appointment slots and reduces no-shows with automated reminders.</p>

              <div className="fs-grid">
                {featureRows.map((item, i) => (
                  <div className={`fs-row ${item.reverse ? 'reverse' : ''}`} key={item.title}>
                    <motion.div className="fs-media" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }}>
                      <img src={item.image} alt={item.title} />
                    </motion.div>
                    <div className="fs-content">
                      <div className="fs-icon-wrap" aria-hidden>
                        <img src={item.icon} alt="" />
                      </div>
                      <h3>
                        {Array.isArray(item.title)
                          ? item.title.map((line, idx) => (
                            <span key={idx} className="fs-title-line">
                              {line}
                            </span>
                          ))
                          : item.title}
                      </h3>
                      <p>
                        {Array.isArray(item.description)
                          ? item.description.map((line, idx) => (
                            <span key={idx} className="fs-desc-line">{line}</span>
                          ))
                          : item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pioneering block (inserted after Features) */}
          <section className="pioneering-final">
            <div className="pf-inner">
              <div className="pf-cta-top"><a href="#contact" className="cta-small">Get Started</a></div>

              <h2 className="pf-title">Pioneering the Future of Patient Flow</h2>
              <p className="pf-sub">Curelystics Technologies is an early-stage startup born out of a simple observation; the traditional waiting room experience is broken. We're on a mission to transform how healthcare facilities manage their most valuable asset — time.</p>

              <p className="pf-sub pf-sub-2">Our prototype is built on the belief that technology should humanize healthcare, not complicate it. By creating a seamless, transparent connection between patients and providers, we're making "waiting" a relic of the past.</p>

              <div className="pf-phones" aria-label="App mockup">
                <div className="phone-mockup phone-left">
                  <img src={appPhoneLeft} alt="Curelystics app mockup left" />
                </div>
                <div className="phone-mockup phone-right">
                  <img src={appPhoneRight} alt="Curelystics app mockup right" />
                </div>
              </div>

              <div className="pf-cta"><a href="#contact" className="cta-primary">Get Started <span className="cta-arrow">➜</span></a></div>

              <div className="pf-how-section">
                <h3 className="pf-how-title">How It Works</h3>
                <div className="pf-how-grid">
                  <div className="pf-card">
                    <div className="pf-step">1</div>
                    <h4>Patient Booking</h4>
                    <p>Patients book appointments online or at the facility through an intuitive interface</p>
                  </div>
                  <div className="pf-card">
                    <div className="pf-step">2</div>
                    <h4>Token Generation</h4>
                    <p>System automatically generates a digital token and sends confirmation with queue details.</p>
                  </div>
                  <div className="pf-card">
                    <div className="pf-step">3</div>
                    <h4>Calm Waiting Experience</h4>
                    <p>Patients receive real-time updates and can wait comfortably anywhere with live queue tracking.</p>
                  </div>
                </div>
              </div>

              <div className="pf-different">
                <div className="pf-left">
                  <h3>How We Are Different</h3>
                  <p className="pf-d-sub">Visionary healthcare leaders chose Curelystics for our unique SaaS approach to the patient experience-scalable, secure, and instant.</p>
                  <a href="#contact" className="btn-ghost">Get Started →</a>
                </div>
                <div className="pf-right">
                  <img src={connectorImg} className="pf-connector-img" alt="connectors" aria-hidden />
                </div>
              </div>

              <div className="pf-partner">
                <h3 className="pf-partner-title">Partner with us</h3>
                <p className="pf-partner-sub">Join hospitals that are transforming how outpatient care is delivered with structured workflows, real-time visibility, and better patient experiences.</p>
                <p className="pf-partner-sub pf-partner-sub-2">Designed to simplify your daily operations, reduce pressure on your staff, and bring clarity to every patient visit so your hospital runs more efficiently every day.</p>

                <div className="pf-partner-img">
                  <img src={partnerImg} alt="partner" />
                </div>


              </div>
            </div>
          </section>

          {/* New highlights row + contact section (matches provided UI) */}
          <section className="highlights-section">
            <div className="hl-inner">
              <div className="hl-row">
                {highlightItems.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    className="hl-circle"
                  >
                    {item.title}
                    <span className="hl-sub">{item.subtitle}</span>
                  </button>
                ))}
              </div>

              <div className="hl-cta-wrap"><a href="#contact" className="cta-primary hl-cta">Partner with us ➜</a></div>
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div className="contact-inner">
              <div className="contact-card">
                <div className="contact-left">
                  <button className="pill">Contact us</button>
                  <h2>We’re Here<br />To Help!</h2>
                  <p className="contact-copy">Have questions or assistance ? Contact us at Curelystics for support or to discuss your project</p>

                  <ul className="contact-list">
                    <li>
                      <span className="contact-ico" aria-hidden>
                        <img src={mailIcon} alt="email icon" />
                      </span>
                      <div>
                        <strong>Send a Mail</strong>
                        <div className="muted">curelysticsofficial@gmail.com</div>
                      </div>
                    </li>
                    <li>
                      <span className="contact-ico" aria-hidden>
                        <img src={telephoneIcon} alt="phone icon" />
                      </span>
                      <div>
                        <strong>Call us</strong>
                        <div className="muted">+919352547979</div>
                      </div>
                    </li>
                    <li>
                      <span className="contact-ico" aria-hidden>
                        <img src={locationIcon} alt="location icon" />
                      </span>
                      <div>
                        <strong>Visit us</strong>
                        <div className="muted">New Jawahar Nagar Kota Rajasthan</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="contact-right">
                  <form
                    className="contact-form"
                    action="https://formspree.io/f/xreobren"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="_subject" value="New contact from Curelystics website" />
                    <label>Full Name
                      <input name="name" type="text" placeholder="Esther Shawa" required />
                    </label>
                    <label>Email address
                      <input name="email" type="email" placeholder="esthershawa@gmail.com" required />
                    </label>
                    <label>Healthcare Facility
                      <input name="facility" type="text" placeholder="Your Hospital/Clinic Name" />
                    </label>
                    <label>Message
                      <textarea name="message" placeholder="Tell us your needs..." required></textarea>
                    </label>
                    <div className="form-actions"><button type="submit" className="cta-primary">Send message ➜</button></div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {toast.show && (
            <div className="toast show">{toast.message}</div>
          )}

        </div>{/* .main-body */}
      </div>{/* .page-screen */}
    </>
  )
}
