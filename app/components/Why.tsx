const whyCards = [
    {
        glyph: "/ 01",
        title: "Fresh thinking, modern trends",
        body: "Young minds that provide curated websites for your business — not a template pulled off a shelf.",
    },
    {
        glyph: "/ 02",
        title: "Enterprise-level expertise",
        body: "Trained at a top-tier global tech firm. We build with precision — and without the bloat.",
    },
    {
        glyph: "/ 03",
        title: "Support that stays",
        body: "Updates, maintenance, changes. We're here long after launch — not a one-and-done vendor.",
    },
];

export default function Why() {
    return (
        <section id="why" className="block">
            <div className="wrap">
                <div className="section-head">
                    <div className="section-num">[ 05 / WHY US ]</div>
                    <h2 className="section-title reveal">Why choose us?</h2>
                </div>
            </div>
            <div className="wrap">
                <div className="why-grid">
                    {whyCards.map((w) => (
                        <div key={w.glyph} className="why-card reveal">
                            <div className="why-glyph">{w.glyph}</div>
                            <h3>{w.title}</h3>
                            <p>{w.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}