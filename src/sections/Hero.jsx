import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code, Brain, Cloud, Smartphone, TrendingUp, Megaphone, ArrowDown, LayoutDashboard } from 'lucide-react'

const floatingIcons = [
  { Icon: Code, x: '8%', y: '22%', delay: 0.4, duration: 6, size: 70 },
  { Icon: Brain, x: '85%', y: '16%', delay: 0.6, duration: 7, size: 60 },
  { Icon: Cloud, x: '6%', y: '65%', delay: 0.8, duration: 5.5, size: 50 },
  { Icon: Smartphone, x: '90%', y: '60%', delay: 1.0, duration: 6.5, size: 70 },
  { Icon: TrendingUp, x: '15%', y: '85%', delay: 1.2, duration: 5, size: 60 },
  { Icon: Megaphone, x: '80%', y: '82%', delay: 1.4, duration: 7.5, size: 50 },
]

function FloatingIcon({ Icon, x, y, delay, duration, size, index, scrollYProgress, opacityFade }) {
  // Multi-layered parallax for items
  const yIcon = useTransform(scrollYProgress, [0, 1], [0, (index % 2 === 0 ? -120 : -220)])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, type: 'spring' }}
      style={{
        ...styles.floatingIconContainer,
        left: x,
        top: y,
        width: size,
        height: size,
      }}
    >
      <motion.div
        style={{
          opacity: opacityFade,
          y: yIcon,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <motion.div
          animate={{ y: [-6, 6, -6], rotate: [-3, 3, -3] }}
          transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
          style={styles.floatingIconInner}
        >
          <Icon size={size * 0.45} style={styles.iconStyle} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Simple scroll parallax shifts for 3D depth
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150])
  const ySub = useTransform(scrollYProgress, [0, 1], [0, 220])
  const yButtons = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacityFade = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  const handleScrollTo = (e, selector) => {
    e.preventDefault()
    const target = document.querySelector(selector)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      ref={containerRef} 
      style={styles.heroSection}
      className="section"
    >
      {/* Background Radial Glow */}
      <div style={styles.radialGlow} />

      {/* Floating Tech Elements */}
      {floatingIcons.map((iconConfig, i) => (
        <FloatingIcon
          key={i}
          {...iconConfig}
          index={i}
          scrollYProgress={scrollYProgress}
          opacityFade={opacityFade}
        />
      ))}

      {/* Main Stack */}
      <div style={styles.heroContent}>
        {/* Sub-badge */}
        <motion.div style={{ opacity: opacityFade, display: 'inline-flex' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={styles.badge}
          >
            <span style={styles.badgeDot} />
            <span style={styles.badgeText}>Next-Gen AI Ecosystem</span>
          </motion.div>
        </motion.div>

        {/* Single H1 Title - Highly Structured for AEO */}
        <motion.div style={{ y: yText, opacity: opacityFade }}>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
            style={styles.mainTitle}
          >
            Welcome To <br />
            <span className="gradient-text-cyan">QuolyTech</span>
          </motion.h1>
        </motion.div>

        {/* Spacious description */}
        <motion.div style={{ y: ySub, opacity: opacityFade }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            style={styles.subtitle}
          >
            We make artificial intelligence accessible. Get a premium, custom website 
            and the <span style={styles.highlightText}>ultimate client dashboard</span> to 
            manage it all yourself without touching code.
          </motion.p>
        </motion.div>

        {/* Call to Actions */}
        <motion.div style={{ y: yButtons, opacity: opacityFade, width: '100%', display: 'flex', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            style={styles.ctaContainer}
          >
            <button
              onClick={(e) => handleScrollTo(e, '#dashboard')}
              className="btn btn-primary"
              style={styles.primaryBtnWidth}
            >
              <LayoutDashboard size={20} />
              Explore Dashboard
            </button>
            
            <button
              onClick={(e) => handleScrollTo(e, '#features')}
              className="btn btn-secondary"
              style={styles.secondaryBtnWidth}
            >
              View Services
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={styles.scrollIndicator}
      >
        <motion.div style={{ opacity: opacityFade }}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={styles.scrollIndicatorInner}
          >
            <span style={styles.scrollIndicatorText}>Scroll Down</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

const styles = {
  heroSection: {
    minHeight: '105vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '160px 24px 100px 24px',
    overflow: 'hidden',
    position: 'relative'
  },
  radialGlow: {
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    height: '75vh',
    maxWidth: '1200px',
    maxHeight: '900px',
    background: 'radial-gradient(ellipse, rgba(0, 245, 255, 0.05) 0%, rgba(0, 97, 255, 0.01) 50%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: 1
  },
  floatingIconContainer: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(0, 245, 255, 0.08)',
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
    pointerEvents: 'none',
    zIndex: 2,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
  },
  floatingIconInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconStyle: {
    color: 'rgba(0, 245, 255, 0.45)'
  },
  heroContent: {
    maxWidth: '850px',
    margin: '0 auto',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '8px 18px',
    borderRadius: '50px',
    backgroundColor: 'rgba(0, 245, 255, 0.05)',
    border: '1px solid rgba(0, 245, 255, 0.2)',
    marginBottom: '40px',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)'
  },
  badgeDot: {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: '#00f5ff',
    boxShadow: '0 0 10px #00f5ff'
  },
  badgeText: {
    color: '#00f5ff',
    fontSize: '11px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.22em'
  },
  mainTitle: {
    fontSize: 'clamp(44px, 7.5vw, 86px)',
    fontWeight: 800,
    lineHeight: 1.05,
    letterSpacing: '-0.03em',
    marginBottom: '35px',
    color: '#ffffff'
  },
  subtitle: {
    fontSize: 'clamp(17px, 2.2vw, 22px)',
    fontWeight: 300,
    color: 'rgba(255, 255, 255, 0.65)',
    maxWidth: '680px',
    lineHeight: 1.65,
    marginBottom: '55px'
  },
  highlightText: {
    color: '#ffffff',
    fontWeight: 500
  },
  ctaContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    width: '100%',
    maxWidth: '550px'
  },
  primaryBtnWidth: {
    flex: '1 1 220px'
  },
  secondaryBtnWidth: {
    flex: '1 1 200px'
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10
  },
  scrollIndicatorInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    color: 'rgba(255, 255, 255, 0.35)'
  },
  scrollIndicatorText: {
    fontSize: '10px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.3em'
  }
}
