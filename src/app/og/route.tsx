import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

const SITE_NAME = "Déto Jean-Luc Gouaho";
const SITE_URL = "jlgouaho.com";
const MAX_TITLE = 110;
const MAX_SUBTITLE = 160;

const KIND_LABEL: Record<string, { fr: string; en: string }> = {
  home: { fr: "Portfolio", en: "Portfolio" },
  blog: { fr: "Article de blogue", en: "Blog post" },
  projects: { fr: "Projets", en: "Projects" },
};

function clamp(text: string, max: number) {
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;
}

/**
 * Dynamic Open Graph image (1200x630) used by every page.
 * GET /og?title=...&subtitle=...&kind=blog&locale=fr
 */
export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl;
  const title = clamp(searchParams.get("title") ?? SITE_NAME, MAX_TITLE);
  const subtitle = clamp(searchParams.get("subtitle") ?? "", MAX_SUBTITLE);
  const kind = searchParams.get("kind") ?? "home";
  const locale = searchParams.get("locale") === "en" ? "en" : "fr";
  const label = (KIND_LABEL[kind] ?? KIND_LABEL.home)[locale];

  // Sniff the real format: /me.png is actually JPEG data and Satori needs the right mime.
  const avatar = await fetch(new URL("/me.png", origin))
    .then(async (res) => {
      const buf = Buffer.from(await res.arrayBuffer());
      const isJpeg = buf[0] === 0xff && buf[1] === 0xd8;
      return `data:${isJpeg ? "image/jpeg" : "image/png"};base64,${buf.toString("base64")}`;
    })
    .catch(() => null);

  const titleSize = title.length > 70 ? 44 : title.length > 40 ? 54 : 64;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e1b4b 55%, #0f172a 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "#6366f1",
            opacity: 0.35,
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#a5b4fc",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: "#34d399",
            }}
          />
          {label}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 1000 }}>
          <div
            style={{
              fontSize: titleSize,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -1,
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div style={{ fontSize: 28, lineHeight: 1.4, color: "#cbd5e1" }}>
              {subtitle}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {avatar && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={avatar}
                alt=""
                width={72}
                height={72}
                style={{
                  borderRadius: 9999,
                  border: "4px solid #334155",
                  objectFit: "cover",
                }}
              />
            )}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 28, fontWeight: 700 }}>{SITE_NAME}</div>
              <div style={{ fontSize: 20, color: "#94a3b8" }}>
                {locale === "fr"
                  ? "Développeur Full-Stack · Cloud & Azure · Québec"
                  : "Full-Stack Developer · Cloud & Azure · Quebec"}
              </div>
            </div>
          </div>
          <div style={{ fontSize: 24, fontWeight: 600, color: "#a5b4fc" }}>{SITE_URL}</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
