import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'

const testimonials = [
  {
    text: "QuolyTech transformed our entire development workflow. Their expertise in modern technologies and attention to detail is unmatched. The dashboard gave us complete control over our site.",
    name: 'Sarah Mitchell',
    position: 'CTO',
    company: 'NovaTech Solutions',
    rating: 5,
  },
  {
    text: "The AI-powered tools from QuolyTech have significantly boosted our team's productivity. We've cut development time by 40% since adopting their platform.",
    name: 'James Rodriguez',
    position: 'Lead Developer',
    company: 'CloudScale Inc',
    rating: 5,
  },
  {
    text: "Outstanding customer service and innovative solutions. QuolyTech delivers on every promise. The client dashboard is a game-changer for managing our web presence.",
    name: 'Emily Chen',
    position: 'Product Manager',
    company: 'DataFlow Systems',
    rating: 5,
  },
  {
    text: "We've worked with many tech agencies, but QuolyTech stands out for their commitment to quality and cutting-edge approach. They don't just build websites — they build experiences.",
    name: 'Michael Brown',
    position: 'CEO',
    company: 'Vertex Digital',
    rating: 5,
  },
  {
    text: "The video editing packages exceeded our expectations. Professional quality with quick turnaround times. Our content engagement increased by 60% after partnering with QuolyTech.",
    name: 'Ana Petrov',
    position: 'Marketing Director',
    company: 'BrightMedia Agency',
    rating: 5,
  },
  {
    text: "QuolyTech's marketing solutions helped us reach audiences we never thought possible. Their data-driven approach makes all the difference in campaign performance.",
    name: 'David Kim',
    position: 'Growth Lead',
    company: 'StartUp Hive',
    rating: 4,
  }
]

const stats = [
  { target: 500, suffix: '+', label: 'Projects Completed' },
  { target: 99.9, suffix: '%', label: 'Client Satisfaction' },
  { target: 24, suffix: '/7', label: 'Support Available' }
]

function StarRating({ rating }) {
  return (
    <div style={styles.ratingFlex}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          style={{
            ...styles.starIcon,
            color: i <= rating ? '#00f5ff' : 'rgba(255, 255, 255, 0.15)',
            fill: i <= rating ? '#00f5ff' : 'none'
          }}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const handleScrollToFooter = (e) => {
    e.preventDefault()
    const footer = document.querySelector('footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="testimonials" style={styles.testimonialsSection} className="section">
      <div className="container">
        
        {/* Section Header */}
        <div style={styles.header}>
          <span style={styles.sectionLabel}>Testimonials</span>
          <h2 style={styles.sectionTitle}>
            What Our Clients <span className="gradient-text-cyan">Say</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            Discover why hundreds of developers and businesses trust QuolyTech for their digital transformation journey.
          </p>
        </div>

        {/* Testimonials grid */}
        <div style={styles.cardsGrid} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} style={styles.card} className="glass">
              <div style={styles.cardContent}>
                <Quote size={36} style={{ color: 'rgba(0, 245, 255, 0.45)', marginBottom: '24px' }} />
                <p style={styles.quoteText}>
                  "{t.text}"
                </p>
              </div>
              
              <div style={styles.userInfoBlock}>
                <div style={styles.avatar}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 style={styles.userName}>{t.name}</h4>
                  <p style={styles.userCompany}>{t.position}, {t.company}</p>
                  <StarRating rating={t.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div style={styles.statsGrid} className="testimonials-stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              style={styles.statBox}
              className="glass"
            >
              <div style={styles.statNumber}>
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </div>
              <span style={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA banner box */}
        <div style={styles.ctaBanner} className="testimonials-cta-banner glass">
          <div style={styles.ctaLeftCol}>
            <h3 style={styles.ctaTitle}>Ready to Join Our Success Stories?</h3>
            <p style={styles.ctaDesc}>
              Let's work together to transform your ideas into reality. Join hundreds of satisfied clients 
              who have chosen QuolyTech for their digital optimization.
            </p>
          </div>
          <button
            onClick={handleScrollToFooter}
            className="testimonials-cta-btn btn btn-primary"
            style={styles.ctaBtn}
          >
            Get Started Today
          </button>
        </div>

      </div>
    </section>
  )
}

const styles = {
  testimonialsSection: {
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
  cardsGrid: {
    gap: '30px',
    width: '100%',
    marginBottom: '80px',
    alignItems: 'stretch'
  },
  card: {
    padding: '44px 36px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  cardContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  quoteText: {
    fontSize: '16px',
    lineHeight: 1.65,
    color: 'rgba(255, 255, 255, 0.95)',
    marginBottom: '32px',
    fontWeight: 300,
    flexGrow: 1
  },
  userInfoBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    paddingTop: '24px',
    borderTop: '1px solid rgba(255, 255, 255, 0.06)'
  },
  avatar: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.15) 0%, rgba(0, 97, 255, 0.1) 100%)',
    border: '1px solid rgba(0, 245, 255, 0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '16px',
    flexShrink: 0
  },
  userName: {
    fontSize: '15px',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '4px'
  },
  userCompany: {
    fontSize: '12px',
    color: 'rgba(0, 245, 255, 0.8)',
    marginBottom: '6px'
  },
  ratingFlex: {
    display: 'flex',
    gap: '3px'
  },
  starIcon: {
    flexShrink: 0
  },
  statsGrid: {
    gap: '30px',
    width: '100%',
    marginBottom: '100px'
  },
  statBox: {
    padding: '36px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%'
  },
  statNumber: {
    fontSize: '48px',
    fontWeight: 700,
    color: '#00f5ff',
    marginBottom: '8px',
    letterSpacing: '-0.02em',
    lineHeight: 1
  },
  statLabel: {
    fontSize: '15px',
    color: 'rgba(255, 255, 255, 0.65)',
    fontWeight: 500
  },
  ctaBanner: {},
  ctaLeftCol: {
    maxWidth: '700px'
  },
  ctaTitle: {
    fontSize: '26px',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '12px'
  },
  ctaDesc: {
    fontSize: '16px',
    lineHeight: 1.6,
    color: 'rgba(255, 255, 255, 0.65)'
  },
  ctaBtn: {}
}
