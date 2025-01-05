import { SectionHeading } from "@/components/ui/section-heading";

export const HowItWorksSection = () => {
  return (
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
  );
};