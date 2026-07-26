import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <Clients />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}