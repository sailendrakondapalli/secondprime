import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '../assets/image.png'

const INSTAGRAM = 'https://www.instagram.com/secondprime2377?igsh=eDE3cnd3MW4zaWs5&utm_source=qr'
const YOUTUBE = 'https://youtube.com/@secondprime2026?si=Vh1R6s2HmZIWOCj6'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'For You', href: '#who' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(253,248,245,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 20px rgba(201,169,110,0.12)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src={logoImg} alt="JCM Second Prime Logo" style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover' }} />
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, fontWeight: 700, color: scrolled ? '#0a1f44' : '#ffffff', letterSpacing: '0.02em' }}>
            JCM Second Prime
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems:'center', gap: 32 }} className="desktop-nav">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 500,
              color: scrolled ? '#5a5a5a' : '#ffffff', textDecoration: 'none', letterSpacing: '0.04em',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = '#c9a96e'}
              onMouseLeave={e => e.target.style.color = scrolled ? '#5a5a5a' : '#ffffff'}
            >{l.label}</a>
          ))}
          {/* Social icons */}
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            style={{ display:'flex', alignItems:'center', opacity:0.7, transition:'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity='1'}
            onMouseLeave={e => e.currentTarget.style.opacity='0.7'}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#c9a96e" strokeWidth="1.8"/><circle cx="12" cy="12" r="4.5" stroke="#c9a96e" strokeWidth="1.8"/><circle cx="17.5" cy="6.5" r="1" fill="#c9a96e"/></svg>
          </a>
          <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
            style={{ display:'flex', alignItems:'center', opacity:0.7, transition:'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity='1'}
            onMouseLeave={e => e.currentTarget.style.opacity='0.7'}>
            <svg width="19" height="17" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="4" stroke="#c9a96e" strokeWidth="1.8"/><path d="M10 9l5 3-5 3V9z" fill="#c9a96e"/></svg>
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none' }}
          className="hamburger"
        >
          <div style={{ width: 24, height: 2, background: '#c9a96e', marginBottom: 5, transition: 'all 0.3s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <div style={{ width: 24, height: 2, background: '#c9a96e', marginBottom: 5, opacity: open ? 0 : 1, transition: 'all 0.3s' }} />
          <div style={{ width: 24, height: 2, background: '#c9a96e', transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'rgba(253,248,245,0.98)', borderTop: '1px solid #f2c4c4', overflow: 'hidden' }}
          >
            <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, fontWeight: 500, color: '#2d2d2d', textDecoration: 'none' }}
                >{l.label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </motion.header>
  )
}

function FlowerIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0,45,90,135,180,225,270,315].map((a, i) => (
        <ellipse key={i} cx="36" cy="36" rx="7" ry="16" fill="#c9a96e" fillOpacity="0.7" transform={`rotate(${a} 36 36)`} />
      ))}
      <circle cx="36" cy="36" r="9" fill="#c9a96e" />
      <circle cx="36" cy="36" r="5" fill="#fdf8f5" />
    </svg>
  )
}
