import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import ProductsPreview from "@/components/landing/ProductsPreview";
import ServicesPreview from "@/components/landing/ServicesPreview";

import ReferralHighlight from "@/components/landing/ReferralHighlight";
import Testimonials from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductsPreview />
      
      <ServicesPreview />
      <ReferralHighlight />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
