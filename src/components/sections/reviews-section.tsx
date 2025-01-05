import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "I was devastated when I lost access to my business Instagram account. InstaRevive helped me recover it within 24 hours. Their service is worth every penny!",
    date: "March 2024"
  },
  {
    name: "Michael Chen",
    rating: 5,
    text: "Professional service and constant communication throughout the process. They recovered my account quickly and securely.",
    date: "February 2024"
  },
  {
    name: "Emma Williams",
    rating: 5,
    text: "After trying everything to recover my hacked account, InstaRevive was the only solution that worked. Highly recommended!",
    date: "January 2024"
  }
];

export const ReviewsSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <SectionHeading
        title="What Our Clients Say"
        subtitle="Real experiences from people we've helped recover their Instagram accounts"
        className="mb-12"
      />
      <div className="grid gap-8 md:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4">{review.text}</p>
            <div className="mt-auto">
              <p className="font-semibold">{review.name}</p>
              <p className="text-sm text-muted-foreground">{review.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};