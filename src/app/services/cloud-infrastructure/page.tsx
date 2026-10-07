import Link from "next/link";
import {
  Cloud,
  Server,
  FileCode2,
  Waypoints,
  Database,
  ArrowRightLeft,
} from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Cloud Infrastructure",
  description:
    "Cloud infrastructure built for the way your product runs — architecture, Infrastructure as Code, networking, compute, storage, and migration.",
  alternates: { canonical: "/services/cloud-infrastructure" },
  openGraph: {
    title: "Cloud Infrastructure | RunStack",
    description:
      "Cloud infrastructure built for the way your product runs — architecture, Infrastructure as Code, networking, compute, storage, and migration.",
    url: "/services/cloud-infrastructure",
  },
};

const capabilities = [
  { label: "Cloud architecture", icon: Cloud },
  { label: "AWS infrastructure", icon: Server },
  { label: "Infrastructure as Code", icon: FileCode2 },
  { label: "Networking & environments", icon: Waypoints },
  { label: "Compute & storage", icon: Database },
  { label: "Cloud migration", icon: ArrowRightLeft },
];

const steps = [
  {
    number: "01",
    title: "Assess",
    text: "Understand the existing application, infrastructure, constraints, and operational requirements.",
  },
  {
    number: "02",
    title: "Architect",
    text: "Design a cloud environment around reliability, security, scalability, and practical operation.",
  },
  {
    number: "03",
    title: "Build",
    text: "Implement infrastructure using repeatable and version-controlled patterns.",
  },
  {
    number: "04",
    title: "Operate",
    text: "Establish the monitoring, documentation, and operational practices needed to run it.",
  },
];

export default function CloudInfrastructurePage() {
  return (
    <main>
      <section className="service-detail-hero">
        <div className="container">
          <div className="service-detail-meta">
            <span>01</span>
            <span>CLOUD INFRASTRUCTURE</span>
          </div>

          <ScrollReveal className="service-detail-hero-grid">
            <h1>
              Cloud infrastructure built for the way your product runs.
            </h1>

            <div>
              <p>
                Design and build cloud environments that give your applications
                a reliable foundation without creating unnecessary operational
                complexity.
              </p>

              <Link href="/contact" className="button button-dark">
                Talk to an engineer <span>↗</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="service-detail-intro">
        <div className="container">
          <ScrollReveal className="service-detail-intro-grid">
            <p className="eyebrow">THE FOUNDATION</p>

            <div>
              <h2>
                Infrastructure should support growth,
                not become the thing holding it back.
              </h2>

              <p>
                As applications grow, infrastructure decisions become
                increasingly important. Architecture, networking, environments,
                security, and deployment all need to work together.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="service-capabilities">
        <div className="container">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">CAPABILITIES</p>
            <h2>What we can build.</h2>
          </ScrollReveal>

          <div className="capability-grid">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <ScrollReveal
                  className="capability-item"
                  key={capability.label}
                  delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                >
                  <div>
                    <div className="item-icon">
                      <Icon />
                    </div>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{capability.label}</h3>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="service-process">
        <div className="container">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">OUR APPROACH</p>
            <h2>From architecture to operation.</h2>
          </ScrollReveal>

          <div className="service-process-list">
            {steps.map((step, index) => (
              <ScrollReveal
                className="service-process-row"
                key={step.number}
                delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
              >
                <span>{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="service-stack">
        <div className="container">
          <ScrollReveal className="service-stack-panel">
            <div>
              <p className="eyebrow">INFRASTRUCTURE STACK</p>
              <h2>Built around the technologies your team needs.</h2>
            </div>

            <div className="stack-list">
              <span>AWS</span>
              <span>Terraform</span>
              <span>Docker</span>
              <span>Kubernetes</span>
              <span>PostgreSQL</span>
              <span>Linux</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="dark-cta">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">CLOUD INFRASTRUCTURE</p>

            <h2>
              Need a stronger foundation
              <br />
              for your product?
            </h2>

            <Link href="/contact" className="button button-light">
              Start a conversation <span>↗</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
