import { useState } from "react";

type Variant = "global" | "dz";

const LEVELS = ["A1 — Beginner", "A2", "B1", "B2", "C1", "I don't know yet"];
const GOALS = [
  { id: "study", label: "Study in Germany", emoji: "🎓" },
  { id: "work", label: "Work / Visa", emoji: "💼" },
  { id: "exam", label: "Pass Goethe / TestDaF", emoji: "📜" },
  { id: "personal", label: "Personal / Travel", emoji: "✈️" },
];

export function EnrollForm({ variant }: { variant: Variant }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    program: variant === "dz" ? "group" : "group",
    level: "",
    goal: "",
    name: "",
    email: "",
    phone: "",
    country: variant === "dz" ? "Algeria" : "",
  });
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 4;
  const pct = (step / totalSteps) * 100;

  const update = (k: string, v: string) => setData((d) => ({ ...d, [k]: v }));
  const next = () => setStep((s) => Math.min(totalSteps, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const programs =
    variant === "dz"
      ? [
          { id: "group", title: "Cours en groupe", price: "7 500 DA", per: "/ mois", tag: "Le + populaire" },
          { id: "self", title: "Auto-apprentissage", price: "9 900 DA", per: "/ accès 3 mois" },
          { id: "intensive", title: "Intensif", price: "32 000 DA", per: "/ 75 leçons" },
        ]
      : [
          { id: "group", title: "Group Course", price: "€125", per: "/ month", tag: "Most popular" },
          { id: "self", title: "Self-Paced", price: "€149", per: "/ 3 months" },
          { id: "intensive", title: "Intensive", price: "€490", per: "/ 75 lessons" },
        ];

  if (submitted) {
    return (
      <div className="rounded-3xl bg-ink text-paper p-10 shadow-glow text-center animate-in fade-in zoom-in-95 duration-500">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="font-display text-3xl font-extrabold mb-2">
          {variant === "dz" ? "C'est parti !" : "You're in."}
        </h3>
        <p className="opacity-80">
          {variant === "dz"
            ? "Notre équipe vous appellera dans les 24h pour finaliser votre inscription."
            : "Our team will reach out within 24h to confirm your placement."}
        </p>
      </div>
    );
  }

  return (
    <div className="relative rounded-3xl bg-paper border border-border shadow-soft overflow-hidden">
      {/* progress */}
      <div className="h-1.5 bg-orange-soft">
        <div
          className="h-full gradient-hero transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <span className="label-mono text-muted-foreground">
            {variant === "dz" ? "Inscription" : "Enroll"} · {step}/{totalSteps}
          </span>
          <span className="label-mono text-orange">
            {step === 1 && (variant === "dz" ? "Programme" : "Program")}
            {step === 2 && (variant === "dz" ? "Niveau" : "Level")}
            {step === 3 && (variant === "dz" ? "Objectif" : "Goal")}
            {step === 4 && (variant === "dz" ? "Vos coordonnées" : "Your details")}
          </span>
        </div>

        <div key={step} className="animate-in fade-in slide-in-from-right-4 duration-300">
          {step === 1 && (
            <div className="space-y-3">
              <h3 className="font-display text-2xl font-extrabold text-ink">
                {variant === "dz" ? "Quel programme vous correspond ?" : "Which program fits you?"}
              </h3>
              <div className="grid gap-3">
                {programs.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => update("program", p.id)}
                    className={`relative text-left rounded-2xl border-2 p-4 transition-all hover:-translate-y-0.5 ${
                      data.program === p.id
                        ? "border-orange bg-orange-soft shadow-glow"
                        : "border-border bg-paper hover:border-orange/40"
                    }`}
                  >
                    {p.tag && (
                      <span className="absolute -top-2 right-4 bg-ink text-paper text-[10px] font-mono px-2 py-0.5 rounded-full">
                        {p.tag}
                      </span>
                    )}
                    <div className="flex justify-between items-baseline">
                      <span className="font-display font-bold text-ink">{p.title}</span>
                      <span className="font-display text-xl font-extrabold text-orange-deep">
                        {p.price}
                        <span className="text-xs text-muted-foreground font-normal ml-1">{p.per}</span>
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <h3 className="font-display text-2xl font-extrabold text-ink">
                {variant === "dz" ? "Votre niveau d'allemand ?" : "Your German level?"}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {LEVELS.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => update("level", lvl)}
                    className={`rounded-xl border-2 px-3 py-3 text-sm font-semibold transition-all hover:scale-[1.02] ${
                      data.level === lvl
                        ? "border-orange bg-orange text-ink shadow-glow"
                        : "border-border bg-paper hover:border-orange/40"
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <h3 className="font-display text-2xl font-extrabold text-ink">
                {variant === "dz" ? "Pourquoi l'allemand ?" : "Why German?"}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {GOALS.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => update("goal", g.id)}
                    className={`rounded-2xl border-2 p-4 text-left transition-all hover:-translate-y-0.5 ${
                      data.goal === g.id
                        ? "border-orange bg-orange-soft shadow-glow"
                        : "border-border bg-paper hover:border-orange/40"
                    }`}
                  >
                    <div className="text-3xl mb-1">{g.emoji}</div>
                    <div className="font-semibold text-ink text-sm">{g.label}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-3">
              <h3 className="font-display text-2xl font-extrabold text-ink">
                {variant === "dz" ? "Une dernière étape." : "One last step."}
              </h3>
              <div className="grid gap-3">
                <input
                  placeholder={variant === "dz" ? "Nom complet" : "Full name"}
                  value={data.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="rounded-xl border-2 border-border bg-paper px-4 py-3 font-medium focus:border-orange focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={data.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="rounded-xl border-2 border-border bg-paper px-4 py-3 font-medium focus:border-orange focus:outline-none transition-colors"
                />
                <input
                  placeholder={variant === "dz" ? "Téléphone (WhatsApp)" : "Phone / WhatsApp"}
                  value={data.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="rounded-xl border-2 border-border bg-paper px-4 py-3 font-medium focus:border-orange focus:outline-none transition-colors"
                />
                {variant === "global" && (
                  <input
                    placeholder="Country"
                    value={data.country}
                    onChange={(e) => update("country", e.target.value)}
                    className="rounded-xl border-2 border-border bg-paper px-4 py-3 font-medium focus:border-orange focus:outline-none transition-colors"
                  />
                )}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-6 gap-3">
          <button
            onClick={prev}
            disabled={step === 1}
            className="text-sm font-semibold text-muted-foreground hover:text-ink disabled:opacity-30 transition-colors"
          >
            ← {variant === "dz" ? "Retour" : "Back"}
          </button>
          {step < totalSteps ? (
            <button
              onClick={next}
              className="rounded-full gradient-hero text-ink font-display font-extrabold px-6 py-3 shadow-glow hover:scale-105 transition-transform"
            >
              {variant === "dz" ? "Continuer" : "Continue"} →
            </button>
          ) : (
            <button
              onClick={() => setSubmitted(true)}
              disabled={!data.name || !data.email}
              className="rounded-full bg-ink text-paper font-display font-extrabold px-6 py-3 shadow-glow hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
            >
              {variant === "dz" ? "Réserver ma place" : "Reserve my seat"} ✦
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
