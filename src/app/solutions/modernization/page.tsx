import Link from "next/link";
import {
  Server,
  Rocket,
  Layers,
  Activity,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Modernization",
  description:
    "Make your infrastructure easier to change. Modernize legacy systems, deployment workflows, and architecture without a risky rewrite.",
  alternates: { canonical: "/solutions/modernization" },
  openGraph: {
    title: "Modernization | RunStack",
    description:
      "Make your infrastructure easier to change. Modernize legacy systems, deployment workflows, and architecture without a risky rewrite.",
    url: "/solutions/modernization",
  },
};

const areas = [
  {
    number: "01",
    title: "Infrastructure",
    icon: Server,
    text: "Replace fragile or manually managed infrastructure with repeatable, automated foundations.",
  },
  {
    number: "02",
    title: "Delivery",
    icon: Rocket,
    text: "Improve the path from code changes to production with reliable CI/CD workflows.",
  },
  {
    number: "03",
    title: "Architecture",
    icon: Layers,
    text: "Evolve infrastructure and application architecture without unnecessary complexity.",
  },
  {
    number: "04",
    title: "Operations",
    icon: Activity,
    text: "Introduce observability, automation, and operational practices that scale with the team.",
  },
];

const signals = [
  "Deployments depend heavily on manual steps",
  "Infrastructure configuration is difficult to reproduce",
  "Development and production environments drift apart",
  "Cloud resources have grown without a clear structure",
  "Engineers spend too much time maintaining infrastructure",
  "Existing systems make future changes increasingly difficult",
];

const principles = [
  "Modernize where it creates real value",
  "Automate repetitive operational work",
  "Keep architecture understandable",
  "Improve systems incrementally where possible",
];

export default function ModernizationPage() {
  return (
    <main className="solution-detail modernization-page">
      <section className="solution-hero">
        <div className="container">
          <div className="solution-meta">
            <span>02</span>
            <span>INFRASTRUCTURE MODERNIZATION</span>
          </div>

          <div className="solution-hero-grid">
            <ScrollReveal>
              <p className="eyebrow">
                MODERNIZATION / AUTOMATION / ARCHITECTURE
              </p>

              <h1>Make your infrastructure easier to change.</h1>

              <p className="solution-hero-copy">
                RunStack helps engineering teams modernize the systems around
                their applications so infrastructure becomes more automated,
                maintainable, and ready for growth.
              </p>

              <Link href="/contact" className="button button-dark">
                Discuss modernization <span>↗</span>
              </Link>
            </ScrollReveal>

            <ScrollReveal className="modernization-visual" delay={2}>
              <div className="modern-layer old-layer">
                <span>BEFORE</span>
                <strong>MANUAL</strong>
                <small>FRAGILE / SLOW / HARD TO CHANGE</small>
              </div>

              <div className="modern-arrow">↓</div>

              <div className="modern-layer new-layer">
                <span>AFTER</span>
                <strong>AUTOMATED</strong>
                <small>REPEATABLE / VISIBLE / MAINTAINABLE</small>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="solution-intro">
        <ScrollReveal className="container solution-intro-grid">
          <div>
            <span className="section-index">THE PROBLEM</span>
          </div>

          <div>
            <h2>
              Infrastructure debt quietly becomes engineering debt.
            </h2>

            <p>
              Systems often become difficult to operate through years of
              incremental changes. Modernization is about identifying the parts
              that create friction and improving them without introducing
              unnecessary complexity.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="signals-section">
        <div className="container">
          <div className="section-heading-row">
            <ScrollReveal>
              <span className="section-index">SIGNS IT&apos;S TIME</span>
              <h2>When infrastructure starts slowing the team down.</h2>
            </ScrollReveal>
          </div>

          <div className="signals-list">
            {signals.map((signal, index) => (
              <ScrollReveal
                className="signal-row"
                key={signal}
                delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
              >
                <span className="item-icon item-icon-sm">
                  <AlertTriangle />
                </span>
                <p>{signal}</p>
                <span>→</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="modernization-areas">
        <div className="container">
          <ScrollReveal className="solution-process-header">
            <div>
              <span className="section-index">WHAT WE MODERNIZE</span>
              <h2>Improve the systems around the product.</h2>
            </div>

            <p>
              Modernization can happen across infrastructure, delivery,
              architecture, and operations. The right scope depends on where
              the biggest engineering friction exists.
            </p>
          </ScrollReveal>

          <div className="solution-stage-grid">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <ScrollReveal
                  as="article"
                  key={area.number}
                  delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                >
                  <div className="item-icon">
                    <Icon />
                  </div>
                  <span>{area.number}</span>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="principles-section">
        <ScrollReveal className="container principles-grid">
          <div>
            <span className="section-index">MODERNIZATION PRINCIPLES</span>
            <h2>Better does not always mean more complicated.</h2>
          </div>

          <div className="principles-list">
            {principles.map((principle) => (
              <div key={principle}>
                <span className="outcome-check">
                  <CheckCircle2 />
                </span>
                <p>{principle}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="solution-cta">
        <div className="container">
          <ScrollReveal>
            <span className="section-index">02 / MODERNIZATION</span>

            <h2>
              Make infrastructure a strength, not a constraint.
            </h2>

            <Link href="/contact" className="button button-light">
              Talk to an engineer <span>↗</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
