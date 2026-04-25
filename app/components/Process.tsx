const process = [
    {
        num: "Step 01",
        title: "Discovery & Brand Audit",
        body: "We learn your business inside out — customers, category, competitors, the words you use on a call.",
        line: "Day 01 — 03",
    },
    {
        num: "Step 02",
        title: "Content Collection",
        body: "You send what you have. We organise, rewrite where it helps, and fill the gaps.",
        line: "Day 03 — 05",
    },
    {
        num: "Step 03",
        title: "Design & Collaborate",
        body: "You approve every step. No surprises, no big reveals at the end.",
        line: "Day 05 — 09",
    },
    {
        num: "Step 04",
        title: "Develop & Optimise",
        body: "Built fast, built right. SEO, speed and accessibility baked in.",
        line: "Day 09 — 12",
    },
    {
        num: "Step 05",
        title: "Launch & Handover",
        body: "You go live, fully in control. We hand over a site you can actually maintain.",
        line: "Day 12 — 14",
    },
];



export default function Process() {
    return (
        <section id="process" className="block">
            <div className="wrap">
                <div className="section-head">
                    <div className="section-num">[ 03 / PROCESS ]</div>
                    <h2 className="section-title reveal">
                        <span className="accent">Zero to live <span className="g1">in two weeks.</span>{" "}
                        </span>
                        Guaranteed.
                    </h2>
                </div>
            </div>
            <div className="wrap">
                <div className="process">
                    {process.map((p) => (
                        <div key={p.num} className="step reveal">
                            <div className="step-num">{p.num}</div>
                            <h3>{p.title}</h3>
                            <p>{p.body}</p>
                            <div className="step-line">{p.line}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}