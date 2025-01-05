import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onContactClick: () => void;
}

export const CTASection = ({ onContactClick }: CTASectionProps) => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="rounded-lg bg-primary/10 px-6 py-12 text-center sm:px-12">
        <h2 className="text-3xl font-bold">Ready to Recover Your Account?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Don't wait any longer. Start the recovery process now and get back to sharing moments with your followers.
        </p>
        <Button size="lg" className="mt-8" onClick={onContactClick}>
          Submit your request
        </Button>
      </div>
    </section>
  );
};