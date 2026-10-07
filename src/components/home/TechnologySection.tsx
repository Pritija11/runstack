import ScrollReveal from "@/components/ui/ScrollReveal";

const technologies = [
  "AWS",
  "Google Cloud",
  "Azure",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Ansible",
  "GitHub Actions",
  "GitLab CI",
  "Prometheus",
  "Grafana",
  "OpenTelemetry",
];

export default function TechnologySection() {
  return (
    <section className="technology-section">
      <div className="section-shell">
        <ScrollReveal className="technology-layout">
          <div>
            <div className="section-eyebrow">
              <span>05</span>
              THE STACK
            </div>

            <h2>
              Built around
              <br />
              <em>proven tools.</em>
            </h2>
          </div>

          <div className="technology-copy">
            <p>
              We choose technology based on the problem, not the logo. The
              stack should make systems easier to operate, not create another
              layer of complexity.
            </p>

            <span className="technology-note">
              REPRESENTATIVE TECHNOLOGIES
            </span>
          </div>
        </ScrollReveal>

        <div className="technology-grid">
          {technologies.map((technology, index) => (
            <ScrollReveal
              className="technology-item"
              key={technology}
              delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{technology}</strong>
              <i>↗</i>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
