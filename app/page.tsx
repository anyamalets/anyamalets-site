import Header from "./components/Header";
import Hero from "./components/Hero";
import Recognize from "./components/Recognize";
import Methods from "./components/Methods";
import Boundaries from "./components/Boundaries";
import About from "./components/About";
import Education from "./components/Education";
import FirstSession from "./components/FirstSession";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div id="top" />
      <Hero />
      <Recognize />
      <Methods />
      <Boundaries />
      <About />
      <Education />
      <FirstSession />
      <Pricing />
      <Footer />
    </>
  );
}
