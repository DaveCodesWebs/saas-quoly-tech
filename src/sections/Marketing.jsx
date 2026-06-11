import React from 'react'
import { motion } from 'framer-motion'
import { Search, Share2, PenTool, Target, TrendingUp, Users, BarChart3, Zap, Globe, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Comprehensive search engine optimization to boost your visibility and drive organic traffic to your website.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical Audits'],
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Strategic social media campaigns that engage your audience and build brand awareness across all platforms.',
    features: ['Content Strategy', 'Community Management', 'Analytics'],
  },
  {
    icon: PenTool,
    title: 'Content Marketing',
    description: 'High-quality content creation and distribution that positions your brand as an industry thought leader.',
    features: ['Blog Writing', 'Video Content', 'Infographics'],
  }
]

const benefits = [
  { icon: Target, title: 'Targeted Reach', desc: 'Reach your ideal customers with precision targeting and data-driven strategies.' },
  { icon: TrendingUp, title: 'Measurable Results', desc: 'Track every metric that matters with real-time analytics and transparent reporting.' },
  { icon: Users, title: 'Expert Team', desc: 'Work with seasoned marketing professionals who understand your industry.' },
  { icon: BarChart3, title: 'Data-Driven', desc: 'Every decision backed by data insights and market research analysis.' },
  { icon: Zap, title: 'Fast Execution', desc: 'Quick turnaround times without sacrificing quality or attention to detail.' },
  { icon: Globe, title: 'Global Reach', desc: 'Expand your market presence with international SEO and localization strategies.' }
]

export default function Marketing() {
  const handleScrollToFooter = (e) => {
    e.preventDefault()
    const footer = document.querySelector('footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="marketing" style={styles.marketingSection} className="section">
      <div className="container">
        
        {/* Section Header */}
        <div style={styles.header}>
          <span style={styles.sectionLabel}>Digital Marketing</span>
          <h2 style={styles.sectionTitle}>
            Optimize Your Business <br />
            <span className="gradient-text-blue">Online</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            Transform your marketing strategy with powerful tools and insights that drive real results.
          </p>
        </div>

        {/* Services Grid */}
        <div style={styles.sectionSubBlock}>
          <h3 style={styles.blockTitle}>Our Marketing Services</h3>
          <div style={styles.servicesGrid} className="marketing-services-grid">
            {services.map((service, i) => (
              <div key={i} style={styles.serviceCard} className="glass">
                <div style={styles.iconBox}>
                  <service.icon size={26} style={{ color: '#3b82f6' }} />
                </div>
                <h4 style={styles.cardTitle}>{service.title}</h4>
                <p style={styles.cardDesc}>{service.description}</p>
                <ul style={styles.featuresList}>
                  {service.features.map((f, j) => (
                    <li key={j} style={styles.featureItem}>
                      <span style={styles.featureDot} />
                      <span style={styles.featureText}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleScrollToFooter}
                  style={styles.learnMoreLink}
                  className="btn-link"
                >
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div style={styles.sectionSubBlock}>
          <h3 style={styles.blockTitle}>Why Choose Our Marketing Solutions</h3>
          <div style={styles.benefitsGrid} className="marketing-benefits-grid">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: 0.05 * i, duration: 0.5 }}
                style={styles.benefitCard}
              >
                <b.icon size={28} style={styles.benefitIcon} />
                <div style={styles.benefitTextCol}>
                  <h4 style={styles.benefitTitle}>{b.title}</h4>
                  <p style={styles.benefitDesc}>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

const styles = {
  marketingSection: {
    backgroundColor: '#02000C',
    position: 'relative'
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
  sectionSubBlock: {
    width: '100%',
    marginBottom: '80px'
  },
  blockTitle: {
    fontSize: '22px',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '32px'
  },
  servicesGrid: {
    gap: '35px',
    width: '100%'
  },
  serviceCard: {
    padding: '44px 36px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    height: '100%'
  },
  iconBox: {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    backgroundColor: 'rgba(59, 130, 246, 0.06)',
    border: '1px solid rgba(59, 130, 246, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '28px'
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '16px'
  },
  cardDesc: {
    fontSize: '15px',
    color: 'rgba(255, 255, 255, 0.65)',
    lineHeight: 1.6,
    marginBottom: '24px',
    flexGrow: 1
  },
  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    listStyle: 'none',
    padding: 0,
    margin: '0 0 32px 0'
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  featureDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#3b82f6'
  },
  featureText: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.75)'
  },
  learnMoreLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: '#3b82f6',
    fontWeight: 500,
    fontSize: '15px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    alignSelf: 'flex-start'
  },
  benefitsGrid: {
    gap: '24px',
    width: '100%'
  },
  benefitCard: {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '16px',
    padding: '24px 28px',
    transition: 'all 0.3s ease'
  },
  benefitIcon: {
    color: '#3b82f6',
    flexShrink: 0,
    marginTop: '2px'
  },
  benefitTextCol: {
    display: 'flex',
    flexDirection: 'column'
  },
  benefitTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '6px'
  },
  benefitDesc: {
    fontSize: '14px',
    lineHeight: 1.5,
    color: 'rgba(255, 255, 255, 0.65)'
  }
}
