import { useState } from "react";
import { EnrollForm } from "./EnrollForm";

export type Variant = "global" | "dz";

interface Plan {
  name: string;
  tagline: string;
  price: string;
  per: string;
  features: string[];
  highlight?: boolean;
  cta: string;
}

interface Copy {
  lang: "fr" | "en";
  badge: string;
  h1: { line1: string; accent: string; line2: string };
  sub: string;
  trust: string[];
  formTitle: string;
  formSub: string;
  moodleLabel: string;
  moodleSub: string;
  moodleCta: string;
  moodleUrl: string;
  pricingTitle: string;
  pricingSub: string;
  plans: Plan[];
  compareTitle: string;
  compareSub: string;
  compareRows: { label: string; us: string; them: string }[];
  compareUs: string;
  compareThem: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
  finalTitle: string;
  finalSub: string;
  finalCta: string;
}

const COPY: Record<Variant, Copy> = {
  global: {
    lang: "en",
    badge: "Online · A1 → C2 · Worldwide",
    h1: { line1: "Speak German.", accent: "Live it.", line2: "From anywhere." },
    sub: "Live online classes with European standards. Pick your level, pick your time, your teacher is waiting.",
    trust: ["12,400+ students", "94% pass rate", "Asia · MENA · Europe"],
    formTitle: "Reserve your seat",
    formSub: "Takes 60 seconds. No payment yet.",
    moodleLabel: "Try before you buy.",
    moodleSub: "Access a full demo course in Visitor Mode — no account, no commitment. See exactly what you're getting before you enroll.",
    moodleCta: "Preview Platform →",
    moodleUrl: "https://moodle.fdsinstitut.online",
    pricingTitle: "Pricing that respects your time.",
    pricingSub: "All programs include placement test, certificate of completion, and access to our learning platform.",
    plans: [
      {
        name: "Self-Paced",
        tagline: "Learn at your rhythm",
        price: "€149",
        per: "3 months access",
        features: ["70+ hours interactive", "Videos · audio · drills", "Mobile + desktop", "A1 → C1 levels"],
        cta: "Start now",
      },
      {
        name: "Group Course",
        tagline: "Live with classmates",
        price: "€125",
        per: "per month",
        features: ["Live online classes", "Small cohorts (max 12)", "Certified teachers", "All levels A1 → C2"],
        highlight: true,
        cta: "Most popular",
      },
      {
        name: "Intensive",
        tagline: "75 lessons total",
        price: "€490",
        per: "full program",
        features: ["75 structured lessons", "Live + async sessions", "Exam-ready curriculum", "Personal mentor access"],
        cta: "Go intensive",
      },
    ],
    compareTitle: "How we stack up.",
    compareSub: "Same European standards. Different reality.",
    compareUs: "FDS Institut",
    compareThem: "Goethe-Institut",
    compareRows: [
      { label: "Group course / month", us: "€125", them: "€379+" },
      { label: "Time before you start", us: "Within 7 days", them: "4–8 weeks waitlist" },
      { label: "Schedule", us: "Asia / MENA / EU friendly", them: "Local timezone only" },
      { label: "Replays of every class", us: "Yes, lifetime", them: "Rarely" },
      { label: "Direct WhatsApp support", us: "Yes", them: "No" },
    ],
    faqTitle: "Real questions, real answers.",
    faqs: [
      { q: "Are the certificates recognized?", a: "Our internal certificates follow CEFR standards (A1–C2) and we prepare you specifically for Goethe / TestDaF / telc exams which you sit at official centers." },
      { q: "What if I miss a class?", a: "Every live class is recorded. You get full replay access for the entire program duration — and a written summary." },
      { q: "Do I need a webcam or special software?", a: "Just a browser. Classes run on our own learning platform. Mobile works too." },
      { q: "How are teachers selected?", a: "All our teachers are certified, native or near-native, with a minimum of 5 years teaching German online." },
      { q: "Can I switch programs later?", a: "Yes. You can move from self-paced to group, or upgrade to Intensive at any time. Unused balance transfers." },
    ],
    finalTitle: "Your German starts this week.",
    finalSub: "No waitlists. No paperwork mountain.",
    finalCta: "Reserve my seat",
  },
  dz: {
    lang: "fr",
    badge: "100% en ligne · Pour l'Algérie · Paiement DA",
    h1: { line1: "Apprenez l'allemand.", accent: "Sérieusement.", line2: "Depuis l'Algérie." },
    sub: "Cours en direct avec des professeurs certifiés. Tarifs pensés pour l'Algérie. Démarrage cette semaine.",
    trust: ["+3 200 étudiants algériens", "94% de réussite", "Paiement CCP / Edahabia / BaridiMob"],
    formTitle: "Réservez votre place",
    formSub: "60 secondes. Sans paiement.",
    moodleLabel: "Testez avant d'acheter.",
    moodleSub: "Accédez à un cours complet en mode visiteur — sans compte, sans engagement. Voyez exactement ce que vous obtenez avant de vous inscrire.",
    moodleCta: "Accès Visiteur →",
    moodleUrl: "https://moodle.fdsinstitut.online",
    pricingTitle: "Des tarifs pensés pour vous.",
    pricingSub: "Tous nos programmes incluent un test de niveau, un certificat de fin et l'accès à notre plateforme.",
    plans: [
      {
        name: "Auto-apprentissage",
        tagline: "À votre rythme",
        price: "9 900 DA",
        per: "Accès 3 mois",
        features: ["+70h de contenu", "Vidéos · audios · exercices", "Mobile + ordinateur", "Niveaux A1 → C1"],
        cta: "Commencer",
      },
      {
        name: "Cours en groupe",
        tagline: "En direct avec vos camarades",
        price: "7 500 DA",
        per: "par mois",
        features: ["Cours live en ligne", "Petits groupes (max 12)", "Professeurs certifiés", "Tous niveaux A1 → C2"],
        highlight: true,
        cta: "Le plus choisi",
      },
      {
        name: "Intensif",
        tagline: "75 leçons au total",
        price: "32 000 DA",
        per: "programme complet",
        features: ["75 leçons structurées", "Live + sessions async", "Prêt pour les examens", "Accès à un mentor personnel"],
        cta: "Formation intensive",
      },
    ],
    compareTitle: "Pourquoi FDS plutôt qu'ailleurs ?",
    compareSub: "Mêmes standards européens. Pensé pour l'Algérie.",
    compareUs: "FDS Institut",
    compareThem: "Goethe-Institut Alger",
    compareRows: [
      { label: "Cours mensuel", us: "7 500 DA", them: "≈ 55 000 DA" },
      { label: "Délai avant de commencer", us: "Sous 7 jours", them: "Liste d'attente longue" },
      { label: "Format", us: "100% en ligne", them: "Présentiel obligatoire" },
      { label: "Paiement local", us: "CCP · Edahabia · BaridiMob", them: "Compliqué" },
      { label: "Support WhatsApp", us: "Oui, direct", them: "Non" },
    ],
    faqTitle: "Vos questions, nos réponses.",
    faqs: [
      { q: "Les certificats sont-ils reconnus ?", a: "Nos certificats internes suivent les standards CEFR (A1–C2). Nous vous préparons aussi aux examens officiels Goethe / TestDaF que vous passez en centre agréé." },
      { q: "Comment payer depuis l'Algérie ?", a: "CCP, BaridiMob, Edahabia, ou virement bancaire local. Pas besoin de carte internationale." },
      { q: "Si je rate un cours en direct ?", a: "Tous les cours sont enregistrés. Vous avez accès aux replays + résumé écrit pendant toute la durée du programme." },
      { q: "Quel matériel faut-il ?", a: "Juste un navigateur web et une connexion. Mobile ou ordinateur. Pas de logiciel à installer." },
      { q: "Puis-je changer de formule ?", a: "Oui. Vous pouvez passer de l'auto-apprentissage au groupe, ou passer à l'Intensif en complément à tout moment." },
    ],
    finalTitle: "Votre allemand commence cette semaine.",
    finalSub: "Pas de liste d'attente. Pas de paperasse.",
    finalCta: "Je réserve ma place",
  },
};

