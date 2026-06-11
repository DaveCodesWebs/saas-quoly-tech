import React from 'react'
import { Check, Sparkles } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$499',
    period: 'per project',
    desc: 'Ideal for small businesses launching their online presence.',
    features: [
      'Custom Responsive Design',
      'Basic AEO Integration',
      'Client Dashboard (Basic)',
      '1 Page Setup',
      '30-day Post-launch Support'
    ],
    popular: false,
    gradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)'
  },
  {
    name: 'Professional',
    price: '$1,499',
    period: 'per project',
    desc: 'Comprehensive package for scaling operations and advanced search visibility.',
    features: [
      'Everything in Starter',
      'Advanced Dashboard Controls',
      'Content Modification Suite',
      'Up to 5 Pages Integrated',
      'AI-powered Content Writing',
      '90-day Priority Support'
    ],
    popular: true,
    gradient: 'linear-gradient(135deg, rgba(0, 97, 255, 0.08) 0%, rgba(0, 245, 255, 0.04) 100%)'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored pricing',
    desc: 'Enterprise-grade architecture with custom AI logic integrations.',
    features: [
      'Everything in Professional',
      'Custom LLM Integration',
      'Dedicated Infrastructure Set',
      'Unlimited Pages Layout',
      'Ongoing Security Updates',
      '12-month Dedicated SLA'
    ],
    popular: false,
    gradient: 'linear-gradient(135deg, rgba(30, 64, 175, 0.2) 0%, rgba(30, 58, 138, 0.1) 100%)'
  }
]

export default function Pricing() {
  const handleScrollToFooter = (e) => {
    e.preventDefault()
    const footer = document.querySelector('footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" style={styles.pricingSection} className="section">
      <div className="container">
        
        {/* Section Header */}
        <div style={styles.header}>
          <span style={styles.sectionLabel}>Pricing</span>
          <h2 style={styles.sectionTitle}>
            Choose Your <span className="gradient-text-cyan">Plan</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            Every plan includes access to our client dashboard to give you total control. 
            No surprises, cancel support options anytime.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div style={styles.plansGrid} className="pricing-grid">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              style={{
                ...styles.planCard,
                background: plan.gradient,
                borderColor: plan.popular ? 'rgba(0, 245, 255, 0.4)' : 'rgba(255, 255, 255, 0.08)',
                boxShadow: plan.popular ? '0 0 45px rgba(0, 245, 255, 0.08), 0 15px 40px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.4)',
                transform: plan.popular ? 'scale(1.03)' : 'none'
              }}
              className="glass"
            >
              {plan.popular && (
                <div style={styles.popularBadge}>
                  <Sparkles size={11} />
                  <span>Most Popular</span>
                </div>
              )}

              {/* Plan Header */}
              <div style={styles.cardHeader}>
                <h3 style={styles.planName}>{plan.name}</h3>
                <div style={styles.priceContainer}>
                  <span style={styles.price}>{plan.price}</span>
                  <span style={styles.period}>{plan.period}</span>
                </div>
                <p style={styles.planDesc}>{plan.desc}</p>
              </div>

              {/* Features List */}
              <ul style={styles.featuresList}>
                {plan.features.map((feat, j) => (
                  <li key={j} style={styles.featureItem}>
                    <Check size={16} style={{ color: '#00f5ff', flexShrink: 0 }} />
                    <span style={styles.featureText}>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <button
                onClick={handleScrollToFooter}
                className={plan.popular ? "btn btn-primary" : "btn btn-secondary"}
                style={styles.planBtn}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Enterprise custom box */}
        <div style={styles.customBox} className="pricing-custom-box glass">
          <div style={styles.customText}>
            <h3 style={styles.customTitle}>Need a Custom Solution?</h3>
            <p style={styles.customDesc}>
              If your organization has unique database requirements, customized dashboards, 
              or complex AI models, our engineering team can design a bespoke setup tailored specifically for you.
            </p>
          </div>
          <button
            onClick={handleScrollToFooter}
            className="pricing-custom-btn btn btn-primary"
            style={styles.customBtn}
          >
            Contact Engineering
          </button>
        </div>

      </div>
    </section>
  )
}

const styles = {
  pricingSection: {
    backgroundColor: '#02000C',
    position: 'relative'
  },
  header: {
    textAlign: 'center',
    marginBottom: '80px',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto'
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
  plansGrid: {
    display: 'grid',
    gap: '40px',
    width: '100%',
    marginBottom: '100px',
    alignItems: 'stretch'
  },
  planCard: {
    padding: '44px 36px',
    borderRadius: '24px',
    border: '1px solid',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    height: '100%'
  },
  popularBadge: {
    position: 'absolute',
    top: '-15px',
    left: '32px',
    background: 'linear-gradient(135deg, #00f5ff 0%, #0061ff 100%)',
    color: '#02000c',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    boxShadow: '0 5px 15px rgba(0, 245, 255, 0.25)'
  },
  cardHeader: {
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    paddingBottom: '30px',
    marginBottom: '30px'
  },
  planName: {
    fontSize: '22px',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '18px'
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '8px',
    marginBottom: '14px'
  },
  price: {
    fontSize: '52px',
    fontWeight: 800,
    color: '#ffffff',
    letterSpacing: '-0.02em',
    lineHeight: 1
  },
  period: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.5)',
    fontWeight: 500
  },
  planDesc: {
    fontSize: '14px',
    lineHeight: 1.5,
    color: 'rgba(255, 255, 255, 0.6)'
  },
  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    listStyle: 'none',
    padding: 0,
    margin: '0 0 44px 0',
    flexGrow: 1
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  featureText: {
    fontSize: '15px',
    color: 'rgba(255,255,255,0.85)'
  },
  planBtn: {
    width: '100%',
    padding: '16px'
  },
  customBox: {
    display: 'flex',
    padding: '50px 40px',
    borderRadius: '24px',
    width: '100%'
  },
  customText: {
    maxWidth: '750px'
  },
  customTitle: {
    fontSize: '24px',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '12px'
  },
  customDesc: {
    fontSize: '16px',
    lineHeight: 1.6,
    color: 'rgba(255, 255, 255, 0.65)'
  },
  customBtn: {
    whiteSpace: 'nowrap'
  }
}

