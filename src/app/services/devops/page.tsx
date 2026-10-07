import Link from "next/link";
import {
  GitBranch,
  Rocket,
  Package,
  Workflow,
  Settings2,
  Terminal,
  Zap,
  Repeat,
  Eye,
  RotateCcw,
} from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "DevOps & CI/CD",
  description:
    "Ship software without making every release an event. DevOps and CI/CD engineering for fast, reliable, low-drama delivery pipelines.",
  alternates: { canonical: "/services/devops" },
  openGraph: {
    title: "DevOps & CI/CD | RunStack",
    description:
      "Ship software without making every release an event. DevOps and CI/CD engineering for fast, reliable, low-drama delivery pipelines.",
    url: "/services/devops",
  },
};

const capabilities = [
  { label: "CI/CD pipelines", icon: GitBranch },
  { label: "Deployment automation", icon: Rocket },
  { label: "Docker & containers", icon: Package },
  { label: "Release workflows", icon: Workflow },
  { label: "Environment management", icon: Settings2 },
  { label: "Developer workflows", icon: Terminal },
];

export default function DevOpsPage() {
  return (
    <main>
      <section className="service-detail-hero service-devops-hero">
        <div className="container">
          <div className="service-detail-meta">
            <span>02</span>
            <span>DEVOPS & CI/CD</span>
          </div>

          <ScrollReveal className="service-detail-hero-grid">
            <h1>Ship software without making every release an event.</h1>

            <div>
              <p>
                Build delivery workflows that make releases more predictable,
                repeatable, and easier for engineering teams to operate.
              </p>

              <Link href="/contact" className="button button-dark">
                Talk to an engineer <span>↗</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="devops-pipeline">
        <div className="container">
          <p className="eyebrow">DELIVERY PIPELINE</p>

          <ScrollReveal className="pipeline" delay={1}>
            <div>CODE</div>
            <span>→</span>
            <div>BUILD</div>
            <span>→</span>
            <div>TEST</div>
            <span>→</span>
            <div>DEPLOY</div>
            <span>→</span>
            <div>PRODUCTION</div>
          </ScrollReveal>
        </div>
      </section>

      <section className="service-detail-intro">
        <div className="container">
          <ScrollReveal className="service-detail-intro-grid">
            <p className="eyebrow">WHY DEVOPS</p>

            <div>
              <h2>
                The path from a commit to production should be engineered.
              </h2>

              <p>
                Manual deployment steps and inconsistent environments create
                unnecessary risk. A good delivery system gives developers a
                repeatable path from code to production.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="service-capabilities">
        <div className="container">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">CAPABILITIES</p>
            <h2>Delivery systems that scale with the team.</h2>
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

      <section className="devops-principles">
        <div className="container">
          <ScrollReveal className="devops-principles-grid">
            <div>
              <p className="eyebrow">A GOOD PIPELINE</p>
              <h2>
                Fast enough for developers.
                <br />
                Safe enough for production.
              </h2>
            </div>

            <div className="principle-points">
              <p>
                <span className="item-icon item-icon-sm item-icon-dark">
                  <Zap />
                </span>
                Automated
              </p>
              <p>
                <span className="item-icon item-icon-sm item-icon-dark">
                  <Repeat />
                </span>
                Repeatable
              </p>
              <p>
                <span className="item-icon item-icon-sm item-icon-dark">
                  <Eye />
                </span>
                Observable
              </p>
              <p>
                <span className="item-icon item-icon-sm item-icon-dark">
                  <RotateCcw />
                </span>
                Recoverable
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="dark-cta">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">DEVOPS & CI/CD</p>

            <h2>
              Make shipping software
              <br />
              less complicated.
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
