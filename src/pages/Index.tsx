import Hero from "@/components/Hero";
import SectionNavigation from "@/components/SectionNavigation";
import BilanMobilisation from "@/components/BilanMobilisation";
import BilanPopup from "@/components/BilanPopup";
import Revendications from "@/components/Revendications";
import TempsTrajet from "@/components/TempsTrajet";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => (
  <div className="min-h-screen scroll-smooth bg-background">
    <SectionNavigation />
    <Hero />
    <BilanMobilisation />
    <Revendications />
    <TempsTrajet />
    <CallToAction />
    <Footer />
    <BilanPopup />
    <ScrollToTop />
  </div>
);

export default Index;
