import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const logoData = await readFile(
  join(process.cwd(), "public/images/logo-mark.png"),
  "base64"
);
const logoSrc = `data:image/png;base64,${logoData}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#171815",
          padding: "80px 90px",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(199,243,107,0.22), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} height={46} style={{ display: "flex" }} />
          <div
            style={{
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: 2,
              color: "#fafaf5",
              display: "flex",
            }}
          >
            RUNSTACK
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 58,
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#fafaf5",
              maxWidth: 920,
              display: "flex",
            }}
          >
            Cloud infrastructure and DevOps engineering for teams building what&apos;s next.
          </div>

          <div style={{ fontSize: 26, color: "#c7f36b", letterSpacing: 1, display: "flex" }}>
            CLOUD · DEVOPS · PLATFORM ENGINEERING · SECURITY
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
