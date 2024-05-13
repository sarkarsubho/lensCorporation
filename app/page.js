import About from "@/components/about/About";
import Blogs from "@/components/blogs/Blogs";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/services/Services";
import WhyChoose from "@/components/whychoose/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Blogs />
      <Footer />
    </main>
  );
}
