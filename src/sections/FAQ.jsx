import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqData = [
  {
    category: 'General',
    items: [
      {
        q: 'What services does QuolyTech offer?',
        a: 'We provide comprehensive technology solutions including custom web development, AI-powered tools and platforms, video editing services, digital marketing, and our proprietary client dashboard for website management. Every project is built with modern technologies and tailored to your specific needs.',
      },
      {
        q: 'What is the QuolyTech Client Dashboard?',
        a: 'Our client dashboard is a powerful web-based platform that gives you complete control over your website. You can update content, swap images, manage portfolios, publish blog posts, and track analytics — all without writing code or contacting us. It\'s included with every website project.',
      },
      {
        q: 'How long does a typical project take?',
        a: 'Project timelines vary based on complexity. A standard website typically takes 2-4 weeks, while more complex projects with custom features may take 6-8 weeks. We provide a detailed timeline during our initial consultation.',
      },
    ],
  },
  {
    category: 'Pricing & Plans',
    items: [
      {
        q: 'What is your pricing structure?',
        a: 'We offer three main pricing tiers — Starter, Professional, and Enterprise — designed to fit different business sizes and needs. All plans include dashboard access. Custom pricing is available for unique requirements.',
      },
      {
        q: 'What is your refund policy?',
        a: 'We offer a satisfaction guarantee on all our services. If you\'re not happy with the initial concept, we\'ll revise until it meets your expectations. For detailed refund terms, please contact our support team.',
      },
      {
        q: 'Do you offer ongoing maintenance?',
        a: 'Yes. All plans include a post-launch support period, and we offer extended maintenance packages for ongoing updates, security patches, and performance monitoring.',
      },
    ],
  },
  {
    category: 'Technical',
    items: [
      {
        q: 'What technologies do you use?',
        a: 'We use modern, cutting-edge technologies including React, Next.js, Node.js, Python for AI/ML, and cloud platforms like AWS and Google Cloud. We choose the best tech stack for each project\'s requirements.',
      },
      {
        q: 'Can you integrate AI into my existing website?',
        a: 'Absolutely. We can integrate AI-powered features like chatbots, content generation, analytics, recommendation engines, and automation tools into existing websites and applications.',
      },
      {
        q: 'How do I contact customer support?',
        a: 'You can reach our team 24/7 through email at jari@quolytech.com, live chat on our website, or by phone. Enterprise clients get a dedicated project manager for direct communication.',
      },
    ],
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4 }}
      style={{
        ...styles.faqItemContainer,
        borderColor: isOpen ? 'rgba(0, 245, 255, 0.2)' : 'rgba(255, 255, 255, 0.08)'
      }}
      className="glass"
    >
      <button
        onClick={onToggle}
        style={styles.faqTrigger}
        aria-expanded={isOpen}
      >
        <span style={styles.questionText}>{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          style={styles.plusIcon}
        >
          <Plus size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={styles.faqDrawer}
          >
            <div style={styles.answerBox}>
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id)
  }

  // Generate dynamic schema for AEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.flatMap(cat =>
      cat.items.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      }))
    ),
  }

  return (
    <section id="faq" style={styles.faqSection} className="section">
      {/* JSON-LD Script injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container" style={styles.customContainer}>
        
        {/* Section Header */}
        <div style={styles.header}>
          <span style={styles.sectionLabel}>FAQ</span>
          <h2 style={styles.sectionTitle}>
            Frequently Asked <span className="gradient-text-cyan">Questions</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            Everything you need to know about our custom development and digital automation solutions.
          </p>
        </div>

        {/* Categories Stack */}
        <div style={styles.faqCategoriesStack}>
          {faqData.map((category, ci) => (
            <div key={ci} style={styles.categoryBlock}>
              <h3 style={styles.categoryTitle}>{category.category}</h3>
              <ul style={styles.faqList}>
                {category.items.map((item, ii) => {
                  const id = `${ci}-${ii}`
                  return (
                    <FAQItem
                      key={id}
                      item={item}
                      isOpen={openId === id}
                      onToggle={() => handleToggle(id)}
                    />
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

const styles = {
  faqSection: {
    backgroundColor: '#02000C',
    position: 'relative'
  },
  customContainer: {
    maxWidth: '850px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '80px'
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
    lineHeight: 1.6,
    maxWidth: '600px',
    margin: '0 auto'
  },
  faqCategoriesStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
    width: '100%'
  },
  categoryBlock: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  categoryTitle: {
    fontSize: '22px',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '28px',
    borderBottom: '1px solid rgba(0, 245, 255, 0.15)',
    paddingBottom: '12px'
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  faqItemContainer: {
    borderRadius: '16px',
    border: '1px solid',
    overflow: 'hidden',
    width: '100%',
    transition: 'all 0.3s ease'
  },
  faqTrigger: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '24px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    outline: 'none'
  },
  questionText: {
    fontSize: '17px',
    fontWeight: 500,
    color: '#ffffff',
    paddingRight: '20px'
  },
  plusIcon: {
    color: '#00f5ff',
    flexShrink: 0
  },
  faqDrawer: {
    overflow: 'hidden'
  },
  answerBox: {
    padding: '0 24px 24px 24px',
    fontSize: '15px',
    lineHeight: 1.65,
    color: 'rgba(255, 255, 255, 0.6)',
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
  }
}
