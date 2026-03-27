import { motion } from 'framer-motion'
import heroBg from '../assets/herobg.png'

const WA = 'https://wa.me/919818461302'

export default function Hero() {
  return (
    <section id="hero" style={{ background: '#fdf8f5', position: 'relative' }}>

      {/* BG Image — full width, natural height */}
      <img
        src={heroBg}
        alt="JCM Second Prime"
        style={{ width: '100%', display: 'block', objectFit: 'cover' }}
      />

      {/* Content card below image */}
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', padding: '40px 24px 60px',
        background: '#fdf8f5',
      }}>
        {/* Reinvent Yourself After 45 */}
        <motion.h2
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2, duration:0.7 }}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.6rem,4vw,2.6rem)',
            fontWeight: 700, color: '#1e1e1e',
            marginBottom: 16,
          }}>
          Reinvent Yourself <em style={{ color:'#c9a96e', fontStyle:'italic' }}>After 45</em>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3, duration:0.7 }}
          style={{
            fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
            fontSize: 'clamp(0.95rem,2vw,1.2rem)',
            color: '#fff8ee', marginBottom: 12, maxWidth: 520, width: '100%',
            background: 'rgba(10,31,68,0.55)',
            padding: '10px 20px', borderRadius: 40,
            backdropFilter: 'blur(4px)',
          }}>
          A fresh chapter is possible — at any age.
        </motion.p>

        {/* Body */}
        <motion.p
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.45, duration:0.7 }}
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(0.85rem,1.6vw,1rem)',
            color: '#5a4a3a', lineHeight: 1.8, maxWidth: 500, marginBottom: 32,
          }}>
          If you feel lost, stuck, or unsure about who you are becoming in this phase of life, you are not alone.
        </motion.p>

        {/* CTA */}
        <motion.a href={WA} target="_blank" rel="noopener noreferrer"
          initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ delay:0.6, duration:0.6 }}
          whileHover={{ scale:1.06, boxShadow:'0 12px 40px rgba(201,169,110,0.5)' }}
          whileTap={{ scale:0.97 }}
          style={{
            display: 'inline-block', padding: '14px 40px', borderRadius: 50,
            background: 'linear-gradient(135deg,#c9a96e,#b8935a)',
            color: 'white', fontFamily: 'Poppins,sans-serif', fontWeight: 600,
            fontSize: 15, letterSpacing: '0.06em', textDecoration: 'none',
            boxShadow: '0 6px 28px rgba(201,169,110,0.4)', cursor: 'pointer',
          }}>
          Start Your Journey
        </motion.a>
      </div>
    </section>
  )
}
