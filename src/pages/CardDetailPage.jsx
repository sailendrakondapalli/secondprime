import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

const WA = 'https://wa.me/919818461302'

const cardData = {
  'feeling-stuck': {
    icon: '🧭',
    title: 'Feeling Stuck',
    subtitle: 'You deserve to move forward — with clarity and confidence.',
    img: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?w=1400&q=80',
    body: [
      "That heavy feeling of being frozen in place — not knowing which direction to go, what to do next, or even who you are anymore — is one of the most common experiences in midlife.",
      "You may have spent decades building a life around others: your career, your family, your responsibilities. And somewhere along the way, you lost the thread back to yourself.",
      "Feeling stuck is not a sign of failure. It is a signal. It means part of you is ready for something new — and that part deserves to be heard.",
      "Together, we explore what is holding you back, what truly matters to you now, and how to take the first small steps toward a life that feels like yours again.",
    ],
    gradient: 'linear-gradient(135deg,#2c3e50 0%,#4a3728 60%,#6b4c3b 100%)',
    accent: '#c9a96e',
  },
  'lost-yourself': {
    icon: '💛',
    title: 'Lost Yourself',
    subtitle: 'Rediscovering you is the most important journey you will ever take.',
    img: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1400&q=80',
    body: [
      "For years — maybe decades — you have been the caregiver, the provider, the one who holds everything together. You put everyone else first, and it felt right. It felt like love.",
      "But somewhere in all of that giving, you stopped asking: what do I want? What do I need? Who am I, outside of all these roles?",
      "Losing yourself is not a character flaw. It is what happens when we pour endlessly without refilling. And the beautiful truth is — you are still there, waiting to be rediscovered.",
      "This work is about gently turning the lens back toward you. Reconnecting with your values, your desires, your voice. Coming home to yourself.",
    ],
    gradient: 'linear-gradient(135deg,#3d2b4a 0%,#6b3a5a 60%,#8b5a6a 100%)',
    accent: '#e8b4c8',
  },
  'seeking-clarity': {
    icon: '✨',
    title: 'Seeking Clarity',
    subtitle: 'When the fog lifts, everything becomes possible.',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1400&q=80',
    body: [
      "Clarity is not something you find all at once. It comes in layers — through honest reflection, through asking better questions, through giving yourself permission to want more.",
      "Maybe you feel overwhelmed by choices, or paralyzed by the fear of making the wrong one. Maybe you know something needs to change but you cannot quite name what it is.",
      "Confidence follows clarity. When you know what you stand for, what you want, and what you are willing to let go of — decisions become easier. Life feels lighter.",
      "We work together to cut through the noise, identify what truly matters, and build a clear, grounded vision for this next chapter of your life.",
    ],
    gradient: 'linear-gradient(135deg,#1a3a4a 0%,#2d5a6b 60%,#3d7a8a 100%)',
    accent: '#a8d8e8',
  },
  'finding-purpose': {
    icon: '🎯',
    title: 'Finding Purpose',
    subtitle: 'Your most meaningful chapter may still be ahead of you.',
    img: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=1400&q=80',
    body: [
      "Purpose is not reserved for the young. In fact, many people discover their deepest sense of meaning and direction in midlife — once the noise of early adulthood settles.",
      "You may be asking: Is this all there is? What am I here for? What would truly make me feel alive and fulfilled? These are not signs of a crisis — they are signs of growth.",
      "Midlife is an invitation to shed what no longer fits and step into something more authentic. To build a life not just around what you should do, but around what lights you up.",
      "Together, we explore your values, your strengths, and the unique contribution only you can make — and we build a path toward a life rich with meaning and purpose.",
    ],
    gradient: 'linear-gradient(135deg,#3a2a1a 0%,#6b4a2a 60%,#8b6a3a 100%)',
    accent: '#c9a96e',
  },
}

