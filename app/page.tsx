import ClientEffects from "./ClientEffects";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import Why from "./components/Why";

export default function Home() {
  return (
    <>
      <ClientEffects />
      <div className="rail" id="rail" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Process />
        <Pricing />
        <Why />
        <Contact />
      </main>
      <footer>
        <div className="wrap">
          <h2 className="footer-top reveal">
            WHITEWASH
            <br />
            DIGITAL<span className="accent">.</span>
          </h2>
          <div className="footer-bot">
            <span>© 2026 Whitewash Digital</span>
            <span>Built with care · Bengaluru, IN</span>
            <span className="accent">● All systems nominal</span>
          </div>
        </div>
      </footer>
    </>
  );
}
