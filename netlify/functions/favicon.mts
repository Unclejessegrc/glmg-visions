import type { Config } from "@netlify/functions";

const FAVICON_PNG_BASE64 =
  "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";

const FAVICON_ICO_BASE64 =
  "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";

const SITE_MANIFEST = {
  name: "Good Looks Media Group",
  short_name: "Good Looks",
  icons: [
    { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
  ],
  theme_color: "#231f20",
  background_color: "#231f20",
  display: "standalone",
};

export const config: Config = {
  path: [
    "/favicon.ico",
    "/favicon-48x48.png",
    "/favicon-96x96.png",
    "/apple-touch-icon.png",
    "/icon-192.png",
    "/icon-512.png",
    "/site.webmanifest",
  ],
};

function bytesFromBase64(value: string) {
  return Uint8Array.from(atob(value), (char) => char.charCodeAt(0));
}

export default async (request: Request) => {
  const pathname = new URL(request.url).pathname;

  if (pathname === "/favicon.ico") {
    return new Response(bytesFromBase64(FAVICON_ICO_BASE64), {
      headers: {
        "cache-control": "public, max-age=31536000, immutable",
        "content-type": "image/x-icon",
      },
    });
  }

  if (pathname === "/site.webmanifest") {
    return new Response(JSON.stringify(SITE_MANIFEST), {
      headers: {
        "cache-control": "public, max-age=31536000, immutable",
        "content-type": "application/manifest+json",
      },
    });
  }

  return new Response(bytesFromBase64(FAVICON_PNG_BASE64), {
    headers: {
      "cache-control": "public, max-age=31536000, immutable",
      "content-type": "image/png",
    },
  });
};
