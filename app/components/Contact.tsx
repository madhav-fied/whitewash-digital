const mailToHref = `mailto:madhavcv2116@gmail.com?subject=Take%20my%20business%20online&body=Hi%2C%0A%0AI%E2%80%99m%20ready%20to%20build%20something%20that%20actually%20represents%20my%20business%20online.%0A%0ABusiness%20Name%3A%0AWebsite%20Type%3A%20(Portfolio%2C%20Business%2C%20E-commerce%2C%20etc.)%0APreferred%20Package%3A%20(Standard%20%2F%20Premium)%0A%0AYou%20can%20contact%20me%20at%3A%0APhone%3A%0A%0ALooking%20forward%20to%20working%20with%20you.%0A%0AThanks%2C%0A%5BYour%20Name%5D`

const contactRows = [
    {
        label: "/ Website",
        val: "whitewash.digital",
        href: "https://whitewash-digital.vercel.app",
        external: true,
    },
    {
        label: "/ Email",
        val: "madhavcv2116@gmail.com",
        href: mailToHref,
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
        href: "https://calendly.com/whitewash-digital/new-meeting",
        external: false,
    },
];

export default function Contact() {
    return (
        <section id="contact" className="block">
            <div className="wrap">
                <div className="section-head">
                    <div className="section-num">[ 06 / CONTACT ]</div>
                    <h2 className="section-title reveal"><span className="accent">Let&rsquo;s get you live.</span></h2>
                </div>
                <div className="contact-grid">
                    <h3 className="contact-headline reveal">
                        Tell us about
                        <br />
                        <span className="g1">your business...</span>
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