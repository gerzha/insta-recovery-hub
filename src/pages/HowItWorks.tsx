import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-8">
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)}
        className="mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">How It Works</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Recovery Process</h2>
            <p className="text-muted-foreground">
              We understand how frustrating it can be to lose access to your Instagram account. 
              Our team of specialists works directly with Instagram's support team to help you 
              regain access to your account quickly and securely.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Step-by-Step Guide</h2>
            <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
              <li>Fill out our secure contact form with your account details</li>
              <li>Our team reviews your case within 24 hours</li>
              <li>We work with Instagram support to verify your identity</li>
              <li>Follow our instructions to regain access to your account</li>
              <li>Get back to sharing moments with your followers</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
            <ul className="space-y-4 list-disc list-inside text-muted-foreground">
              <li>24/7 Customer Support</li>
              <li>Experienced Recovery Specialists</li>
              <li>High Success Rate</li>
              <li>Secure and Confidential Process</li>
              <li>Fast Response Time</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;