const TESTIMONIALS: Record<Variant, { name: string; role: string; quote: string; emoji: string }[]> = {
  global: [
    { name: "Aiko T.", role: "Tokyo · B1 in 5 months", emoji: "🇯🇵", quote: "Best decision of my year. Teachers are sharp, classes are fun, the platform just works." },
    { name: "Mariam H.", role: "Dubai · Goethe B2 passed", emoji: "🇦🇪", quote: "Tried 3 schools before FDS. Same price, half the results. This one delivers." },
    { name: "Lucas P.", role: "São Paulo · A2", emoji: "🇧🇷", quote: "Live classes at 8pm my time. Replays the next morning. Couldn't be more flexible." },
  ],
  dz: [
    { name: "Yacine B.", role: "Alger · B1 obtenu", emoji: "🇩🇿", quote: "Le meilleur rapport qualité/prix. J'ai eu mon B1 en 4 mois pour partir étudier." },
    { name: "Lina M.", role: "Oran · A2", emoji: "🇩🇿", quote: "Les profs sont à l'écoute, et le paiement par BaridiMob c'était parfait." },
    { name: "Karim S.", role: "Constantine · A1→B1", emoji: "🇩🇿", quote: "Réservé un lundi, commencé le jeudi. Aucun blabla, du concret." },
  ],
};

