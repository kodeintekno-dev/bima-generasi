
import Hero from "./Hero";
import About from "./About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import VisionMission from "./Vision_Mission";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Footer/>
    </>
  );
}
