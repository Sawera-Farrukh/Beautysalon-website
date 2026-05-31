import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Works } from '../sections/Works';
import { Services } from '../sections/Services';
import { FAQ } from '../sections/FAQ';
import { Testimonials } from '../sections/Testimonials';
import { Pricing } from '../sections/Pricing';
import { Blog } from '../sections/Blog';
import { Contact } from '../sections/Contact';
import { Footer } from '../sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export function HomePage() {
  useEffect(() => {
    // Refresh ScrollTrigger after initial render
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Works />
      <Services />
      <FAQ />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
