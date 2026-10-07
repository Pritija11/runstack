"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="RunStack home">
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={30}
            height={23}
            className="brand-mark"
            priority
          />
          <span className="brand-name">RUNSTACK</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="nav-cta">
          <span>Talk to an engineer</span>
          <span className="nav-arrow">↗</span>
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="mobile-menu-cta"
            onClick={() => setMenuOpen(false)}
          >
            Talk to an engineer ↗
          </Link>
        </div>
      )}
    </header>
  );
}