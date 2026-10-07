import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const articles = [
  {
    category: "CLOUD",
    title: "When does a growing application actually need Kubernetes?",
    date: "08 OCT 2026",
  },
  {
    category: "DEVOPS",
    title: "Five signs your deployment pipeline has become a bottleneck.",
    date: "01 OCT 2026",
  },
  {
    category: "INFRASTRUCTURE",
    title: "What infrastructure as code actually changes for engineering teams.",
    date: "24 SEP 2026",
  },
];

export default function InsightsSection() {
  return (
    <section className="insights-section">
      <div className="section-shell">
        <ScrollReveal className="insights-header">
          <div>
            <div className="section-eyebrow">
              <span>08</span>
              FROM THE STACK
            </div>

            <h2>
              Ideas for teams
              <br />
              <em>building seriously.</em>
            </h2>
          </div>

          <Link href="/insights" className="text-link">
            All insights <span>↗</span>
          </Link>
        </ScrollReveal>

        <div className="insights-list">
          {articles.map((article, index) => (
            <ScrollReveal
              key={article.title}
              delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <Link href="/insights" className="insight-row">
                <span className="insight-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="insight-category">{article.category}</span>

                <h3>{article.title}</h3>

                <time>{article.date}</time>

                <span className="insight-arrow">↗</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
