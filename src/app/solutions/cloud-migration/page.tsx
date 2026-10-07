import Link from "next/link";
import {
  Search,
  ClipboardList,
  ArrowRightLeft,
  Activity,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Cloud Migration",
  description:
    "Move to the cloud without moving the chaos with you. A staged, low-risk approach to cloud migration for growing engineering teams.",
  alternates: { canonical: "/solutions/cloud-migration" },
  openGraph: {
    title: "Cloud Migration | RunStack",
    description:
      "Move to the cloud without moving the chaos with you. A staged, low-risk approach to cloud migration for growing engineering teams.",
    url: "/solutions/cloud-migration",
  },
};

const stages = [
  {
    number: "01",
    title: "Assess",
    icon: Search,
    text: "Understand the current infrastructure, workloads, dependencies, constraints, and migration priorities.",
  },
  {
    number: "02",
    title: "Plan",
    icon: ClipboardList,
    text: "Define the target architecture, migration sequence, environments, and operational requirements.",
  },
  {
    number: "03",
    title: "Migrate",
    icon: ArrowRightLeft,
    text: "Move workloads through a controlled process while minimizing disruption to the product.",
  },
  {
    number: "04",
    title: "Operate",
    icon: Activity,
    text: "Establish the automation, monitoring, security, and operational practices needed after migration.",
  },
];

const challenges = [
  "Infrastructure running on aging or fragmented environments",
  "Manual deployment and environment setup",
  "Limited visibility into production systems",
  "Growing infrastructure and operational overhead",
  "Difficulty scaling existing workloads",
  "Unclear path from current infrastructure to cloud",
];

const outcomes = [
  "A clearly defined target architecture",
  "Repeatable infrastructure through automation",
  "More consistent environments",
  "Improved operational visibility",
  "A foundation for future scaling",
];

export default function CloudMigrationPage() {
  return (
    <main className="solution-detail">
      <section className="solution-hero">
        <div className="container">
          <div className="solution-meta">
            <span>01</span>
            <span>CLOUD MIGRATION</span>
          </div>

          <div className="solution-hero-grid">
            <ScrollReveal>
              <p className="eyebrow">
                MIGRATION / ARCHITECTURE / MODERNIZATION
              </p>

              <h1>Move to the cloud without moving the chaos with you.</h1>

              <p className="solution-hero-copy">
                RunStack helps teams plan and execute cloud migrations with a
                focus on architecture, automation, security, and long-term
                operability.
              </p>

              <Link href="/contact" className="button button-dark">
                Discuss your migration <span>↗</span>
              </Link>
            </ScrollReveal>

            <ScrollReveal className="migration-visual" delay={2}>
              <div className="migration-source">
                <span>01</span>
                CURRENT
                <strong>INFRASTRUCTURE</strong>
              </div>

              <div className="migration-arrow">
                <span>ASSESS → PLAN → MIGRATE</span>
                <strong>→</strong>
              </div>

              <div className="migration-target">
                <span>02</span>
                TARGET
                <strong>CLOUD</strong>
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
              Moving infrastructure is easy to underestimate.
            </h2>

            <p>
              A cloud migration is more than moving servers from one place to
              another. Architecture, networking, security, deployment
              workflows, data, observability, and operational ownership all
              need to work together.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="challenge-section">
        <div className="container">
          <div className="section-heading-row">
            <ScrollReveal>
              <span className="section-index">COMMON CHALLENGES</span>
              <h2>Where migrations tend to get complicated.</h2>
            </ScrollReveal>
          </div>

          <div className="challenge-grid">
            {challenges.map((challenge, index) => (
              <ScrollReveal
                className="challenge-item"
                key={challenge}
                delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
              >
                <span className="item-icon item-icon-sm">
                  <AlertTriangle />
                </span>
                <p>{challenge}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-process">
        <div className="container">
          <ScrollReveal className="solution-process-header">
            <div>
              <span className="section-index">OUR APPROACH</span>
              <h2>Migration as an engineering process.</h2>
            </div>

            <p>
              We work from the existing environment toward a target state,
              keeping architecture and operations connected throughout the
              migration.
            </p>
          </ScrollReveal>

          <div className="solution-stage-grid">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <ScrollReveal
                  as="article"
                  key={stage.number}
                  delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                >
                  <div className="item-icon">
                    <Icon />
                  </div>
                  <span>{stage.number}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="outcome-section">
        <ScrollReveal className="container outcome-grid">
          <div>
            <span className="section-index">OUTCOME</span>
            <h2>A cloud environment built for what comes next.</h2>
          </div>

          <div className="outcome-list">
            {outcomes.map((outcome) => (
              <div key={outcome}>
                <span className="outcome-check">
                  <CheckCircle2 />
                </span>
                <p>{outcome}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="solution-cta">
        <div className="container">
          <ScrollReveal>
            <span className="section-index">01 / CLOUD MIGRATION</span>

            <h2>
              Planning a move to the cloud?
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
