import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "CI/CD is more than an automated deployment",
  description:
    "Why a good delivery pipeline should improve reliability, feedback, and developer experience — not simply run commands automatically.",
  alternates: { canonical: "/insights/ci-cd-is-more-than-deployment" },
  openGraph: {
    title: "CI/CD is more than an automated deployment | RunStack",
    description:
      "Why a good delivery pipeline should improve reliability, feedback, and developer experience — not simply run commands automatically.",
    url: "/insights/ci-cd-is-more-than-deployment",
    type: "article",
    publishedTime: "2026-10-05",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CI/CD is more than an automated deployment",
  description:
    "Why a good delivery pipeline should improve reliability, feedback, and developer experience — not simply run commands automatically.",
  datePublished: "2026-10-05",
  author: { "@type": "Organization", name: "RunStack" },
  publisher: { "@type": "Organization", name: "RunStack" },
  mainEntityOfPage: "https://runstack.solutions/insights/ci-cd-is-more-than-deployment",
};

export default function ArticlePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">DEVOPS</p>

          <ScrollReveal className="page-hero-grid">
            <h1>CI/CD is more than an automated deployment</h1>

            <div className="page-hero-copy">
              <p>
                Why a good delivery pipeline should improve reliability,
                feedback, and developer experience — not simply run commands
                automatically.
              </p>

              <span className="mono-label">05 OCT 2026 · 4 MIN READ</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Link href="/insights" className="back-home article-back">
            ← Back to Insights
          </Link>

          <div className="article-body">
            <p>
              It&apos;s easy to call a pipeline &ldquo;done&rdquo; the
              moment a push to main triggers a deploy. That&apos;s the
              smallest useful definition of CI/CD, and it&apos;s also the
              one most likely to create a false sense of safety.
            </p>

            <h2>Automation is the starting point, not the goal</h2>
            <p>
              A pipeline that runs commands automatically has removed manual
              steps. It hasn&apos;t necessarily made releases safer. The
              real value of CI/CD shows up in what happens before the
              deploy step — the tests that actually catch regressions, the
              checks that run on every change instead of only when someone
              remembers, and the consistency that comes from every build
              going through the same process.
            </p>

            <h2>Feedback speed matters as much as feedback existing</h2>
            <p>
              A test suite that takes forty minutes to report a failure
              teaches engineers to stop waiting for it. A pipeline that
              surfaces a broken build in under five minutes gets treated as
              a real signal, because it arrives while the change is still
              fresh in the author&apos;s head. The gap between those two
              experiences is usually the difference between a pipeline
              people trust and one people route around.
            </p>

            <h2>Rollback is part of the pipeline, not a separate plan</h2>
            <p>
              Deployment automation that only knows how to go forward isn&apos;t
              finished. A delivery system should make reverting a bad
              release as routine as shipping a good one — no manual
              intervention, no tribal knowledge about which script to run at
              2am. If rolling back requires a senior engineer and a Slack
              thread, the pipeline hasn&apos;t actually reduced operational
              risk, it&apos;s just moved it further downstream.
            </p>

            <h2>The developer experience is the real output</h2>
            <p>
              A good delivery system is judged by whether engineers trust
              it enough to ship small, frequent changes instead of batching
              up risk into large, infrequent releases. That trust is built
              from consistent, fast, honest feedback — not from the mere
              existence of automation. Measure a pipeline by how
              confidently your team ships on a Friday afternoon, not by how
              many steps it has removed from a runbook.
            </p>
          </div>
        </div>
      </section>

      <section className="dark-cta">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">SHIPPING MANUALLY STILL?</p>

            <h2>
              Let&apos;s build a pipeline
              <br />
              your team actually trusts.
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
