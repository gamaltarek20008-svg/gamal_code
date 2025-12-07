import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    year: "2022 - 2023",
    title: "Started Programming Journey",
    description:
      "In 2022, I was 15 years old when my father encouraged me to learn programming. This sparked my interest in computer science and web development.",
    type: "experience",
  },
  {
    year: "2023 - Mid 2023",
    title: "Return to Programming",
    description:
      "After a brief break, I returned to programming with renewed intensity and passion. I was determined to master web development fundamentals.",
    type: "experience",
  },
  {
    year: "Mid 2023 - 2024",
    title: "Deep Dive into Web Development",
    description:
      "I returned to programming with great enthusiasm, taking courses in HTML and CSS. My skills improved significantly as I practiced building websites.",
    type: "experience",
  },
];

const education = [
  {
    year: "2024 - 2025",
    title: "Course with Engineer Zero",
    description:
      "I took a comprehensive course learning HTML and CSS from Engineer Zero on YouTube. This course helped me understand the fundamentals of web development.",
    type: "education",
  },
  {
    year: "2024 - Mid 2025",
    title: "Completed Web Development Course",
    description:
      "After 6 months of dedicated learning while balancing my studies, I completed my web development course and gained solid skills in frontend development.",
    type: "education",
  },
  {
    year: "2022 - 2025",
    title: "Building Real Projects",
    description:
      "I started creating real projects, including a website for my father who is an English teacher. Each project helped me grow as a developer.",
    type: "education",
  },
];

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  type: string;
  index: number;
  isLeft: boolean;
}

function TimelineItem({ year, title, description, type, index, isLeft }: TimelineItemProps) {
  return (
    <div className={`relative flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
      <div className="hidden lg:block w-5/12" />
      
      <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
      
      <Card className={`flex-1 lg:w-5/12 ml-8 lg:ml-0 p-6 hover-elevate`} data-testid={`timeline-item-${index}`}>
        <Badge variant="secondary" className="mb-3">
          {year}
        </Badge>
        <h4 className="font-serif text-lg font-semibold text-foreground mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </Card>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 md:py-32"
      data-testid="section-experience"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Experience
              </h3>
            </div>

            <div className="relative">
              <div className="absolute left-2 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />
              
              <div className="space-y-8">
                {experiences.map((item, index) => (
                  <TimelineItem
                    key={index}
                    {...item}
                    index={index}
                    isLeft={index % 2 === 0}
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Education
              </h3>
            </div>

            <div className="relative">
              <div className="absolute left-2 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <TimelineItem
                    key={index}
                    {...item}
                    index={index + experiences.length}
                    isLeft={index % 2 === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
