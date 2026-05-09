import HeroSection from "@/app/components/HeroSection";
import ServicesSection from "@/app/components/ServicesSection";
import HowItWorksSection from "@/app/components/HowItWorksSection";
import ReviewsSocialProofSection from "@/app/components/ReviewsSocialProofSection";
import TrustSafetySection from "@/app/components/TrustSafetySection";
import BookingFlowSection from "@/app/components/BookingFlowSection";
import HelpFaqSection from "@/app/components/HelpFaqSection";

export default function Home() {
  return (
    <main id="top">
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <ReviewsSocialProofSection />
      <TrustSafetySection />
      <BookingFlowSection />
      <HelpFaqSection />
    </main>
  );
}