import Header from "./components/Header";
import Hero from "./components/Hero";
import Recognize from "./components/Recognize";
import Methods from "./components/Methods";
import Changes from "./components/Changes";
import Boundaries from "./components/Boundaries";
import About from "./components/About";
import Education from "./components/Education";
import FirstSession from "./components/FirstSession";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Recognize />
        <Methods />
        <Changes />
        <Boundaries />
        <About />
        <Education />
        <FirstSession />
        <Faq />
        <Pricing />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
