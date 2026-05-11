const _marqee_words = [
    "Clean design",
    "Web presence",
    "Fast launch",
    "Creative work",
    "For SMBs",
    "SEO-ready",
];

const MARQUEE_WORDS = [
    ..._marqee_words,
    ..._marqee_words
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
                                {
                                    idx != _marqee_words.length - 1 && (
                                        <span className="plus">
                                            +
                                        </span>
                                    )
                                }
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}