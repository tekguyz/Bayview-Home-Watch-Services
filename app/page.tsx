import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import ProblemSolver from "@/components/sections/ProblemSolver";
import ServiceCatalog from "@/components/sections/ServiceCatalog";
import TrustPanel from "@/components/sections/TrustPanel";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-sand selection:bg-brand-teal/30 selection:text-brand-navy">
      <Header/>
      <main className="flex-grow">
        <Hero/>
        <ProblemSolver/>
        <ServiceCatalog/>
        <TrustPanel/>
        <ContactForm/>
      </main>
      <Footer/>
    </div>
  );
}
