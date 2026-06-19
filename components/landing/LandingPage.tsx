"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TIKTOK_SVG = (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13.2a8.16 8.16 0 005.58 2.18V11.9a4.83 4.83 0 01-3.77-1.48V6.69z"/>
  </svg>
);

const TIKTOK_SVG_LG = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13.2a8.16 8.16 0 005.58 2.18V11.9a4.83 4.83 0 01-3.77-1.48V6.69z"/>
  </svg>
);

const TEXT_PAIRS = [
  ['"I think"', '"I am of the opinion"'],
  ['"Bad idea"', '"That is ill-advised"'],
  ['"I\'m ready"', '"I am prepared"'],
  ['"Very hard"', '"Exceedingly difficult"'],
  ['"A lot of"', '"A multitude of"'],
  ['"Good"', '"Exceptional"'],
  ['"I\'m sure"', '"I am confident"'],
  ['"Help me"', '"I would appreciate your assistance"'],
];

const FLIP_DATA = [
  { normal: "I think",        advanced: "I am of the opinion",              category: "Basic → Advanced" },
  { normal: "Bad idea",       advanced: "That is ill-advised",              category: "Basic → Advanced" },
  { normal: "I'm ready",      advanced: "I am prepared",                    category: "Basic → Advanced" },
  { normal: "Very hard",      advanced: "Exceedingly difficult",            category: "Basic → Advanced" },
  { normal: "A lot of",       advanced: "A multitude of",                   category: "Basic → Advanced" },
  { normal: "Good job",       advanced: "Outstanding work",                 category: "Basic → Advanced" },
  { normal: "I don't know",   advanced: "I am not certain",                 category: "Formal"           },
  { normal: "Shut up!",       advanced: "I would appreciate some silence",  category: "Rude → Polite"    },
  { normal: "Piece of cake",  advanced: "That was remarkably straightforward", category: "Idiom Upgrade" },
];

