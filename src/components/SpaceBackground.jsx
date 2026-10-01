import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SpaceBackground() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const layer1Transform = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const layer2Transform = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const layer3Transform = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div ref={containerRef} style={styles.backgroundContainer}>
      <motion.div
        className="stars-layer-1"
        style={{
          ...styles.layer,
          y: layer1Transform,
        }}
      />

      <motion.div
        className="stars-layer-2"
        style={{
          ...styles.layer,
          y: layer2Transform,
        }}
      />

      <motion.div
        style={{
          ...styles.nebulaLayer,
          y: layer3Transform,
        }}
      >
        <div style={styles.nebulaCyan} className="animate-pulse-glow" />
        <div style={styles.nebulaBlue} className="animate-pulse-glow" />
      </motion.div>
    </div>
  );
}

const styles = {
  backgroundContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh", // Use viewport height
    zIndex: -1,
    overflow: "hidden",
    backgroundColor: "#02000C",
    pointerEvents: "none",
  },
  layer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  nebulaLayer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
  },
  nebulaCyan: {
    position: "absolute",
    top: "20%",
    left: "15%",
    width: "50vw",
    height: "50vw",
    maxHeight: "600px",
    maxWidth: "600px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(0, 245, 255, 0.055) 0%, transparent 70%)",
    filter: "blur(40px)",
  },
  nebulaBlue: {
    position: "absolute",
    bottom: "20%",
    right: "10%",
    width: "60vw",
    height: "60vw",
    maxHeight: "700px",
    maxWidth: "700px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(0, 97, 255, 0.045) 0%, transparent 70%)",
    filter: "blur(50px)",
  },
};