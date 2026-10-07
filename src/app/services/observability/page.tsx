import Link from "next/link";
import {
  BarChart3,
  FileText,
  Waypoints,
  Activity,
  Gauge,
  GitCommitHorizontal,
  Bell,
  LayoutDashboard,
} from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Observability & SRE",
  description:
    "Know what your production systems are doing. Observability and SRE practices that turn incidents into fast, confident answers.",
  alternates: { canonical: "/services/observability" },
  openGraph: {
    title: "Observability & SRE | RunStack",
    description:
      "Know what your production systems are doing. Observability and SRE practices that turn incidents into fast, confident answers.",
    url: "/services/observability",
  },
};

const pillars = [
  {
    number: "01",
    title: "Metrics",
    icon: BarChart3,
    description:
      "Measure the health and performance of applications, infrastructure, and critical services.",
  },
  {
    number: "02",
    title: "Logs",
    icon: FileText,
    description:
      "Centralize application and infrastructure logs so engineers can investigate problems faster.",
  },
  {
    number: "03",
    title: "Traces",
    icon: Waypoints,
    description:
      "Follow requests across distributed systems and identify where latency or failures originate.",
  },
];

const capabilities = [
  { label: "Infrastructure monitoring", icon: Activity },
  { label: "Application monitoring", icon: Gauge },
  { label: "Centralized logging", icon: FileText },
  { label: "Distributed tracing", icon: GitCommitHorizontal },
  { label: "Alerting & escalation", icon: Bell },
  { label: "Dashboards & service health", icon: LayoutDashboard },
];

const reliabilitySteps = [
  {
    number: "01",
    title: "Detect",
    text: "Identify abnormal behavior before it becomes a larger incident.",
  },
  {
    number: "02",
    title: "Understand",
    text: "Connect metrics, logs, and traces to find the underlying cause.",
  },
  {
    number: "03",
    title: "Respond",
    text: "Give engineers the signals and context they need to act quickly.",
  },
  {
    number: "04",
    title: "Learn",
    text: "Turn incidents into better alerts, systems, and operational practices.",
  },
];

const stack = [
  "Prometheus",
  "Grafana",
  "OpenTelemetry",
  "CloudWatch",
  "Kubernetes",
  "Linux",
];

export default function ObservabilityPage() {
  return (
    <main className="service-detail">
      <section className="service-hero">
        <div className="container">
          <div className="service-meta">
            <span>04</span>
            <span>OBSERVABILITY & SRE</span>
          </div>

          <div className="service-hero-grid">
            <ScrollReveal>
              <p className="eyebrow">OBSERVABILITY / RELIABILITY / OPERATIONS</p>

              <h1>Know what your production systems are doing.</h1>

              <p className="service-hero-copy">
                RunStack builds observability systems that give engineering
                teams visibility across applications, infrastructure, and
                distributed services.
              </p>

              <Link href="/contact" className="button button-dark">
                Talk to an engineer <span>↗</span>
              </Link>
            </ScrollReveal>

            <ScrollReveal className="telemetry-visual" delay={2}>
              <div className="telemetry-node telemetry-source">
                <span>01</span>
                APPLICATION
              </div>

              <div className="telemetry-line" />

              <div className="telemetry-node">
                <span>02</span>
                TELEMETRY
              </div>

              <div className="telemetry-line" />

              <div className="telemetry-node">
                <span>03</span>
                SIGNALS
              </div>

              <div className="telemetry-line" />

              <div className="telemetry-node telemetry-final">
                <span>04</span>
                ENGINEERING ACTION
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="service-intro">
        <ScrollReveal className="container service-intro-grid">
          <div>
            <span className="section-index">WHY OBSERVABILITY</span>
          </div>

          <div>
            <h2>
              Production should tell you what is happening before your users
              do.
            </h2>

            <p>
              As systems grow, failures become harder to understand. A useful
              observability strategy connects the signals coming from your
              systems so engineers can detect issues, understand their impact,
              and respond with confidence.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="service-pillars">
        <div className="container">
          <div className="section-heading-row">
            <ScrollReveal>
              <span className="section-index">THE THREE SIGNALS</span>
              <h2>See the system from different angles.</h2>
            </ScrollReveal>
          </div>

          <div className="service-pillar-grid">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal
                  as="article"
                  className="service-pillar"
                  key={pillar.number}
                  delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                >
                  <div>
                    <div className="item-icon">
                      <Icon />
                    </div>
                    <span>{pillar.number}</span>
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="service-capabilities">
        <div className="container service-capabilities-grid">
          <ScrollReveal>
            <span className="section-index">CAPABILITIES</span>
            <h2>Operational visibility without unnecessary noise.</h2>
          </ScrollReveal>

          <div className="capability-list">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <ScrollReveal
                  className="capability-item"
                  key={capability.label}
                  delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                >
                  <span className="item-icon item-icon-sm">
                    <Icon />
                  </span>
                  <strong>{capability.label}</strong>
                  <span>↗</span>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="reliability-section">
        <div className="container">
          <ScrollReveal className="reliability-header">
            <div>
              <span className="section-index">RELIABILITY LOOP</span>
              <h2>From signal to better systems.</h2>
            </div>

            <p>
              Observability is not just about collecting more data. It is
              about turning production signals into useful engineering
              decisions.
            </p>
          </ScrollReveal>

          <div className="reliability-grid">
            {reliabilitySteps.map((step, index) => (
              <ScrollReveal
                as="article"
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

      <section className="stack-section">
        <ScrollReveal className="container stack-section-inner">
          <div>
            <span className="section-index">OBSERVABILITY STACK</span>
            <h2>Tools that make production visible.</h2>
          </div>

          <div className="stack-tags">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="service-cta">
        <div className="container">
          <ScrollReveal>
            <span className="section-index">04 / OBSERVABILITY & SRE</span>

            <h2>
              When something breaks, your team should know why.
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
