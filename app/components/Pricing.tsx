export default function Pricing() {
    return (
        <section id="pricing" className="block">
            <div className="wrap">
                <div className="section-head">
                    <div className="section-num">[ 04 / PRICING ]</div>
                    <h2 className="section-title reveal">
                        <span className="accent">Two packages.</span> <span className="g1">No surprises.</span>
                    </h2>
                </div>
                <div className="pricing">
                    <div className="plan reveal">
                        <div className="plan-header">
                            <h3 className="plan-name">Standard</h3>
                            <span
                                className="g1"
                                style={{
                                    fontSize: 10,
                                    letterSpacing: "0.14em",
                                    textTransform: "uppercase",
                                }}
                            >
                                / Starter
                            </span>
                        </div>
                        <div className="plan-price">
                            <span className="amt">₹5,999</span>
                            <span className="sub">one-time</span>
                        </div>
                        <ul>
                            <li>Template-based website</li>
                            <li>Basic SEO setup</li>
                            <li>Project gallery</li>
                            <li>Mobile responsive design</li>
                            <li>Contact forms via email</li>
                        </ul>
                        <a className="btn ghost" href="#contact">
                            Choose Standard <span className="arrow" aria-hidden="true">→</span>
                        </a>
                    </div>

                    <div className="plan featured reveal">
                        <div className="plan-header">
                            <h3 className="plan-name">Premium</h3>
                            <span className="plan-tag">Most picked</span>
                        </div>
                        <div className="plan-price">
                            <span className="amt">₹8,999</span>
                            <span className="sub">one-time</span>
                        </div>
                        <ul>
                            <li>Fully customised website</li>
                            <li>Optimised SEO setup</li>
                            <li>Detailed project showcase</li>
                            <li>Post-launch aid for 6 months</li>
                            <li>Social media integrations</li>
                            <li>Private domain for 1 year</li>
                            <li>Lead forms via WhatsApp</li>
                            <li>Client testimonials &amp; reviews</li>
                        </ul>
                        <a className="btn accent" href="#contact">
                            Choose Premium <span className="arrow" aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}