import Link from "next/link";
import {
  KeyRound,
  Network,
  Server,
  GitBranch,
  Activity,
  Lock,
  ShieldCheck,
  ShieldAlert,
  Eye,
} from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Cloud Security",
  description:
    "Security built into the infrastructure — identity, network, workload, and delivery security engineered in from the start, not bolted on after.",
  alternates: { canonical: "/services/cloud-security" },
  openGraph: {
    title: "Cloud Security | RunStack",
    description:
      "Security built into the infrastructure — identity, network, workload, and delivery security engineered in from the start, not bolted on after.",
    url: "/services/cloud-security",
  },
};

const securityLayers = [
  {
    number: "01",
    title: "Identity",
    icon: KeyRound,
    description:
      "Control who and what can access your infrastructure through clear identity and access policies.",
  },
  {
    number: "02",
    title: "Network",
    icon: Network,
    description:
      "Design network boundaries and communication paths that reduce unnecessary exposure.",
  },
  {
    number: "03",
    title: "Workload",
    icon: Server,
    description:
      "Harden compute, containers, Kubernetes workloads, and supporting infrastructure.",
  },
  {
    number: "04",
    title: "Delivery",
    icon: GitBranch,
    description:
      "Build security checks into CI/CD workflows instead of treating security as a final step.",
  },
  {
    number: "05",
    title: "Monitoring",
    icon: Activity,
    description:
      "Maintain visibility into infrastructure activity and potential security events.",
  },
];

const capabilities = [
  { label: "Identity & access management", icon: KeyRound },
  { label: "Secrets management", icon: Lock },
  { label: "Network security", icon: ShieldCheck },
  { label: "Infrastructure hardening", icon: ShieldAlert },
  { label: "Secure CI/CD pipelines", icon: GitBranch },
  { label: "Security visibility", icon: Eye },
];

const principles = [
  {
    number: "01",
    title: "Least privilege",
    text: "Give users, services, and workloads only the access they actually need.",
  },
  {
    number: "02",
    title: "Repeatable controls",
    text: "Use automation and infrastructure as code to make security practices consistent.",
  },
  {
    number: "03",
    title: "Visibility",
    text: "Make important infrastructure activity observable and easier to investigate.",
  },
  {
    number: "04",
    title: "Recoverability",
    text: "Design systems so teams can respond to incidents and recover safely.",
  },
];

const stack = [
  "AWS IAM",
  "AWS VPC",
  "Terraform",
  "Kubernetes",
  "Docker",
  "GitHub Actions",
];

export default function CloudSecurityPage() {
  return (
    <main className="service-detail security-page">
      <section className="service-hero">
        <div className="container">
          <div className="service-meta">
            <span>05</span>
            <span>CLOUD SECURITY</span>
          </div>

          <div className="service-hero-grid">
            <ScrollReveal>
              <p className="eyebrow">IDENTITY / NETWORK / WORKLOAD / DELIVERY</p>

              <h1>Security built into the infrastructure.</h1>

              <p className="service-hero-copy">
                RunStack helps teams build secure cloud infrastructure with
                practical controls across identity, networks, workloads,
                delivery pipelines, and operational visibility.
              </p>

              <Link href="/contact" className="button button-dark">
                Talk to an engineer <span>↗</span>
              </Link>
            </ScrollReveal>

            <ScrollReveal className="security-visual" delay={2}>
              <div className="security-core">
                <span className="security-core-label">RUNSTACK</span>
                <strong>SECURE<br />FOUNDATION</strong>
              </div>

              <div className="security-ring security-ring-one">
                <span>IDENTITY</span>
              </div>

              <div className="security-ring security-ring-two">
                <span>NETWORK</span>
              </div>

              <div className="security-ring security-ring-three">
                <span>WORKLOAD</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="service-intro">
        <ScrollReveal className="container service-intro-grid">
          <div>
            <span className="section-index">WHY CLOUD SECURITY</span>
          </div>

          <div>
            <h2>
              Security should be part of the architecture, not an afterthought.
            </h2>

            <p>
              Cloud environments move quickly. Security practices need to move
              with them. We help teams establish practical controls that fit
              their infrastructure and development workflows without creating
              unnecessary friction.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="security-layers-section">
        <div className="container">
          <div className="section-heading-row">
            <ScrollReveal>
              <span className="section-index">SECURITY LAYERS</span>
              <h2>Protect the path from identity to production.</h2>
            </ScrollReveal>
          </div>

          <div className="security-layer-list">
            {securityLayers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <ScrollReveal
                  as="article"
                  className="security-layer"
                  key={layer.number}
                  delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                >
                  <span className="item-icon item-icon-sm">
                    <Icon />
                  </span>

                  <div>
                    <h3>{layer.title}</h3>
                    <p>{layer.description}</p>
                  </div>

                  <span className="security-arrow">↗</span>
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
            <h2>Practical security controls for cloud environments.</h2>
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

      <section className="security-principles">
        <div className="container">
          <ScrollReveal className="reliability-header">
            <div>
              <span className="section-index">SECURITY PRINCIPLES</span>
              <h2>Controls that engineers can actually operate.</h2>
            </div>

            <p>
              Good security is not measured by how many controls exist. It is
              measured by whether those controls are understandable,
              repeatable, and effective.
            </p>
          </ScrollReveal>

          <div className="reliability-grid">
            {principles.map((principle, index) => (
              <ScrollReveal
                as="article"
                key={principle.number}
                delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
              >
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="security-lifecycle">
        <div className="container">
          <ScrollReveal className="lifecycle-header">
            <span className="section-index">SECURITY LIFECYCLE</span>
            <h2>Design it. Build it. Verify it. Watch it.</h2>
          </ScrollReveal>

          <ScrollReveal className="lifecycle-track" delay={2}>
            <div>
              <span>01</span>
              <strong>DESIGN</strong>
            </div>

            <i />

            <div>
              <span>02</span>
              <strong>BUILD</strong>
            </div>

            <i />

            <div>
              <span>03</span>
              <strong>VERIFY</strong>
            </div>

            <i />

            <div>
              <span>04</span>
              <strong>MONITOR</strong>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="stack-section">
        <ScrollReveal className="container stack-section-inner">
          <div>
            <span className="section-index">SECURITY STACK</span>
            <h2>Security across the infrastructure stack.</h2>
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
            <span className="section-index">05 / CLOUD SECURITY</span>

            <h2>
              Build infrastructure that is secure by design.
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
