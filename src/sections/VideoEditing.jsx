import React from 'react'
import { motion } from 'framer-motion'
import { Film, Clapperboard, Tv, ArrowRight } from 'lucide-react'

const packages = [
  {
    icon: Film,
    title: 'Basic Video Package',
    description: 'Perfect for social media content and short promotional videos. Clean editing, transitions, and color grading included.',
    features: ['Social Media Edits', 'Color Grading', 'Basic Motion Graphics'],
    price: 'From $299',
    url: '#contact',
  },
  {
    icon: Clapperboard,
    title: 'Professional Package',
    description: 'Full-service video production with advanced effects, multi-camera editing, and professional sound design.',
    features: ['Multi-Camera Editing', 'Sound Design', 'Advanced Effects', 'Subtitles'],
    price: 'From $699',
    url: '#contact',
  },
  {
    icon: Tv,
    title: 'Enterprise Package',
    description: 'Complete video production suite for brands and enterprises. Includes strategy, production, post-production, and distribution optimization.',
    features: ['Full Production', 'Strategy & Planning', 'Distribution', 'Analytics'],
    price: 'Custom',
    url: '#contact',
  }
]

export default function VideoEditing() {
  const handleScrollToFooter = (e) => {
    e.preventDefault()
    const footer = document.querySelector('footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="video-editing" style={styles.videoSection} className="section">
      <div className="container">
        
        {/* Section Header */}
        <div style={styles.header}>
          <span style={styles.sectionLabel}>Video Production</span>
          <h2 style={styles.sectionTitle}>
            Make Videos <span className="gradient-text-cyan">Pop</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            Select the ideal video editing package for your needs. AI-enhanced editing tools combined with expert craftsmanship.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div style={styles.packagesGrid} className="video-grid">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              style={styles.packageCard}
              className="glass"
            >
              {/* Top icon */}
              <div style={styles.iconBox}>
                <pkg.icon size={26} style={{ color: '#00f5ff' }} />
              </div>

              {/* Title */}
              <h3 style={styles.pkgTitle} className="gradient-text-white">
                {pkg.title}
              </h3>

              {/* Description */}
              <p style={styles.pkgDesc}>
                {pkg.description}
              </p>

              {/* Features Tags */}
              <div style={styles.featuresContainer}>
                {pkg.features.map((feat, j) => (
                  <span key={j} style={styles.featureTag}>
                    {feat}
                  </span>
                ))}
              </div>

              {/* Price */}
              <div style={styles.priceText}>
                {pkg.price}
              </div>

              {/* CTA button */}
              <button
                onClick={handleScrollToFooter}
                className="btn btn-secondary"
                style={styles.cardBtn}
              >
                Get Started <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

const styles = {
  videoSection: {
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
  packagesGrid: {
    gap: '35px',
    width: '100%',
    alignItems: 'stretch'
  },
  packageCard: {
    padding: '48px 36px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    height: '100%'
  },
  iconBox: {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    backgroundColor: 'rgba(0, 245, 255, 0.06)',
    border: '1px solid rgba(0, 245, 255, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '28px'
  },
  pkgTitle: {
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '16px'
  },
  pkgDesc: {
    fontSize: '15px',
    lineHeight: 1.6,
    color: 'rgba(255, 255, 255, 0.65)',
    marginBottom: '28px',
    flexGrow: 1
  },
  featuresContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '32px'
  },
  featureTag: {
    border: '1px solid rgba(0, 245, 255, 0.15)',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: 600,
    color: '#3b82f6',
    backgroundColor: 'rgba(59, 130, 246, 0.03)'
  },
  priceText: {
    fontSize: '26px',
    fontWeight: 700,
    color: '#3b82f6',
    marginBottom: '28px',
    textShadow: '0 0 16px rgba(0, 245, 255, 0.2)'
  },
  cardBtn: {
    padding: '14px 20px',
    fontSize: '14px',
    width: '100%'
  }
}
