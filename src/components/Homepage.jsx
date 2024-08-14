import { Benifit } from "./Benifit";
import { Destinations } from "./Destinations";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import ScrollToTop from "./ScrollToTop";
import { Testimonials } from "./Testimonials";

export const Homepage = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Hero />
      <Benifit />
      <Destinations />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
};
