import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Clients from "@/components/sections/Clients";
import CTA from "@/components/sections/CTA";
import Quote from "@/components/sections/Quote";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Portfolio />
      <Clients />
      <CTA />
      <Quote />
      <Footer />
    </main>
  );
}
