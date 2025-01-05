import { useState } from "react";
import { ContactFormDialog } from "@/components/contact-form-dialog";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { CTASection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";

const Index = () => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeroSection onContactClick={() => setContactDialogOpen(true)} />
      <FeaturesSection />
      <HowItWorksSection />
      <ReviewsSection />
      <CTASection onContactClick={() => setContactDialogOpen(true)} />
      <FooterSection />
      
      <ContactFormDialog 
        open={contactDialogOpen} 
        onOpenChange={setContactDialogOpen}
      />
      
      <WhatsAppWidget />
    </div>
  );
};

export default Index;