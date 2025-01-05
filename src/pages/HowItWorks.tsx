import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { SectionHeading } from "@/components/ui/section-heading";

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
        <SectionHeading 
          title="How We Work - Instagram Account Recovery Process" 
          className="mb-12"
        />
        
        <div className="space-y-12 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Step 1: Initial Assessment</h2>
            <p className="mb-4">
              To begin recovering your Instagram account, we need some basic information from you:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Your Instagram username</li>
              <li>The date when your account was blocked</li>
              <li>Screenshots of the blocking notification</li>
              <li>Any emails you received from Instagram about the blocking</li>
            </ul>
            <p className="mb-4">Our specialists will carefully review your case at no cost. This helps us determine:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Whether we can help recover your account</li>
              <li>How long the recovery process might take</li>
              <li>The cost of our service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Step 2: Receiving Your Assessment</h2>
            <p className="mb-4">After reviewing your case, we'll provide you with:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>A detailed explanation of your situation</li>
              <li>Our professional assessment of recovery chances</li>
              <li>Expected timeline for recovery</li>
              <li>Clear pricing for our service</li>
            </ul>
            <p>
              At this point, you can decide whether you'd like to proceed with our service. 
              There's no obligation to continue if you're not comfortable with the assessment or pricing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Step 3: Beginning the Recovery Process</h2>
            <p className="mb-4">If you choose to work with us, we'll need:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Your Instagram username</li>
              <li>Your Instagram password</li>
            </ul>
            <p>
              We understand that sharing account credentials requires trust. 
              We treat your information with the utmost confidentiality and use it solely for account recovery purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Step 4: Account Recovery</h2>
            <p>During this phase:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Our specialists work on recovering your account</li>
              <li>We keep you updated on progress</li>
              <li>We maintain open communication for any questions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Step 5: Account Verification and Payment</h2>
            <p className="mb-4">Once we successfully recover your account:</p>
            <ol className="list-decimal list-inside mb-4 space-y-2">
              <li>We return full access to you</li>
              <li>You verify that everything works correctly</li>
              <li>After verification, you complete the payment</li>
              <li>You maintain full control of your recovered account</li>
            </ol>
            <p className="bg-secondary p-4 rounded-lg">
              <strong className="text-foreground">Important Payment Note:</strong> Payment must be completed within 48 hours of successful recovery. 
              If payment isn't received within this timeframe, the account will be permanently blocked for security reasons.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Commitment to You</h2>
            <p>We promise:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Professional and transparent service</li>
              <li>Secure handling of your information</li>
              <li>Clear communication throughout the process</li>
              <li>No upfront fees</li>
              <li>Full account access upon recovery</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">What We Need from You</h2>
            <p>For the best results, please:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide accurate information</li>
              <li>Respond promptly to our messages</li>
              <li>Share all relevant details about the blocking</li>
              <li>Complete payment within the specified timeframe</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Important Reminders</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We are not affiliated with Instagram</li>
              <li>We only begin work after you approve our assessment</li>
              <li>Payment is only required after successful recovery</li>
              <li>We cannot guarantee recovery of accounts that violated Instagram's Terms of Service</li>
              <li>The 48-hour payment window is strict and non-negotiable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Need Help?</h2>
            <p>
              If you have questions at any point in the process, please contact us at{" "}
              <a href="mailto:instarevived@gmail.com" className="text-primary hover:underline">
                instarevived@gmail.com
              </a>
              . We're here to help and will respond promptly to your inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Ready to Start?</h2>
            <p>
              To begin the recovery process, please send us your Instagram username, blocking date, 
              and relevant screenshots. We'll get started on your assessment right away.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;