const TRUST_PARTNERS = [
  {
    id: "hueber",
    logo: "H",
    name: "Hueber Verlag",
    taglineEn: "Official Curriculum Partner",
    taglineFr: "Partenaire pédagogique officiel",
    descEn: "Our curriculum uses Hueber-certified materials — the gold standard in German language publishing since 1961.",
    descFr: "Notre programme utilise des supports certifiés Hueber — la référence en édition de langue allemande depuis 1961.",
  },
  {
    id: "fintiba",
    logo: "F",
    name: "Fintiba",
    taglineEn: "Blocked Account Ready",
    taglineFr: "Compte bloqué facilité",
    descEn: "Heading to Germany to study? We partner with Fintiba to simplify your blocked account and visa financial proof.",
    descFr: "Vous partez étudier en Allemagne ? Nous collaborons avec Fintiba pour faciliter votre compte bloqué et votre preuve financière visa.",
  },
  {
    id: "cefr",
    logo: "CE",
    name: "CEFR / CECRL",
    taglineEn: "European Framework Compliant",
    taglineFr: "Conforme au cadre européen",
    descEn: "All our levels (A1→C2) strictly follow the Common European Framework of Reference — recognized by Goethe, TestDaF and telc.",
    descFr: "Tous nos niveaux (A1→C2) suivent strictement le Cadre Européen Commun de Référence — reconnu par Goethe, TestDaF et telc.",
  },
];

