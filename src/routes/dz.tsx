import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";

export const Route = createFileRoute("/dz")({
  head: () => ({
    meta: [
      { title: "FDS Institut — Cours d'allemand en ligne · Algérie" },
      { name: "description", content: "Cours d'allemand en ligne A1–C2 pour les étudiants algériens. Tarifs en DA. Paiement local. Démarrage cette semaine." },
      { property: "og:title", content: "Apprenez l'allemand. Sérieusement. Depuis l'Algérie." },
      { property: "og:description", content: "Cours live en ligne. Tarifs en DA. CCP, BaridiMob, Edahabia." },
    ],
  }),
  component: () => <Landing variant="dz" />,
});
