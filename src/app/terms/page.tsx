import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms and conditions governing use of RunStack's website and services.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="container">
          <p className="eyebrow">LEGAL / 02</p>
          <h1>Terms of Use</h1>
          <p>Last updated: October 2026</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-layout">
            <aside>
              <span>CONTENTS</span>
              <a href="#website">Website use</a>
              <a href="#content">Content</a>
              <a href="#services">Services</a>
              <a href="#liability">Limitation of liability</a>
              <a href="#contact">Contact</a>
            </aside>

            <article>
              <section id="website">
                <h2>Website use</h2>
                <p>
                  This website provides information about RunStack and its
                  engineering capabilities. You agree to use the website
                  lawfully and responsibly.
                </p>
              </section>

              <section id="content">
                <h2>Content</h2>
                <p>
                  Content on this website is provided for general informational
                  purposes. You should not treat website content as a guarantee
                  of a particular technical or business outcome.
                </p>
              </section>

              <section id="services">
                <h2>Services</h2>
                <p>
                  Information describing RunStack&apos;s services does not
                  constitute a binding offer or agreement. Specific services,
                  deliverables, timelines, and responsibilities will be
                  defined separately between RunStack and its clients.
                </p>
              </section>

              <section id="liability">
                <h2>Limitation of liability</h2>
                <p>
                  To the extent permitted by applicable law, RunStack is not
                  responsible for losses resulting from reliance on general
                  information presented on this website.
                </p>
              </section>

              <section id="contact">
                <h2>Contact</h2>
                <p>
                  Questions regarding these terms can be submitted through the
                  RunStack contact page.
                </p>
              </section>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}