export default function CardDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const data = cardData[slug]

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  if (!data) {
    return (
      <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:16 }}>
        <p style={{ fontFamily:'Playfair Display,serif', fontSize:24 }}>Page not found</p>
        <button onClick={() => navigate('/')} style={{ padding:'10px 24px', background:'#c9a96e', color:'white', border:'none', borderRadius:50, cursor:'pointer' }}>Go Home</button>
      </div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(`Hi Janet! I came from the "${data.title}" page.\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage: ${form.message}`)
    window.open(`${WA}?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <div style={{ minHeight:'100vh', background:'#fdf8f5' }}>

      {/* Hero with bg image */}
      <div style={{
        minHeight:'60vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${data.img})`,
        backgroundSize:'cover', backgroundPosition:'center',
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
        textAlign:'center', padding:'100px 24px 80px', position:'relative', overflow:'hidden',
      }}>
        {/* Overlay texture */}
        <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.25)', pointerEvents:'none' }} />

        {/* Back button */}
        <motion.button
          initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.5 }}
          onClick={() => navigate('/')}
          style={{
            position:'absolute', top:28, left:28, display:'flex', alignItems:'center', gap:8,
            background:'rgba(255,255,255,0.15)', backdropFilter:'blur(8px)',
            border:'1px solid rgba(255,255,255,0.3)', borderRadius:50,
            padding:'8px 18px', color:'white', cursor:'pointer', fontSize:13,
            fontFamily:'Poppins,sans-serif', fontWeight:500, zIndex:10,
          }}
        >
          ← Back
        </motion.button>

        <motion.span initial={{ opacity:0, scale:0.5 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.6 }}
          style={{ fontSize:64, marginBottom:20, position:'relative', zIndex:1 }}>
          {data.icon}
        </motion.span>

        <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2, duration:0.7 }}
          style={{ fontFamily:'Playfair Display,serif', fontSize:'clamp(2.2rem,5vw,4rem)', fontWeight:700, color:'white', marginBottom:16, position:'relative', zIndex:1, maxWidth:700 }}>
          {data.title}
        </motion.h1>

        <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.4, duration:0.7 }}
          style={{ fontFamily:'Playfair Display,serif', fontStyle:'italic', fontSize:'clamp(1rem,2vw,1.3rem)', color: data.accent, position:'relative', zIndex:1, maxWidth:560 }}>
          {data.subtitle}
        </motion.p>
      </div>

      {/* Content */}
      <div style={{ maxWidth:760, margin:'0 auto', padding:'72px 24px' }}>
        {data.body.map((para, i) => (
          <motion.p key={i}
            initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 + i*0.12, duration:0.6 }}
            style={{ fontFamily:'Poppins,sans-serif', fontSize:16, lineHeight:1.9, color:'#5a5a5a', marginBottom:24 }}>
            {para}
          </motion.p>
        ))}

        {/* Divider */}
        <div style={{ width:60, height:2, background:'linear-gradient(to right,#c9a96e,#e8d5b0)', margin:'48px 0', borderRadius:2 }} />

        {/* Contact Form */}
        <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.6, duration:0.7 }}>
          <h2 style={{ fontFamily:'Playfair Display,serif', fontSize:'clamp(1.6rem,3vw,2.2rem)', fontWeight:700, color:'#1e1e1e', marginBottom:8 }}>
            Ready to Begin?
          </h2>
          <p style={{ fontFamily:'Poppins,sans-serif', fontSize:15, color:'#7a6a5a', marginBottom:32, lineHeight:1.7 }}>
            Send a message and Janet will get back to you personally.
          </p>

          {sent ? (
            <div style={{ background:'#f0fdf4', border:'1px solid #86efac', borderRadius:16, padding:'28px 32px', textAlign:'center' }}>
              <p style={{ fontFamily:'Playfair Display,serif', fontSize:20, color:'#166534', marginBottom:8 }}>Message Sent!</p>
              <p style={{ fontFamily:'Poppins,sans-serif', fontSize:14, color:'#4ade80' }}>You will be redirected to WhatsApp to complete your message.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:16 }}>
              <input required value={form.name} onChange={e => setForm({...form, name:e.target.value})}
                placeholder="Your Name"
                style={inputStyle} />
              <input type="email" required value={form.email} onChange={e => setForm({...form, email:e.target.value})}
                placeholder="Your Email"
                style={inputStyle} />
              <textarea required value={form.message} onChange={e => setForm({...form, message:e.target.value})}
                placeholder="Tell Janet a little about where you are right now..."
                rows={5}
                style={{ ...inputStyle, resize:'vertical' }} />
              <motion.button type="submit"
                whileHover={{ scale:1.03, boxShadow:'0 10px 32px rgba(201,169,110,0.35)' }}
                whileTap={{ scale:0.97 }}
                style={{
                  padding:'16px 40px', borderRadius:50, border:'none', cursor:'pointer',
                  background:'linear-gradient(135deg,#c9a96e,#b8935a)',
                  color:'white', fontFamily:'Poppins,sans-serif', fontWeight:600,
                  fontSize:15, letterSpacing:'0.05em', alignSelf:'flex-start',
                  boxShadow:'0 6px 24px rgba(201,169,110,0.3)',
                }}>
                Send via WhatsApp →
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}

const inputStyle = {
  padding: '14px 18px',
  borderRadius: 12,
  border: '1px solid #e8d5b0',
  fontFamily: 'Poppins, sans-serif',
  fontSize: 14,
  color: '#2d2d2d',
  background: 'white',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s',
}
