import React from 'react'
import { motion } from 'framer-motion'
import './about.css'
import heroImage from '../assets/doc.png'
import storyMainImage from '../assets/doc2.png'
import missionMainImage from '../assets/doc3.png'
import visionMainImage from '../assets/doc4.png'

export default function About(){
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-copy">
            <h1>About Us</h1>
            <h2>Building better out patient care experiences</h2>
            <p>Curelystics is an OPD-healthcare platform built to bring visibility, structure, and efficiency into outpatient care.</p>
            <p>From live queue tracking to smart token systems, we are creating a better experience for both patients and healthcare providers.</p>
          </div>
          <div className="about-hero-image-wrap">
            <img className="about-hero-image" src={heroImage} alt="Doctor assisting a patient" />
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-inner">
          <div className="about-story-media">
            <img className="story-main" src={storyMainImage} alt="Doctor on phone" />
          </div>
          <div className="about-story-copy">
            <h3>Our Story</h3>
            <p>Curelystics didn’t begin in a boardroom.</p>
            <p>It began with a simple observation. During visits to hospitals across India, especially in Tier 2 and Tier 3 cities, we kept seeing the same thing. Long queues. Crowded waiting areas. Patients sitting for hours, unsure of when they would be attended to.</p>
            <p>Behind the scenes, hospital staff were also struggling. Managing patient flow manually, answering repeated questions about queue status, and handling unstructured OPD systems made daily operations overwhelming. What stood out the most was this: The OPD, one of the busiest parts of any hospital, was still largely undigitized. So we asked a simple question:</p>
            <p>What if patients could see their wait time and plan their visit instead of waiting endlessly? That question led to the birth of Curelystics.</p>
            <p>Curelystics is an OPD-first healthcare platform built to bring visibility, structure, and efficiency into outpatient care. From live queue tracking to smart token systems, we are creating a better experience for both patients and healthcare providers.</p>
            <p>Today, we are building Curelystics step by step, guided by real hospital insights, early partnerships, and a clear mission to transform outpatient care in India.</p>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-mission-inner">
          <div className="about-mission-card">
            <h3>Our Mission</h3>
            <p>Our mission is to eliminate unnecessary waiting time in hospitals and bring structure to outpatient care through technology.</p>
            <p>We are building an OPD-first healthcare platform that enables patients to book appointments, view real-time queues, and receive accurate wait-time predictions allowing them to plan their visits instead of waiting endlessly.</p>
            <p>At the same time, we empower hospitals with tools to manage patient flow, reduce overcrowding, and improve operational efficiency through a simple, scalable, and easy-to-adopt system.</p>
            <p>By combining real-time data, smart scheduling, and AI-driven insights, we aim to improve both patient experience and hospital performance, creating a healthcare system that works better for everyone.</p>
          </div>
          <div className="about-mission-media">
            <img className="mission-main" src={missionMainImage} alt="Doctor writing notes" />
          </div>
        </div>
      </section>

      <section className="about-vision">
        <div className="about-vision-inner">
          <div className="about-vision-media">
            <img className="vision-main" src={visionMainImage} alt="Healthcare team in hospital" />
          </div>
          <div className="about-vision-copy">
            <h3>Our Vision</h3>
            <p>At Curelystics, our vision is to transform how healthcare is accessed and experienced across India.</p>
            <p>We envision a future where patients no longer have to wait for hours in crowded hospital corridors, uncertain about their turn, and hospitals no longer struggle with unstructured and inefficient outpatient operations.</p>
            <p>Our goal is to build the digital backbone of outpatient healthcare in India, where every patient has complete visibility, every hospital operates efficiently, and every interaction is powered by intelligent, data-driven systems.</p>
            <p>We aim to make healthcare faster, more predictable, and stress-<br />free especially for Tier-2 and Tier-3 cities where digital<br />infrastructure is still evolving.</p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
