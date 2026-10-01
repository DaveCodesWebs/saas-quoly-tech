import React from 'react'
import { Sparkles, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

const navLinks = [
  { text: 'Home', url: '#home' },
  { text: 'Services', url: '#features' },
  { text: 'Dashboard', url: '#dashboard' },
  { text: 'Pricing', url: '#pricing' },
]

const exploreLinks = [
  { text: 'AI Solutions', url: '#ai-solutions' },
  { text: 'FAQ', url: '#faq' }
]

const resourceLinks = [
  { text: 'FAQ', url: '#faq' },
  { text: 'Terms', url: '#' },
  { text: 'Privacy', url: '#' }
]

const styles = {
  footer: {
    backgroundColor: '#02000C',
    position: 'relative',
    width: '100%',
    padding: '80px 24px 40px 24px',
    overflow: 'hidden',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)'
  },
  topLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(to right, transparent, rgba(0, 245, 255, 0.3), transparent)'
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  brandBlock: {
    marginBottom: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  logoFlex: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '20px'
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    backgroundColor: 'rgba(0, 245, 255, 0.08)',
    border: '1px solid rgba(0, 245, 255, 0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 700,
    letterSpacing: '0.04em'
  },
  brandDesc: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: 1.6,
    maxWidth: '450px'
  },
  columnsGrid: {
    gap: '40px',
    marginBottom: '60px'
  },
  col: {
    display: 'flex',
    flexDirection: 'column'
  },
  colTitle: {
    fontSize: '15px',
    fontWeight: 600,
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '20px',
    position: 'relative'
  },
  linkList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  footerLink: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.55)',
    transition: 'color 0.2s ease'
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '24px'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.55)'
  },
  socialsContainer: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  },
  socialCircle: {
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  socialSvg: {
    width: '15px',
    height: '15px',
    fill: '#ffffff',
    opacity: 0.65
  },
  bottomRow: {
    borderTop: '1px solid rgba(255,255,255,0.08)',
    paddingTop: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
    gap: '20px'
  },
  copyrightText: {
    fontSize: '13px',
    color: 'rgba(255, 255, 255, 0.45)'
  },
  bottomRightFlex: {
    display: 'flex',
    alignItems: 'center'
  },
  totopBtn: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    color: 'rgba(255, 255, 255, 0.6)'
  }
}

const socialLinks = [
  {
    label: 'Twitter', url: 'https://twitter.com/quolytech',
    svg: <svg viewBox="0 0 24 24" style={styles.socialSvg}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: 'LinkedIn', url: 'https://linkedin.com/company/quolytech',
    svg: <svg viewBox="0 0 24 24" style={styles.socialSvg}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: 'GitHub', url: 'https://github.com/quolytech',
    svg: <svg viewBox="0 0 24 24" style={styles.socialSvg}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
  }
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="contact" style={styles.footer}>
      {/* Top thin line */}
      <div style={styles.topLine} />

      <div style={styles.footerContainer}>
        {/* Brand Block */}
        <div style={styles.brandBlock}>
          <div style={styles.logoFlex}>
            <div style={styles.logoIcon}>
              <Sparkles size={20} style={{ color: '#00f5ff' }} />
            </div>
            <span className="gradient-text-cyan" style={styles.logoText}>QuolyTech</span>
          </div>
          <p style={styles.brandDesc}>
            Empowering client independence with state of the art custom development and client dashboards. 
            Manage your entire online presence with simplicity.
          </p>
        </div>

        {/* Columns Grid */}
        <div style={styles.columnsGrid} className="footer-grid">
          {/* Col 1 */}
          <div style={styles.col}>
            <h4 style={styles.colTitle}>Navigation</h4>
            <ul style={styles.linkList}>
              {navLinks.map(link => (
                <li key={link.text}>
                  <a href={link.url} onClick={(e) => handleLinkClick(e, link.url)} style={styles.footerLink}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 */}
          <div style={styles.col}>
            <h4 style={styles.colTitle}>Solutions</h4>
            <ul style={styles.linkList}>
              {exploreLinks.map(link => (
                <li key={link.text}>
                  <a href={link.url} onClick={(e) => handleLinkClick(e, link.url)} style={styles.footerLink}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div style={styles.col}>
            <h4 style={styles.colTitle}>Resources</h4>
            <ul style={styles.linkList}>
              {resourceLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} onClick={(e) => handleLinkClick(e, link.url)} style={styles.footerLink}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Contact info */}
          <div style={styles.col}>
            <h4 style={styles.colTitle}>Contact</h4>
            <div style={styles.contactList}>
              <div style={styles.contactItem}>
                <Mail size={13} style={{ color: '#00f5ff' }} />
                <span>jari@quolytech.com</span>
              </div>
              <div style={styles.contactItem}>
                <MapPin size={13} style={{ color: '#00f5ff' }} />
                <span>Tirana, Albania</span>
              </div>
            </div>
            
            <div style={styles.socialsContainer}>
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={styles.socialCircle}
                  className="glass"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div style={styles.bottomRow}>
          <span style={styles.copyrightText}>
            © {new Date().getFullYear()} QuolyTech. All rights reserved.
          </span>
          <div style={styles.bottomRightFlex}>
            <button
              onClick={scrollToTop}
              style={styles.totopBtn}
              className="glass"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
