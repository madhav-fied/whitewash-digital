const contactRows = [
    {
        label: "/ Website",
        val: "whitewash.digital",
        href: "https://whitewash.digital",
        external: true,
    },
    {
        label: "/ Email",
        val: "madhavcv2116@gmail.com",
        href: "mailto:madhavcv2116@gmail.com",
        external: false,
    },
    {
        label: "/ Phone",
        val: "+91 94980 76092",
        href: "tel:+919498076092",
        external: false,
    },
    {
        label: "/ Book call",
        val: "Schedule 20 min",
        href: "#contact",
        external: false,
    },
];

export default function Contact() {
    return (
        <section id="contact" className="block">
            <div className="wrap">
                <div className="section-head">
                    <div className="section-num">[ 06 / CONTACT ]</div>
                    <h2 className="section-title reveal">Let&rsquo;s get you live.</h2>
                </div>
                <div className="contact-grid">
                    <h3 className="contact-headline reveal">
                        Tell us about
                        <br />
                        <span className="g1">your business</span> — we&rsquo;ll
                        <br />
                        reply within <span className="accent">4 hours.</span>
                    </h3>
                    <div className="contact-list reveal">
                        {contactRows.map((c) => (
                            <a
                                key={c.label}
                                className="contact-row"
                                href={c.href}
                                {...(c.external
                                    ? { target: "_blank", rel: "noopener noreferrer" }
                                    : {})}
                            >
                                <span className="label">{c.label}</span>
                                <span className="val">{c.val}</span>
                                <span className="arr" aria-hidden="true">↗</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}