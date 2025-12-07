import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Briefcase } from "lucide-react";

const roles = ["Web Developer", "Web Designer", "Graphic Designer"];

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow animation-delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-sm md:text-base font-medium text-primary mb-4 animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards' }}>
              Welcome to my Website
            </p>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 animate-fade-in-up opacity-0 animation-delay-100" style={{ animationFillMode: 'forwards' }}>
              Hello, my name is{" "}
              <span className="text-primary">Gamal Tarek</span>
            </h1>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 animate-fade-in-up opacity-0 animation-delay-200" style={{ animationFillMode: 'forwards' }}>
              <span className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground">
                I'm a{" "}
              </span>
              <span className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in-up opacity-0 animation-delay-300" style={{ animationFillMode: 'forwards' }}>
              I'm a web developer with extensive experience for over 2 years. 
              My expertise is in creating website design, graphic design, and many more.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up opacity-0 animation-delay-400" style={{ animationFillMode: 'forwards' }}>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="w-full sm:w-auto"
                data-testid="button-hire-me"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Hire Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto"
                data-testid="button-download-cv"
              >
                <a href="https://gamaltare.github.io/GamalTarek/img/1.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center animate-fade-in opacity-0 animation-delay-300" style={{ animationFillMode: 'forwards' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-2xl scale-110 animate-float" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="https://gamaltare.github.io/GamalTarek/img/10.png"
                  alt="Gamal Tarek"
                  className="w-full h-full object-cover"
                  data-testid="img-hero-profile"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          data-testid="button-scroll-down"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
