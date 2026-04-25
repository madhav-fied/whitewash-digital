import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import ThemeFab from "./components/ThemeFab";
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
      <Preloader />
      <ThemeFab />
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
      <Footer />
    </>
  );
}
