import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Déto Jean-Luc Gouaho · Portfolio",
    short_name: "JL Gouaho",
    description:
      "Développeur Full-Stack .NET, Vue.js, Next.js & Azure basé au Québec.",
    start_url: "/fr",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#4f46e5",
    lang: "fr-CA",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
