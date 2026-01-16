import { Heart, Lightbulb, Target, Sparkles } from "lucide-react";

const AboutSection = () => {
  const traits = [
    { icon: Heart, label: "Passionate Learner" },
    { icon: Lightbulb, label: "Creative Thinker" },
    { icon: Target, label: "Goal Oriented" },
    { icon: Sparkles, label: "Detail Focused" },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-pastel-peach/50 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-pastel-mint/50 blur-3xl" />
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-right">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I'm a creative and curious individual who loves turning ideas into reality. 
              I enjoy exploring new concepts, building projects, and growing through 
              hands-on experience.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm passionate about learning, building, and improving. I enjoy taking on 
              new challenges and creating work I'm proud of. Every project is an opportunity 
              to grow and make something meaningful.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {traits.map((trait, index) => (
              <div 
                key={trait.label}
                className="p-6 rounded-2xl gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <trait.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-medium text-foreground">{trait.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
