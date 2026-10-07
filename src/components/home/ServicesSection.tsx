import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    number: "01",
    title: "Cloud Infrastructure",
    description:
      "Design and build secure, scalable infrastructure across modern cloud environments.",
    tags: ["AWS", "GCP", "Azure"],
  },
  {
    number: "02",
    title: "DevOps & CI/CD",
    description:
      "Turn deployment into a predictable engineering process with automated delivery pipelines.",
    tags: ["CI/CD", "Automation", "IaC"],
  },
  {
    number: "03",
    title: "Platform Engineering",
    description:
      "Create internal platforms and developer workflows that make infrastructure easier to use.",
    tags: ["Kubernetes", "Docker", "Terraform"],
  },
  {
    number: "04",
    title: "Observability & SRE",
    description:
      "Understand what your systems are doing before your customers tell you something is wrong.",
    tags: ["Metrics", "Logs", "Tracing"],
  },
  {
    number: "05",
    title: "Cloud Security",
    description:
      "Build security into infrastructure, access controls, deployments, and operational workflows.",
    tags: ["IAM", "DevSecOps", "Compliance"],
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="section-shell">
        <ScrollReveal className="services-header">
          <div>
            <div className="section-eyebrow light">
              <span>03</span>
              WHAT WE DO
            </div>

            <h2>
              Engineering the
              <br />
              <em>layer underneath.</em>
            </h2>
          </div>

          <p>
            RunStack works alongside product teams to design, automate, and
            operate the infrastructure their software depends on.
          </p>
        </ScrollReveal>

        <div className="services-list">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.number}
              delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <Link href="/services" className="service-row">
                <span className="service-number">{service.number}</span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <span className="service-arrow">↗</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
