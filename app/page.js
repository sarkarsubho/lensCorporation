import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/services/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
    </main>
  );
}
