import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export function FeatureCard({ title, description, Icon }: FeatureCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}