const HeroSection = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-pastel-mint/50 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-pastel-lavender/50 blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-pastel-yellow/40 blur-2xl animate-float" />
      <div className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full bg-pastel-pink/40 blur-2xl animate-float-delayed" />
      
      <div className="container mx-auto max-w-4xl">
        {/* Text content */}
        <div className="text-center animate-fade-up">
          <p className="text-muted-foreground text-lg mb-2 tracking-wide">Hello, I'm</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient">
            Tanvi Ambarkar
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-6 font-light">
            BTech Student in Electronics & Computer Engineering
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 text-lg">
            At Zeal College of Engineering and Research, Pune. A creative and curious individual 
            who loves turning ideas into reality.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
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
    </section>
  );
};

export default HeroSection;
