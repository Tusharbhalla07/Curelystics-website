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

function AnimatedRoutes(){
	const location = useLocation()

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
					<Route path="/contact" element={<Contact/>} />
					<Route path="/partner" element={<Partner/>} />
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
