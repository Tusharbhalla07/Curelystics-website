import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.css'
import twitterIcon from '../assets/twitter.png'
import facebookIcon from '../assets/facebook.png'
import linkedinIcon from '../assets/linkedin.png'
import instagramIcon from '../assets/instagram.png'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="sf-inner">
        <div className="sf-col sf-about">
          <div className="sf-brand">Curelystics Technologies</div>
          <p className="sf-copy">Transforming healthcare experiences through intelligent queue management and patient flow optimization.</p>
          <div className="sf-social">
            <a href="#" aria-label="facebook" className="sf-icon"><img src={facebookIcon} alt="facebook"/></a>
            <a href="#" aria-label="twitter" className="sf-icon"><img src={twitterIcon} alt="twitter"/></a>
            <a href="#" aria-label="linkedin" className="sf-icon"><img src={linkedinIcon} alt="linkedin"/></a>
            <a href="#" aria-label="instagram" className="sf-icon"><img src={instagramIcon} alt="instagram"/></a>
          </div>
        </div>

        <div className="sf-col sf-links">
          <h6>Quick Links</h6>
          <ul>
            <li><NavLink to="/features">Features</NavLink></li>
            <li><NavLink to="/">How it works</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/">Why Us</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        <div className="sf-col sf-legal">
          <h6>Legal</h6>
          <ul>
            <li><NavLink to="/privacy-policy">Privacy policy</NavLink></li>
            <li><NavLink to="/terms">Terms of Service</NavLink></li>
            <li><NavLink to="/security">Help</NavLink></li>
          </ul>
        </div>
      </div>

      <div className="sf-bottom">
        <hr />
        <div className="sf-copy-small">© 2026 Curelystics Technologies. All rights reserved</div>
      </div>
    </footer>
  )
}
