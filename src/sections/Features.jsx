import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Brain,
  Laptop,
  FlaskConical,
  Bot,
  PieChart,
  GraduationCap,
  GitBranch,
  Users,
  Wand2,
  Languages,
  Gauge,
  Shield,
  Bug,
  PlayCircle,
  Network,
  SlidersHorizontal,
  History,
  BarChart3,
  LayoutGrid,
  Upload,
} from 'lucide-react';

// -----------------------------------------------------------------------------
// Feature data
// -----------------------------------------------------------------------------
const features = [
  {
    id: 'ai-hub',
    icon: Brain,
    title: 'AI Development Hub',
    desc: 'Accelerate your artificial intelligence projects with ready-to-use codebase snippets, tutorials, and pre-packaged models.',
    subcards: [
      { icon: GraduationCap, title: 'Tutorial Library', desc: 'Step-by-step guides on deep learning, machine learning, and AI logic integrations.' },
      { icon: GitBranch, title: 'Code Repos', desc: 'Pre-configured code blocks for fast model wiring and dataset formatting.' },
      { icon: Users, title: 'Community Portal', desc: 'Connect directly with developers and technical leads on AI integrations.' },
    ],
  },
  {
    id: 'code-generator',
    icon: Laptop,
    title: 'Intelligent Code Engine',
    desc: 'Generate optimized, clean code across 25+ programming languages using context-aware AI parameters.',
    subcards: [
      { icon: Wand2, title: 'Smart Generation', desc: 'Create semantic modules and component skeletons in seconds.' },
      { icon: Languages, title: 'Multi-Language', desc: 'Seamlessly translate logic structures between Python, JS, C++, Go.' },
      { icon: Gauge, title: 'Speed Tuning', desc: 'Automated refactoring proposals to reduce calculation cycles.' },
    ],
  },
  {
    id: 'test-environment',
    icon: FlaskConical,
    title: 'Secure Validation Sandbox',
    desc: 'Evaluate model outputs, track error rates, and monitor memory consumption safely in real-time.',
    subcards: [
      { icon: Shield, title: 'Islands Sandbox', desc: 'Run unverified script modules inside protected system parameters.' },
      { icon: Bug, title: 'Trace & Debug', desc: 'Visual stack tracing, error logs, and detailed step diagnostics.' },
      { icon: PlayCircle, title: 'Stress Tests', desc: 'Automate high-load simulation runs to determine bottlenecks.' },
    ],
  },
  {
    id: 'model-training',
    icon: Bot,
    title: 'Distributed Training Cloud',
    desc: 'Scale neural network optimization across powerful cloud GPU instances with intelligent scheduling.',
    subcards: [
      { icon: Network, title: 'GPU Clustering', desc: 'Distribute datasets across clusters for rapid gradient descents.' },
      { icon: SlidersHorizontal, title: 'Auto Hyperparams', desc: 'Algorithmic fine-tuning of learning rate and batch sizes.' },
      { icon: History, title: 'Model History', desc: 'Rollback models, compare evaluation loss, and track weights.' },
    ],
  },
  {
    id: 'analytics',
    icon: PieChart,
    title: 'Performance Analytics',
    desc: 'Visualize project usage metrics, token costs, and user retention levels in one sleek dashboard.',
    subcards: [
      { icon: BarChart3, title: 'Live Dashboards', desc: 'Real-time counters tracking server loads and prompt counts.' },
      { icon: LayoutGrid, title: 'Custom Metrics', desc: 'Drag-and-drop dashboards to construct charts showing specific parameters.' },
      { icon: Upload, title: 'Reports Export', desc: 'Auto-schedule analytics email reports to team leads.' },
    ],
  },
];

// -----------------------------------------------------------------------------
// Helper: map global scroll progress (0‑1) to a per‑card progress (0‑1)
// -----------------------------------------------------------------------------
function useCardProgress(globalProgress, index, total) {
  const start = index / total;
  const end = (index + 1) / total;
  return useTransform(globalProgress, [start, end], [0, 1]);
}

