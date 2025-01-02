import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

export function ContactFormDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const contact = formData.get('contact');
    const name = formData.get('name');
    const message = formData.get('message');

    try {
      // Here you would typically send this data to your backend
      console.log('Sending email to socksbrest91@gmail.com with:', {
        email,
        contact,
        name,
        message
      });

      // Simulate sending
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Request Sent",
        description: "Our specialists are working on the problem.",
      });
      
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Support</DialogTitle>
          <DialogDescription>
            Fill out the form below and our team will help recover your account.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email *</label>
            <Input id="email" name="email" type="email" required placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="contact" className="text-sm font-medium">WhatsApp/Telegram Number *</label>
            <Input id="contact" name="contact" required placeholder="Enter your WhatsApp or Telegram number" />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <Input id="name" name="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message *</label>
            <Textarea 
              id="message" 
              name="message" 
              required 
              placeholder="Describe your issue"
              className="min-h-[100px]"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}