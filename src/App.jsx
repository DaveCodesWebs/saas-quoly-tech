import React from "react";
import SpaceBackground from "./components/SpaceBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import DashboardShowcase from "./sections/DashboardShowcase";

import AISolutions from "./sections/AISolutions";
import VideoEditing from "./sections/VideoEditing";
import Marketing from "./sections/Marketing";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";

export default function App() {
  return (
    <div style={styles.appWrapper}>
      {/* 3-Layer Parallax Space Background */}
      <SpaceBackground />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main style={styles.mainContent}>
        <Hero />
        <DashboardShowcase />

        <AISolutions />
        <VideoEditing />
        <Marketing />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}

const styles = {
  appWrapper: {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    overflowX: "hidden",
  },
  mainContent: {
    width: "100%",
  },
};
