import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "What actually changes when a startup moves to the cloud?",
  description:
    "A practical look at the infrastructure decisions teams face as their applications and engineering teams grow.",
  alternates: { canonical: "/insights/what-changes-when-you-move-to-the-cloud" },
  openGraph: {
    title: "What actually changes when a startup moves to the cloud? | RunStack",
    description:
      "A practical look at the infrastructure decisions teams face as their applications and engineering teams grow.",
    url: "/insights/what-changes-when-you-move-to-the-cloud",
    type: "article",
    publishedTime: "2026-10-12",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What actually changes when a startup moves to the cloud?",
  description:
    "A practical look at the infrastructure decisions teams face as their applications and engineering teams grow.",
  datePublished: "2026-10-12",
  author: { "@type": "Organization", name: "RunStack" },
  publisher: { "@type": "Organization", name: "RunStack" },
  mainEntityOfPage: "https://runstack.solutions/insights/what-changes-when-you-move-to-the-cloud",
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
          <p className="eyebrow">CLOUD</p>

          <ScrollReveal className="page-hero-grid">
            <h1>
              What actually changes when a startup moves to the cloud?
            </h1>

            <div className="page-hero-copy">
              <p>
                A practical look at the infrastructure decisions teams face
                as their applications and engineering teams grow.
              </p>

              <span className="mono-label">12 OCT 2026 · 5 MIN READ</span>
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
              Most teams don&apos;t move to the cloud because of a single
              dramatic failure. They move because the gap between what their
              infrastructure can do and what their product needs keeps
              getting wider, one deploy at a time.
            </p>

            <h2>It&apos;s an operating model change, not a server move</h2>
            <p>
              The instinct is to treat a cloud migration as a lift-and-shift
              exercise — take what&apos;s running somewhere else and run it
              on someone else&apos;s hardware instead. That framing misses
              what actually changes. Compute, storage, and networking become
              things you provision in code rather than things you rack and
              cable. That shift is bigger than it sounds, because it means
              your infrastructure can now be versioned, reviewed, and
              reproduced — if you build it that way from the start.
            </p>

            <h2>The cost model stops being predictable by default</h2>
            <p>
              On-prem or fixed hosting, cost is mostly flat and known months
              in advance. Cloud billing scales with usage, which is powerful
              when traffic grows and painful when nobody is watching what
              gets provisioned. Teams that move without building cost
              visibility into their workflow from day one tend to find out
              about the problem from a monthly invoice, not from a dashboard.
            </p>

            <h2>Operational responsibility doesn&apos;t disappear</h2>
            <p>
              Cloud providers take hardware failure off your plate. They
              don&apos;t take configuration, security posture, or
              architecture decisions off your plate. A misconfigured
              storage bucket or an overly broad access policy is still your
              problem, and in some ways it&apos;s a bigger one, because the
              blast radius of a mistake in a shared cloud environment can be
              larger than it was in a more contained, self-managed setup.
            </p>

            <h2>The team needs different skills, not just different tools</h2>
            <p>
              Provisioning infrastructure through code, understanding
              network boundaries in a virtualized environment, and reasoning
              about distributed failure modes are skills that don&apos;t
              automatically come with a cloud account. The teams that get
              the most out of a migration treat it as a chance to build
              those skills deliberately, rather than assuming the platform
              will compensate for gaps in how the team thinks about
              infrastructure.
            </p>

            <p>
              None of this is a reason to avoid the cloud — for most growing
              products, it&apos;s still the right foundation. It&apos;s a
              reason to go in with a clear picture of what&apos;s actually
              changing, rather than treating the move as a technical
              checkbox.
            </p>
          </div>
        </div>
      </section>

      <section className="dark-cta">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">PLANNING A MIGRATION?</p>

            <h2>
              Let&apos;s talk through
              <br />
              what it actually takes.
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