export function Landing({ variant }: { variant: Variant }) {
  const c = COPY[variant];
  const testimonials = TESTIMONIALS[variant];
  const isDz = variant === "dz";

  return (
    <main className="bg-[#030712] text-paper overflow-x-hidden font-sans selection:bg-orange selection:text-ink">
      {/* URGENCY BAR */}
      <div className="bg-orange text-ink text-center py-2.5 px-4 text-xs sm:text-sm font-bold tracking-wide">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-ink pulse-ring" />
          {isDz
            ? "Nouvelle session — places limitées · Démarrage cette semaine"
            : "New cohort starts this week — only a few seats left"}
        </span>
      </div>

      {/* TOP NAV */}
      <div className="relative z-30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <a href="/" className="font-display font-black text-xl tracking-tight text-white">
            FDS<span className="text-orange">.</span>
            <span className="text-white/30 font-mono text-[10px] ml-2 hidden sm:inline tracking-widest">INSTITUT</span>
          </a>
          <div className="flex items-center gap-3">
            <span className="label-mono text-white/40 hidden md:inline">{c.badge}</span>
            <a
              href={isDz ? "/global" : "/dz"}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold text-white/80 hover:border-orange hover:text-orange transition-all"
            >
              {isDz ? "🌍 International" : "🇩🇿 Algérie"}
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[60%] bg-orange/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[45%] h-[60%] bg-plum/40 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-start">
            {/* LEFT: hero */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left-6 duration-700">
              <div className="flex items-center gap-4 label-mono text-orange">
                <span className="h-px w-10 bg-orange" />
                {c.badge}
              </div>

              <h1 className="font-display font-black tracking-[-0.04em] leading-[0.88] text-[clamp(2.8rem,7.5vw,6rem)]">
                <span className="block text-white">{c.h1.line1}</span>
                <span className="block text-orange">{c.h1.accent}</span>
                <span
                  className="block text-transparent"
                  style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.18)" }}
                >
                  {c.h1.line2}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/60 max-w-lg leading-relaxed">{c.sub}</p>

              <div className="flex flex-wrap gap-2">
                {c.trust.map((tr, i) => (
                  <span
                    key={tr}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-bold ${
                      i === 0
                        ? "bg-orange text-ink border-orange"
                        : i === 1
                          ? "bg-white/5 text-white border-white/10"
                          : "bg-transparent text-white/70 border-white/10"
                    }`}
                  >
                    {tr}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-3">
                  {["🧑🏻", "👩🏽", "🧔🏾", "👩🏻", "🧑🏽"].map((e, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full bg-white/10 border-2 border-[#030712] flex items-center justify-center text-base"
                    >
                      {e}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-bold text-white flex items-center gap-1">
                    <span className="text-orange">★★★★★</span>
                    <span>4.9/5</span>
                  </div>
                  <div className="text-white/40 text-xs">
                    {isDz ? "1 200+ avis vérifiés" : "1,200+ verified reviews"}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-8 pt-6 border-t border-white/10">
                {[
                  { n: "12k+", l: isDz ? "Étudiants" : "Students" },
                  { n: "94%", l: isDz ? "Réussite" : "Pass rate" },
                  { n: "A1 → C2", l: isDz ? "Tous niveaux" : "All levels" },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-2xl sm:text-3xl font-display font-black text-white">{s.n}</p>
                    <p className="label-mono text-white/40 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: form card */}
            <div id="enroll" className="relative animate-in fade-in slide-in-from-right-6 duration-700 delay-150">
              <div className="absolute -inset-4 bg-orange/20 rounded-[2.5rem] blur-2xl pointer-events-none" />
              <div className="relative bg-paper text-ink rounded-[2rem] p-6 sm:p-8 shadow-glow">
                <div className="text-center mb-4">
                  <span className="inline-block label-mono text-orange-deep bg-sun/60 px-3 py-1 rounded-full mb-2">
                    {isDz ? "✦ Sans CB · Sans engagement" : "✦ No card · No commitment"}
                  </span>
                  <h2 className="font-display text-2xl font-black">{c.formTitle}</h2>
                  <p className="text-sm text-muted-foreground">{c.formSub}</p>
                </div>
                <EnrollForm variant={variant} />
                <div className="mt-3 flex items-center justify-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">🔒 {isDz ? "Données sécurisées" : "Secure"}</span>
                  <span>·</span>
                  <span>{isDz ? "Réponse sous 24h" : "Reply within 24h"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TICKER */}
        <div className="relative border-y border-white/5 bg-black/40 py-4 overflow-hidden">
          <div className="marquee">
            {Array.from({ length: 3 }).flatMap((_, k) =>
              ["A1 → C2", "Live online", "Certified teachers", "European standards", "Worldwide", "Lifetime replays", "Small cohorts", "14-day money-back"].map(
                (tx, i) => (
                  <span key={`${k}-${i}`} className="font-display text-xl sm:text-2xl font-black tracking-tight whitespace-nowrap text-white/80">
                    {tx} <span className="text-orange mx-5">◆</span>
                  </span>
                )
              )
            )}
          </div>
        </div>
      </section>

      {/* ── MOODLE PREVIEW BANNER ── */}
      <section className="px-6 lg:px-12 py-14 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl">
            {/* ambient glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[55%] h-full bg-orange/10 blur-[80px]" />
            </div>
            <div className="relative flex flex-col lg:flex-row items-center gap-8 p-8 sm:p-12">
              {/* icon block */}
              <div className="shrink-0 w-20 h-20 rounded-2xl bg-orange/10 border border-orange/30 flex items-center justify-center text-4xl select-none">
                🎓
              </div>
              {/* text */}
              <div className="flex-1 text-center lg:text-left">
                <p className="label-mono text-orange mb-2">— {isDz ? "Aperçu gratuit" : "Free preview"}</p>
                <h2 className="font-display font-black text-2xl sm:text-4xl text-white leading-tight">
                  {c.moodleLabel}
                </h2>
                <p className="mt-3 text-white/55 max-w-xl text-sm sm:text-base leading-relaxed">
                  {c.moodleSub}
                </p>
              </div>
              {/* CTA button */}
              <div className="shrink-0 flex flex-col items-center gap-3">
                <a
                  href={c.moodleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 rounded-full bg-orange text-ink font-display font-black px-8 py-4 text-sm sm:text-base hover:scale-105 transition-all duration-300 shadow-glow"
                >
                  <span className="relative z-10">{c.moodleCta}</span>
                </a>
                <span className="label-mono text-white/30">
                  {isDz ? "Aucun compte requis" : "No account needed"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STACK */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <p className="label-mono text-orange mb-4">— {isDz ? "Ce qui est inclus" : "What's included"}</p>
        <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white max-w-2xl leading-[0.95] mb-12">
          {isDz ? "Tout pour réussir." : "Everything to actually succeed."}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { k: "01", t: isDz ? "Test de niveau offert" : "Free placement test", d: isDz ? "Sachez où vous en êtes." : "Know exactly where you stand." },
            { k: "02", t: isDz ? "Replays à vie" : "Lifetime replays", d: isDz ? "Manqué un cours ? Pas grave." : "Missed a class? No worries." },
            { k: "03", t: isDz ? "Profs natifs certifiés" : "Native certified teachers", d: isDz ? "Min. 5 ans d'expérience." : "Min. 5 years teaching." },
            { k: "04", t: isDz ? "Support WhatsApp" : "WhatsApp support", d: isDz ? "Réponse rapide, 7j/7." : "Fast answers, 7 days a week." },
          ].map((v) => (
            <div
              key={v.k}
              className="group rounded-2xl bg-white/[0.03] border border-white/10 p-6 hover:-translate-y-1 hover:border-orange/50 hover:bg-white/[0.06] transition-all"
            >
              <div className="font-mono text-xs text-orange mb-3">{v.k}</div>
              <div className="font-display font-black text-lg text-white">{v.t}</div>
              <div className="text-sm text-white/50 mt-1.5">{v.d}</div>
              <div className="mt-4 h-px w-8 bg-white/15 group-hover:w-full group-hover:bg-orange transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* PRICING — LADDER OF VALUE */}
      <section id="pricing" className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-2xl mb-12">
          <p className="label-mono text-orange mb-3">— {isDz ? "Tarifs" : "Pricing"}</p>
          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-white leading-[0.95]">
            {c.pricingTitle}
          </h2>
          <p className="text-white/55 mt-5 text-lg">{c.pricingSub}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {c.plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-2 ${
                p.highlight
                  ? "bg-orange text-ink shadow-glow lg:scale-[1.03]"
                  : "bg-white/[0.04] text-white border border-white/10 hover:border-orange/40"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ink text-orange label-mono px-3 py-1 rounded-full">
                  ★ {p.cta}
                </span>
              )}
              <h3 className="font-display text-2xl font-black">{p.name}</h3>
              <p className={`text-sm mt-1 ${p.highlight ? "text-ink/70" : "text-white/50"}`}>
                {p.tagline}
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-black tracking-tight">{p.price}</span>
                <span className={`text-sm ${p.highlight ? "text-ink/70" : "text-white/50"}`}>
                  {p.per}
                </span>
              </div>
              <ul className={`mt-6 space-y-3 ${p.highlight ? "" : "text-white/80"}`}>
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <span className={p.highlight ? "text-ink font-black" : "text-orange"}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#enroll"
                className={`mt-8 block text-center rounded-full font-display font-black uppercase tracking-widest text-xs px-6 py-4 transition-transform hover:scale-[1.02] ${
                  p.highlight
                    ? "bg-ink text-orange"
                    : "bg-orange text-ink"
                }`}
              >
                {p.highlight ? (isDz ? "Choisir" : "Choose") : p.cta} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="relative max-w-6xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-2xl mb-12">
          <p className="label-mono text-orange mb-3">— {isDz ? "Comparaison" : "Comparison"}</p>
          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-white leading-[0.95]">
            {c.compareTitle}
          </h2>
          <p className="text-white/55 mt-5 text-lg">{c.compareSub}</p>
        </div>

        <div className="rounded-[2rem] bg-white/[0.03] border border-white/10 overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-3 bg-black/40 p-5 sm:p-6 label-mono">
            <div className="text-white/50">{isDz ? "Critère" : "What"}</div>
            <div className="text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-orange text-ink font-bold tracking-widest">
                {c.compareUs}
              </span>
            </div>
            <div className="text-center text-white/40">{c.compareThem}</div>
          </div>
          {c.compareRows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-3 p-5 sm:p-6 items-center text-sm sm:text-base border-t border-white/5 ${
                i % 2 === 0 ? "bg-white/[0.01]" : "bg-transparent"
              }`}
            >
              <div className="font-semibold text-white/90">{r.label}</div>
              <div className="text-center font-display font-black text-orange text-base sm:text-lg">
                {r.us}
              </div>
              <div className="text-center text-white/40 line-through decoration-coral/60">
                {r.them}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-white/30 mt-4 text-center italic">
          {isDz ? "Comparaison à titre indicatif. Sources publiques." : "Indicative comparison. Public sources."}
        </p>
      </section>

      {/* ── TRUST RADIUS ── */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-2xl mb-12">
          <p className="label-mono text-orange mb-3">— {isDz ? "Reconnu par" : "Proven quality"}</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-white leading-[0.95]">
            {isDz ? (
              <>Standards prouvés.<br /><span className="text-white/30">Par conception.</span></>
            ) : (
              <>Proven standards.<br /><span className="text-white/30">By design.</span></>
            )}
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {TRUST_PARTNERS.map((partner, i) => (
            <div
              key={partner.id}
              className={`group relative rounded-[2rem] p-8 border transition-all duration-300 hover:-translate-y-1 ${
                i === 1
                  ? "bg-orange/10 border-orange/30 hover:border-orange/60"
                  : "bg-white/[0.03] border-white/10 hover:border-white/20"
              }`}
            >
              {/* logo badge */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-display font-black text-lg mb-5 ${
                i === 1 ? "bg-orange text-ink" : "bg-white/10 text-white"
              }`}>
                {partner.logo}
              </div>
              <h3 className="font-display font-black text-xl text-white">{partner.name}</h3>
              <p className="label-mono text-orange mt-1 mb-3">
                {isDz ? partner.taglineFr : partner.taglineEn}
              </p>
              <p className="text-sm text-white/55 leading-relaxed">
                {isDz ? partner.descFr : partner.descEn}
              </p>
              <div className="mt-5 h-px w-8 bg-white/15 group-hover:w-full group-hover:bg-orange transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-2xl mb-12">
          <p className="label-mono text-orange mb-3">— {isDz ? "Ils l'ont fait" : "They did it"}</p>
          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-white leading-[0.95]">
            {isDz ? "De vrais étudiants. De vrais résultats." : "Real students. Real results."}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`rounded-[2rem] p-7 transition-all hover:-translate-y-1 ${
                i === 1
                  ? "bg-orange text-ink shadow-glow"
                  : "bg-white/[0.04] text-white border border-white/10 hover:border-orange/40"
              }`}
            >
              <div className={i === 1 ? "text-ink text-lg mb-3" : "text-orange text-lg mb-3"}>★★★★★</div>
              <p className={`leading-relaxed font-medium ${i === 1 ? "text-ink" : "text-white/90"}`}>"{t.quote}"</p>
              <div className={`flex items-center gap-3 mt-5 pt-5 border-t ${i === 1 ? "border-ink/20" : "border-white/10"}`}>
                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-xl ${i === 1 ? "bg-ink text-paper" : "bg-white/10"}`}>
                  {t.emoji}
                </div>
                <div>
                  <div className="font-display font-black">{t.name}</div>
                  <div className={`text-xs ${i === 1 ? "text-ink/70" : "text-white/50"}`}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="px-6 lg:px-12 pb-12">
        <div className="max-w-5xl mx-auto rounded-[2rem] border border-mint/40 bg-mint/10 p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 backdrop-blur-xl">
          <div className="text-6xl shrink-0">🛡️</div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
              {isDz ? "Garantie 14 jours, satisfait ou remboursé." : "14-day money-back guarantee."}
            </h3>
            <p className="text-white/60 mt-2">
              {isDz
                ? "Essayez sans risque. Si ce n'est pas pour vous, on vous rembourse — sans question."
                : "Try risk-free. If it's not for you, we refund — no questions asked."}
            </p>
          </div>
          <a
            href="#enroll"
            className="shrink-0 rounded-full bg-orange text-ink font-display font-black px-6 py-3 text-sm hover:scale-105 transition-transform"
          >
            {isDz ? "Réserver" : "Reserve"} →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="mb-12">
          <p className="label-mono text-orange mb-3">— FAQ</p>
          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-white leading-[0.95]">
            {c.faqTitle}
          </h2>
        </div>
        <div className="space-y-3">
          {c.faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-6 lg:px-12 py-16 lg:py-20">
        <div className="relative max-w-5xl mx-auto rounded-[2.5rem] bg-orange p-12 sm:p-20 text-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #030712 0, transparent 50%), radial-gradient(circle at 80% 80%, #030712 0, transparent 50%)" }}
          />
          <h2 className="relative font-display text-4xl sm:text-7xl font-black text-ink leading-[0.92] tracking-tight">
            {c.finalTitle}
          </h2>
          <p className="relative mt-5 text-lg sm:text-xl text-ink/80 max-w-xl mx-auto">{c.finalSub}</p>
          <a
            href="#enroll"
            className="relative inline-flex items-center gap-3 mt-8 rounded-full bg-ink text-orange font-display font-black px-8 py-4 text-base sm:text-lg hover:scale-105 transition-transform shadow-soft"
          >
            {c.finalCta} <span>→</span>
          </a>
          <div className="relative mt-5 label-mono text-ink/60">
            {isDz ? "Pas de carte requise · Annulation libre" : "No card required · Cancel anytime"}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="font-display font-black text-2xl text-white mb-2">
                FDS<span className="text-orange">.</span>
                <span className="text-white/30 font-mono text-[10px] ml-2 tracking-widest">ONLINE</span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed max-w-[220px]">
                {isDz
                  ? "Cours d'allemand en ligne pour le monde entier et l'Algérie."
                  : "German courses online for the world and Algeria."}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="label-mono text-white/30 mb-4">{isDz ? "Navigation" : "Navigate"}</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="text-white/50 hover:text-white transition-colors">
                    {isDz ? "Accueil" : "Home"}
                  </a>
                </li>
                <li>
                  <a href="/dz" className="text-white/50 hover:text-white transition-colors">
                    🇩🇿 Algérie
                  </a>
                </li>
                <li>
                  <a href="/global" className="text-white/50 hover:text-white transition-colors">
                    🌍 International
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-white/50 hover:text-white transition-colors">
                    {isDz ? "Tarifs" : "Pricing"}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact + Identity */}
            <div>
              <p className="label-mono text-white/30 mb-4">{isDz ? "Contact" : "Contact"}</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:online@fdsinstitut.com"
                    className="text-white/50 hover:text-orange transition-colors"
                  >
                    online@fdsinstitut.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.fdsinstitut.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    fdsinstitut.com
                    <span className="text-white/20">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={c.moodleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    {isDz ? "Aperçu plateforme" : "Preview platform"}
                    <span className="text-white/20">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-wrap items-center justify-between gap-3 label-mono text-white/25">
            <span>© {new Date().getFullYear()} FDS Institut · {isDz ? "Tous droits réservés" : "All rights reserved"}</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-mint" />
              {isDz ? "Plateforme sécurisée" : "Secure platform"}
            </span>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <a
        href="#enroll"
        className="lg:hidden fixed bottom-4 left-4 right-4 z-50 rounded-full bg-orange text-ink font-display font-black px-6 py-4 text-center shadow-glow flex items-center justify-center gap-2"
      >
        {c.finalCta} <span>→</span>
      </a>
    </main>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen((o) => !o)}
      className={`w-full text-left rounded-2xl border transition-all overflow-hidden ${
        open ? "border-orange bg-orange/10" : "border-white/10 bg-white/[0.03] hover:border-orange/40"
      }`}
    >
      <div className="flex items-center justify-between p-5 sm:p-6 gap-4">
        <span className="font-display font-bold text-base sm:text-lg pr-4 text-white">{q}</span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform font-black ${
            open ? "bg-orange text-ink rotate-45" : "bg-white/10 text-white"
          }`}
        >
          +
        </span>
      </div>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 sm:px-6 pb-6 text-white/60 leading-relaxed">{a}</p>
        </div>
      </div>
    </button>
  );
}
