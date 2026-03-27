import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const cards = [
  { icon: '🧭', title: 'Feeling Stuck', desc: 'Feel stuck or uncertain about your next chapter in life.', slug: 'feeling-stuck' },
  { icon: '💛', title: 'Lost Yourself', desc: 'Lost touch with yourself after years of prioritizing others.', slug: 'lost-yourself' },
  { icon: '✨', title: 'Seeking Clarity', desc: 'Seeking clarity, confidence, or a sense of renewal.', slug: 'seeking-clarity' },
  { icon: '🎯', title: 'Finding Purpose', desc: 'Want to rediscover purpose and meaning in midlife.', slug: 'finding-purpose' },
]

export default function WhoThisIsFor() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const navigate = useNavigate()

  return (
    <section id="who" ref={ref} style={{
      padding: '100px 24px',
      background: 'linear-gradient(160deg,#fceee8 0%,#fdf8f5 60%,#fdf3e3 100%)',
    }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>

        <motion.div initial={{ opacity:0, y:30 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.7 }}
          style={{ textAlign:'center', marginBottom:64 }}>
          <p style={{ fontFamily:'Poppins,sans-serif', fontSize:12, fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'#c9a96e', marginBottom:14 }}>
            Is This You?
          </p>
          <h2 style={{ fontFamily:'Playfair Display,serif', fontSize:'clamp(2rem,4vw,3rem)', fontWeight:700, color:'#1e1e1e', lineHeight:1.2 }}>
            Who This Is For
          </h2>
          <div style={{ width:60, height:2, background:'linear-gradient(to right,#c9a96e,#e8d5b0)', margin:'20px auto 0', borderRadius:2 }} />
          <p style={{ fontFamily:'Poppins,sans-serif', fontSize:14, color:'#9a8a7a', marginTop:16 }}>
            Click a card to learn more
          </p>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:24 }} className="who-grid">
          {cards.map((c, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:40 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6, delay:i*0.12 }}
              whileHover={{ y:-8, boxShadow:'0 20px 50px rgba(201,169,110,0.25)' }}
              whileTap={{ scale:0.98 }}
              onClick={() => navigate(`/topic/${c.slug}`)}
              style={{
                background:'white', borderRadius:24, padding:'36px 32px',
                boxShadow:'0 4px 24px rgba(201,169,110,0.1)',
                display:'flex', alignItems:'flex-start', gap:20,
                cursor:'pointer', transition:'box-shadow 0.3s',
                border:'1px solid rgba(201,169,110,0.12)',
                position:'relative', overflow:'hidden',
              }}>
              {/* Hover accent */}
              <div style={{
                position:'absolute', bottom:0, left:0, right:0, height:3,
                background:'linear-gradient(to right,#c9a96e,#e8d5b0)',
              }} />
              <span style={{ fontSize:36, flexShrink:0, lineHeight:1 }}>{c.icon}</span>
              <div style={{ flex:1 }}>
                <h3 style={{ fontFamily:'Playfair Display,serif', fontSize:18, fontWeight:600, color:'#1e1e1e', marginBottom:8 }}>{c.title}</h3>
                <p style={{ fontFamily:'Poppins,sans-serif', fontSize:14, lineHeight:1.75, color:'#7a6a5a', marginBottom:12 }}>{c.desc}</p>
                <span style={{ fontFamily:'Poppins,sans-serif', fontSize:12, fontWeight:600, color:'#c9a96e', letterSpacing:'0.06em' }}>
                  Read more →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .who-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
