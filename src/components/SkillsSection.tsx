import { MessageSquare, BookOpen, RefreshCw, Brain, Clock, Eye, Globe, Palette, FileText, Layout, Lightbulb } from "lucide-react";

const SkillsSection = () => {
  const softSkills = [
    { icon: MessageSquare, label: "Clear Communication" },
    { icon: BookOpen, label: "Willingness to Learn" },
    { icon: RefreshCw, label: "Adaptability" },
    { icon: Brain, label: "Problem Solving" },
    { icon: Clock, label: "Time Management" },
    { icon: Eye, label: "Attention to Detail" },
  ];

  const technicalSkills = [
    { icon: Globe, label: "Portfolio Website Creation" },
    { icon: FileText, label: "Web Content Writing" },
    { icon: Palette, label: "Personal Branding" },
    { icon: Layout, label: "Modern Web Layouts" },
    { icon: Lightbulb, label: "Design Sense & Structure" },
  ];

  return (
    <section id="skills" className="py-24 px-4 gradient-mint relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-pastel-yellow/60 blur-2xl animate-float" />
        <div className="absolute bottom-1/4 left-10 w-40 h-40 rounded-full bg-pastel-coral/40 blur-3xl animate-float-delayed" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Soft Skills */}
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-card">
            <h3 className="font-display text-2xl font-semibold mb-6 text-center text-foreground">
              ✨ Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-pastel-pink/30 hover:bg-pastel-pink/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Technical Skills */}
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-card">
            <h3 className="font-display text-2xl font-semibold mb-6 text-center text-foreground">
              💻 Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={skill.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-pastel-lavender/30 hover:bg-pastel-lavender/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <skill.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <span className="font-medium text-foreground/80">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
