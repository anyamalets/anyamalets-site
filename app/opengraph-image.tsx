import { ImageResponse } from "next/og";

export const alt = "Анна Малюточкина — психолог, расстройства пищевого поведения";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FAFAFA",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#6B6B6B",
            marginBottom: 40,
          }}
        >
          Психолог · расстройства пищевого поведения
        </div>

        <div
          style={{
            fontSize: 92,
            fontWeight: 600,
            color: "#2B2B2B",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 24,
          }}
        >
          Анна Малюточкина
        </div>

        <div
          style={{
            fontSize: 34,
            color: "#2B2B2B",
            lineHeight: 1.4,
            maxWidth: 900,
          }}
        >
          Помогаю восстановить спокойные отношения с едой и своим телом
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#C4654A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 600,
              color: "#FAFAFA",
            }}
          >
            А
          </div>
          <div style={{ fontSize: 26, color: "#6B6B6B" }}>anyamalets.ru</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
