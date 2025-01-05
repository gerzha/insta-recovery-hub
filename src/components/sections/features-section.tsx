import { Clock, MessageCircle, Shield } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureCard } from "@/components/feature-card";

const features = [
  {
    title: "Fast Recovery",
    description: "Get your account back within 24-48 hours with our expedited process.",
    Icon: Clock,
  },
  {
    title: "Secure Process",
    description: "Your information is protected with enterprise-grade security measures.",
    Icon: Shield,
  },
  {
    title: "Expert Support",
    description: "Our dedicated team provides 24/7 assistance throughout the recovery process.",
    Icon: MessageCircle,
  },
];

export const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <SectionHeading
        title="Why Choose InstaRevive"
        subtitle="We provide fast, secure, and professional Instagram account recovery services"
        className="mb-12"
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};