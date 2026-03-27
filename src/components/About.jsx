import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import janetPhoto from '../assets/janet.jpg'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} style={{
      padding: '100px 24px',
      background: '#fff',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}
        className="about-grid">

        {/* Portrait */}
        <motion.div initial={{ opacity:0, x:-50 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ duration:0.9 }}
          style={{ position:'relative' }}>
          <div style={{
            borderRadius: 32, overflow:'hidden',
            boxShadow:'0 24px 80px rgba(201,169,110,0.22)',
            aspectRatio:'3/4',
          }}>
            <img
              src={janetPhoto}
              alt="Janet - JCM Second Prime Coach"
              style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 15%', display:'block' }}
            />
          </div>
          {/* Gold ring accent */}
          <div style={{
            position:'absolute', bottom:-20, right:-20, width:120, height:120,
            borderRadius:'50%', border:'2px solid #c9a96e', opacity:0.25,
          }} />
          <div style={{
            position:'absolute', top:-16, left:-16, width:80, height:80,
            borderRadius:'50%', background:'#f9e8e8', opacity:0.6,
          }} />
        </motion.div>

        {/* Text */}
        <motion.div initial={{ opacity:0, x:50 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ duration:0.9, delay:0.15 }}>
          <p style={{ fontFamily:'Poppins,sans-serif', fontSize:12, fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'#c9a96e', marginBottom:14 }}>
            My Story
          </p>
          <h2 style={{ fontFamily:'Playfair Display,serif', fontSize:'clamp(2rem,4vw,3.2rem)', fontWeight:700, color:'#1e1e1e', marginBottom:32, lineHeight:1.2 }}>
            Meet Janet
          </h2>

          <div style={{
            background:'#fdf8f5', borderRadius:20, padding:'32px 36px',
            boxShadow:'0 4px 32px rgba(201,169,110,0.1)',
            borderLeft:'3px solid #c9a96e',
          }}>
            <p style={{ fontFamily:'Poppins,sans-serif', fontSize:15, lineHeight:1.9, color:'#5a5a5a', marginBottom:16 }}>
              Hello, I am Janet.
            </p>
            <p style={{ fontFamily:'Poppins,sans-serif', fontSize:15, lineHeight:1.9, color:'#5a5a5a', marginBottom:16 }}>
              My journey of self-discovery began when I addressed my perimenopausal challenges. What started as a small step became a powerful transformation. In my late 40s, I achieved things I could not in my 20s and 30s.
            </p>
            <p style={{ fontFamily:'Poppins,sans-serif', fontSize:15, lineHeight:1.9, color:'#5a5a5a', marginBottom:16 }}>
              Through this journey, I realized:{' '}
              <strong style={{ color:'#c9a96e', fontWeight:600 }}>reinvention is possible at any stage of life.</strong>
            </p>
            <p style={{ fontFamily:'Poppins,sans-serif', fontSize:15, lineHeight:1.9, color:'#5a5a5a' }}>
              Today, I support people navigating midlife transitions and rediscovering identity and direction.
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
