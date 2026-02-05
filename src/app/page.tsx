import Hero from "./Hero";
import About from "./About";
import VisionMission from "./Vision_Mission";
import Curriculum from "./Curriculum";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Program from "./Program";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <VisionMission />
      <Program />
      <Curriculum />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}


