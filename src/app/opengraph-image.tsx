import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "MedCof Anest";

/**
 * Prévia usada quando a página é compartilhada no WhatsApp, o canal
 * principal das campanhas. Sem ela o link aparece sem imagem.
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #ffffff 0%, #fbf4f4 55%, #f3dede 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: "#c1272d",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: "0.14em",
          }}
        >
          MEDCOF ANEST
        </div>
        <div
          style={{
            marginTop: "28px",
            color: "#232323",
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            maxWidth: "900px",
          }}
        >
          A plataforma completa de Anestesiologia
        </div>
        <div
          style={{
            marginTop: "26px",
            color: "#5e5a5b",
            fontSize: 30,
            lineHeight: 1.4,
            maxWidth: "860px",
          }}
        >
          Preparatórios para ME, TEA e TSA, com QBank, flashcards e aulas de
          quem se formou nos maiores centros do país.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "44px",
            height: "8px",
            width: "180px",
            borderRadius: "999px",
            background: "#c1272d",
          }}
        />
      </div>
    ),
    size,
  );
}
