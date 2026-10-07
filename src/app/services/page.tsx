import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Infrastructure engineering for modern software teams — cloud infrastructure, DevOps, platform engineering, observability, and cloud security.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | RunStack",
    description:
      "Infrastructure engineering for modern software teams — cloud infrastructure, DevOps, platform engineering, observability, and cloud security.",
    url: "/services",
  },
};

const services = [
  {
    number: "01",
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    description:
      "Design and build cloud environments that are secure, scalable, and practical to operate.",
    capabilities: [
      "Cloud architecture",
      "AWS infrastructure",
      "Infrastructure as Code",
      "Cloud migration",
      "Environment design",
    ],
  },
  {
    number: "02",
    slug: "devops",
    title: "DevOps & CI/CD",
    description:
      "Turn manual deployment processes into reliable engineering workflows that teams can repeat with confidence.",
    capabilities: [
      "CI/CD pipelines",
      "Deployment automation",
      "Release workflows",
      "Containerization",
      "Developer workflows",
    ],
  },
  {
    number: "03",
    slug: "platform-engineering",
    title: "Platform Engineering",
    description:
      "Build internal platforms and reusable infrastructure that make it easier for developers to ship software.",
    capabilities: [
      "Developer platforms",
      "Kubernetes",
      "Reusable infrastructure",
      "Environment automation",
      "Service templates",
    ],
  },
  {
    number: "04",
    slug: "observability",
    title: "Observability & SRE",
    description:
      "Give engineering teams the visibility and operational foundations needed to understand production systems.",
    capabilities: [
      "Monitoring",
      "Logging",
      "Tracing",
      "Alerting",
      "Reliability practices",
    ],
  },
  {
    number: "05",
    slug: "cloud-security",
    title: "Cloud Security",
    description:
      "Build security into infrastructure and deployment workflows without slowing engineering teams down.",
    capabilities: [
      "Cloud security",
      "Access control",
      "Secrets management",
      "Secure CI/CD",
      "Infrastructure hardening",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">WHAT WE DO</p>

          <ScrollReveal className="page-hero-grid">
            <h1>Infrastructure engineering for modern software teams.</h1>

            <div className="page-hero-copy">
              <p>
                RunStack helps teams design, automate, secure, and operate the
                infrastructure behind their products.
              </p>

              <span className="mono-label">
                CLOUD / DEVOPS / PLATFORM / SRE
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="services-page-list">
        <div className="container">
          {services.map((service, index) => (
            <ScrollReveal
              as="article"
              className="service-page-row"
              key={service.number}
              delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <div className="service-page-number">{service.number}</div>

              <div className="service-page-main">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>

              <div className="service-page-capabilities">
                {service.capabilities.map((capability) => (
                  <span key={capability}>{capability}</span>
                ))}
              </div>

              <Link href={`/services/${service.slug}`} className="text-link">
                Explore service <span>↗</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="services-page-approach">
        <div className="container">
          <ScrollReveal className="approach-panel">
            <div>
              <p className="eyebrow">HOW WE WORK</p>
              <h2>
                Your product stays yours.
                <br />
                We strengthen the systems behind it.
              </h2>
            </div>

            <div className="approach-copy">
              <p>
                RunStack works alongside product and engineering teams rather
                than creating another isolated technical layer.
              </p>

              <Link href="/contact" className="button button-dark">
                Talk to an engineer <span>↗</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
