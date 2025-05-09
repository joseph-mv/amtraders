import About from "@/components/home/About";
import Founder from "@/components/home/Founder";
import Hero from "@/components/home/Hero";
import ProductCategories from "@/components/home/Products";
import Services from "@/components/home/Services";


export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <ProductCategories/>
      <Founder/>
    </>
  );
}
