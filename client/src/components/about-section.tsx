import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Download, Briefcase, Calendar, MapPin, Mail, Phone, Globe, GraduationCap, Sparkles } from "lucide-react";

const personalInfo = [
  { icon: Calendar, label: "Birthday", value: "6 Oct 2008" },
  { icon: Sparkles, label: "Age", value: "17" },
  { icon: Globe, label: "Website", value: "www.gamaltarek.com" },
  { icon: Mail, label: "Email", value: "gamaltarek553@gmail.com" },
  { icon: GraduationCap, label: "Degree", value: "CS Student" },
  { icon: Phone, label: "Phone", value: "+20 1200 384 900" },
  { icon: MapPin, label: "City", value: "Egypt" },
  { icon: Briefcase, label: "Freelance", value: "Available" },
];

const skills = [
  { name: "HTML", percentage: 96 },
  { name: "CSS", percentage: 86 },
  { name: "JavaScript", percentage: 66 },
  { name: "Web Development", percentage: 80 },
];

export function AboutSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-card/50"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
              I'm Gamal Tarek, Web Developer
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              I am a passionate web developer and designer from Egypt. I started my programming 
              journey in 2022 when I was 15 years old. Since then, I have been continuously 
              learning and improving my skills in HTML, CSS, JavaScript, and web design. 
              I love creating beautiful and functional websites that provide great user experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {personalInfo.map((info, index) => (
                <div
                  key={info.label}
                  className="flex items-center gap-3 p-3 rounded-md hover-elevate active-elevate-2"
                  data-testid={`info-${info.label.toLowerCase()}`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{info.label}</p>
                    <p className="text-sm font-medium text-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild data-testid="button-about-download-cv">
                <a href="https://gamaltare.github.io/GamalTarek/img/1.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
              <Button variant="outline" onClick={scrollToContact} data-testid="button-about-hire-me">
                <Briefcase className="w-4 h-4 mr-2" />
                Hire Me
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-8">
              My Skills
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <Card key={skill.name} className="p-4" data-testid={`skill-${skill.name.toLowerCase()}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm font-bold text-primary">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2" />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
