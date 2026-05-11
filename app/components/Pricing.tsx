const contactStandard = `mailto:madhavcv2116@gmail.com?subject=Take%20my%20business%20online&body=Hi%2C%0A%0AI%E2%80%99m%20ready%20to%20build%20something%20that%20actually%20represents%20my%20business%20online.%0A%0ABusiness%20Name%3A%0AWebsite%20Type%3A%20(Portfolio%2C%20Business%2C%20E-commerce%2C%20etc.)%0APreferred%20Package%3A%20Standard%0A%0AYou%20can%20contact%20me%20at%3A%0APhone%3A%0A%0ALooking%20forward%20to%20working%20with%20you.%0A%0AThanks%2C%0A%5BYour%20Name%5D`;
const contactPremium = `mailto:madhavcv2116@gmail.com?subject=Take%20my%20business%20online&body=Hi%2C%0A%0AI%E2%80%99m%20ready%20to%20build%20something%20that%20actually%20represents%20my%20business%20online.%0A%0ABusiness%20Name%3A%0AWebsite%20Type%3A%20(Portfolio%2C%20Business%2C%20E-commerce%2C%20etc.)%0APreferred%20Package%3A%20Premium%0A%0AYou%20can%20contact%20me%20at%3A%0APhone%3A%0A%0ALooking%20forward%20to%20working%20with%20you.%0A%0AThanks%2C%0A%5BYour%20Name%5D`;

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
                            <li>Contact forms</li>
                        </ul>
                        <a className="btn ghost" href={contactStandard}>
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
                            <li>Direct WhatsApp links</li>
                            <li>Client testimonials &amp; reviews</li>
                        </ul>
                        <a className="btn accent" href={contactPremium}>
                            Choose Premium <span className="arrow" aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}