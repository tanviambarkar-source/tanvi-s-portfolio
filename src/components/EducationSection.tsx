import { GraduationCap, Award, School } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      icon: GraduationCap,
      title: "BTech in Electronics & Computer Engineering",
      institution: "Zeal College of Engineering and Research, Pune",
      status: "Currently Pursuing",
      color: "pastel-pink",
    },
    {
      icon: Award,
      title: "HSC (Higher Secondary Certificate)",
      grade: "83%",
      color: "pastel-mint",
    },
    {
      icon: School,
      title: "SSC (Secondary School Certificate)",
      grade: "75%",
      color: "pastel-lavender",
    },
  ];

  return (
    <section id="education" className="py-24 px-4 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pastel-peach/30 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-pastel-mint/30 blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto rounded-full" />
        </div>
        
        <div className="space-y-6">
          {education.map((item, index) => (
            <div 
              key={item.title}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-3 md:left-5 top-16 w-0.5 h-full bg-primary/20" />
              )}
              
              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-2 top-6 w-6 h-6 rounded-full bg-${item.color} border-4 border-card shadow-lg`} />
              
              <div className={`bg-gradient-to-r from-${item.color}/30 to-transparent rounded-2xl p-6 md:p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1`}>
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-${item.color}/50 flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    {item.institution && (
                      <p className="text-muted-foreground mb-2">{item.institution}</p>
                    )}
                    {item.grade && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20">
                        <span className="text-2xl font-bold text-gradient">{item.grade}</span>
                      </div>
                    )}
                    {item.status && (
                      <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                        {item.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
