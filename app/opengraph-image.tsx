import { ImageResponse } from "next/og";

export const alt = "Calcento — Free Pay & Workplace Calculators";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f8f6f1",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            width: 64,
            height: 4,
            background: "#0d9488",
            borderRadius: 2,
          }}
        />

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#0d9488",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            CALCENTO
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Free Pay &amp; Workplace Calculators
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#6b7280",
              maxWidth: 720,
              lineHeight: 1.4,
            }}
          >
            Pay raises · Overtime · PTO · Turnover — instant results, no sign-up
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              background: "#0d9488",
              color: "#f8f6f1",
              fontSize: 18,
              fontWeight: 600,
              padding: "10px 24px",
              borderRadius: 8,
            }}
          >
            calcento.com
          </div>
          <div style={{ fontSize: 18, color: "#9ca3af" }}>
            Free · No sign-up · Instant
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
