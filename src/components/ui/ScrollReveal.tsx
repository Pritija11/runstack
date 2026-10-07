"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: "div" | "article";
};

export default function ScrollReveal({
  children,
  className = "",
  delay,
  as = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? ` reveal-delay-${delay}` : "";
  const Tag = as;

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`reveal${visible ? " is-visible" : ""}${delayClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
