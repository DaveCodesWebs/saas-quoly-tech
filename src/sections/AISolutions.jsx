import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Database, CreditCard, MessageCircle, BarChart3, Sparkles, ArrowRight } from 'lucide-react'

const timelineCards = [
  {
    icon: Database,
    title: 'Efficiency and Productivity',
    desc: 'By automating repetitive tasks, analyzing data more efficiently, and providing personalized recommendations. Our AI solutions integrate with your existing workflows to deliver measurable improvements.'
  },
  {
    icon: CreditCard,
    title: 'Savings and Risk Reduction',
    desc: 'Predictive maintenance solutions can help businesses reduce downtime and maintenance costs by predicting equipment failures before they occur.'
  },
  {
    icon: MessageCircle,
    title: 'Enhanced User Experience',
    desc: 'AI-powered chatbots and virtual assistants can provide 24/7 customer support, improving customer satisfaction and reducing response times.'
  },
  {
    icon: BarChart3,
    title: 'Scalability and Adaptability',
    desc: 'AI development solutions offer scalability and adaptability, allowing businesses to easily scale their operations and adapt to changing market conditions.'
  }
]

export default function AISolutions() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Only use transforms for the mascot section
  const orbitSpeed = useTransform(scrollYProgress, [0, 1], [0, 180])
  const orbitInnerSpeed = useTransform(scrollYProgress, [0, 1], [360, -360])
  const mascotY = useTransform(scrollYProgress, [0.3, 0.85], [20, -20])

  const handleScrollTo = (e, selector) => {
    e.preventDefault()
    const target = document.querySelector(selector)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="ai-solutions" ref={containerRef} style={styles.solutionsSection} className="section">
      <div className="container">
        
        {/* Section Header */}
        <div style={styles.header}>
          <span style={styles.sectionLabel}>Innovative Architecture</span>
          <h2 style={styles.sectionTitle}>
            AI Solutions Empowering <br />
            <span className="gradient-text-cyan">Development</span>
          </h2>
        </div>

        {/* Timeline Grid layout */}
        <div style={styles.timelineContainer}>
          {/* Vertical central line */}
          <div style={styles.timelineLine} className="timeline-line-desktop" />

          {/* Timeline Cards - NO parallax, NO scroll transforms */}
          <div style={styles.cardsStack}>
            {timelineCards.map((card, i) => {
              const isEven = i % 2 === 0

              return (
                <div
                  key={i}
                  style={styles.cardWrapper}
                  className={`timeline-wrapper ${isEven ? 'wrapper-left' : 'wrapper-right'}`}
                >
                  {/* central connecting dot */}
                  <div style={styles.timelineDot} className="timeline-dot-desktop" />

                  {/* Card box - static position, only viewport animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    style={styles.cardBox}
                    className="glass"
                  >
                    <div style={styles.cardHeader}>
                      <div style={styles.iconBox}>
                        <card.icon size={22} style={{ color: '#00f5ff' }} />
                      </div>
                      <h3 style={styles.cardTitle}>{card.title}</h3>
                    </div>
                    <p style={styles.cardDesc}>{card.desc}</p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Subsection with Mascot details */}
        <div style={styles.subsectionContainer} className="subsection-container">
          
          {/* Subsection Left Column */}
          <div style={styles.subtextCol}>
            <span style={styles.subLabel}>Core Intelligence</span>
            <h3 style={styles.subTitle}>AI-Powered Solutions</h3>
            <p style={styles.subParagraph}>
              We leverage artificial intelligence across virtually all aspects of our work. 
              From content creation to performance optimization, AI enhances every step of our 
              process to deliver smarter, faster, and more effective results for your business.
            </p>
            
            <p style={styles.aeoParagraph}>
              Explore how our{' '}
              <a href="#dashboard" onClick={(e) => handleScrollTo(e, '#dashboard')} style={styles.aeoLink}>
                client dashboard
              </a>{' '}
              gives you real-time control, check out our{' '}
              <a href="#pricing" onClick={(e) => handleScrollTo(e, '#pricing')} style={styles.aeoLink}>
                pricing plans
              </a>{' '}
              to find the right fit, or discover our full range of{' '}
              <a href="#features" onClick={(e) => handleScrollTo(e, '#features')} style={styles.aeoLink}>
                platform features
              </a>{' '}
              for custom developments. According to research by{' '}
              <a 
                href="https://www.gartner.com/en/topics/artificial-intelligence" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.externalLink}
              >
                Gartner
              </a>
              , AI automation is set to revolutionize business efficiency across all major industries.
            </p>

            <motion.a
              href="#features"
              onClick={(e) => handleScrollTo(e, '#features')}
              style={styles.actionLink}
              whileHover={{ gap: '12px', x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Explore Our Platform 
              <ArrowRight size={18} />
            </motion.a>
          </div>

          {/* Subsection Right Column - Mascot with scroll parallax */}
          <motion.div
            style={{ ...styles.mascotCol, y: mascotY }}
          >
            <div style={styles.mascotOrb}>
              <motion.div
                style={{ ...styles.orbitRing, rotate: orbitSpeed }}
                className="mascot-dashed-ring"
              />
              
              <motion.div
                style={{ ...styles.orbitInner, rotate: orbitInnerSpeed }}
                className="mascot-node-ring"
              >
                <div style={styles.orbitingDot} />
              </motion.div>

              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                style={styles.mascotCore}
              >
                <Sparkles size={56} style={{ color: '#00f5ff' }} />
              </motion.div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

const styles = {
  solutionsSection: {
    backgroundColor: '#02000C',
    position: 'relative',
    padding: '100px 0'
  },
  header: {
    textAlign: 'left',
    marginBottom: '80px',
    maxWidth: '700px'
  },
  sectionLabel: {
    color: '#00f5ff',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    display: 'block',
    marginBottom: '16px'
  },
  sectionTitle: {
    fontSize: 'clamp(32px, 5vw, 52px)',
    fontWeight: 800,
    lineHeight: 1.15,
    marginBottom: '24px',
    color: '#ffffff'
  },
  timelineContainer: {
    position: 'relative',
    width: '100%',
    padding: '40px 0 100px 0',
    marginBottom: '80px'
  },
  timelineLine: {
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: '2px',
    transform: 'translateX(-50%)',
    background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.1) 15%, rgba(0,245,255,0.25) 50%, rgba(59,130,246,0.1) 85%, transparent)'
  },
  cardsStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
    width: '100%'
  },
  cardWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    minHeight: '200px' // Fixed height to prevent layout shifts
  },
  timelineDot: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #3b82f6, #00f5ff)',
    boxShadow: '0 0 16px rgba(0, 245, 255, 0.7)',
    zIndex: 5
  },
  cardBox: {
    width: '100%',
    maxWidth: '520px',
    padding: '36px',
    cursor: 'default'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '16px'
  },
  iconBox: {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    backgroundColor: 'rgba(0, 245, 255, 0.06)',
    border: '1px solid rgba(0, 245, 255, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#ffffff'
  },
  cardDesc: {
    fontSize: '15px',
    color: 'rgba(255, 255, 255, 0.65)',
    lineHeight: 1.6
  },
  subsectionContainer: {
    display: 'flex',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    paddingTop: '100px',
    width: '100%',
    gap: '60px'
  },
  subtextCol: {
    flex: 1.2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  subLabel: {
    color: '#00f5ff',
    fontSize: '11px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    marginBottom: '14px'
  },
  subTitle: {
    fontSize: '36px',
    fontWeight: 700,
    marginBottom: '24px',
    color: '#ffffff'
  },
  subParagraph: {
    fontSize: '18px',
    fontWeight: 300,
    lineHeight: 1.7,
    color: 'rgba(255, 255, 255, 0.65)',
    marginBottom: '24px'
  },
  aeoParagraph: {
    fontSize: '16px',
    lineHeight: 1.65,
    color: 'rgba(255, 255, 255, 0.55)',
    marginBottom: '36px'
  },
  aeoLink: {
    color: '#00f5ff',
    fontWeight: 500,
    textDecoration: 'underline'
  },
  externalLink: {
    color: '#3b82f6',
    fontWeight: 500,
    textDecoration: 'underline'
  },
  actionLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: '#00f5ff',
    fontWeight: 600,
    fontSize: '16px',
    textDecoration: 'none'
  },
  mascotCol: {
    flex: 0.8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  mascotOrb: {
    position: 'relative',
    width: '320px',
    height: '320px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0, 245, 255, 0.075) 0%, transparent 70%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  orbitRing: {
    position: 'absolute',
    width: '90%',
    height: '90%',
    borderRadius: '50%',
    border: '1px dashed rgba(0, 245, 255, 0.16)'
  },
  orbitInner: {
    position: 'absolute',
    width: '70%',
    height: '70%',
    borderRadius: '50%',
    border: '1px solid rgba(59, 130, 246, 0.1)'
  },
  orbitingDot: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#00f5ff',
    boxShadow: '0 0 10px #00f5ff'
  },
  mascotCore: {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(0,97,255,0.15) 0%, rgba(0,245,255,0.06) 100%)',
    border: '1px solid rgba(0, 245, 255, 0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 50px rgba(0, 245, 255, 0.1)',
    zIndex: 2
  }
}