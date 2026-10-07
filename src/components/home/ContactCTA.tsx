import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="cta-grid" />

      <div className="section-shell">
        <ScrollReveal className="cta-content">
          <div className="section-eyebrow light">
            <span>09</span>
            START A CONVERSATION
          </div>

          <h2>
            Have an infrastructure
            <br />
            <em>problem?</em>
          </h2>

          <p>
            Tell us what you're building, where things are getting difficult,
            and what you want to change.
          </p>

          <Link href="/contact" className="cta-button">
            Talk to an engineer
            <span>↗</span>
          </Link>
        </ScrollReveal>

        <ScrollReveal className="cta-system" delay={2}>
          <div className="cta-system-top">
            <span>RUNSTACK / INTAKE</span>
            <span>READY</span>
          </div>

          <div className="cta-terminal">
            <span>$ runstack diagnose</span>
            <span className="terminal-muted">
              Looking for the bottleneck...
            </span>
            <span className="terminal-success">
              → ENGINEER REVIEW AVAILABLE
            </span>
          </div>

          <div className="cta-system-bottom">
            <span>INFRASTRUCTURE</span>
            <span>DEVOPS</span>
            <span>PLATFORM</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
