import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Globe, TrendingUp, FileText, Clock, ArrowRight, LayoutDashboard, Pencil, BarChart3, Code2 } from 'lucide-react'

const statCards = [
  {
    icon: TrendingUp,
    label: 'Visitors Today',
    value: '3,842',
    change: '+14.2%',
    top: '12%',
    right: '-5%',
    color: '#00f5ff'
  },
  {
    icon: FileText,
    label: 'Pages Updated',
    value: '58',
    change: 'This Month',
    bottom: '18%',
    left: '-6%',
    color: '#3b82f6'
  },
  {
    icon: Clock,
    label: 'Last Change',
    value: '5 min ago',
    change: 'By Admin',
    top: '52%',
    right: '-8%',
    color: '#10b981'
  }
]

const featuresList = [
  {
    icon: Pencil,
    title: 'Content Editing',
    desc: 'Edit texts, swap pictures, manage services, and write updates directly. The change goes live instantly.'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    desc: 'Track visitor counts, page hits, device statistics, and acquisition channels directly from one centralized view.'
  },
  {
    icon: Code2,
    title: 'Zero Code Needed',
    desc: 'An intuitive client control panel designed specifically for business owners. No programming required.'
  }
]

export default function DashboardShowcase() {
  const handleScrollTo = (e, selector) => {
    e.preventDefault()
    const target = document.querySelector(selector)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="dashboard" style={styles.dashboardSection} className="section">
      <div style={styles.radialGlow} />

      <div className="container">
        {/* Section Header */}
        <div style={styles.header}>
          <span style={styles.sectionLabel}>Your Control Center</span>
          <h2 style={styles.sectionTitle}>
            Experience Our <span className="gradient-text-cyan">Platform</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            Most web agencies create artificial dependency. We give you complete control. 
            Get a premium custom website and a powerful dashboard to manage it yourself.
          </p>
        </div>

        {/* Dashboard Mockup Container */}
        <div style={styles.mockupContainer}>
          {/* Browser Shell */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={styles.browserFrame}
            className="glass"
          >
            {/* Browser Header Bar */}
            <div style={styles.browserHeader}>
              <div style={styles.dots}>
                <span style={{ ...styles.dot, backgroundColor: '#ef4444' }} />
                <span style={{ ...styles.dot, backgroundColor: '#eab308' }} />
                <span style={{ ...styles.dot, backgroundColor: '#22c55e' }} />
              </div>
              <div style={styles.addressBar}>
                <Globe size={13} style={{ color: 'rgba(255,255,255,0.3)' }} />
                <span>dashboard.quolytech.com</span>
              </div>
            </div>

            {/* Simulated Dashboard Content */}
            <div style={styles.browserContent} className="browser-content">
              <div style={styles.sidebar} className="browser-sidebar">
                <div style={styles.sidebarLogo} />
                <div style={{ ...styles.sidebarItem, backgroundColor: 'rgba(0, 245, 255, 0.08)', borderColor: 'rgba(0, 245, 255, 0.2)' }} />
                <div style={styles.sidebarItem} />
                <div style={styles.sidebarItem} />
                <div style={styles.sidebarItem} />
              </div>
              <div style={styles.dashboardMain}>
                <div style={styles.mainGrid2}>
                  <div style={styles.mainCardBlue} />
                  <div style={styles.mainCardCyan} />
                </div>
                <div style={styles.chartCard}>
                  {/* SVG Chart */}
                  <svg style={styles.svgChart} viewBox="0 0 700 180" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(0,245,255,0.25)" />
                        <stop offset="100%" stopColor="rgba(0,245,255,0)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,150 C100,130 180,90 280,75 C380,60 450,110 550,50 C620,10 650,20 700,15 L700,180 L0,180 Z"
                      fill="url(#chartGradient)"
                    />
                    <motion.path
                      d="M0,150 C100,130 180,90 280,75 C380,60 450,110 550,50 C620,10 650,20 700,15"
                      fill="none"
                      stroke="#00f5ff"
                      strokeWidth="2.5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Stat Overlay Cards */}
          {statCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.15, duration: 0.55, type: 'spring' }}
              style={{
                ...styles.floatingCard,
                top: card.top,
                bottom: card.bottom,
                left: card.left,
                right: card.right
              }}
              className="floating-card-desktop glass-strong"
            >
              <div style={styles.floatingHeader}>
                <card.icon size={16} style={{ color: card.color }} />
                <span style={styles.floatingLabel}>{card.label}</span>
              </div>
              <div style={styles.floatingValue}>{card.value}</div>
              <div style={{ ...styles.floatingChange, color: card.color }}>{card.change}</div>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights Grid */}
        <div style={styles.featuresGrid} className="grid-3">
          {featuresList.map((f, i) => (
            <div key={i} style={styles.featureCard} className="glass">
              <div style={styles.featureIconBox}>
                <f.icon size={26} style={{ color: '#00f5ff' }} />
              </div>
              <h3 style={styles.featureCardTitle}>{f.title}</h3>
              <p style={styles.featureCardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* AEO Contextual Body Link Section */}
        <div style={styles.aeoTextContainer}>
          <p style={styles.aeoParagraph}>
            Take full control of your website's content, media, and statistics with our interactive client dashboard. 
            You don't need to write code to update details. Explore our{' '}
            <a href="#ai-solutions" onClick={(e) => handleScrollTo(e, '#ai-solutions')} style={styles.aeoLink}>
              custom AI solutions
            </a>
            , choose a matching{' '}
            <a href="#pricing" onClick={(e) => handleScrollTo(e, '#pricing')} style={styles.aeoLink}>
              pricing plan
            </a>{' '}
            that fits your budget, or read our{' '}
            <a href="#faq" onClick={(e) => handleScrollTo(e, '#faq')} style={styles.aeoLink}>
              FAQ
            </a>{' '}
            if you have questions about onboarding.
          </p>
          <button
            onClick={(e) => handleScrollTo(e, '#pricing')}
            className="btn btn-primary"
            style={styles.ctaBtn}
          >
            Get Started <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

const styles = {
  dashboardSection: {
    backgroundColor: '#02000C',
    position: 'relative',
    overflow: 'visible',
    paddingBottom: '160px'
  },
  radialGlow: {
    position: 'absolute',
    bottom: '-10%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '85vw',
    height: '600px',
    background: 'radial-gradient(circle, rgba(0, 97, 255, 0.035) 0%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: 1
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
  sectionSubtitle: {
    fontSize: '18px',
    fontWeight: 300,
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: 1.6
  },
  mockupContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '960px',
    margin: '0 auto 100px auto',
    zIndex: 5
  },
  browserFrame: {
    overflow: 'hidden',
    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.55)',
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  browserHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 24px',
    background: 'rgba(255, 255, 255, 0.03)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
  },
  dots: {
    display: 'flex',
    gap: '8px'
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%'
  },
  addressBar: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderRadius: '8px',
    padding: '6px 16px',
    maxWidth: '400px',
    margin: '0 auto',
    color: 'rgba(255, 255, 255, 0.55)',
    fontSize: '12px',
    letterSpacing: '0.03em'
  },
  browserContent: {
    display: 'grid',
    minHeight: '380px',
    backgroundColor: 'rgba(5, 5, 20, 0.45)'
  },
  sidebar: {
    borderRight: '1px solid rgba(255, 255, 255, 0.06)',
    padding: '24px 16px',
    gap: '16px'
  },
  sidebarLogo: {
    height: '24px',
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '4px',
    marginBottom: '20px'
  },
  sidebarItem: {
    height: '14px',
    borderRadius: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid transparent'
  },
  dashboardMain: {
    padding: '30px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  mainGrid2: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px'
  },
  mainCardBlue: {
    height: '80px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, rgba(0, 97, 255, 0.1) 0%, transparent 100%)',
    border: '1px solid rgba(0, 97, 255, 0.15)'
  },
  mainCardCyan: {
    height: '80px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.08) 0%, transparent 100%)',
    border: '1px solid rgba(0, 245, 255, 0.12)'
  },
  chartCard: {
    flex: 1,
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    height: '160px',
    overflow: 'hidden',
    position: 'relative'
  },
  svgChart: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '120px'
  },
  floatingCard: {
    position: 'absolute',
    padding: '20px',
    borderRadius: '16px',
    minWidth: '210px',
    boxShadow: '0 20px 45px rgba(0,0,0,0.5)',
    zIndex: 10
  },
  floatingHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '8px'
  },
  floatingLabel: {
    fontSize: '13px',
    color: 'rgba(255, 255, 255, 0.55)',
    fontWeight: 500
  },
  floatingValue: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#ffffff',
    letterSpacing: '-0.02em',
    lineHeight: 1.1
  },
  floatingChange: {
    fontSize: '11px',
    fontWeight: 600,
    marginTop: '6px'
  },
  featuresGrid: {
    display: 'grid',
    gap: '30px',
    width: '100%',
    marginBottom: '80px'
  },
  featureCard: {
    padding: '40px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  featureIconBox: {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    backgroundColor: 'rgba(0, 245, 255, 0.08)',
    border: '1px solid rgba(0, 245, 255, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '28px'
  },
  featureCardTitle: {
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '14px',
    color: '#ffffff'
  },
  featureCardDesc: {
    fontSize: '15px',
    color: 'rgba(255, 255, 255, 0.65)',
    lineHeight: 1.6
  },
  aeoTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    paddingTop: '60px',
    alignItems: 'flex-start'
  },
  aeoParagraph: {
    fontSize: '17px',
    color: 'rgba(255,255,255,0.65)',
    lineHeight: 1.7,
    maxWidth: '850px'
  },
  aeoLink: {
    color: '#00f5ff',
    fontWeight: 500,
    textDecoration: 'underline',
    margin: '0 4px'
  },
  ctaBtn: {
    width: 'auto'
  }
}

