
import Hero from "./Hero";
import About from "./About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import VisionMission from "./Vision_Mission";
import Program from "./Program";
import Contact from "./Contact";
import Gallery from "./Gallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Program />
      <Gallery />
      <Contact />
      <Footer/>
    </>
  );
}
