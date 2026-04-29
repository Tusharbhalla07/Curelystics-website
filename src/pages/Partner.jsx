import React from 'react'
import { motion } from 'framer-motion'
import './partner.css'
import './home.css'
import heroRoundImage from '../assets/dc.png'
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

const partnerFeatures = [
  {
    title: ['Smart Appointment', 'Booking'],
    line1: 'Intelligent scheduling system that optimizes appointment slots',
    line2: 'and reduces no-shows with automated reminders.',
    icon: onlineBookingIcon,
    image: doctor0,
    reverse: false
  },
  {
    title: ['Real-Time Queue', 'Updates'],
    line1: 'Keep patients informed with live wait-time updates and queue',
    line2: 'position tracking through mobile notifications.',
    icon: timeIcon,
    image: doctor1,
    reverse: true
  },
  {
    title: 'Automated Notifications',
    line1: 'Send SMS and email alerts when a patient turn is approaching',
    line2: 'to reduce waiting area crowding.',
    icon: notificationIcon,
    image: doctor2,
    reverse: false
  },
  {
    title: 'Advanced Analytics',
    line1: 'Gain insights into patient flow, peak hours, and staff',
    line2: 'performance with actionable dashboards.',
    icon: chartIcon,
    image: doctor3,
    reverse: true
  },
  {
    title: 'Data Security',
    line1: 'We prioritize patient privacy with enterprise-grade',
    line2: 'encryption and secure data handling practices.',
    icon: lockedIcon,
    image: doctor4,
    reverse: false
  },
  {
    title: 'Mobile-First Design',
    line1: 'A seamless experience across devices so staff and patients',
    line2: 'can manage visits from anywhere.',
    icon: iphoneIcon,
    image: doctor5,
    reverse: true
  }
]

export default function Partner(){
  return (
    <motion.section
      className="partner-page"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="partner-wrap">
        <div className="partner-top">
          <div className="partner-top-copy">
            <h1>
              <span className="partner-h1-line">Reduce OPD Waiting Time</span>
              <span className="partner-h1-line">and Improve Patient Flow</span>
              <span className="partner-h1-line">Without Increasing Staff</span>
            </h1>
            <p className="partner-intro">
              <span className="partner-intro-line">A complete digital solution designed to streamline</span>
              <span className="partner-intro-line">patient flow and enhance care delivery</span>
            </p>
            <button disabled className="partner-top-cta">Join with us now <span aria-hidden="true">&#8594;</span></button>
          </div>
          <div className="partner-top-media">
            <img className="partner-hero-image" src={heroRoundImage} alt="Hospital staff collaborating" />
          </div>
        </div>

        <div className="partner-title-block">
          <h2 className="partner-title">Why Partner With Us ?</h2>
          <p className="partner-title-sub">Streamline your OPD, empower your staff, and deliver<br />better patient care.</p>
        </div>

        <div className="partner-feature-list">
          {partnerFeatures.map((item, i) => (
            <div className={`fs-row ${item.reverse ? 'reverse' : ''}`} key={Array.isArray(item.title) ? item.title.join('-') : item.title}>
              <motion.div className="fs-media" initial={{opacity:0, y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6, delay: i * 0.06}}>
                <img src={item.image} alt={Array.isArray(item.title) ? item.title.join(' ') : item.title} />
              </motion.div>

              <div className="fs-content">
                <div className="fs-icon-wrap" aria-hidden>
                  <img src={item.icon} alt="" />
                </div>
                <h3>
                  {Array.isArray(item.title)
                    ? item.title.map((line, idx) => (
                        <span key={idx} className="fs-title-line">{line}</span>
                      ))
                    : item.title}
                </h3>
                <p>
                  <span className="fs-desc-line">{item.line1}</span>
                  <span className="fs-desc-line">{item.line2}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="partner-bottom-card">
          <h4>
            Ready to build the future of your
            <br />
            hospital ?
          </h4>
          <p>Join the digital revolution, streamline your OPD, empower your staff, and deliver a seamless patient experience.</p>
          <button type="button" className="partner-bottom-cta" disabled>Join with us now <span aria-hidden="true">&#8594;</span></button>
        </div>
      </div>
    </motion.section>
  )
}
