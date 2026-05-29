import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bayview Home Watch Services",
    short_name: "Home Watch",
    description: "Premium South Florida Property Care & Guardian Services",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F5", // True OKLCH sand background equivalent
    theme_color: "#081721",      // True OKLCH navy primary equivalent
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
