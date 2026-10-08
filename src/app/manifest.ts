export const dynamic = "force-static";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RunStack — Cloud & DevOps Engineering",
    short_name: "RunStack",
    description:
      "RunStack is a cloud and DevOps engineering company helping teams build, deploy, secure, and operate reliable software infrastructure.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f2ec",
    theme_color: "#171815",
    icons: [
      {
        src: "/icon.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
