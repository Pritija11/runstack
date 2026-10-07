import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const services = [
  "Cloud Infrastructure",
  "DevOps & CI/CD",
  "Platform Engineering",
  "Observability & SRE",
  "Cloud Security",
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <Image
                src="/images/logo-mark.png"
                alt=""
                width={26}
                height={20}
                className="footer-logo-mark"
              />
              RUNSTACK
            </Link>

            <p>
              Cloud infrastructure and DevOps engineering for teams building
              what&apos;s next.
            </p>

            <Link href="/contact" className="footer-cta">
              Talk to an engineer <span>↗</span>
            </Link>
          </div>

          <div className="footer-column">
            <span className="footer-label">SERVICES</span>

            {services.map((service) => (
              <Link href="/services" key={service}>
                {service}
              </Link>
            ))}
          </div>

          <div className="footer-column">
            <span className="footer-label">COMPANY</span>

            <Link href="/solutions">Solutions</Link>
            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-column">
            <span className="footer-label">CONTACT</span>

            <a href="mailto:hello@runstack.solutions" className="footer-contact-row">
              <Mail size={14} strokeWidth={1.7} />
              hello@runstack.solutions
            </a>
            <a href="tel:+97715523410" className="footer-contact-row">
              <Phone size={14} strokeWidth={1.7} />
              +977 01-5523410
            </a>
            <span className="footer-location footer-contact-row">
              <MapPin size={14} strokeWidth={1.7} />
              Pulchowk, Lalitpur, Nepal
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 RunStack Solutions</span>

          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>

          <span className="footer-status">
            <i />
            SYSTEMS ONLINE
          </span>
        </div>
      </div>
    </footer>
  );
}