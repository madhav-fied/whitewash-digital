"use client";

import { useEffect, useRef } from "react";

export default function Nav() {
    const navRef = useRef<HTMLElement>(null);
    const toggleRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const nav = navRef.current;
        const navToggle = toggleRef.current;
        const doc = document.documentElement;

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

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            navToggle?.removeEventListener("click", onToggle);
            document.removeEventListener("click", closeOnLink);
        };
    }, []);

    return (
        <header className="nav" id="nav" ref={navRef}>
            <div className="wrap nav-inner">
                <a href="#top" className="logo" aria-label="Whitewash Digital — home">
                    <span className="logo-mark" aria-hidden="true">WW</span>
                    <span>WHITEWASH<span className="g1"> / DIGITAL</span></span>
                </a>
                <nav className="nav-links" aria-label="Primary">
                    <a href="#about">About</a>
                    <a href="#process">Process</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#why">Why us</a>
                    <a href="#contact">Contact</a>
                </nav>
                <a href="#contact" className="nav-cta">Start a project →</a>
                <button
                    type="button"
                    className="nav-toggle"
                    id="nav-toggle"
                    ref={toggleRef}
                    aria-label="Open menu"
                    aria-controls="nav-mobile"
                    aria-expanded="false"
                >
                    Menu
                </button>
            </div>
            <nav className="nav-mobile" id="nav-mobile" aria-label="Mobile">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#process">Process</a>
                <a href="#pricing">Pricing</a>
                <a href="#contact">Contact</a>
                <a href="#contact" className="nav-cta" style={{ alignSelf: "flex-start" }}>
                    Start a project →
                </a>
            </nav>
        </header>
    );
}
