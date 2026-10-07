import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, RefreshCw, Layers, Users } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "RunStack is a cloud and DevOps engineering company. Learn about our principles, how we work, and why engineering teams trust us with their infrastructure.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About RunStack",
    description:
      "We build the systems behind the software. Learn about RunStack's principles and how we work with engineering teams.",
    url: "/about",
  },
};

const principles = [
  {
    number: "01",
    title: "Engineering over buzzwords",
    icon: Cpu,
    text: "Technology choices should have a reason. We focus on systems that solve the problem in front of us.",
  },
  {
    number: "02",
    title: "Automation over repetition",
    icon: RefreshCw,
    text: "If a process needs to happen repeatedly, it should be designed to happen consistently.",
  },
  {
    number: "03",
    title: "Simple systems over unnecessary complexity",
    icon: Layers,
    text: "Good infrastructure is not infrastructure with the most tools. It is infrastructure teams can understand and operate.",
  },
  {
    number: "04",
    title: "Shared ownership over handoffs",
    icon: Users,
    text: "We work alongside engineering teams and leave behind systems they can confidently own.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero about-hero">
        <div className="container">
          <p className="eyebrow">ABOUT RUNSTACK</p>

          <ScrollReveal className="page-hero-grid">
            <h1>We build the systems behind the software.</h1>

            <div className="page-hero-copy">
              <p>
                RunStack is a cloud and DevOps engineering startup focused on
                helping teams build, deploy, secure, and operate reliable
                software infrastructure.
              </p>

              <span className="mono-label">ENGINEERING / AUTOMATION / RELIABILITY</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <ScrollReveal className="about-story-grid">
            <p className="eyebrow">WHY RUNSTACK</p>

            <div>
              <p className="about-lead">
                Software is only as reliable as the systems supporting it.
              </p>

              <p>
                As products grow, infrastructure becomes a discipline of its
                own. Deployments become more complex. Cloud environments
                multiply. Security requirements increase. Production systems
                need constant visibility.
              </p>

              <p>
                RunStack exists to help engineering teams handle that
                complexity through thoughtful architecture, automation, and
                operational engineering.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="principles-section">
        <div className="container">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">OUR PRINCIPLES</p>
            <h2>How we think about engineering.</h2>
          </ScrollReveal>

          <div className="principles-list">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <ScrollReveal
                  as="article"
                  className="principle-row"
                  key={principle.number}
                  delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                >
                  <div className="item-icon">
                    <Icon />
                  </div>
                  <span>{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="dark-cta">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">RUNSTACK</p>

            <h2>
              Building something that
              <br />
              needs a stronger foundation?
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
