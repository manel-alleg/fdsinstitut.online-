import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FDS Institut — Online German Courses · Worldwide & Algeria" },
      { name: "description", content: "Live online German courses A1–C2. Pick your path: Algeria pricing in DZD or international in EUR." },
      { property: "og:title", content: "FDS Institut — Learn German Online" },
      { property: "og:description", content: "International programs in EUR, or Algeria pricing in DZD. Live online classes A1–C2." },
    ],
  }),
  component: Chooser,
});

const TICKER = ["Deutsch lernen", "A1 → C2", "Live online", "TestDaF ready", "Goethe Zertifikat", "FDS Institut"];

function Chooser() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString("en-GB", {
        timeZone: "Europe/Berlin", hour: "2-digit", minute: "2-digit",
      }));
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="min-h-screen w-full bg-[#030712] text-paper font-sans selection:bg-orange selection:text-ink">
      {/* Top bar */}
      <div className="relative z-30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between text-xs">
          <div className="font-display font-black text-lg tracking-tight text-white">
            FDS<span className="text-orange">.</span>
            <span className="text-white/30 font-mono text-[10px] ml-2 hidden sm:inline tracking-widest">INSTITUT</span>
          </div>
          <div className="flex items-center gap-5 label-mono text-white/50">
            <span className="hidden sm:inline">Berlin {time || "—:—"}</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-mint pulse-ring" />
              Enrolling now
            </span>
          </div>
        </div>
      </div>

      <section className="relative w-full overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[60%] bg-orange/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[45%] h-[60%] bg-plum/40 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* LEFT — kinetic hero */}
            <div className="space-y-10 animate-in fade-in slide-in-from-left-6 duration-700">
              <div className="flex items-center gap-4 label-mono text-orange">
                <span className="h-px w-10 bg-orange" />
                EST. ALGER · TAUGHT WORLDWIDE
              </div>

              <h1 className="font-display font-black leading-[0.85] tracking-[-0.04em] text-[clamp(3.5rem,11vw,9rem)]">
                <span className="block text-white">Sprich</span>
                <span className="block text-orange">Deutsch.</span>
                <span
                  className="block text-transparent"
                  style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.18)" }}
                >
                  Sérieusement.
                </span>
              </h1>

              <p className="max-w-md text-white/60 text-base sm:text-lg leading-relaxed">
                Online German classes built by teachers, not platforms. A1 to C2,
                live with humans, priced for where you actually live.
              </p>

              <div className="flex flex-wrap gap-10 pt-8 border-t border-white/10">
                {[
                  { n: "12k+", l: "Students" },
                  { n: <>4.9<span className="text-orange">★</span></>, l: "Avg Rating" },
                  { n: "A1 → C2", l: "All Levels" },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-3xl font-display font-black text-white">{s.n}</p>
                    <p className="label-mono text-white/40 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — dual doors */}
            <div className="relative flex flex-col gap-6 animate-in fade-in slide-in-from-right-6 duration-700 delay-150">
              <p className="label-mono text-white/30 text-center lg:text-left">Choose your portal</p>

              {/* Algeria */}
              <Link
                to="/dz"
                className="group relative block bg-orange p-8 lg:p-10 rounded-[2.5rem] transition-all duration-500 hover:scale-[1.02] hover:-rotate-1 active:scale-[0.98] shadow-glow"
              >
                <div className="relative z-10 flex justify-between items-start gap-4">
                  <div className="space-y-4 min-w-0">
                    <div className="flex items-center gap-3 label-mono text-ink/60">
                      <span className="text-base leading-none">🇩🇿</span>
                      Algérie
                    </div>
                    <h3 className="font-display font-black text-ink leading-[1.05] text-3xl md:text-5xl">
                      Je suis en<br />Algérie
                    </h3>
                    <p className="text-sm text-ink/70 font-medium max-w-[240px]">
                      CCP, BaridiMob, Edahabia. Cours en ligne, prix local.
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="label-mono text-ink/50 mb-1">From</p>
                    <p className="font-display text-2xl font-black text-ink whitespace-nowrap">7 500 DA</p>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-3 font-display font-black text-xs uppercase tracking-[0.2em] text-ink">
                  Commencer
                  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-3">→</span>
                </div>
              </Link>

              {/* International */}
              <Link
                to="/global"
                className="group relative block bg-white/[0.03] border border-white/10 p-8 lg:p-10 rounded-[2.5rem] backdrop-blur-3xl transition-all duration-500 hover:bg-white/[0.07] hover:border-orange/40 hover:scale-[1.02] hover:rotate-1 active:scale-[0.98]"
              >
                <div className="relative z-10 flex justify-between items-start gap-4 text-white">
                  <div className="space-y-4 min-w-0">
                    <div className="flex items-center gap-3 label-mono text-white/40">
                      <span className="w-2 h-2 rounded-full bg-teal animate-pulse shadow-[0_0_8px_rgba(94,189,185,0.7)]" />
                      International
                    </div>
                    <h3 className="font-display font-black leading-[1.05] text-3xl md:text-5xl">
                      I'm based<br />abroad
                    </h3>
                    <p className="text-sm text-white/50 font-medium max-w-[260px]">
                      Live online. EUR pricing. MENA, Asia, Europe timezones.
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="label-mono text-white/40 mb-1">From</p>
                    <p className="font-display text-2xl font-black whitespace-nowrap">€125</p>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-3 font-display font-black text-xs uppercase tracking-[0.2em] text-white transition-colors group-hover:text-orange">
                  Get started
                  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-3">→</span>
                </div>
              </Link>

              <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 label-mono text-white/30 mt-2">
                <span>No card required</span>
                <span>/</span>
                <span>14-day money-back</span>
                <span>/</span>
                <span>Trial class free</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="relative border-y border-white/5 bg-black/40 py-5 overflow-hidden">
          <div className="marquee">
            {[...TICKER, ...TICKER, ...TICKER].map((w, i) => (
              <span key={i} className="font-display text-2xl sm:text-3xl font-black tracking-tight whitespace-nowrap text-white/80">
                {w} <span className="text-orange mx-5">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why two doors */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <p className="label-mono text-orange mb-4">Why two doors</p>
        <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white max-w-3xl leading-[0.95]">
          Same classroom.<br />
          <span className="text-white/30">Fairer pricing.</span>
        </h2>

        <div className="grid sm:grid-cols-3 gap-10 mt-16">
          {[
            { k: "01", t: "Live with humans", d: "Real teachers, small groups, voices not bots." },
            { k: "02", t: "Built for exams", d: "Goethe & TestDaF prep baked into every level." },
            { k: "03", t: "Pay where you live", d: "DA in Algeria, EUR everywhere else. No FX games." },
          ].map((f) => (
            <div key={f.k} className="group">
              <div className="font-mono text-xs text-orange mb-3">{f.k}</div>
              <h3 className="font-display font-black text-2xl sm:text-3xl mb-3 tracking-tight text-white">{f.t}</h3>
              <p className="text-white/55 leading-relaxed">{f.d}</p>
              <div className="mt-5 h-px w-12 bg-white/15 group-hover:w-full group-hover:bg-orange transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/5 py-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-5 label-mono text-white/30">
          <span>© {new Date().getFullYear()} FDS Institut · Deutsch, gemacht für dich.</span>
          <div className="flex flex-wrap items-center gap-5">
            <a href="mailto:online@fdsinstitut.com" className="hover:text-orange transition-colors">
              online@fdsinstitut.com
            </a>
            <a
              href="https://www.fdsinstitut.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              fdsinstitut.com <span className="text-white/20">↗</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
