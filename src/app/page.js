import About from "@/components/home/about/About";
import Certificates from "@/components/home/certificates/Certificates";
import Clients from "@/components/home/clients/Clients";
import Contact from "@/components/home/contact/Contact";
import Features from "@/components/home/features/Features";
import Footer from "@/components/home/footer/Footer";
import Header from "@/components/home/header/Header";
import Hero from "@/components/home/hero/Hero";
import Insights from "@/components/home/insights/Insights";
import Services from "@/components/home/services/Services";
import Testimonial from "@/components/home/testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Certificates />
      <Features />
      <Clients />
      <Testimonial />
      <Insights />
      <Contact />
      <Footer />
    </main>
  );
}
