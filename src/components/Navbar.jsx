import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#features' },
    { label: 'Dashboard', href: '#dashboard', highlight: true },
    { label: 'AI Solutions', href: '#ai-solutions' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav style={{
      ...styles.navbar,
      ...(isScrolled ? styles.navbarScrolled : {})
    }}>
      <div style={styles.navContainer}>
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          style={styles.logo}
        >
          <span style={styles.logoText}>QUOLY</span>
          <span style={styles.logoAccent}>TECH</span>
        </a>

        {/* Desktop Links */}
        <div style={styles.navLinks} className="nav-links-desktop">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{
                ...styles.navLink,
                ...(item.highlight ? styles.navLinkHighlight : {})
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={styles.mobileBtn}
          className="mobile-btn"
        >
          <div style={{
            ...styles.bar,
            transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'
          }} />
          <div style={{
            ...styles.bar,
            opacity: mobileMenuOpen ? 0 : 1
          }} />
          <div style={{
            ...styles.bar,
            transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'
          }} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={styles.mobileDrawer}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{
                ...styles.mobileNavLink,
                ...(item.highlight ? styles.mobileNavLinkHighlight : {})
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
    padding: '28px 24px',
    transition: 'all 0.4s ease',
    background: 'transparent'
  },
  navbarScrolled: {
    padding: '16px 24px',
    background: 'rgba(2, 0, 12, 0.75)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '22px',
    fontWeight: 800,
    letterSpacing: '0.08em',
    textDecoration: 'none'
  },
  logoText: {
    color: '#ffffff'
  },
  logoAccent: {
    color: '#00f5ff',
    textShadow: '0 0 10px rgba(0, 245, 255, 0.3)'
  },
  navLinks: {
    alignItems: 'center',
    gap: '35px'
  },
  navLink: {
    color: 'rgba(255, 255, 255, 0.65)',
    fontSize: '14px',
    fontWeight: 500,
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    transition: 'all 0.3s ease'
  },
  navLinkHighlight: {
    color: '#00f5ff',
    border: '1px solid rgba(0, 245, 255, 0.25)',
    padding: '8px 16px',
    borderRadius: '8px',
    background: 'rgba(0, 245, 255, 0.04)'
  },
  mobileBtn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '24px',
    height: '18px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    zIndex: 101
  },
  bar: {
    width: '100%',
    height: '2px',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease'
  },
  mobileDrawer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#02000C',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
    zIndex: 99
  },
  mobileNavLink: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '20px',
    fontWeight: 600,
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.08em'
  },
  mobileNavLinkHighlight: {
    color: '#00f5ff',
    border: '1px solid rgba(0, 245, 255, 0.25)',
    padding: '12px 28px',
    borderRadius: '12px',
    background: 'rgba(0, 245, 255, 0.05)'
  }
}

