import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-4 py-24 text-center">
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.5}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
      <div className="relative z-10 mx-auto max-w-4xl space-y-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Restore Your Instagram Account Today
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Professional Instagram account recovery service. Get back online quickly and securely with our expert team.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="gap-2" onClick={onContactClick}>
            Start Recovery Process
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate('/how-it-works')}>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};