"use client";

import { useEffect } from "react";

export default function Preloader() {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    const preNameEl = document.querySelector<HTMLElement>(".pre-name");
    const leave = () => preloader?.classList.add("leave");
    const removePre = () => preloader?.remove();

    const TEXT = "WHITEWASH DIGITAL.";
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const charTimeouts: number[] = [];

    if (preNameEl) {
      if (reducedMotion) {
        preNameEl.textContent = TEXT;
      } else {
        preNameEl.textContent = "";
        const charDelay = 1200 / TEXT.length;
        TEXT.split("").forEach((char, i) => {
          charTimeouts.push(
            window.setTimeout(() => {
              if (preNameEl) preNameEl.textContent += char;
            }, i * charDelay)
          );
        });
      }
    }

    const tLeave = window.setTimeout(leave, reducedMotion ? 400 : 1500);
    const tRemove = window.setTimeout(removePre, reducedMotion ? 1000 : 2500);

    return () => {
      charTimeouts.forEach(window.clearTimeout);
      window.clearTimeout(tLeave);
      window.clearTimeout(tRemove);
    };
  }, []);

  return (
    <div className="preloader" id="preloader" aria-hidden="true">
      <div className="pre-name" />
    </div>
  );
}
