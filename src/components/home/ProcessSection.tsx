import { Search, Compass, Hammer, Activity } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    icon: Search,
    description:
      "We understand your application, infrastructure, team, constraints, and the problem worth solving.",
  },
  {
    number: "02",
    title: "Design",
    icon: Compass,
    description:
      "We define an infrastructure approach around reliability, security, scalability, and operational simplicity.",
  },
  {
    number: "03",
    title: "Build",
    icon: Hammer,
    description:
      "Infrastructure becomes reproducible code, automated pipelines, controlled environments, and documented systems.",
  },
  {
    number: "04",
    title: "Operate",
    icon: Activity,
    description:
      "We establish observability and operational practices so your team can confidently run what has been built.",
  },
];

export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="section-shell">
        <ScrollReveal className="process-heading">
          <div className="section-eyebrow">
            <span>04</span>
            HOW WE WORK
          </div>

          <h2>
            Less firefighting.
            <br />
            <em>More engineering.</em>
          </h2>
        </ScrollReveal>

        <div className="process-track">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollReveal
                as="article"
                className="process-step"
                key={step.number}
                delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
              >
                <div className="item-icon">
                  <Icon />
                </div>

                <div className="process-top">
                  <span className="process-number">{step.number}</span>

                  {index < steps.length - 1 && (
                    <span className="process-line" />
                  )}
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="process-bottom">
          <span>DISCOVER</span>
          <span>→</span>
          <span>DESIGN</span>
          <span>→</span>
          <span>BUILD</span>
          <span>→</span>
          <span>OPERATE</span>
        </div>
      </div>
    </section>
  );
}
