import Hero from "@/components/Hero";
import Revendications from "@/components/Revendications";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Revendications />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
