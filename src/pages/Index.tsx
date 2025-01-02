import { ArrowRight, Clock, Lock, MessageSquare, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    Icon: MessageSquare,
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-4 py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Restore Your Instagram Account Today
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Professional Instagram account recovery service. Get back online quickly and securely with our expert team.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2">
              Start Recovery Process
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
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

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-24">
        <SectionHeading
          title="How It Works"
          subtitle="Simple steps to recover your Instagram account"
          className="mb-12"
        />
        <div className="mx-auto max-w-3xl">
          <div className="relative space-y-12 before:absolute before:left-4 before:top-0 before:h-full before:w-0.5 before:bg-border sm:before:left-1/2">
            {[
              {
                title: "Submit Your Request",
                description: "Fill out our secure form with your account details",
              },
              {
                title: "Expert Review",
                description: "Our team analyzes your case and develops a recovery plan",
              },
              {
                title: "Account Recovery",
                description: "We work with Instagram to restore your account access",
              },
              {
                title: "Get Back Online",
                description: "Regain access to your account within 24-48 hours",
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-col gap-4 sm:flex-row sm:even:flex-row-reverse"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  {index + 1}
                </div>
                <div className="ml-12 sm:ml-0 sm:w-[calc(50%-2rem)]">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="rounded-lg bg-primary/10 px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-bold">Ready to Recover Your Account?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Don't wait any longer. Start the recovery process now and get back to sharing moments with your followers.
          </p>
          <Button size="lg" className="mt-8">
            Start Recovery Process
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;