import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "English to be",
    short_name: "English to be",
    description: "Mobile-first English learning app with words, sentences, idioms, and games.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    orientation: "portrait",
    icons: [
      {
        src: "/logo.svg",
        sizes: "512x512",
        type: "image/svg+xml"
      }
    ]
  };
}
