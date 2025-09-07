"use client"
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { NavbarDemo } from "@/app/features/navbar";
import Introduction from "./features/introduction";
import About from "./features/About";
import Skills from "./features/Skills";
import Projects from "./features/Projects";
import Contact from "./features/Contact";
import Footer from "./features/footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen">
        <BackgroundRippleEffect />
        <NavbarDemo />
        <Introduction/>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </SmoothScrollProvider>
  );
}