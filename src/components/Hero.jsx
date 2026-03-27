import { motion } from 'framer-motion'
import heroBg from '../assets/herobg.png'

const WA = 'https://wa.me/919818461302'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100svh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      padding: '180px 24px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background image */}
      <div className="hero-bg" style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${heroBg})`,
        backgroundSize: '85%', backgroundPosition: 'center 30%',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(1.15)',
        zIndex: 0,
      }} />
      {/* Very light overlay just for text readability */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(255,255,255,0.05)',
        zIndex: 1,
      }} />

      {/* Content */}
      <div className="hero-content" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Subheading */}
        <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3, duration:0.7 }}
          style={{
            fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
            fontSize: 'clamp(1rem,2.2vw,1.3rem)',
            color: '#fff8ee', marginBottom: 16, maxWidth: 560,
            background: 'rgba(10,31,68,0.55)',
            padding: '10px 24px', borderRadius: 40,
            backdropFilter: 'blur(4px)',
          }}>
          A fresh chapter is possible — at any age.
        </motion.p>

        {/* Body */}
        <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.45, duration:0.7 }}
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(0.88rem,1.6vw,1rem)',
            color: '#f0e8d8', lineHeight: 1.8, maxWidth: 500, marginBottom: 44,
            background: 'rgba(10,31,68,0.45)',
            padding: '12px 28px', borderRadius: 16,
            backdropFilter: 'blur(4px)',
          }}>
          If you feel lost, stuck, or unsure about who you are becoming in this phase of life, you are not alone.
        </motion.p>

        {/* CTA */}
        <motion.a href={WA} target="_blank" rel="noopener noreferrer"
          initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ delay:0.6, duration:0.6 }}
          whileHover={{ scale:1.06, boxShadow:'0 12px 40px rgba(201,169,110,0.5)' }}
          whileTap={{ scale:0.97 }}
          style={{
            display: 'inline-block', padding: '16px 44px', borderRadius: 50,
            background: 'linear-gradient(135deg,#c9a96e,#b8935a)',
            color: 'white', fontFamily: 'Poppins,sans-serif', fontWeight: 600,
            fontSize: 15, letterSpacing: '0.06em', textDecoration: 'none',
            boxShadow: '0 6px 28px rgba(201,169,110,0.4)', cursor: 'pointer',
          }}>
          Start Your Journey
        </motion.a>
      </div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.0 }}
        style={{ position:'absolute', bottom:36, zIndex:2, display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
        <span style={{ fontSize:10, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(255,255,255,0.6)' }}>Scroll</span>
        <motion.div animate={{ y:[0,8,0] }} transition={{ duration:1.6, repeat:Infinity }}
          style={{ width:1.5, height:32, background:'linear-gradient(to bottom,#c9a96e,transparent)', borderRadius:4 }} />
      </motion.div>

      <style>{`
        .hero-bg {
          background-size: 85% !important;
          background-position: center 30% !important;
        }
        @media (max-width: 768px) {
          .hero-bg {
            background-size: 100% !important;
            background-position: center top !important;
          }
          #hero {
            padding: 240px 16px 40px !important;
            justify-content: center !important;
          }
          .hero-content {
            background: rgba(255,255,255,0.82);
            backdrop-filter: blur(6px);
            border-radius: 20px;
            padding: 24px 20px;
            width: 100%;
          }
        }
        @media (max-width: 480px) {
          .hero-bg {
            background-size: 100% !important;
            background-position: center top !important;
          }
          #hero {
            padding: 240px 12px 30px !important;
            justify-content: center !important;
          }
          .hero-content {
            background: rgba(255,255,255,0.82);
            backdrop-filter: blur(6px);
            border-radius: 16px;
            padding: 20px 16px;
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
