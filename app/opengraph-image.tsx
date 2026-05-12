import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "IMPERIUM GYM — Porto-Vecchio, Corse";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Soft glow circle (top right) */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "700px",
            height: "700px",
            borderRadius: "9999px",
            background: "#39FF14",
            opacity: 0.12,
            filter: "blur(80px)",
            display: "flex",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            color: "#39FF14",
            fontSize: 24,
            fontWeight: 800,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Porto-Vecchio · Corse du Sud
        </div>

        {/* Headline IMPERIUM */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 140,
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginTop: 40,
            display: "flex",
          }}
        >
          IMPERIUM
        </div>

        {/* Headline GYM */}
        <div
          style={{
            color: "#39FF14",
            fontSize: 140,
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            display: "flex",
          }}
        >
          GYM
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 140,
            height: 4,
            background: "#39FF14",
            marginTop: 44,
            display: "flex",
          }}
        />

        {/* Subline */}
        <div
          style={{
            color: "#e5e5e5",
            fontSize: 32,
            fontWeight: 500,
            marginTop: 32,
            display: "flex",
            maxWidth: 900,
          }}
        >
          Salle de musculation haut de gamme · Équipement Etenon · 6h – 23h · 7j/7
        </div>

        {/* Corner mark */}
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 80,
            color: "#39FF14",
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            display: "flex",
            border: "1px solid #39FF14",
            padding: "10px 18px",
            borderRadius: "9999px",
          }}
        >
          imperium-gym.com
        </div>
      </div>
    ),
    { ...size }
  );
}
