import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

import ProblemSection from "@/components/home/ProblemSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import TechnologySection from "@/components/home/TechnologySection";
import WorkSection from "@/components/home/WorkSection";
import AboutSection from "@/components/home/AboutSection";
import InsightsSection from "@/components/home/InsightsSection";
import ContactCTA from "@/components/home/ContactCTA";

function InfrastructureVisual() {
  return (
    <div className="infra-visual" aria-hidden="true">
      <div className="visual-grid" />

      <div className="visual-label visual-label-top">
        <span className="status-dot" />
        SYSTEM ONLINE
      </div>

      <div className="infra-core">
        <div className="core-ring core-ring-one" />
        <div className="core-ring core-ring-two" />

        <div className="core-node">
          <span className="core-node-top">RUNSTACK</span>
          <span className="core-node-bottom">CONTROL PLANE</span>
        </div>

        <div className="connection connection-one" />
        <div className="connection connection-two" />
        <div className="connection connection-three" />
        <div className="connection connection-four" />
      </div>

      <div className="infra-node node-one">
        <span className="node-symbol">AWS</span>
        <span>Cloud</span>
      </div>

      <div className="infra-node node-two">
        <span className="node-symbol">K8S</span>
        <span>Platform</span>
      </div>

      <div className="infra-node node-three">
        <span className="node-symbol">CI/CD</span>
        <span>Deploy</span>
      </div>

      <div className="infra-node node-four">
        <span className="node-symbol">OBS</span>
        <span>Observe</span>
      </div>

      <div className="visual-footer">
        <span>01</span>
        <span>INFRASTRUCTURE / OPERATIONS</span>
        <span>24/7</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-shell">
          <ScrollReveal className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              CLOUD / DEVOPS / INFRASTRUCTURE
            </div>

            <h1>
              Infrastructure
              <br />
              <em>that keeps</em>
              <br />
              up with you.
            </h1>

            <p className="hero-description">
              RunStack helps engineering teams build, deploy, secure, and
              operate reliable cloud infrastructure without getting buried in
              complexity.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="primary-button">
                Talk to an engineer
                <span>↗</span>
              </Link>

              <Link href="/services" className="secondary-button">
                Explore services
                <span>↓</span>
              </Link>
            </div>

            <div className="hero-note">
              <span className="note-number">01</span>
              <span>
                From first deployment
                <br />
                to production scale.
              </span>
            </div>
          </ScrollReveal>

          <InfrastructureVisual />
        </div>

        <div className="hero-bottom">
          <span>RUNSTACK SOLUTIONS</span>

          <span className="scroll-indicator">
            SCROLL TO EXPLORE
            <span>↓</span>
          </span>

          <span>EST. 2026</span>
        </div>
      </section>

      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <TechnologySection />
      <WorkSection />
      <AboutSection />
      <InsightsSection />
      <ContactCTA />
    </main>
  );
}