import type { MetadataRoute } from "next";

const baseUrl = "https://runstack.solutions";
const lastModified = "2026-01-01";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/cloud-infrastructure", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/devops", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/platform-engineering", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/observability", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/cloud-security", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions", changeFrequency: "monthly", priority: 0.9 },
  { path: "/solutions/cloud-migration", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions/modernization", changeFrequency: "monthly", priority: 0.8 },
  { path: "/solutions/infrastructure-optimization", changeFrequency: "monthly", priority: 0.8 },
  { path: "/work", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/insights", changeFrequency: "weekly", priority: 0.7 },
  { path: "/insights/what-changes-when-you-move-to-the-cloud", changeFrequency: "yearly", priority: 0.6 },
  { path: "/insights/ci-cd-is-more-than-deployment", changeFrequency: "yearly", priority: 0.6 },
  { path: "/insights/when-infrastructure-becomes-a-platform", changeFrequency: "yearly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
