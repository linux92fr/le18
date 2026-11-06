import Hero from "@/components/Hero";
import SectionNavigation from "@/components/SectionNavigation";
import BilanMobilisation from "@/components/BilanMobilisation";
import MobilisationVideo from "@/components/MobilisationVideo";
import Revendications from "@/components/Revendications";
import Questionnaire from "@/components/Questionnaire";
import TempsTrajet from "@/components/TempsTrajet";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => (
  <div className="min-h-screen scroll-smooth bg-background">
    <SectionNavigation />
    <Hero />
    <BilanMobilisation />
    <MobilisationVideo />
    <Revendications />
    <Questionnaire />
    <TempsTrajet />
    <CallToAction />
    <Footer />
    <ScrollToTop />
  </div>
);

export default Index;
