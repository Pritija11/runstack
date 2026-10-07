import Link from "next/link";
import {
  DollarSign,
  Gauge,
  ShieldCheck,
  Zap,
  Search,
  TrendingUp,
  Activity,
  CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Infrastructure Optimization",
  description:
    "Get more from the infrastructure you already have. Cost, performance, and reliability optimization for cloud environments that have outgrown their early decisions.",
  alternates: { canonical: "/solutions/infrastructure-optimization" },
  openGraph: {
    title: "Infrastructure Optimization | RunStack",
    description:
      "Get more from the infrastructure you already have. Cost, performance, and reliability optimization for cloud environments that have outgrown their early decisions.",
    url: "/solutions/infrastructure-optimization",
  },
};

const optimizationAreas = [
  {
    number: "01",
    title: "Cost",
    icon: DollarSign,
    text: "Understand where infrastructure spending comes from and identify opportunities to reduce unnecessary usage.",
  },
  {
    number: "02",
    title: "Performance",
    icon: Gauge,
    text: "Improve infrastructure choices and configurations that affect application performance.",
  },
  {
    number: "03",
    title: "Reliability",
    icon: ShieldCheck,
    text: "Reduce operational risk by identifying fragile dependencies and improving system resilience.",
  },
  {
    number: "04",
    title: "Efficiency",
    icon: Zap,
    text: "Automate repetitive infrastructure work so engineering effort can stay focused on product development.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Measure",
    icon: Gauge,
    text: "Establish visibility into infrastructure usage, performance, and operational behavior.",
  },
  {
    number: "02",
    title: "Identify",
    icon: Search,
    text: "Find the infrastructure areas creating the highest cost, risk, or engineering overhead.",
  },
  {
    number: "03",
    title: "Improve",
    icon: TrendingUp,
    text: "Apply targeted architecture, configuration, and automation improvements.",
  },
  {
    number: "04",
    title: "Monitor",
    icon: Activity,
    text: "Track the system after changes and continuously refine where needed.",
  },
];

const outcomes = [
  "Clearer infrastructure usage",
  "More predictable cloud spending",
  "Better resource utilization",
  "Improved system reliability",
  "Less repetitive operational work",
  "Infrastructure decisions backed by data",
];

export default function InfrastructureOptimizationPage() {
  return (
    <main className="solution-detail optimization-page">
      <section className="solution-hero">
        <div className="container">
          <div className="solution-meta">
            <span>03</span>
            <span>INFRASTRUCTURE OPTIMIZATION</span>
          </div>

          <div className="solution-hero-grid">
            <ScrollReveal>
              <p className="eyebrow">
                COST / PERFORMANCE / RELIABILITY / EFFICIENCY
              </p>

              <h1>Get more from the infrastructure you already have.</h1>

              <p className="solution-hero-copy">
                RunStack helps teams understand and improve infrastructure
                costs, performance, reliability, and operational efficiency
                without optimizing blindly.
              </p>

              <Link href="/contact" className="button button-dark">
                Discuss optimization <span>↗</span>
              </Link>
            </ScrollReveal>

            <ScrollReveal className="optimization-visual" delay={2}>
              <div className="optimization-meter">
                <span>INFRASTRUCTURE HEALTH</span>

                <div className="meter-track">
                  <div className="meter-fill" />
                </div>

                <div className="meter-labels">
                  <span>COST</span>
                  <span>PERFORMANCE</span>
                  <span>RELIABILITY</span>
                </div>
              </div>

              <div className="optimization-stat-grid">
                <div>
                  <span>01</span>
                  <strong>MEASURE</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>IMPROVE</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>MONITOR</strong>
                </div>
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
              Infrastructure grows faster than the decisions behind it.
            </h2>

            <p>
              Cloud environments make it easy to provision resources quickly.
              Over time, unused capacity, inefficient configurations,
              duplicated environments, and operational complexity can quietly
              increase cost and risk.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="optimization-areas">
        <div className="container">
          <div className="section-heading-row">
            <ScrollReveal>
              <span className="section-index">OPTIMIZATION AREAS</span>
              <h2>Optimize what actually matters.</h2>
            </ScrollReveal>
          </div>

          <div className="optimization-grid">
            {optimizationAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <ScrollReveal
                  as="article"
                  key={area.number}
                  delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                >
                  <div className="item-icon item-icon-sm">
                    <Icon />
                  </div>

                  <div>
                    <h3>{area.title}</h3>
                    <p>{area.text}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="optimization-workflow">
        <div className="container">
          <ScrollReveal className="solution-process-header">
            <div>
              <span className="section-index">OPTIMIZATION LOOP</span>
              <h2>Measure first. Change second.</h2>
            </div>

            <p>
              Optimization should be based on evidence rather than arbitrary
              infrastructure changes. We establish a baseline, identify the
              highest-value improvements, and monitor the results.
            </p>
          </ScrollReveal>

          <div className="workflow-track">
            {workflow.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal
                  className="workflow-step"
                  key={step.number}
                  delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                >
                  <div className="item-icon">
                    <Icon />
                  </div>
                  <div className="workflow-number">{step.number}</div>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>

                  {index < workflow.length - 1 && (
                    <span className="workflow-arrow">→</span>
                  )}
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
            <h2>
              Infrastructure that works harder without becoming harder to
              operate.
            </h2>
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
            <span className="section-index">
              03 / INFRASTRUCTURE OPTIMIZATION
            </span>

            <h2>
              Not sure where your infrastructure is wasting effort or money?
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