export default function LandingPage() {
  const normalRef    = useRef<HTMLSpanElement>(null);
  const advancedRef  = useRef<HTMLSpanElement>(null);
  const pairIndex    = useRef(0);
  const navRef       = useRef<HTMLElement>(null);
  const flippedCards = useRef<Set<number>>(new Set());
  // Email assembled client-side only — invisible to scrapers that skip JS
  const emailUser   = "support";
  const emailDomain = "englishtobe.info";
  const fullEmail   = `${emailUser}@${emailDomain}`;

  /* ── Text cycling ── */
  useEffect(() => {
    const cycle = () => {
      const n = normalRef.current;
      const a = advancedRef.current;
      if (!n || !a) return;
      n.style.opacity = "0"; n.style.transform = "translateX(-10px)";
      a.style.opacity = "0"; a.style.transform = "translateX(10px)";
      setTimeout(() => {
        pairIndex.current = (pairIndex.current + 1) % TEXT_PAIRS.length;
        n.textContent = TEXT_PAIRS[pairIndex.current][0];
        a.textContent = TEXT_PAIRS[pairIndex.current][1];
        n.style.opacity = "1"; n.style.transform = "translateX(0)";
        a.style.opacity = "1"; a.style.transform = "translateX(0)";
      }, 400);
    };
    const id = setInterval(cycle, 3000);
    return () => clearInterval(id);
  }, []);

  /* ── Scroll reveal ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* ── Navbar on scroll ── */
  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return;
      navRef.current.classList.toggle("nav-scrolled", window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Counter animation ── */
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const target = parseInt(el.dataset.target ?? "0");
        let current = 0;
        const step = target / (1500 / 16);
        const tick = () => {
          current += step;
          if (current >= target) { el.textContent = String(target); return; }
          el.textContent = String(Math.floor(current));
          requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll(".counter").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* ── Streak animation ── */
  useEffect(() => {
    let animated = false;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting || animated) return;
        animated = true;
        const days = document.querySelectorAll<HTMLElement>(".streak-day");
        const countEl = document.getElementById("streakCount");
        let count = 0;
        days.forEach((day, i) => {
          setTimeout(() => {
            day.style.background = "rgba(255,217,61,0.15)";
            day.style.borderColor = "rgba(255,217,61,0.4)";
            day.style.color = "#FFD93D";
            day.textContent = "✓";
            if (countEl) countEl.textContent = String(++count);
          }, i * 300);
        });
      });
    }, { threshold: 0.5 });
    const el = document.getElementById("streakDays");
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const toggleFlip = (i: number) => {
    const el = document.getElementById(`flip-${i}`);
    if (!el) return;
    if (flippedCards.current.has(i)) {
      el.classList.remove("flipped");
      flippedCards.current.delete(i);
    } else {
      el.classList.add("flipped");
      flippedCards.current.add(i);
    }
  };

  return (
    <div className="font-sans text-white antialiased bg-[#050505] overflow-x-hidden">
      {/* ── NAVBAR ── */}
      <nav ref={navRef} id="navbar" className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#050505] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="English to be" width={32} height={32} />
            <span className="text-lg font-semibold tracking-tight">English to be</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#streaks"  className="hover:text-white transition-colors">Streaks</a>
            <a href="#upgrade"  className="hover:text-white transition-colors">Practice</a>
            <a href="#pricing"  className="hover:text-white transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://tiktok.com/@english_tobe" target="_blank" rel="noopener noreferrer"
               className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all">
              {TIKTOK_SVG}
            </a>
            <Link href="/home" className="px-5 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors">
              Start Learning
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-16 grid-pattern">
        <div className="absolute top-20 left-10 w-[400px] h-[400px] glow-pink opacity-[0.07] rounded-full" />
        <div className="absolute bottom-20 right-10 w-[350px] h-[350px] glow-cyan opacity-[0.06] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] glow-purple opacity-[0.03] rounded-full" />

        <div className="max-w-[90rem] mx-auto px-6 pt-20 pb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[33fr_41fr_25fr] gap-8 xl:gap-12 items-start relative z-10 w-full">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.04em] leading-[0.92]">
              <span className="gradient-text">UPGRADE</span><br />
              <span className="text-white">YOUR</span><br />
              <span className="text-white">ENGLISH</span>
            </h1>
            <div className="reveal reveal-delay-2 mt-8 h-14 flex items-center text-base sm:text-lg overflow-hidden">
              <span ref={normalRef} className="text-neutral-500 transition-all duration-500">&quot;I think&quot;</span>
              <span className="mx-3 text-[#00E5FF] text-2xl font-light">→</span>
              <span ref={advancedRef} className="text-white font-medium transition-all duration-500">&quot;I am of the opinion&quot;</span>
            </div>
            <p className="reveal reveal-delay-3 mt-4 text-neutral-500 text-sm sm:text-base max-w-md leading-relaxed">
              Words, idioms, sentences &amp; games — all in one place. Stop sounding basic. Start sounding brilliant.
            </p>
            <div className="reveal reveal-delay-4 mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/home" className="group px-7 py-3.5 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 text-sm w-fit">
                Start for Free
                <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
              </Link>
              <a href="https://tiktok.com/@english_tobe" target="_blank" rel="noopener noreferrer"
                 className="px-7 py-3.5 border border-white/10 rounded-full text-neutral-300 hover:border-white/20 hover:text-white transition-all flex items-center justify-center gap-2.5 text-sm w-fit">
                {TIKTOK_SVG}
                Follow on TikTok
              </a>
            </div>
            <div className="reveal reveal-delay-5 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-neutral-600">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Free to start</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" /> No ads</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#FF3D71]" /> 1500+ words</span>
            </div>
          </div>

          {/* Middle */}
          <div className="reveal reveal-delay-3 flex flex-col items-center w-full pt-10 lg:pt-0">
            <img src="/man_phone.jpg" alt="Man using phone"
                 style={{ maxWidth: "320px", width: "100%", height: "auto", objectFit: "contain", margin: "0 auto 24px auto", display: "block" }}
                 className="opacity-90" />
            <div className="w-full space-y-3 text-sm text-neutral-400 leading-relaxed bg-zinc-900 border border-white/10 p-5 sm:p-6 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/5 rounded-full blur-[50px] pointer-events-none" />
              <p>Are you learning English but feel stuck? You understand — but speaking is hard. You know words — but you still think in your own language.</p>
              <p><span className="text-white font-semibold">English to be</span> is made for you.</p>
              <p>No translations. No shortcuts. Just real English — through games, words, phrases and idioms that you will actually remember. You don&apos;t just learn English. You start to think in English.</p>
              <p>This works. Because this is how the brain learns.</p>
              <p className="text-[#00E5FF] font-semibold pt-1">Level A2 and above. Make English yours.</p>
            </div>
          </div>

          {/* Right – Phone mockup */}
          <div className="reveal reveal-delay-4 flex justify-center lg:justify-center pt-10 lg:pt-0">
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-content">
                <div className="flex justify-between items-center text-[10px] text-neutral-500 mb-4 px-1">
                  <span>9:41</span>
                  <div className="flex gap-1 items-center">
                    <span>▲</span><span>WiFi</span><span>🔋</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4 px-1">
                  <div className="flex items-center gap-1.5">
                    <Image src="/logo.svg" alt="Logo" width={20} height={20} />
                    <div>
                      <h1 className="text-[10px] font-bold">English to be</h1>
                      <p className="text-[8px] text-zinc-500">Keep your streak alive!</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-2 py-0.5">
                    <span className="fire-pulse inline-block text-yellow-400 text-[10px]">🔥</span>
                    <span className="text-[10px] font-semibold text-yellow-400">Day 4</span>
                  </div>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-3 mb-4 border border-white/5">
                  <div className="mb-3 flex items-center justify-between">
                    {["S","M","T","W","T","F","S"].map((d, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <span className="text-[9px] font-medium text-white">{d}</span>
                        <div className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] ${i < 4 ? "border border-yellow-500/60 bg-yellow-500/20 text-yellow-400" : i === 4 ? "border border-[#00E5FF]/40 bg-[#00E5FF]/10 text-[#00E5FF]/60" : "border border-white/10 bg-white/[0.03] text-zinc-700"}`}>
                          {i < 4 ? "✓" : i === 4 ? "·" : ""}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mb-1.5 flex items-center justify-between text-[10px]">
                    <span className="text-zinc-500">Daily Progress</span>
                    <span className="text-[#00E5FF]">2/4 tasks</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-2.5">
                    <div className="h-full bg-[#00E5FF] rounded-full" style={{ width: "50%" }} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1 rounded-full bg-yellow-500/10 px-2 py-0.5 text-[9px] font-semibold text-yellow-400">
                      🔥 Day 4
                    </div>
                    <div className="flex items-center gap-1 text-[8px] text-zinc-500">
                      <span>7 days</span><span className="text-zinc-600">=</span>
                      <span className="text-yellow-400 font-semibold">⭐ 1000</span>
                    </div>
                  </div>
                </div>
                <h2 className="mb-2 text-[11px] font-semibold">Quick Start</h2>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[["📖","Words","8 categories"],["💬","Sentences","A1 to C2"],["💡","Idioms","7 topics"],["🎮","Games","Wordle & more"]].map(([icon, title, sub]) => (
                    <div key={title} className="bg-white/[0.04] rounded-lg p-2.5 border border-white/5">
                      <div className="text-[#00E5FF] mb-1.5">{icon}</div>
                      <div className="text-[10px] font-medium">{title}</div>
                      <div className="text-[8px] text-zinc-500">{sub}</div>
                    </div>
                  ))}
                </div>
                <div className="relative overflow-hidden rounded-xl p-[1px]">
                  <div className="absolute inset-[-500%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00f2ff_0%,#7000ff_50%,#00f2ff_100%)]" />
                  <div className="relative h-full w-full rounded-xl bg-[#0a0a0a] p-3">
                    <div className="mb-1.5 text-[8px] uppercase tracking-[0.3em] text-zinc-500">Word of the Day</div>
                    <div className="mb-1 flex items-center gap-1.5">
                      <span className="text-[10px] text-zinc-500 line-through">Very tired</span>
                      <span className="text-[#00E5FF] text-[10px]">→</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="text-sm font-semibold">Exhausted</div>
                      <span className="text-[9px] text-zinc-400">/ɪɡˈzɔːstɪd/</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#0a0a0a]/90 backdrop-blur-sm border-t border-white/5 flex items-center justify-around px-4">
                  <span className="text-white text-lg">🏠</span>
                  <span className="text-neutral-600 text-lg">🧠</span>
                  <span className="text-neutral-600 text-lg">👤</span>
                  <span className="text-neutral-600 text-lg">🛍️</span>
                  <span className="text-neutral-600 text-lg">⚙️</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600 text-xs z-10">
          <span>Scroll</span>
          <div className="w-5 h-8 rounded-full border border-neutral-700 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-neutral-500 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-12 sm:py-16 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl sm:text-5xl font-bold tracking-tight">
              Everything You Need<br />to <span className="gradient-text">Sound Native</span>
            </h2>
            <p className="reveal reveal-delay-1 mt-4 text-neutral-400 max-w-lg mx-auto">From basic vocabulary to advanced idioms — structured, gamified, and actually effective.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Words */}
            <Link href="/words" className="reveal reveal-delay-1 cat-card bg-zinc-900 border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden block hover:opacity-95 cursor-pointer" style={{ ["--glow-color" as string]: "rgba(255,61,113,0.12)", ["--glow-border" as string]: "rgba(255,61,113,0.25)" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF3D71]/5 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#FF3D71]/10 flex items-center justify-center">
                    <span className="text-[#FF3D71] text-xl">📖</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Words</h3>
                    <span className="text-[11px] text-neutral-500">8 categories</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  {["Pronunciation & Silent Letters","Basic → Advanced (Health & more)","Synonyms (Health, Education, Tech, Environment)","Antonyms, Rude → Polite, Formal → Informal","Time Words, Slang & Texting Language"].map(t => (
                    <div key={t} className="flex items-center gap-2 text-neutral-400"><span className="w-1 h-1 rounded-full bg-[#FF3D71]/60" />{t}</div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Synonym Pair","Memory","Multiple Choice","Letter Hunt"].map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-[#FF3D71]/10 text-[#FF3D71] text-[11px] font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
            {/* Sentences */}
            <div className="reveal reveal-delay-2 cat-card bg-zinc-900 border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden" style={{ ["--glow-color" as string]: "rgba(0,229,255,0.12)", ["--glow-border" as string]: "rgba(0,229,255,0.25)" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/5 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center">
                    <span className="text-[#00E5FF] text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Sentences</h3>
                    <span className="text-[11px] text-neutral-500">4 categories</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  {['A1 to C2 Phrases — level by level','Phrasal Verbs — the real way natives speak','"Don\'t say: Very easy" — stop overusing words','Slang & Modern English expressions'].map(t => (
                    <div key={t} className="flex items-center gap-2 text-neutral-400"><span className="w-1 h-1 rounded-full bg-[#00E5FF]/60" />{t}</div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["A1","B2","C1","C2"].map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-[#00E5FF]/10 text-[#00E5FF] text-[11px] font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            {/* Idioms */}
            <div className="reveal reveal-delay-3 cat-card bg-zinc-900 border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden" style={{ ["--glow-color" as string]: "rgba(255,217,61,0.1)", ["--glow-border" as string]: "rgba(255,217,61,0.2)" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD93D]/5 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#FFD93D]/10 flex items-center justify-center">
                    <span className="text-[#FFD93D] text-xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Idioms</h3>
                    <span className="text-[11px] text-neutral-500">7 categories</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  {["Food Idioms","Weather Idioms","Emotional Idioms","Body Parts Idioms","Animal Idioms","Business Idioms","Slang Idioms"].map(t => (
                    <div key={t} className="flex items-center gap-2 text-neutral-400"><span className="w-1 h-1 rounded-full bg-[#FFD93D]/60" />{t}</div>
                  ))}
                </div>
              </div>
            </div>
            {/* Games */}
            <div className="reveal reveal-delay-4 cat-card bg-zinc-900 border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden" style={{ ["--glow-color" as string]: "rgba(168,85,247,0.12)", ["--glow-border" as string]: "rgba(168,85,247,0.25)" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#A855F7]/5 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#A855F7]/10 flex items-center justify-center">
                    <span className="text-[#A855F7] text-xl">🎮</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Games</h3>
                    <span className="text-[11px] text-neutral-500">3 mini-games</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {[["🔤","Wordle","Guess the 5-letter word"],["🧠","Memory","Match synonym pairs"],["🤝","Negotiation","Choose the right response"]].map(([icon, title, sub]) => (
                    <div key={title} className="flex items-center gap-3 bg-zinc-900 rounded-xl p-3 border border-white/10">
                      <span className="text-xl">{icon}</span>
                      <div>
                        <div className="text-sm font-medium">{title}</div>
                        <div className="text-[11px] text-neutral-500">{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STREAKS ── */}
      <section id="streaks" className="py-12 sm:py-16 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD93D]/20 bg-[#FFD93D]/[0.05] text-[#FFD93D] text-xs font-medium mb-6">
              <span className="fire-pulse inline-block">🔥</span> Gamified Learning
            </div>
            <h2 className="reveal reveal-delay-1 text-3xl sm:text-5xl font-bold tracking-tight">
              Build Your <span className="gradient-text">Streak</span>,<br />Earn <span className="gradient-text">Points</span>
            </h2>
            <p className="reveal reveal-delay-2 mt-4 text-neutral-400 max-w-lg mx-auto">Every day you practice, your streak grows. Every task you complete, you earn points. Consistency beats intensity.</p>
          </div>
          <div className="reveal reveal-delay-2 max-w-md mx-auto mb-16">
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm font-medium">This Week</span>
                <span className="flex items-center gap-1.5 text-[#FFD93D] text-sm font-semibold">
                  <span className="fire-pulse inline-block text-base">🔥</span>
                  <span id="streakCount">0</span> day streak
                </span>
              </div>
              <div className="grid grid-cols-7 gap-2" id="streakDays">
                {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => (
                  <div key={d} className="flex flex-col items-center gap-1.5">
                    <span className="text-[10px] text-neutral-600">{d}</span>
                    <div className="streak-day w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-xs text-neutral-600 transition-all duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[["+","counter","10","#FF3D71","✓","per task completed"],
              ["+","counter","200","#00E5FF","🔥","per daily streak"],
              ["+","counter","500","#FFD93D","🏆","per level unlocked"]].map(([, cls, target, color, icon, label], i) => (
              <div key={i} className={`reveal reveal-delay-${i+3} bg-zinc-900 border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/[0.05] transition-all duration-300`}>
                <div className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: `${color}1a` }}>
                  <span className="text-xl" style={{ color }}>{icon}</span>
                </div>
                <div className="text-2xl font-bold text-white">+<span className={cls} data-target={target}>0</span></div>
                <div className="text-xs text-neutral-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPGRADE / FLIP CARDS ── */}
      <section id="upgrade" className="py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] glow-pink opacity-[0.04] rounded-full" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] glow-cyan opacity-[0.04] rounded-full" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF3D71]/20 bg-[#FF3D71]/[0.05] text-[#FF3D71] text-xs font-medium mb-6">
              ⇄ Before → After
            </div>
            <h2 className="reveal reveal-delay-1 text-3xl sm:text-5xl font-bold tracking-tight">
              Stop Sounding <span className="text-neutral-500">Basic</span><br />Start Sounding <span className="gradient-text">Brilliant</span>
            </h2>
            <p className="reveal reveal-delay-2 mt-4 text-neutral-500 text-sm">Tap any card to flip</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FLIP_DATA.map((item, i) => (
              <div key={i} id={`flip-${i}`}
                   className={`reveal reveal-delay-${Math.min(i % 3 + 1, 6)} flip-card`}
                   style={{ height: "180px" }}
                   onClick={() => toggleFlip(i)}>
                <div className="flip-card-inner w-full h-full">
                  <div className="flip-card-front w-full h-full bg-zinc-900 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/[0.05] transition-colors">
                    <div>
                      <span className="text-[10px] text-neutral-600 uppercase tracking-wider">{item.category}</span>
                      <div className="mt-3 text-xl text-neutral-300 font-medium">{item.normal}</div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-neutral-600">
                      👆 Tap to upgrade
                    </div>
                  </div>
                  <div className="flip-card-back w-full h-full bg-gradient-to-br from-[#FF3D71]/10 to-[#00E5FF]/10 border border-[#FF3D71]/20 rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-[#00E5FF] uppercase tracking-wider font-medium">✨ Upgraded</span>
                      <div className="mt-3 text-xl text-white font-semibold">{item.advanced}</div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                      ← Tap to flip back
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GAMES ── */}
      <section id="games" className="py-12 sm:py-16 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#A855F7]/20 bg-[#A855F7]/[0.05] text-[#A855F7] text-xs font-medium mb-6">
              🎮 Learn Through Play
            </div>
            <h2 className="reveal reveal-delay-1 text-3xl sm:text-5xl font-bold tracking-tight">
              Games That <span className="gradient-text">Stick</span>
            </h2>
            <p className="reveal reveal-delay-2 mt-4 text-neutral-400 max-w-lg mx-auto">4 game modes across every topic. You won&apos;t even feel like you&apos;re studying.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="reveal reveal-delay-1 bg-zinc-900 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#FF3D71]/10 flex items-center justify-center text-lg">🔗</div>
                <h3 className="font-semibold">Synonym Pair</h3>
              </div>
              <div className="flex items-center justify-center gap-4 py-4">
                <div className="px-5 py-3 bg-[#FF3D71]/10 border border-[#FF3D71]/20 rounded-xl text-[#FF3D71] font-medium text-sm" style={{ animation: "bounceSubtle 2s ease-in-out infinite" }}>Happy</div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-px bg-gradient-to-r from-[#FF3D71]/50 to-[#00E5FF]/50" />
                  <span className="text-neutral-600">🔗</span>
                  <div className="w-8 h-px bg-gradient-to-r from-[#00E5FF]/50 to-[#FF3D71]/50" />
                </div>
                <div className="px-5 py-3 bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded-xl text-[#00E5FF] font-medium text-sm" style={{ animation: "bounceSubtle 2s ease-in-out infinite 0.3s" }}>Delighted</div>
              </div>
              <p className="text-xs text-neutral-500 text-center mt-2">Match words with their advanced synonyms</p>
            </div>
            <div className="reveal reveal-delay-2 bg-zinc-900 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center text-lg">🧠</div>
                <h3 className="font-semibold">Memory</h3>
              </div>
              <div className="memory-demo grid grid-cols-4 gap-2 max-w-[220px] mx-auto py-4">
                {[["Big","text"],["?","neutral"],["?","neutral"],["Vast","text"],["?","neutral"],["?","neutral"],["Small","text"],["?","neutral"]].map(([t, type], i) => (
                  <div key={i} className={`tile w-full aspect-square rounded-lg flex items-center justify-center text-[10px] font-medium ${type === "text" ? "bg-[#00E5FF]/15 border border-[#00E5FF]/20 text-[#00E5FF]" : "bg-white/[0.04] border border-white/[0.08] text-neutral-600 text-lg"}`}>{type === "text" ? t : "?"}</div>
                ))}
              </div>
              <p className="text-xs text-neutral-500 text-center mt-2">Find matching synonym pairs in the grid</p>
            </div>
            <div className="reveal reveal-delay-3 bg-zinc-900 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#FFD93D]/10 flex items-center justify-center text-lg">✅</div>
                <h3 className="font-semibold">Multiple Choice</h3>
              </div>
              <div className="max-w-xs mx-auto py-2">
                <p className="text-sm text-neutral-300 mb-4">&quot;Very tired&quot; → ?</p>
                <div className="space-y-2">
                  <div className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-neutral-400">A. Very sleepy</div>
                  <div className="px-4 py-2.5 rounded-xl bg-[#FFD93D]/10 border border-[#FFD93D]/30 text-sm text-[#FFD93D] font-medium">B. Exhausted ✓</div>
                  <div className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-neutral-400">C. Very fatigued</div>
                  <div className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-sm text-neutral-400">D. Much tired</div>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-4 bg-zinc-900 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#A855F7]/10 flex items-center justify-center text-lg">🔍</div>
                <h3 className="font-semibold">Letter Hunt</h3>
              </div>
              <div className="max-w-xs mx-auto py-4">
                <p className="text-xs text-neutral-500 mb-3 text-center">Fill in the missing letters</p>
                <div className="flex justify-center gap-1.5 mb-4 flex-wrap">
                  {"EXHAUSTED".split("").map((letter, i) => (
                    <span key={i} className={`w-9 h-11 rounded-lg flex items-center justify-center text-lg font-semibold ${i === 2 ? "bg-white/[0.04] border border-white/10 text-[#FFD93D]" : "bg-[#A855F7]/15 border border-[#A855F7]/25 text-[#A855F7]"}`}
                          style={i === 2 ? { animation: "bounceSubtle 1.5s ease-in-out infinite" } : {}}>
                      {i === 2 ? "H" : letter}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-neutral-500 text-center">Hint: means &quot;very tired&quot;</p>
              </div>
            </div>
          </div>
          <div className="reveal mt-8 bg-zinc-900 border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/[0.05] transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF3D71]/20 to-[#00E5FF]/20 flex items-center justify-center text-lg">🔤</div>
              <h3 className="font-semibold">Wordle — English Edition</h3>
            </div>
            <div className="wordle-demo flex justify-center gap-1.5 mb-4">
              {[["S","cyan"],["M","yellow"],["A","neutral"],["R","neutral"],["T","neutral"]].map(([l, c], i) => (
                <div key={i} className={`letter w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center text-base font-bold ${c === "cyan" ? "bg-[#00E5FF]/20 border border-[#00E5FF]/30 text-[#00E5FF]" : c === "yellow" ? "bg-[#FFD93D]/15 border border-[#FFD93D]/25 text-[#FFD93D]" : "bg-white/[0.04] border border-white/[0.08] text-neutral-400"}`}>{l}</div>
              ))}
            </div>
            <p className="text-xs text-neutral-500">Guess advanced English words in 6 tries</p>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <section className="py-12 border-y border-white/[0.04] overflow-hidden">
        <div className="ticker-track flex gap-8 whitespace-nowrap">
          {["WORDS","SENTENCES","IDIOMS","GAMES","STREAKS","WORDS","SENTENCES","IDIOMS","GAMES","STREAKS"].map((w, i) => (
            <span key={i} className={`text-4xl sm:text-5xl font-bold tracking-tight ${i % 2 === 0 ? "text-white/[0.03]" : "text-[#FF3D71]/10"}`}>{i % 2 === 0 ? w : "•"}</span>
          ))}
        </div>
      </section>

      {/* ── SOCIAL CTA ── */}
      <section id="download" className="py-12 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF3D71]/5 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00E5FF]/5 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="reveal text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Follow Along,<br />
              <span className="gradient-text">Learn Every Day</span>
            </h2>
            <p className="reveal reveal-delay-1 mt-4 text-neutral-400 max-w-lg mx-auto">
              Daily English tips on TikTok and Instagram — then open the app to practise what you learned.
            </p>
          </div>

          {/* Two social cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            {/* TikTok card */}
            <div className="reveal reveal-delay-2 bg-zinc-900 border border-white/10 rounded-2xl p-8 flex flex-col gap-5 hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13.2a8.16 8.16 0 005.58 2.18V11.9a4.83 4.83 0 01-3.77-1.48V6.69z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">TikTok</div>
                  <div className="font-semibold text-white">@english_tobe</div>
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">224,000+</div>
                <div className="text-sm text-neutral-400 mt-1">followers on TikTok</div>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed flex-1">
                Daily vocabulary, idioms and tips — short videos that stick in your memory.
              </p>
              <a href="https://tiktok.com/@english_tobe" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all text-sm w-fit">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13.2a8.16 8.16 0 005.58 2.18V11.9a4.83 4.83 0 01-3.77-1.48V6.69z"/></svg>
                Follow on TikTok
              </a>
            </div>

            {/* Instagram card */}
            <div className="reveal reveal-delay-3 bg-zinc-900 border border-white/10 rounded-2xl p-8 flex flex-col gap-5 hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FF3D71]/20 to-[#A855F7]/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#FF3D71]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">Instagram</div>
                  <div className="font-semibold text-white">@english_tobe</div>
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">8,500+</div>
                <div className="text-sm text-neutral-400 mt-1">followers on Instagram</div>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed flex-1">
                Vocabulary cards, idiom posts and learning motivation — every day in your feed.
              </p>
              <a href="https://instagram.com/english_tobe" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/10 text-neutral-300 font-semibold rounded-full hover:border-white/20 hover:text-white transition-all text-sm w-fit">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Follow on Instagram
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/auth/signup" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all text-base">
              Start Learning for Free <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-12 sm:py-16 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl sm:text-5xl font-bold tracking-tight">
              <span className="gradient-text">Pricing</span>
            </h2>
            <p className="reveal reveal-delay-1 mt-4 text-neutral-400 max-w-lg mx-auto">Get full access to all words, idioms, sentences, and games. No hidden fees.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* 1 Month */}
            <div className="reveal reveal-delay-2 bg-zinc-900 border border-white/10 rounded-2xl p-8 text-center flex flex-col">
              <h3 className="text-lg font-semibold mb-2">1 Month</h3>
              <div className="text-3xl font-bold text-white mb-6">$7.99</div>
              <ul className="text-sm text-neutral-400 space-y-3 mb-8 flex-1 text-left">
                {["All Words categories","All Idioms categories","Sentences A1-C2","All Games","Future premium updates"].map(f => (
                  <li key={f} className="flex items-center gap-2"><span className="text-[#00E5FF]">✓</span> {f}</li>
                ))}
              </ul>
              <Link href="/store" className="w-full py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors font-medium block text-center">Choose Plan</Link>
            </div>
            {/* 3 Months – popular */}
            <div className="reveal reveal-delay-3 bg-gradient-to-b from-[#00E5FF]/10 to-transparent border border-[#00E5FF]/30 rounded-2xl p-8 text-center relative flex flex-col scale-105 shadow-[0_0_40px_rgba(0,229,255,0.1)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00E5FF] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
              <h3 className="text-lg font-semibold mb-2">3 Months</h3>
              <div className="text-4xl font-bold text-white mb-2">$19.99</div>
              <div className="text-xs text-[#00E5FF] mb-6">Save 16%</div>
              <ul className="text-sm text-neutral-300 space-y-3 mb-8 flex-1 text-left">
                {["All Words categories","All Idioms categories","Sentences A1-C2","All Games","Future premium updates"].map(f => (
                  <li key={f} className="flex items-center gap-2"><span className="text-[#00E5FF]">✓</span> {f}</li>
                ))}
              </ul>
              <Link href="/store" className="w-full py-3 bg-[#00E5FF] text-black rounded-xl hover:bg-[#00E5FF]/90 transition-colors font-semibold block text-center">Choose Plan</Link>
            </div>
            {/* 6 Months */}
            <div className="reveal reveal-delay-4 bg-zinc-900 border border-white/10 rounded-2xl p-8 text-center flex flex-col">
              <h3 className="text-lg font-semibold mb-2">6 Months</h3>
              <div className="text-3xl font-bold text-white mb-2">$34.99</div>
              <div className="text-xs text-[#FF3D71] mb-6">Save 27%</div>
              <ul className="text-sm text-neutral-400 space-y-3 mb-8 flex-1 text-left">
                {["All Words categories","All Idioms categories","Sentences A1-C2","All Games","Future premium updates"].map(f => (
                  <li key={f} className="flex items-center gap-2"><span className="text-[#00E5FF]">✓</span> {f}</li>
                ))}
              </ul>
              <Link href="/store" className="w-full py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors font-medium block text-center">Choose Plan</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.04] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.svg" alt="English to be" width={28} height={28} />
              <span className="text-sm font-semibold tracking-tight">English to be</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-neutral-600">
              <Link href="/about/privacy-policy" className="hover:text-neutral-400 transition-colors">Privacy Policy</Link>
              <Link href="/about/terms-of-use"   className="hover:text-neutral-400 transition-colors">Terms of Service</Link>
              <Link href="/contact"              className="hover:text-neutral-400 transition-colors">Contact Us</Link>
              {/* Email assembled client-side — prevents most spam scrapers */}
              <a
                href={`mailto:${fullEmail}`}
                className="hover:text-neutral-400 transition-colors"
              >
                {fullEmail}
              </a>
            </div>
            <p className="text-xs text-neutral-700">© 2025 English to be. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
