import Link from "next/link";
import {
  Laptop,
  FileStack,
  Boxes,
  Workflow,
  Ship,
  Wrench,
} from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Platform Engineering",
  description:
    "Give developers a better path to production with internal platforms, self-service tooling, and golden paths that scale with your team.",
  alternates: { canonical: "/services/platform-engineering" },
  openGraph: {
    title: "Platform Engineering | RunStack",
    description:
      "Give developers a better path to production with internal platforms, self-service tooling, and golden paths that scale with your team.",
    url: "/services/platform-engineering",
  },
};

const buildingBlocks = [
  { label: "Developer environments", icon: Laptop },
  { label: "Service templates", icon: FileStack },
  { label: "Infrastructure modules", icon: Boxes },
  { label: "Deployment workflows", icon: Workflow },
  { label: "Kubernetes platforms", icon: Ship },
  { label: "Internal tooling", icon: Wrench },
];

export default function PlatformEngineeringPage() {
  return (
    <main>
      <section className="service-detail-hero">
        <div className="container">
          <div className="service-detail-meta">
            <span>03</span>
            <span>PLATFORM ENGINEERING</span>
          </div>

          <ScrollReveal className="service-detail-hero-grid">
            <h1>Give developers a better path to production.</h1>

            <div>
              <p>
                Build internal platforms that hide unnecessary infrastructure
                complexity while giving developers consistent ways to ship.
              </p>

              <Link href="/contact" className="button button-dark">
                Talk to an engineer <span>↗</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="platform-diagram-section">
        <div className="container">
          <p className="eyebrow">THE DEVELOPER JOURNEY</p>

          <ScrollReveal className="platform-diagram" delay={1}>
            <div className="platform-node platform-node-primary">
              DEVELOPER
            </div>

            <span>↓</span>

            <div className="platform-node">SERVICE TEMPLATE</div>

            <span>↓</span>

            <div className="platform-node">PLATFORM</div>

            <span>↓</span>

            <div className="platform-node">INFRASTRUCTURE</div>

            <span>↓</span>

            <div className="platform-node platform-node-primary">
              PRODUCTION
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="service-detail-intro">
        <div className="container">
          <ScrollReveal className="service-detail-intro-grid">
            <p className="eyebrow">WHY PLATFORM ENGINEERING</p>

            <div>
              <h2>
                Infrastructure should become easier as your engineering team
                grows.
              </h2>

              <p>
                Platform engineering creates reusable paths for common
                infrastructure and deployment tasks, allowing developers to
                focus more of their time on the product.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="service-capabilities">
        <div className="container">
          <ScrollReveal className="section-heading">
            <p className="eyebrow">BUILDING BLOCKS</p>
            <h2>A platform designed around developers.</h2>
          </ScrollReveal>

          <div className="capability-grid">
            {buildingBlocks.map((block, index) => {
              const Icon = block.icon;
              return (
                <ScrollReveal
                  className="capability-item"
                  key={block.label}
                  delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                >
                  <div>
                    <div className="item-icon">
                      <Icon />
                    </div>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{block.label}</h3>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="dark-cta">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">PLATFORM ENGINEERING</p>

            <h2>
              Build infrastructure
              <br />
              developers want to use.
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
