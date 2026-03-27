import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import SplashScreen from './components/SplashScreen'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppFloat from './components/WhatsAppFloat'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhoThisIsFor from './components/WhoThisIsFor'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CardDetailPage from './pages/CardDetailPage'

function ParallaxDivider({ image, overlay = 'rgba(10,20,40,0.45)', height = 320 }) {
  return (
    <div style={{
      height,
      backgroundImage: `linear-gradient(${overlay}, ${overlay}), url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }} />
  )
}

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ParallaxDivider image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=80" />
      <WhoThisIsFor />
      <Services />
      <ParallaxDivider image="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=1600&q=80" overlay="rgba(10,31,68,0.5)" />
      <ContactForm />
      <CTA />
      <Footer />
    </>
  )
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <>
          <ScrollToTop />
          <WhatsAppFloat />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/topic/:slug" element={<CardDetailPage />} />
          </Routes>
        </>
      )}
    </>
  )
}
