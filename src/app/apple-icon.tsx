import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4f46e5 0%, #312e81 100%)",
          color: "#fff",
          fontSize: 84,
          fontWeight: 800,
          letterSpacing: -3,
          fontFamily: "sans-serif",
        }}
      >
        JL
      </div>
    ),
    size
  );
}
