
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-20"></div>
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-aipurple-500/50 to-transparent"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="shine-text">Touch</span></h2>
          <p className="text-gray-400 text-lg">
            Ready to transform your business with AI? Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-muted/30 backdrop-blur-sm p-3 rounded-lg border border-aipurple-800/30">
                <MapPin className="h-6 w-6 text-aipurple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-white">Our Location</h3>
                <p className="text-gray-400">
                  123 Innovation Drive<br />
                  Tech Valley, CA 94103
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-muted/30 backdrop-blur-sm p-3 rounded-lg border border-aipurple-800/30">
                <Mail className="h-6 w-6 text-aipurple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-white">Email Us</h3>
                <p className="text-gray-400">
                  info@aiisland.com<br />
                  support@aiisland.com
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-muted/30 backdrop-blur-sm p-3 rounded-lg border border-aipurple-800/30">
                <Phone className="h-6 w-6 text-aipurple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-white">Call Us</h3>
                <p className="text-gray-400">
                  +1 (555) 123-4567<br />
                  +1 (555) 987-6543
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-muted/30 backdrop-blur-sm rounded-xl border border-aipurple-800/30 shadow-[0_0_15px_rgba(0,0,0,0.3)] p-8 cyber-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-muted/50 border-aipurple-800/50 focus:border-aipurple-500 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-muted/50 border-aipurple-800/50 focus:border-aipurple-500 text-white"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <Input 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full bg-muted/50 border-aipurple-800/50 focus:border-aipurple-500 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your project..."
                  required
                  className="min-h-[150px] w-full bg-muted/50 border-aipurple-800/50 focus:border-aipurple-500 text-white"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full cyber-button bg-gradient-to-r from-aipurple-700 to-aiblue-700 hover:from-aipurple-600 hover:to-aiblue-600 text-white py-6 text-lg font-medium border-aipurple-500/50 shadow-[0_0_15px_rgba(124,85,246,0.3)]"
              >
                <span className="relative z-10">Send Message</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
