import Hero from "@/components/Hero";
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
    <div className="min-h-screen bg-background">
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
