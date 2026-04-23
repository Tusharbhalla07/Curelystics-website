import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import heroImg from '../assets/hii-removebg-preview.png'

export default function Navbar(){
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    const handleRoute = ()=> setOpen(false)
    window.addEventListener('popstate', handleRoute)
    return ()=> window.removeEventListener('popstate', handleRoute)
  },[])

  return (
    <motion.header
      className="cl-navbar"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="cl-container">
        <div className="cl-left">
          <img src={heroImg} alt="Curelystics" className="cl-hero-img" />
          <div className="cl-brand">
            <div className="cl-name">Curelystics</div>
            <div className="cl-sub">Technologies</div>
          </div>
        </div>

        <nav className="cl-nav">
          <NavLink to="/" end className={({isActive})=> isActive? 'cl-link active' : 'cl-link'}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive? 'cl-link active' : 'cl-link'}>About</NavLink>
          <NavLink to="/features" className={({isActive})=> isActive? 'cl-link active' : 'cl-link'}>Features</NavLink>
          <a href="/#contact" className="cl-link">Contact us</a>
        </nav>

        <div className="cl-cta">
          <NavLink to="/partner" className="cl-link partner-link">Partner with us</NavLink>
          <a href="/#contact" className="cl-cta-btn">
            Get Started
            <span className="cl-arrow">⟶</span>
          </a>

          <button
            className={`menu-btn ${open? 'open':''}`}
            aria-label={open? 'Close menu' : 'Open menu'}
            onClick={()=> setOpen(v=>!v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-nav ${open? 'show':''}`}>
          <div className="mobile-header">
            <div className="mobile-brand">
              <img src={heroImg} alt="Curelystics" className="mobile-hero-img" />
              <div className="mobile-brand-text">
                <div className="mobile-name">Curelystics</div>
                <div className="mobile-sub">Technologies</div>
              </div>
            </div>
            <button className="mobile-close" onClick={()=>setOpen(false)} aria-label="Close menu">✕</button>
          </div>

          <div className="mobile-links">
            <NavLink to="/" end onClick={()=>setOpen(false)} className={({isActive})=> isActive? 'cl-link active' : 'cl-link'}>Home</NavLink>
            <NavLink to="/about" onClick={()=>setOpen(false)} className={({isActive})=> isActive? 'cl-link active' : 'cl-link'}>About</NavLink>
            <NavLink to="/features" onClick={()=>setOpen(false)} className={({isActive})=> isActive? 'cl-link active' : 'cl-link'}>Features</NavLink>
            <a href="/#contact" onClick={()=>setOpen(false)} className="cl-link">Contact us</a>
            <NavLink to="/partner" onClick={()=>setOpen(false)} className='cl-link partner-link'>Partner with us</NavLink>
          </div>

          <div className="mobile-actions">
            <a href="/#contact" onClick={()=>setOpen(false)} className='cl-cta-btn mobile-cta'>
              Get Started
              <span className="cl-arrow">⟶</span>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
