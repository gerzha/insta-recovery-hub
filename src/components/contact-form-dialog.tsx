import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export function ContactFormDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const contact = formData.get('contact') as string;
    const name = formData.get('name') as string;
    const message = formData.get('message') as string;

    try {
      console.log('Sending contact form submission...');

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: { email, contact, name, message }
      });

      console.log('Response:', data);

      if (error) {
        console.error('Error:', error);
        throw error;
      }

      toast({
        title: "Request Sent",
        description: "We've received your message and will get back to you soon.",
      });
      
      onOpenChange(false);
    } catch (error: any) {
      console.error('Error details:', error);
      
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
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