import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "linear-gradient(135deg, #102E29 0%, #081C19 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#D4AF37",
          fontWeight: 900,
          fontFamily: "serif",
          borderRadius: "6px",
          border: "1.5px solid #D4AF37",
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
