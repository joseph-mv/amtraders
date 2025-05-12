import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
import Founder from "@/components/home/Founder";
import Hero from "@/components/home/Hero";
import ProductCategories from "@/components/home/Products";
import Services from "@/components/home/Services";
import WhatsappButton from "@/components/home/WhatsappButton";
import WhyChoose from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ProductCategories />
      <Contact />
      <WhyChoose />
      <Founder />

      <Footer />
      <WhatsappButton />
    </>
  );
}
