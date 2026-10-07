const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://runstack.solutions/#organization",
      name: "RunStack",
      legalName: "RunStack Solutions",
      url: "https://runstack.solutions",
      logo: "https://runstack.solutions/icon.png",
      image: "https://runstack.solutions/opengraph-image",
      description:
        "RunStack is a cloud and DevOps engineering company helping teams build, deploy, secure, and operate reliable software infrastructure.",
      foundingDate: "2023",
      email: "hello@runstack.solutions",
      telephone: "+977-1-5523410",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Pulchowk",
        addressLocality: "Lalitpur",
        addressCountry: "NP",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: "+977-1-5523410",
          email: "hello@runstack.solutions",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
      ],
      sameAs: [
        "https://github.com/runstack",
        "https://linkedin.com/company/runstack",
        "https://x.com/runstack",
      ],
      knowsAbout: [
        "Cloud Infrastructure",
        "DevOps",
        "Platform Engineering",
        "Observability",
        "Cloud Security",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://runstack.solutions/#website",
      url: "https://runstack.solutions",
      name: "RunStack",
      publisher: {
        "@id": "https://runstack.solutions/#organization",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
