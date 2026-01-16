import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tanviambarkar@gmail.com",
      href: "mailto:tanviambarkar@gmail.com",
    },
    {
      icon: Phone,
      label: "Mobile",
      value: "+91 9325446499",
      href: "tel:+919325446499",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-pastel-pink/50 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-pastel-mint/50 blur-3xl" />
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            I'd love to hear from you! Feel free to reach out for collaborations or just a friendly chat.
          </p>
          <div className="w-24 h-1 bg-primary/50 mx-auto rounded-full mt-4" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((info) => (
            <a
              key={info.label}
              href={info.href || "#"}
              className="group p-8 rounded-3xl gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                <info.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {info.label}
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                {info.value}
              </p>
            </a>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="mailto:tanviambarkar@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            <Send className="w-5 h-5" />
            Send me a Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
