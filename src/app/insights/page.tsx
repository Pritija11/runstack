import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical perspectives on cloud infrastructure, DevOps, platform engineering, reliability, and security from the RunStack engineering desk.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights | RunStack",
    description:
      "Practical perspectives on cloud infrastructure, DevOps, platform engineering, reliability, and security from the RunStack engineering desk.",
    url: "/insights",
  },
};

const articles = [
  {
    slug: "what-changes-when-you-move-to-the-cloud",
    category: "CLOUD",
    date: "12 OCT 2026",
    title: "What actually changes when a startup moves to the cloud?",
    excerpt:
      "A practical look at the infrastructure decisions teams face as their applications and engineering teams grow.",
  },
  {
    slug: "ci-cd-is-more-than-deployment",
    category: "DEVOPS",
    date: "05 OCT 2026",
    title: "CI/CD is more than an automated deployment",
    excerpt:
      "Why a good delivery pipeline should improve reliability, feedback, and developer experience—not simply run commands automatically.",
  },
  {
    slug: "when-infrastructure-becomes-a-platform",
    category: "INFRASTRUCTURE",
    date: "28 SEP 2026",
    title: "When does infrastructure become a platform?",
    excerpt:
      "Understanding the point where reusable infrastructure starts becoming an internal platform for engineering teams.",
  },
];

export default function InsightsPage() {
  return (
    <main>
      <section className="page-hero insights-hero">
        <div className="container">
          <p className="eyebrow">INSIGHTS</p>

          <ScrollReveal className="page-hero-grid">
            <h1>
              Thinking about the systems behind modern software.
            </h1>

            <div className="page-hero-copy">
              <p>
                Practical perspectives on cloud infrastructure, DevOps,
                platform engineering, reliability, and security.
              </p>

              <span className="mono-label">
                ENGINEERING / INFRASTRUCTURE / OPERATIONS
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="insights-page-list">
        <div className="container">
          <ScrollReveal className="insights-page-intro">
            <p className="eyebrow">FROM THE ENGINEERING DESK</p>
            <p>
              RunStack&apos;s technical writing will focus on practical
              infrastructure problems and the engineering decisions behind
              them.
            </p>
          </ScrollReveal>

          <div className="insights-grid">
            {articles.map((article, index) => (
              <ScrollReveal
                as="article"
                className="insight-page-card"
                key={article.title}
                delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
              >
                <div className="insight-card-top">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </div>

                <div className="insight-card-number">
                  0{index + 1}
                </div>

                <h2>{article.title}</h2>

                <p>{article.excerpt}</p>

                <Link href={`/insights/${article.slug}`} className="text-link">
                  Read article <span>↗</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-cta">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">ENGINEERING CONVERSATION</p>

            <h2>
              Have a problem worth
              <br />
              thinking through?
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
