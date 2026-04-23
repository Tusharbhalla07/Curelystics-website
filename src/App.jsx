import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import Features from './pages/Features'
import Contact from './pages/Contact'
import Partner from './pages/Partner'
import Plans from './pages/Plans'
import TermsOfService from './pages/TermsOfService'

function AnimatedRoutes(){
	const location = useLocation()

	// Scroll to top on every route change
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location.pathname])

	// Redirect /contact to / and scroll to #contact
	useEffect(() => {
		if (location.pathname === '/contact') {
			window.history.replaceState({}, '', '/')
			setTimeout(() => {
				const contactSection = document.getElementById('contact')
				if (contactSection) {
					contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
				}
			}, 50)
		}
	}, [location.pathname])

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={location.pathname}
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -8 }}
				transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
			>
				   <Routes location={location}>
					   <Route path="/" element={<Home/>} />
					   <Route path="/about" element={<About/>} />
					   <Route path="/features" element={<Features/>} />
					   {/* Remove Contact route, handled by redirect */}
					   <Route path="/partner" element={<Partner/>} />
					   <Route path="/plans" element={<Plans/>} />
					   <Route path="/terms" element={<TermsOfService/>} />
				   </Routes>
			</motion.div>
		</AnimatePresence>
	)
}

export default function App(){
	useEffect(() => {
		let rafId = 0
		let latestScrollY = 0

		const updateParallax = () => {
			document.documentElement.style.setProperty('--scroll-y', `${latestScrollY}px`)
			rafId = 0
		}

		const onScroll = () => {
			latestScrollY = window.scrollY || window.pageYOffset || 0
			if (!rafId) {
				rafId = window.requestAnimationFrame(updateParallax)
			}
		}

		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', onScroll)
			if (rafId) window.cancelAnimationFrame(rafId)
		}
	}, [])

	return (
		<div className="App">
			<div className="site-parallax-bg" aria-hidden="true" />
			<div className="app-content-layer">
				<BrowserRouter>
					<Navbar />
					<main className="main-content">
						<AnimatedRoutes />
					</main>
					<Footer />
				</BrowserRouter>
			</div>
		</div>
	)
}
