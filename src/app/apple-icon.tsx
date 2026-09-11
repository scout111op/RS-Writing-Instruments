import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 84,
          background: "linear-gradient(135deg, #102E29 0%, #081C19 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#D4AF37",
          fontWeight: 900,
          fontFamily: "serif",
          borderRadius: "36px",
          border: "5px solid #D4AF37",
        }}
      >
        RS
      </div>
    ),
    {
      ...size,
    }
  );
}
