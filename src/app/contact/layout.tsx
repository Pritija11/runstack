import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with RunStack to talk through your cloud migration, DevOps workflow, or infrastructure reliability problem.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact RunStack",
    description:
      "Get in touch with RunStack to talk through your cloud migration, DevOps workflow, or infrastructure reliability problem.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
