import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";

export const Route = createFileRoute("/global")({
  head: () => ({
    meta: [
      { title: "FDS Institut — Learn German Online · International" },
      { name: "description", content: "Live online German courses A1–C2 for international students. Asia, MENA, Europe. EUR pricing. Reserve your seat in 60s." },
      { property: "og:title", content: "Speak German. Live it. From anywhere." },
      { property: "og:description", content: "Live online classes with European standards. EUR pricing. A1 → C2." },
    ],
  }),
  component: () => <Landing variant="global" />,
});
