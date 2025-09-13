import Hero from "@/components/Hero";
import Revendications from "@/components/Revendications";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Revendications />
      <CallToAction />
    </div>
  );
};

export default Index;
