"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    const doc = document.documentElement;
    const nav = document.getElementById("nav");
    const navToggle = document.getElementById("nav-toggle");

    const onScroll = () => {
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      doc.style.setProperty("--progress", p.toFixed(4));
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    const onToggle = () => {
      if (!nav || !navToggle) return;
      const open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    navToggle?.addEventListener("click", onToggle);

    const closeOnLink = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest(".nav-mobile a") && nav?.classList.contains("open")) {
        nav.classList.remove("open");
        navToggle?.setAttribute("aria-expanded", "false");
        navToggle?.setAttribute("aria-label", "Open menu");
      }
    };
    document.addEventListener("click", closeOnLink);

    const themeFab = document.getElementById("theme-fab");
    const onTheme = () => {
      const current = document.documentElement.getAttribute("data-theme") ?? "dark";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      if (themeFab) themeFab.textContent = next === "dark" ? "☾ Dark" : "☀ Light";
      try {
        localStorage.setItem("ww-theme", next);
      } catch { }
    };
    themeFab?.addEventListener("click", onTheme);
    try {
      const saved = localStorage.getItem("ww-theme");
      if (saved === "light" || saved === "dark") {
        document.documentElement.setAttribute("data-theme", saved);
        if (themeFab) themeFab.textContent = saved === "dark" ? "☾ Dark" : "☀ Light";
      }
    } catch { }

    const preloader = document.getElementById("preloader");
    const leave = () => preloader?.classList.add("leave");
    const removePre = () => preloader?.remove();
    const tLeave = window.setTimeout(leave, 1700);
    const tRemove = window.setTimeout(removePre, 2400);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      navToggle?.removeEventListener("click", onToggle);
      document.removeEventListener("click", closeOnLink);
      themeFab?.removeEventListener("click", onTheme);
      window.clearTimeout(tLeave);
      window.clearTimeout(tRemove);
    };
  }, []);

  return (
    <>
      <div className="preloader" id="preloader" aria-hidden="true">
        <svg
          className="pre-brushes"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="ww-brush" x="-2%" y="-10%" width="104%" height="120%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.028"
                numOctaves="2"
                seed="7"
              />
              <feDisplacementMap in="SourceGraphic" scale="9" />
            </filter>
          </defs>
          <g
            filter="url(#ww-brush)"
            fill="none"
            stroke="#0a0a0a"
            strokeLinecap="round"
          >
            <path
              className="stroke s1"
              pathLength={1}
              strokeWidth={56}
              d="M 80 150 C 340 90, 760 250, 1120 130"
            />
            <path
              className="stroke s2"
              pathLength={1}
              strokeWidth={44}
              d="M 100 470 C 360 370, 780 520, 1100 420"
            />
            <path
              className="stroke s3"
              pathLength={1}
              strokeWidth={14}
              d="M 620 70 L 600 540"
            />
            <path
              className="stroke s4"
              pathLength={1}
              strokeWidth={10}
              d="M 220 520 L 980 90"
            />
          </g>
        </svg>
        <div className="pre-name">
          WHITEWASH DIGITAL<span className="dot">.</span>
        </div>
      </div>
      <button
        id="theme-fab"
        className="theme-fab"
        type="button"
        aria-label="Toggle theme"
      >
        ☾ Dark
      </button>
    </>
  );
}
