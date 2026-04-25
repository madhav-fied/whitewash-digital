export default function Nav() {
    return (
        <header className="nav" id="nav">
            <div className="wrap nav-inner">
                <a href="#top" className="logo" aria-label="Whitewash Digital — home">
                    <span className="logo-mark" aria-hidden="true">WW</span>
                    <span>WHITEWASH<span className="g1"> / DIGITAL</span></span>
                </a>
                <nav className="nav-links" aria-label="Primary">
                    <a href="#about">About</a>
                    <a href="#process">Process</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#why">Why us</a>
                    <a href="#contact">Contact</a>
                </nav>
                <a href="#contact" className="nav-cta">Start a project →</a>
                <button
                    type="button"
                    className="nav-toggle"
                    id="nav-toggle"
                    aria-label="Open menu"
                    aria-controls="nav-mobile"
                    aria-expanded="false"
                >
                    Menu
                </button>
            </div>
            <nav className="nav-mobile" id="nav-mobile" aria-label="Mobile">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#process">Process</a>
                <a href="#pricing">Pricing</a>
                <a href="#contact">Contact</a>
                <a href="#contact" className="nav-cta" style={{ alignSelf: "flex-start" }}>
                    Start a project →
                </a>
            </nav>
        </header>
    )
}