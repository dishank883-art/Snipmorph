import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. We'll get back to you soon.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          projectType: "",
          message: ""
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="text-xl" />,
      title: "Email Us",
      subtitle: "snipmorph@gmail.com"
    },
    {
      icon: <Phone className="text-xl" />,
      title: "Call Us",
      subtitle: "+91-9259488318"
    },
    {
      icon: <Clock className="text-xl" />,
      title: "Business Hours",
      subtitle: "Available 24/7"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
            📞 Let's Get The Ball Rolling
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-8 leading-tight">
            WE'RE NOT JUST A
            <br />
            <span className="text-primary font-serif italic">DIGITAL MARKETING</span>
            <br />
            SERVICE PROVIDER.
            <br />
            WE'RE YOUR PARTNERS IN
            <span className="text-primary font-serif italic"> SUCCESS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="fade-in">
            <h3 className="text-3xl font-bold text-foreground mb-12 font-serif">Get In Touch</h3>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mr-6 text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-foreground font-bold text-xl mb-2">{info.title}</div>
                    <div className="text-muted-foreground text-lg font-medium">{info.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-serif">Start Your Project Today</h3>
              <div className="w-full h-[600px]">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfBvrvvPkzJvv5QlovKui1v2xgV_TXe7ZfvU2r5Zk2tu8W1HA/viewform?embedded=true"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
