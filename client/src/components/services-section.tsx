import { Card } from "@/components/ui/card";
import { Code, Palette, Globe, Gamepad2, Search, Smartphone } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive and modern websites using HTML, CSS, and JavaScript with clean and maintainable code.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Creating visually appealing graphics, logos, and marketing materials that capture attention and convey your message.",
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "Designing beautiful and user-friendly website interfaces with focus on user experience and modern aesthetics.",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Developing engaging web-based games and interactive experiences using modern web technologies.",
  },
  {
    icon: Search,
    title: "Web Research",
    description: "Conducting thorough research on web technologies, trends, and best practices to deliver optimal solutions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description: "Creating mobile-first designs and responsive layouts that work seamlessly across all devices and screen sizes.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-card/50"
      data-testid="section-services"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a wide range of services to help bring your ideas to life. 
            From web development to design, I'm here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-8 text-center hover-elevate"
              data-testid={`service-card-${index}`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
