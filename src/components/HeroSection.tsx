import tanviPhoto from "@/assets/tanvi-photo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-pastel-mint/50 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-pastel-lavender/50 blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-pastel-yellow/40 blur-2xl animate-float" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Photo */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl transform scale-110" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-card shadow-hover">
                <img 
                  src={tanviPhoto} 
                  alt="Tanvi Ambarkar" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
            </div>
          </div>
          
          {/* Text content */}
          <div className="text-center lg:text-left animate-fade-up">
            <p className="text-muted-foreground text-lg mb-2 tracking-wide">Hello, I'm</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 text-gradient">
              Tanvi Ambarkar
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-6 font-light">
              BTech Student in Electronics & Computer Engineering
            </p>
            <p className="text-muted-foreground max-w-lg leading-relaxed mb-8">
              At Zeal College of Engineering and Research, Pune. A creative and curious individual 
              who loves turning ideas into reality.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 rounded-full bg-card border-2 border-primary/30 text-foreground font-medium hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
