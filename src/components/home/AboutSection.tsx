import Link from "next/link";
import { Cpu, RefreshCw, Layers, Users } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const principles = [
  { label: "Engineering over buzzwords", icon: Cpu },
  { label: "Automation over repetition", icon: RefreshCw },
  { label: "Simple systems over unnecessary complexity", icon: Layers },
  { label: "Shared ownership over handoffs", icon: Users },
];

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="section-shell">
        <ScrollReveal className="about-grid">
          <div>
            <div className="section-eyebrow">
              <span>07</span>
              ABOUT RUNSTACK
            </div>

            <h2>
              We build the
              <br />
              <em>systems behind</em>
              <br />
              the software.
            </h2>
          </div>

          <div className="about-content">
            <p className="about-lead">
              RunStack is a cloud and DevOps engineering company focused on
              helping software teams build infrastructure that is reliable,
              secure, and ready to grow.
            </p>

            <p>
              Infrastructure should enable engineers, not become another
              product they have to fight. We work across cloud architecture,
              deployment automation, platform engineering, security, and
              observability to make the operational side of software more
              predictable.
            </p>

            <Link href="/about" className="text-link dark-link">
              More about RunStack <span>↗</span>
            </Link>
          </div>
        </ScrollReveal>

        <div className="principles">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <ScrollReveal
                className="principle"
                key={principle.label}
                delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
              >
                <div className="item-icon item-icon-sm">
                  <Icon />
                </div>
                <strong>{principle.label}</strong>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
