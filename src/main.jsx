import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Smooth scroll for all anchor links to #contact, centering the section
function ScrollToContactHandler() {
  useEffect(() => {
    function handleClick(e) {
      const anchor = e.target.closest('a[href="#contact"], a[href="/#contact"]')
      if (anchor) {
        const section = document.getElementById('contact')
        if (section) {
          e.preventDefault()
          // If not already on home, change location to home first, then scroll
          if (window.location.pathname !== '/') {
            window.location.href = '/#contact'
          } else {
            section.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        }
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <ScrollToContactHandler />
      <App />
    </>
  </StrictMode>,
)
