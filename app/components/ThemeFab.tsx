"use client";

import { useEffect, useRef } from "react";

export default function ThemeFab() {
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const btn = btnRef.current;

        const onTheme = () => {
            const current = document.documentElement.getAttribute("data-theme") ?? "dark";
            const next = current === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", next);
            if (btn) btn.textContent = next === "dark" ? "☾ Dark" : "☀ Light";
            try { localStorage.setItem("ww-theme", next); } catch { }
        };
        btn?.addEventListener("click", onTheme);

        try {
            const saved = localStorage.getItem("ww-theme");
            if (saved === "light" || saved === "dark") {
                document.documentElement.setAttribute("data-theme", saved);
                if (btn) btn.textContent = saved === "dark" ? "☾ Dark" : "☀ Light";
            }
        } catch { }

        return () => {
            btn?.removeEventListener("click", onTheme);
        };
    }, []);

    return (
        <button
            ref={btnRef}
            id="theme-fab"
            className="theme-fab"
            type="button"
            aria-label="Toggle theme"
        >
            ☾ Dark
        </button>
    );
}
