import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "When does infrastructure become a platform?",
  description:
    "Understanding the point where reusable infrastructure starts becoming an internal platform for engineering teams.",
  alternates: { canonical: "/insights/when-infrastructure-becomes-a-platform" },
  openGraph: {
    title: "When does infrastructure become a platform? | RunStack",
    description:
      "Understanding the point where reusable infrastructure starts becoming an internal platform for engineering teams.",
    url: "/insights/when-infrastructure-becomes-a-platform",
    type: "article",
    publishedTime: "2026-09-28",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "When does infrastructure become a platform?",
  description:
    "Understanding the point where reusable infrastructure starts becoming an internal platform for engineering teams.",
  datePublished: "2026-09-28",
  author: { "@type": "Organization", name: "RunStack" },
  publisher: { "@type": "Organization", name: "RunStack" },
  mainEntityOfPage: "https://runstack.solutions/insights/when-infrastructure-becomes-a-platform",
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
          <p className="eyebrow">INFRASTRUCTURE</p>

          <ScrollReveal className="page-hero-grid">
            <h1>When does infrastructure become a platform?</h1>

            <div className="page-hero-copy">
              <p>
                Understanding the point where reusable infrastructure starts
                becoming an internal platform for engineering teams.
              </p>

              <span className="mono-label">28 SEP 2026 · 5 MIN READ</span>
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
              Every engineering team ends up with a pile of infrastructure
              scripts, Terraform modules, and internal conventions. Not all
              of that is a platform. The difference isn&apos;t about how
              much infrastructure exists — it&apos;s about who it serves
              and how.
            </p>

            <h2>Infrastructure serves systems. A platform serves people</h2>
            <p>
              A Terraform module that provisions a database is
              infrastructure. The same module, published with
              documentation, sane defaults, and a self-service path so any
              engineer can request a database without opening a ticket, is
              the beginning of a platform. The code barely changes. What
              changes is the relationship between the infrastructure and
              the people who depend on it.
            </p>

            <h2>The signal is reduced time-to-first-deploy</h2>
            <p>
              A useful way to tell whether something has crossed into
              platform territory: how long does it take a new engineer to
              ship their first change safely, without needing to ask
              someone who already knows where the bodies are buried? If the
              answer keeps getting shorter as the infrastructure matures,
              it&apos;s behaving like a platform. If every new engineer
              still needs a guided tour, it&apos;s still just infrastructure
              with good intentions.
            </p>

            <h2>Platforms need ownership, not just code</h2>
            <p>
              Reusable modules without a clear owner tend to drift —
              someone adds a one-off exception for their service, nobody
              updates the documentation, and six months later the
              &ldquo;standard&rdquo; path has three undocumented forks.
              Treating infrastructure as a platform means someone is
              accountable for its reliability and its evolution, the same
              way a product has an owner, not just a repository.
            </p>

            <h2>Don&apos;t build the platform before you need it</h2>
            <p>
              The most common mistake isn&apos;t failing to build a
              platform — it&apos;s building one too early, before there are
              enough real, repeated infrastructure requests to justify the
              abstraction. A platform built from guesses about future needs
              usually optimizes for the wrong things. The better path is
              almost always incremental: solve the same infrastructure
              problem a few times by hand, notice the pattern, then turn it
              into something reusable once the shape of the problem is
              actually clear.
            </p>
          </div>
        </div>
      </section>

      <section className="dark-cta">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">OUTGROWN AD-HOC INFRASTRUCTURE?</p>

            <h2>
              Let&apos;s figure out what&apos;s
              <br />
              actually worth platforming.
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
