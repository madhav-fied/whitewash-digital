export default function Hero() {
    return (
        <section id="top" className="hero wrap">
            <div className="hero-meta">
                <span className="pulse">Accepting 3 projects · Q2 · 2026</span>
                <span className="g1">Est. 2023 — Chennai, IN</span>
                <span className="g1">[ 01 / Web presence ]</span>
            </div>

            <h1 className="hero-headline">
                <span className="line">Great work</span>
                <span className="line g1">deserves a greater</span>
                <span className="line">
                    online <span className="accent">presence.</span>
                </span>
            </h1>

            <div className="hero-grid">
                <p className="hero-sub">
                    We help small and mid-sized businesses{" "}
                    <span className="g1">
                        — contractors, developers, builders, boutique studios —
                    </span>{" "}
                    clean up, sharpen and future-proof the way they show up online.
                </p>
                <div
                    className="hero-photo"
                    role="img"
                    aria-label="A clean workspace — the kind of presence we build"
                >
                    <span>/ workshop · march 2026</span>
                </div>
                <div className="hero-cta">
                    <a href="#pricing" className="btn">
                        See packages <span className="arrow" aria-hidden="true">→</span>
                    </a>
                    <a href="#contact" className="btn ghost">
                        Book a call <span className="arrow" aria-hidden="true">↗</span>
                    </a>
                    <span
                        className="g1"
                        style={{
                            fontSize: 10,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                        }}
                    >
                        Avg. reply · 4h
                    </span>
                </div>
            </div>
        </section>
    )
}

