import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          fontWeight: 900,
          background: "#1a1a1a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#39FF14",
          letterSpacing: "-0.05em",
          textShadow: "0 0 8px #39FF14",
        }}
      >
        I
      </div>
    ),
    { ...size }
  );
}
