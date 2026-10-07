import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "RunStack's privacy policy covering how we collect, use, and protect your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="container">
          <p className="eyebrow">LEGAL / 01</p>
          <h1>Privacy Policy</h1>
          <p>Last updated: October 2026</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-layout">
            <aside>
              <span>CONTENTS</span>
              <a href="#information">Information</a>
              <a href="#usage">How we use information</a>
              <a href="#sharing">Information sharing</a>
              <a href="#security">Security</a>
              <a href="#contact">Contact</a>
            </aside>

            <article>
              <section id="information">
                <h2>Information we collect</h2>
                <p>
                  When you contact RunStack through this website, you may
                  provide information such as your name, email address,
                  company name, and details about your project or inquiry.
                </p>
              </section>

              <section id="usage">
                <h2>How we use information</h2>
                <p>
                  Information submitted through the website may be used to
                  understand your inquiry and respond to your request.
                </p>
              </section>

              <section id="sharing">
                <h2>Information sharing</h2>
                <p>
                  We do not sell personal information. Information may only be
                  shared where necessary to provide a requested service,
                  comply with legal obligations, or protect our rights.
                </p>
              </section>

              <section id="security">
                <h2>Security</h2>
                <p>
                  We take reasonable measures to protect information handled
                  through our services. However, no internet transmission or
                  storage system can be guaranteed to be completely secure.
                </p>
              </section>

              <section id="contact">
                <h2>Contact</h2>
                <p>
                  If you have questions about this privacy policy, contact
                  RunStack through the information provided on our contact
                  page.
                </p>
              </section>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}