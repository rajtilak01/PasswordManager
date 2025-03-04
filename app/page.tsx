import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import Security from "@/components/Security";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustedBy />
        <Features />
        <Security />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
