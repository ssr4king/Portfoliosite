import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: any) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA, USA",
      testId: "contact-location"
    },
    {
      icon: Mail,
      title: "Email",
      value: "hello@chandni.dev",
      testId: "contact-email"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      testId: "contact-phone"
    },
    {
      icon: Clock,
      title: "Availability",
      value: "Mon - Fri: 9:00 AM - 6:00 PM PST",
      testId: "contact-availability"
    }
  ];

  const socialLinks = [
    { icon: "fab fa-linkedin-in", href: "#", label: "LinkedIn" },
    { icon: "fab fa-github", href: "#", label: "GitHub" },
    { icon: "fab fa-twitter", href: "#", label: "Twitter" },
    { icon: "fab fa-dribbble", href: "#", label: "Dribbble" },
  ];

  return (
    <section className="py-20 bg-[var(--dark-blue)]/30 min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gradient mb-4" data-testid="contact-title">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-testid="contact-subtitle">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6" data-testid="contact-info-title">Let's Connect</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  data-testid={info.testId}
                >
                  <div className="w-12 h-12 bg-[var(--cyan-glow)]/20 rounded-lg flex items-center justify-center">
                    <info.icon className="text-[var(--cyan-glow)] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Social Media Links */}
            <div className="pt-8">
              <h4 className="text-white font-semibold mb-4" data-testid="social-links-title">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="social-icon w-12 h-12 bg-gray-800 hover:bg-[var(--cyan-glow)] rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all"
                    whileHover={{ y: -3 }}
                    data-testid={`contact-social-${social.label.toLowerCase()}`}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">First Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="John"
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-[var(--cyan-glow)] focus:ring-[var(--cyan-glow)]"
                            data-testid="input-firstName"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">Last Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Doe"
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-[var(--cyan-glow)] focus:ring-[var(--cyan-glow)]"
                            data-testid="input-lastName"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-medium">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="john@example.com"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-[var(--cyan-glow)] focus:ring-[var(--cyan-glow)]"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-medium">Subject</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Project Discussion"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-[var(--cyan-glow)] focus:ring-[var(--cyan-glow)]"
                          data-testid="input-subject"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-medium">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={6}
                          placeholder="Tell me about your project..."
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-[var(--cyan-glow)] focus:ring-[var(--cyan-glow)] resize-none"
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full px-8 py-3 bg-[var(--cyan-glow)] text-[var(--navy)] font-semibold rounded-lg hover-glow transition-all disabled:opacity-50"
                  data-testid="submit-contact-form"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                  <i className="fas fa-paper-plane ml-2"></i>
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
