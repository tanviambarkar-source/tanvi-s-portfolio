import { Sun, Battery, Zap, Leaf, Smartphone, Users } from "lucide-react";

const ProjectSection = () => {
  const features = [
    { icon: Leaf, label: "Eco-friendly Charging" },
    { icon: Smartphone, label: "Portable Design" },
    { icon: Battery, label: "Backup Battery" },
  ];

  const technologies = ["Solar Panel", "Battery", "Charging Circuit"];

  return (
    <section id="projects" className="py-24 px-4 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-1/3 w-48 h-48 rounded-full bg-pastel-yellow/60 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/3 w-56 h-56 rounded-full bg-pastel-coral/50 blur-3xl animate-float-delayed" />
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Project
          </h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto rounded-full" />
        </div>
        
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-hover">
          {/* Project Header */}
          <div className="bg-gradient-to-r from-pastel-yellow/50 via-pastel-peach/50 to-pastel-coral/50 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-card/80 flex items-center justify-center shadow-lg">
                <Sun className="w-8 h-8 text-foreground" />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Solar Power Mobile Charging System
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground text-sm">Group Project Member</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project Content */}
          <div className="p-8 md:p-12">
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              A portable system that uses solar energy to charge mobile phones. This eco-friendly 
              solution provides sustainable charging options while being completely portable and 
              featuring a backup battery for continuous power supply.
            </p>
            
            {/* Technologies */}
            <div className="mb-8">
              <h4 className="font-display text-lg font-semibold mb-4 text-foreground">Technologies Used</h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-5 py-2 rounded-full bg-pastel-mint/50 text-foreground font-medium text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Features */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-4 text-foreground">Key Features</h4>
              <div className="grid sm:grid-cols-3 gap-4">
                {features.map((feature) => (
                  <div 
                    key={feature.label}
                    className="flex items-center gap-3 p-4 rounded-xl bg-pastel-lavender/30 hover:bg-pastel-lavender/50 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <span className="font-medium text-foreground/80">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
