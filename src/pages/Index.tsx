import Hero from "@/components/Hero";
import SectionNavigation from "@/components/SectionNavigation";
import MobilisationVideo from "@/components/MobilisationVideo";
import Revendications from "@/components/Revendications";
import MobilisationMap from "@/components/MobilisationMap";
import GreveGuide from "@/components/GreveGuide";
import GreveRights from "@/components/GreveRights";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-background">
      <SectionNavigation />
      <Hero />
      <MobilisationVideo />
      <Revendications />
      <MobilisationMap />
      <GreveGuide />
      <GreveRights />
      <CallToAction />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
