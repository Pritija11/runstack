import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Start with the infrastructure problem, build toward the right system. Cloud migration, modernization, and infrastructure optimization.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions | RunStack",
    description:
      "Start with the infrastructure problem, build toward the right system. Cloud migration, modernization, and infrastructure optimization.",
    url: "/solutions",
  },
};

const solutions = [
  {
    number: "01",
    title: "Cloud Migration",
    problem:
      "Your infrastructure has outgrown its current environment or needs a safer path to the cloud.",
    approach:
      "Assess the existing architecture, design the target environment, and move workloads through a controlled migration process.",
    outcome:
      "A cloud environment designed around reliability, security, and future growth.",
  },
  {
    number: "02",
    title: "Infrastructure Modernization",
    problem:
      "Deployments are manual, environments are inconsistent, and infrastructure has become difficult to maintain.",
    approach:
      "Introduce automation, Infrastructure as Code, containers, and repeatable deployment workflows.",
    outcome:
      "A more predictable infrastructure foundation that engineering teams can operate confidently.",
  },
  {
    number: "03",
    title: "Infrastructure Optimization",
    problem:
      "Cloud costs, operational complexity, or reliability issues are slowing the team down.",
    approach:
      "Examine infrastructure, deployment workflows, observability, and operational practices to identify high-value improvements.",
    outcome:
      "Simpler systems, clearer operational visibility, and infrastructure aligned with the product.",
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">SOLUTIONS</p>

          <ScrollReveal className="page-hero-grid">
            <h1>
              Start with the infrastructure problem.
              <br />
              Build toward the right system.
            </h1>

            <div className="page-hero-copy">
              <p>
                Infrastructure work should solve an actual engineering
                constraint—not introduce technology for its own sake.
              </p>

              <span className="mono-label">
                PROBLEM → APPROACH → OUTCOME
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="solutions-list">
        <div className="container">
          {solutions.map((solution, index) => (
            <ScrollReveal
              as="article"
              className="solution-row"
              key={solution.number}
              delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <div className="solution-number">{solution.number}</div>

              <div className="solution-content">
                <h2>{solution.title}</h2>

                <div className="solution-grid">
                  <div>
                    <span className="solution-label">THE PROBLEM</span>
                    <p>{solution.problem}</p>
                  </div>

                  <div>
                    <span className="solution-label">THE APPROACH</span>
                    <p>{solution.approach}</p>
                  </div>

                  <div>
                    <span className="solution-label">THE OUTCOME</span>
                    <p>{solution.outcome}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="dark-cta">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">NOT SURE WHERE TO START?</p>

            <h2>
              Bring us the infrastructure problem.
              <br />
              We&apos;ll work out the path forward.
            </h2>

            <Link href="/contact" className="button button-light">
              Start a conversation <span>↗</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
