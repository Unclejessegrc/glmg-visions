import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/video-editing")({
  beforeLoad: () => {
    throw redirect({ to: "/editing", statusCode: 301 });
  },
});
