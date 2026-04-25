const MARQUEE_WORDS = [
    "Web presence",
    "Clean design",
    "Fast launch",
    "SEO-ready",
    "Built fast",
    "Creative work",
    "No templates",
    "For SMBs",
];

export default function Marquee() {
    return (
        <div className="marquee" aria-hidden="true">
            <div className="marquee-track" id="marquee-track">
                {
                    MARQUEE_WORDS.map((w, idx) => {
                        return (
                            <span key={idx} className="m-item">
                                {w}
                                <span className="plus">
                                    +
                                </span>
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}