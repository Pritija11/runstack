import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Engineering work focused on the systems behind the product — cloud migrations, deployment pipelines, and infrastructure built with RunStack.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work | RunStack",
    description:
      "Engineering work focused on the systems behind the product — cloud migrations, deployment pipelines, and infrastructure built with RunStack.",
    url: "/work",
  },
};

const work = [
  {
    type: "ILLUSTRATIVE ENGAGEMENT",
    title: "From manual releases to repeatable deployment",
    category: "DevOps & CI/CD",
    description:
      "A deployment workflow redesigned around automation, consistency, and safer releases.",
    tags: ["CI/CD", "Docker", "Automation"],
  },
  {
    type: "ILLUSTRATIVE ENGAGEMENT",
    title: "A platform developers can actually use",
    category: "Platform Engineering",
    description:
      "Reusable infrastructure patterns that reduce the amount of operational work developers need to handle themselves.",
    tags: ["Kubernetes", "IaC", "Developer Platform"],
  },
  {
    type: "ILLUSTRATIVE ENGAGEMENT",
    title: "Turning production data into engineering signals",
    category: "Observability",
    description:
      "A monitoring and observability foundation designed to make system behaviour easier to understand.",
    tags: ["Monitoring", "Logging", "Tracing"],
  },
];

export default function WorkPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">WORK</p>

          <ScrollReveal className="page-hero-grid">
            <h1>
              Engineering work focused on the systems behind the product.
            </h1>

            <div className="page-hero-copy">
              <p>
                Explore the kinds of infrastructure problems RunStack is
                designed to help teams solve.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="work-page-list">
        <div className="container">
          {work.map((item, index) => (
            <ScrollReveal
              as="article"
              className="work-page-card"
              key={item.title}
              delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <div className="work-page-index">
                0{index + 1}
              </div>

              <div className="work-page-content">
                <span className="work-type">{item.type}</span>

                <h2>{item.title}</h2>

                <p className="work-category">{item.category}</p>

                <p className="work-description">{item.description}</p>

                <div className="work-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="work-page-visual">
                <span>RUNSTACK</span>
                <div className="work-visual-line" />
                <small>SYSTEM / {String(index + 1).padStart(2, "0")}</small>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="dark-cta">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">HAVE A DIFFERENT PROBLEM?</p>

            <h2>
              Infrastructure rarely fits
              <br />
              into a template.
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
