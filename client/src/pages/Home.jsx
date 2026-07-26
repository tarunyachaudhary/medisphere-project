import Hero from "../components/home/Hero";
import TrustBadges from "../components/home/TrustBadges";
import StatsBar from "../components/home/StatsBar";
import TopUniversities from "../components/home/TopUniversities";
import ProcessSteps from "../components/home/ProcessSteps";
import CtaBanner from "../components/home/CtaBanner";
import Footer from "../components/home/Footer";
import LeadCapture from "../components/home/LeadCapture";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <StatsBar />
      <TopUniversities />
      <LeadCapture/>
      <ProcessSteps />
      <CtaBanner />
      <Footer />
    </>
  );
}
