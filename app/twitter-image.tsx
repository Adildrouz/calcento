import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Calcento — Free Workplace Calculators";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#F7F5F0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 100px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Left: brand + headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px", maxWidth: "560px" }}>
          {/* Logo row */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {/* Icon mark */}
            <div
              style={{
                width: "72px",
                height: "72px",
                background: "#0F766E",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "36px",
                color: "#F7F5F0",
                fontWeight: 800,
              }}
            >
              %
            </div>
            <span
              style={{
                fontSize: "36px",
                fontWeight: 800,
                color: "#102A33",
                letterSpacing: "-1px",
              }}
            >
              Calcento
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: "52px",
              fontWeight: 800,
              color: "#102A33",
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
            }}
          >
            The everyday math{" "}
            <span style={{ color: "#0F766E" }}>of work.</span>
          </div>

          {/* Tagline */}
          <div style={{ fontSize: "24px", color: "#5C6B6E", lineHeight: 1.4 }}>
            Free calculators for pay raises, overtime, PTO, and turnover.
            No account. Instant results.
          </div>

          {/* Pills */}
          <div style={{ display: "flex", gap: "12px" }}>
            {["Pay Raise", "Overtime", "Turnover", "PTO"].map((label) => (
              <div
                key={label}
                style={{
                  background: "#E6F1EF",
                  color: "#0B5750",
                  borderRadius: "100px",
                  padding: "8px 18px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Right: result readout card */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "24px",
            padding: "40px 48px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "380px",
            boxShadow: "0 8px 48px rgba(16,42,51,0.12)",
          }}
        >
          <div style={{ fontSize: "13px", color: "#5C6B6E", letterSpacing: "2px" }}>
            YOUR RAISE
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#B97A2B",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            +6.7%
          </div>
          <div style={{ width: "64px", height: "3px", background: "#B97A2B", borderRadius: "2px" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #E4E0D6", paddingBottom: "12px" }}>
              <span style={{ color: "#5C6B6E", fontSize: "16px" }}>New salary</span>
              <span style={{ color: "#102A33", fontSize: "20px", fontWeight: 700 }}>$64,000</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#5C6B6E", fontSize: "16px" }}>Increase</span>
              <span style={{ color: "#0F766E", fontSize: "20px", fontWeight: 700 }}>+$4,000</span>
            </div>
          </div>
          <div
            style={{
              marginTop: "8px",
              background: "#F7F5F0",
              borderRadius: "12px",
              padding: "12px 16px",
              fontSize: "14px",
              color: "#5C6B6E",
            }}
          >
            calcento.com · Free · No account
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
