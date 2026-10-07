import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const projects = [
  {
    number: "01",
    type: "CLOUD MODERNIZATION",
    title: "From manual releases to a repeatable deployment system.",
    description:
      "A growing product team needed a safer way to ship frequently without adding more operational overhead.",
    result: "Automated delivery",
    stack: "AWS / Terraform / GitHub Actions",
  },
  {
    number: "02",
    type: "PLATFORM ENGINEERING",
    title: "Making infrastructure easier for developers to use.",
    description:
      "We designed a developer platform that reduced the amount of infrastructure knowledge required to ship new services.",
    result: "Self-service workflows",
    stack: "Kubernetes / Docker / Terraform",
  },
  {
    number: "03",
    type: "OBSERVABILITY",
    title: "Turning production data into engineering signals.",
    description:
      "A distributed application needed better visibility into performance, failures, and service dependencies.",
    result: "Unified observability",
    stack: "OpenTelemetry / Prometheus / Grafana",
  },
];

export default function WorkSection() {
  return (
    <section className="work-section">
      <div className="section-shell">
        <ScrollReveal className="work-header">
          <div>
            <div className="section-eyebrow">
              <span>06</span>
              SELECTED WORK
            </div>

            <h2>
              Problems worth
              <br />
              <em>solving.</em>
            </h2>
          </div>

          <Link href="/work" className="text-link">
            View all work <span>↗</span>
          </Link>
        </ScrollReveal>

        <div className="work-list">
          {projects.map((project, index) => (
            <ScrollReveal
              as="article"
              className="work-card"
              key={project.number}
              delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <div className="work-meta">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>

              <div className="work-main">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="work-result">
                <span>OUTCOME</span>
                <strong>{project.result}</strong>
              </div>

              <div className="work-stack">
                <span>STACK</span>
                <strong>{project.stack}</strong>
              </div>

              <span className="work-arrow">↗</span>
            </ScrollReveal>
          ))}
        </div>

        <p className="work-disclaimer">
          Illustrative engagements shown to demonstrate the type of
          infrastructure problems RunStack is built to solve.
        </p>
      </div>
    </section>
  );
}