// -----------------------------------------------------------------------------
// Single sticky card component
// -----------------------------------------------------------------------------
function FeatureStickyCard({ feature, index, total, scrollProgress }) {
  const cardProgress = useCardProgress(scrollProgress, index, total);

  // Fade in at the start, stay fully visible, fade out as the next card takes over
  const opacity = useTransform(cardProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  // Subtle upward motion for a smoother parallax feel
  const y = useTransform(cardProgress, [0, 0.3, 0.7, 1], [30, 0, 0, -10]);

  return (
    <motion.div
      style={{
        ...styles.stickyCardWrapper,
        top: 0,
        opacity,
        y,
        zIndex: total - index, // newest card sits on top of the previous one
      }}
      className="glass-strong"
    >
      <div style={styles.cardContent} className="features-card-content">
        {/* Left column – core info */}
        <div style={styles.cardLeftCol}>
          <div style={styles.iconWrapper}>
            <feature.icon size={28} style={{ color: '#00f5ff' }} />
          </div>
          <h3 style={styles.cardTitle}>{feature.title}</h3>
          <p style={styles.cardDesc}>{feature.desc}</p>
        </div>
        {/* Right column – sub‑features list */}
        <div style={styles.cardRightCol}>
          <div style={styles.subcardsList}>
            {feature.subcards.map((sub, i) => (
              <div key={i} style={styles.subcardItem}>
                <div style={styles.subcardIconBox}>
                  <sub.icon size={16} style={{ color: '#3b82f6' }} />
                </div>
                <div>
                  <h4 style={styles.subcardTitle}>{sub.title}</h4>
                  <p style={styles.subcardDesc}>{sub.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------------------
// Main Features section
// -----------------------------------------------------------------------------
export default function Features() {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  const handleScrollTo = (e, selector) => {
    e.preventDefault();
    const target = document.querySelector(selector);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="features" style={styles.sectionContainer} className="section">
      <div className="container">
        {/* Section header */}
        <div style={styles.header}>
          <span style={styles.sectionLabel}>Platform Features</span>
          <h2 style={styles.sectionTitle}>
            Next-Gen <span className="gradient-text-cyan">AI Platform</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            We built a robust set of tools styled with professional layouts and spacious padding. No visual clutter, just clean information designed to maximize productivity.
          </p>
        </div>

        {/* Stacked cards track */}
        <div ref={trackRef} style={styles.cardsTrack}>
          {features.map((feature, idx) => (
            <FeatureStickyCard
              key={feature.id}
              feature={feature}
              index={idx}
              total={features.length}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Footer call‑to‑action */}
        <div style={styles.aeoFooterBox}>
          <p style={styles.aeoText}>
            Accelerate your business with our customized modules. Review our{' '}
            <a href="#pricing" onClick={(e) => handleScrollTo(e, '#pricing')} style={styles.aeoLink}>pricing plans</a>, read our detailed{' '}
            <a href="#faq" onClick={(e) => handleScrollTo(e, '#faq')} style={styles.aeoLink}>FAQ</a>, or explore our interactive{' '}
            <a href="#dashboard" onClick={(e) => handleScrollTo(e, '#dashboard')} style={styles.aeoLink}>client dashboard</a>{' '}for full control over content modifications. According to research on AI by{' '}
            <a href="https://www.mckinsey.com/featured-insights/artificial-intelligence" target="_blank" rel="noopener noreferrer" style={styles.externalLink}>McKinsey</a>, companies implementing generative tools see a significant surge in overall productivity.
          </p>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Styling – keep the premium glass‑morphism aesthetic
// -----------------------------------------------------------------------------
const styles = {
  sectionContainer: {
    backgroundColor: '#02000C',
    position: 'relative',
    padding: '100px 0',
  },
  header: {
    textAlign: 'center',
    marginBottom: '90px',
    maxWidth: '750px',
    margin: '0 auto',
  },
  sectionLabel: {
    color: '#00f5ff',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    display: 'block',
    marginBottom: '16px',
  },
  sectionTitle: {
    fontSize: 'clamp(32px, 5vw, 52px)',
    fontWeight: 800,
    lineHeight: 1.15,
    marginBottom: '24px',
    color: '#ffffff',
  },
  sectionSubtitle: {
    fontSize: '18px',
    fontWeight: 300,
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: 1.6,
  },
  cardsTrack: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '80px',
    paddingBottom: '250px',
    width: '100%',
    maxWidth: '960px',
    margin: '0 auto',
  },
  stickyCardWrapper: {
    position: 'sticky',
    top: 0,
    padding: '48px',
    borderRadius: '24px',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
    width: '100%',
    transformOrigin: 'center top',
    background: 'rgba(255, 255, 255, 0.04)',
    backdropFilter: 'blur(10px)',
  },
  cardContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
  },
  cardLeftCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  cardRightCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: '60px',
    height: '60px',
    borderRadius: '16px',
    backgroundColor: 'rgba(0, 245, 255, 0.08)',
    border: '1px solid rgba(0, 245, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
  },
  cardTitle: {
    fontSize: '28px',
    fontWeight: 700,
    marginBottom: '16px',
    color: '#ffffff',
  },
  cardDesc: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.65)',
    lineHeight: 1.65,
  },
  subcardsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  subcardItem: {
    display: 'flex',
    gap: '18px',
    alignItems: 'flex-start',
  },
  subcardIconBox: {
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    backgroundColor: 'rgba(59, 130, 246, 0.08)',
    border: '1px solid rgba(59, 130, 246, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: '2px',
  },
  subcardTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '6px',
  },
  subcardDesc: {
    fontSize: '13px',
    color: 'rgba(255, 255, 255, 0.5)',
    lineHeight: 1.5,
  },
  aeoFooterBox: {
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    paddingTop: '60px',
    marginTop: '60px',
    maxWidth: '850px',
    margin: '0 auto',
    textAlign: 'center',
  },
  aeoText: {
    fontSize: '17px',
    color: 'rgba(255, 255, 255, 0.65)',
    lineHeight: 1.7,
  },
  aeoLink: {
    color: '#00f5ff',
    fontWeight: 500,
    textDecoration: 'underline',
    margin: '0 4px',
  },
  externalLink: {
    color: '#3b82f6',
    fontWeight: 500,
    textDecoration: 'underline',
    margin: '0 4px',
  },
};