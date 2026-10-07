"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Target } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/SocialIcons";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);

    event.currentTarget.reset();
  }

  useEffect(() => {
    if (!submitted) return;

    const timer = window.setTimeout(() => {
      setSubmitted(false);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [submitted]);

  return (
    <main>
      <section className="page-hero contact-hero">
        <div className="container">
          <p className="eyebrow">CONTACT</p>

          <ScrollReveal className="page-hero-grid">
            <h1>
              Let&apos;s talk about
              <br />
              your infrastructure.
            </h1>

            <div className="page-hero-copy">
              <p>
                Tell us what you&apos;re building, where your infrastructure
                currently stands, and what you&apos;re trying to solve.
              </p>

              <span className="mono-label">
                START A CONVERSATION
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <ScrollReveal className="contact-info">
              <p className="eyebrow">RUNSTACK / INTAKE</p>

              <h2>
                Bring the problem.
                <br />
                We&apos;ll explore the system.
              </h2>

              <p>
                Whether you&apos;re planning a cloud migration, struggling
                with deployment workflows, or trying to make production more
                reliable, start with the problem.
              </p>

              <div className="contact-details">
                <div className="contact-detail-row">
                  <div className="contact-info-icon">
                    <Mail size={19} strokeWidth={1.7} />
                  </div>
                  <div>
                    <span>EMAIL</span>
                    <p>hello@runstack.solutions</p>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-info-icon">
                    <Phone size={19} strokeWidth={1.7} />
                  </div>
                  <div>
                    <span>PHONE</span>
                    <p>+977 01-5523410</p>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-info-icon">
                    <MapPin size={19} strokeWidth={1.7} />
                  </div>
                  <div>
                    <span>LOCATION</span>
                    <p>Pulchowk, Lalitpur, Nepal</p>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-info-icon">
                    <Target size={19} strokeWidth={1.7} />
                  </div>
                  <div>
                    <span>FOCUS</span>
                    <p>Cloud · DevOps · Infrastructure</p>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-info-icon">
                    <GithubIcon size={18} strokeWidth={1.7} />
                  </div>
                  <div>
                    <span>ELSEWHERE</span>
                    <div className="contact-social-row">
                      <a
                        href="https://github.com/runstack"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <GithubIcon size={17} strokeWidth={1.7} />
                      </a>
                      <a
                        href="https://linkedin.com/company/runstack"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <LinkedinIcon size={17} strokeWidth={1.7} />
                      </a>
                      <a
                        href="https://x.com/runstack"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X"
                      >
                        <XIcon size={17} strokeWidth={1.7} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="contact-form-wrapper" delay={2}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Work email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="service">What do you need help with?</label>

                  <select id="service" name="service" defaultValue="">
                    <option value="" disabled>
                      Select an area
                    </option>
                    <option value="cloud">Cloud Infrastructure</option>
                    <option value="devops">DevOps & CI/CD</option>
                    <option value="platform">Platform Engineering</option>
                    <option value="observability">
                      Observability & SRE
                    </option>
                    <option value="security">Cloud Security</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Tell us about the problem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="What are you trying to build, improve, or fix?"
                    required
                  />
                </div>

                <button type="submit" className="button button-dark form-submit">
                  Send inquiry <span>↗</span>
                </button>

                {submitted && (
                  <div className="form-success" role="status">
                    <span>✓</span>
                    Thanks — your inquiry has been received.
                  </div>
                )}
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="contact-bottom">
        <div className="container">
          <ScrollReveal className="contact-terminal">
            <div className="terminal-header">
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-title">
                runstack / contact
              </span>
            </div>

            <div className="terminal-body">
              <p>
                <span>$</span> system status
              </p>
              <p className="terminal-green">RUNSTACK ONLINE</p>

              <p>
                <span>$</span> availability
              </p>
              <p>Open for engineering conversations.</p>

              <p>
                <span>$</span> next
              </p>
              <p>Tell us what you&apos;re solving.</p>
            </div>
          </ScrollReveal>

          <Link href="/" className="back-home">
            ← Back to RunStack
          </Link>
        </div>
      </section>
    </main>
  );
}
