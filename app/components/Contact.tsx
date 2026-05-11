"use client"

import { useState } from "react"

const PHONE = "919884055526"
const EMAIL = "madhavcv2116@gmail.com"
const CALENDLY = "https://calendly.com/whitewash-digital/new-meeting"
const PLACEHOLDER = "Hi..."

export default function Contact() {
    const [message, setMessage] = useState("")

    const encoded = encodeURIComponent(message.trim() || PLACEHOLDER)

    const actions = [
        {
            label: "/ Schedule",
            val: "Book a 20 min call",
            href: CALENDLY,
            external: true,
        },
        {
            label: "/ WhatsApp",
            val: "Send a WhatsApp message",
            href: `https://wa.me/${PHONE}?text=${encoded}`,
            external: true,
        },
        {
            label: "/ Email",
            val: "Send a mail",
            href: `mailto:${EMAIL}?subject=Take%20my%20business%20online&body=${encoded}`,
            external: false,
        },
    ]

    return (
        <section id="contact" className="block">
            <div className="wrap">
                <div className="section-head">
                    <div className="section-num">[ 06 / CONTACT ]</div>
                    <h2 className="section-title reveal"><span className="accent">Let&rsquo;s get you live.</span></h2>
                </div>
                <div className="contact-grid">
                    <h3 className="contact-headline reveal">
                        Let's connect and level up
                        <br />
                        your business together.
                    </h3>
                    <div className="contact-list reveal">
                        <textarea
                            className="contact-message"
                            placeholder={PLACEHOLDER}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5}
                        />
                        {actions.map((c) => (
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
