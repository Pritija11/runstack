import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://runstack.solutions"),

  title: {
    default: "RunStack — Cloud & DevOps Engineering",
    template: "%s | RunStack",
  },

  description:
    "RunStack is a cloud and DevOps engineering company helping teams build, deploy, secure, and operate reliable software infrastructure.",

  keywords: [
    "RunStack",
    "cloud engineering",
    "DevOps",
    "cloud infrastructure",
    "platform engineering",
    "AWS",
    "Kubernetes",
    "CI/CD",
  ],

  applicationName: "RunStack",
  category: "technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "RunStack — Cloud & DevOps Engineering",
    description:
      "Cloud infrastructure and DevOps engineering for teams building what's next.",
    url: "https://runstack.solutions",
    siteName: "RunStack",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "RunStack — Cloud & DevOps Engineering",
    description:
      "Cloud infrastructure and DevOps engineering for teams building what's next.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <OrganizationSchema />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}