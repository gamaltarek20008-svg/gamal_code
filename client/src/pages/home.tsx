import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Download,
  Envelope,
  Globe2,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Phone,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Sun,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";

const personalDetails = [
  { label: "Birthday", value: "March 12, 1995" },
  { label: "Location", value: "Cairo, Egypt" },
  { label: "Email", value: "hello@gamaltarek.dev" },
  { label: "Phone", value: "+20 100 123 4567" },
  { label: "Availability", value: "Open to work" },
];

const skills = [
  { name: "UI/UX Design", value: 92 },
  { name: "Frontend Development", value: 88 },
  { name: "Motion & Interaction", value: 82 },
  { name: "Brand Systems", value: 76 },
];

const experienceTimeline = [
  {
    year: "2025",
    title: "Senior Frontend Engineer",
    subtitle: "Elite Studio",
    duration: "2024 - Present",
    description:
      "Leading premium product experiences with polished React interfaces, motion design, and cross-team collaboration.",
  },
  {
    year: "2024",
    title: "UI/UX Designer",
    subtitle: "Nova Creative",
    duration: "2022 - 2024",
    description:
      "Designed modern website systems, landing pages, and brand touchpoints for high-growth digital products.",
  },
  {
    year: "2022",
    title: "Web Developer",
    subtitle: "Digital Hatch",
    duration: "2020 - 2022",
    description:
      "Built responsive interfaces and component libraries with React, Tailwind CSS, and animation systems.",
  },
  {
    year: "2020",
    title: "B.Sc. in Graphic Design",
    subtitle: "Cairo University",
    duration: "2016 - 2020",
    description:
      "Studied visual communication, interaction design, and user-centered website experiences.",
  },
];

const services = [
  {
    title: "Product Design",
    description:
      "Creating polished interface systems, refined layouts, and intentional visual hierarchies.",
    icon: Layers,
  },
  {
    title: "Web Development",
    description:
      "Building responsive websites and web apps with modern front-end architecture and clean interactions.",
    icon: Rocket,
  },
  {
    title: "Brand Strategy",
    description:
      "Developing cohesive brands, color systems, and memorable digital identities.",
    icon: ShieldCheck,
  },
];

const portfolioItems = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  title: `Project ${index + 1}`,
  category: index % 2 === 0 ? "Web" : "Design",
  image: `/img/${index + 1}.png`,
}));

const contactCards = [
  {
    title: "Email",
    value: "hello@gamaltarek.dev",
    icon: Mail,
    href: "mailto:hello@gamaltarek.dev",
  },
  {
    title: "Phone",
    value: "+20 100 123 4567",
    icon: Phone,
    href: "tel:+201001234567",
  },
  {
    title: "Location",
    value: "Cairo, Egypt",
    icon: MapPin,
    href: "https://goo.gl/maps/3V3Y2y7YB1U2",
  },
  {
    title: "Website",
    value: "gamaltarek.dev",
    icon: Globe2,
    href: "https://gamaltarek.dev",
  },
];

const accentOptions = [
  { label: "Blue", value: "blue", color: "#3b82f6" },
  { label: "Green", value: "green", color: "#22c55e" },
  { label: "Purple", value: "purple", color: "#8b5cf6" },
  { label: "Red", value: "red", color: "#ef4444" },
];

export default function Home() {
  const { theme, toggleTheme, accentColor, setAccentColor, customAccent, setCustomAccent } = useTheme();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [portfolioFilter, setPortfolioFilter] = useState("All");
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const filteredPortfolio = useMemo(() => {
    if (portfolioFilter === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.category === portfolioFilter);
  }, [portfolioFilter]);

  useEffect(() => {
    const roles = ["Web Developer", "Product Designer", "Creative Strategist"];
    const currentRole = roles[currentRoleIndex];
    const isFullWord = displayText === currentRole;
    const delay = isDeleting ? 40 : isFullWord ? 1800 : 100;

    const timeout = window.setTimeout(() => {
      if (isDeleting) {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else if (isFullWord) {
        setIsDeleting(true);
      } else {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const handleInputChange = (key: keyof typeof formState, value: string) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setFormError("Please complete the required fields before sending.");
      setFormStatus("error");
      return;
    }
    setFormError("");
    setFormStatus("success");
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        <section id="home" className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.1),transparent_24%)] pointer-events-none" />
          <div className="absolute -left-10 top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-24 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center justify-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.32em] text-cyan-200 shadow-glow lg:justify-start">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  Premium Portfolio
                </div>
                <div className="space-y-5">
                  <p className="text-sm md:text-base font-medium uppercase tracking-[0.28em] text-cyan-200/90 animate-fade-in-up opacity-0 animation-delay-100" style={{ animationFillMode: "forwards" }}>
                    Welcome to my portfolio
                  </p>
                  <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-tight animate-fade-in-up opacity-0 animation-delay-200" style={{ animationFillMode: "forwards" }}>
                    I build premium web experiences with
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-300">
                      motion, clarity and impact.
                    </span>
                  </h1>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-lg font-semibold text-slate-200 lg:justify-start animate-fade-in-up opacity-0 animation-delay-300" style={{ animationFillMode: "forwards" }}>
                    <span>I'm a</span>
                    <span className="text-cyan-300">{displayText}</span>
                    <span className="animate-pulse text-cyan-300">|</span>
                  </div>
                </div>

                <p className="mx-auto max-w-2xl text-base md:text-lg leading-8 text-slate-300 animate-fade-in-up opacity-0 animation-delay-400 lg:mx-0" style={{ animationFillMode: "forwards" }}>
                  I help ambitious brands and startups create polished websites, strong brand systems, and meaningful digital experiences with reliable performance and elegant motion.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 animation-delay-500 lg:justify-start" style={{ animationFillMode: "forwards" }}>
                  <Button size="lg" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-xl shadow-cyan-500/20">
                    <Briefcase className="h-5 w-5" />
                    Hire Me
                  </Button>
                  <Button size="lg" variant="outline" className="inline-flex items-center gap-2 border-slate-600 text-slate-100 hover:border-slate-400">
                    <Download className="h-5 w-5" />
                    Download CV
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 animate-fade-in-up opacity-0 animation-delay-600" style={{ animationFillMode: "forwards" }}>
                  {[
                    { label: "Experience", value: "5+ years" },
                    { label: "Projects", value: "25+" },
                    { label: "Clients", value: "12+" },
                    { label: "Design", value: "Premium" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 mb-2">{item.label}</p>
                      <p className="text-lg font-semibold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center animate-scale-in opacity-0 animation-delay-500" style={{ animationFillMode: "forwards" }}>
                <div className="relative w-full max-w-[540px]">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/10 blur-3xl" />
                  <div className="absolute -left-10 bottom-10 h-24 w-24 rounded-full bg-violet-300/10 blur-3xl" />

                  <div className="hero-3d-scene relative rounded-[2.5rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_60px_140px_rgba(15,23,42,0.35)]">
                    <div className="hero-3d-orbit hero-3d-orbit-one" />
                    <div className="hero-3d-orbit hero-3d-orbit-two" />
                    <div className="hero-3d-orbit hero-3d-orbit-three" />

                    <div className="hero-3d-card-main absolute inset-0 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-slate-900/80 shadow-2xl">
                      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_42%)]" />
                      <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-primary/20 bg-slate-950/85">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_38%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_40%)]" />
                        <div className="relative h-full p-5">
                          <div className="hero-3d-portrait relative h-full overflow-hidden rounded-[1.6rem] border border-white/10 shadow-[0_25px_60px_rgba(15,23,42,0.22)]">
                            <img
                              src="/img/1.png"
                              alt="Gamal Tarek portfolio preview"
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="absolute left-6 top-6 rounded-full bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-foreground shadow-xl shadow-slate-950/10">
                            3D scene
                          </div>
                          <div className="absolute right-6 bottom-6 rounded-full bg-slate-950/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300 shadow-xl shadow-slate-950/20">
                            Floating UI
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="hero-3d-chip hero-3d-chip-left">Design</div>
                    <div className="hero-3d-chip hero-3d-chip-right">Code</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="mb-14 max-w-3xl text-center mx-auto">
              <p className="text-sm uppercase tracking-[0.32em] text-primary">About me</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground">A refined design process with clear results.</h2>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-8">
                I combine visual storytelling, interface craftsmanship, and clean development to deliver premium website experiences.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2rem] border border-border bg-slate-950/80 p-8 shadow-xl backdrop-blur-xl animate-slide-in-left opacity-0 animation-delay-100" style={{ animationFillMode: "forwards" }}>
                <h3 className="text-2xl font-semibold text-white mb-6">Personal details</h3>
                <dl className="grid gap-4 text-sm text-slate-300">
                  {personalDetails.map((item) => (
                    <div key={item.label} className="grid gap-1">
                      <dt className="text-xs uppercase tracking-[0.28em] text-slate-500">{item.label}</dt>
                      <dd className="text-base text-white">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="space-y-8 animate-slide-in-right opacity-0 animation-delay-200" style={{ animationFillMode: "forwards" }}>
                <div className="rounded-[2rem] border border-border bg-background/80 p-8 shadow-xl backdrop-blur-xl">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Skills</h3>
                  <div className="space-y-5">
                    {skills.map((skill) => (
                      <div key={skill.name} className="space-y-3">
                        <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                          <span>{skill.name}</span>
                          <span>{skill.value}%</span>
                        </div>
                        <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
                          <div className="h-full rounded-full bg-primary transition-all duration-700" style={{ width: `${skill.value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-border bg-slate-950/80 p-8 shadow-xl backdrop-blur-xl">
                  <h3 className="text-2xl font-semibold text-white mb-4">What I bring</h3>
                  <ul className="space-y-4 text-slate-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-cyan-400" />
                      <span>Clean, responsive interfaces with a premium visual language.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-cyan-400" />
                      <span>Fast development flow and thoughtful interactions.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-cyan-400" />
                      <span>Strong brand consistency across every screen and touchpoint.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 md:py-28 bg-slate-950 text-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="mb-14 text-center">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Timeline</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold">Experience & Education</h2>
              <p className="mt-5 max-w-2xl mx-auto text-base text-slate-300 leading-7">
                A vertical timeline that shows the progression of my career, design work, and technical education.
              </p>
            </div>

            <div className="relative border-l border-border pl-6 lg:pl-12">
              {experienceTimeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative mb-12 lg:max-w-3xl ${index % 2 === 1 ? "lg:ml-auto lg:pr-8" : "lg:mr-auto lg:pl-8"}`}
                >
                  <div className="absolute -left-4 top-3 h-3 w-3 rounded-full bg-primary ring-4 ring-slate-950/80" />
                  <div
                    className={`rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl backdrop-blur-xl animate-fade-in-up opacity-0 ${index % 2 === 0 ? "animation-delay-100" : "animation-delay-200"}`}
                    style={{ animationFillMode: "forwards" }}
                  >
                    <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-cyan-200">{item.year}</span>
                    <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">{item.subtitle} · {item.duration}</p>
                    <p className="mt-4 text-base leading-7 text-slate-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="mb-14 text-center">
              <p className="text-sm uppercase tracking-[0.32em] text-primary">Services</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground">What I offer</h2>
              <p className="mt-5 mx-auto max-w-2xl text-base text-muted-foreground leading-7">
                Services designed for ambitious brands that want clean, high-impact digital products.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group rounded-[2rem] border border-border bg-slate-950/90 p-8 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-300 leading-7">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 md:py-28 bg-slate-950 text-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Portfolio</p>
                <h2 className="mt-4 text-4xl md:text-5xl font-bold">Selected projects</h2>
              </div>
              <div className="inline-flex flex-wrap items-center gap-3">
                {['All', 'Web', 'Design'].map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setPortfolioFilter(filter)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${portfolioFilter === filter ? 'border-primary bg-primary/10 text-primary' : 'border-border text-slate-300 hover:border-slate-400'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPortfolio.map((item, index) => (
                <article
                  key={item.id}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-xl"
                >
                  <img src={item.image} alt={item.title} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-slate-950/30 opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="w-full rounded-3xl bg-black/40 p-4 backdrop-blur-xl opacity-0 transition duration-500 group-hover:opacity-100">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{item.category}</p>
                          <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                        </div>
                        <ArrowRight className="h-5 w-5 text-cyan-300" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="mb-14 text-center">
              <p className="text-sm uppercase tracking-[0.32em] text-primary">Contact</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground">Let's build something great together</h2>
              <p className="mt-5 mx-auto max-w-2xl text-base leading-7 text-muted-foreground">
                Send a message, talk through your next project, or book a strategy session.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <form
                onSubmit={submitForm}
                className="rounded-[2rem] border border-border bg-slate-950/90 p-8 shadow-xl backdrop-blur-xl"
              >
                <div className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block text-sm font-medium text-slate-300">
                      Name
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(event) => handleInputChange("name", event.target.value)}
                        className="mt-3 w-full rounded-3xl border border-border bg-background/90 px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="Your full name"
                      />
                    </label>
                    <label className="block text-sm font-medium text-slate-300">
                      Email
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(event) => handleInputChange("email", event.target.value)}
                        className="mt-3 w-full rounded-3xl border border-border bg-background/90 px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="you@example.com"
                      />
                    </label>
                  </div>

                  <label className="block text-sm font-medium text-slate-300">
                    Subject
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(event) => handleInputChange("subject", event.target.value)}
                      className="mt-3 w-full rounded-3xl border border-border bg-background/90 px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Project name or topic"
                    />
                  </label>

                  <label className="block text-sm font-medium text-slate-300">
                    Message
                    <textarea
                      value={formState.message}
                      onChange={(event) => handleInputChange("message", event.target.value)}
                      rows={6}
                      className="mt-3 w-full rounded-3xl border border-border bg-background/90 px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Tell me about your project"
                    />
                  </label>

                  {formStatus === "error" && (
                    <p className="rounded-3xl bg-red-500/10 border border-red-500/20 p-4 text-sm text-red-200">{formError}</p>
                  )}
                  {formStatus === "success" && (
                    <p className="rounded-3xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-sm text-emerald-200">
                      Message sent successfully, I will respond soon.
                    </p>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-muted-foreground">Quick response time and honest estimates.</p>
                    <Button type="submit" size="lg" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950">
                      Send message
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </form>

              <div className="space-y-8">
                <div className="rounded-[2rem] border border-border bg-slate-950/90 p-8 shadow-xl backdrop-blur-xl">
                  <h3 className="text-2xl font-semibold text-white mb-6">Contact details</h3>
                  <div className="grid gap-4">
                    {contactCards.map((card) => {
                      const Icon = card.icon;
                      return (
                        <a
                          key={card.title}
                          href={card.href}
                          className="group block rounded-3xl border border-border bg-background/90 p-5 transition hover:-translate-y-0.5 hover:border-primary/30"
                        >
                          <div className="flex items-center gap-4">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{card.title}</p>
                              <p className="mt-2 text-base font-semibold text-foreground">{card.value}</p>
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-border bg-slate-950/90 p-8 shadow-xl backdrop-blur-xl">
                  <h3 className="text-2xl font-semibold text-white mb-6">Egypt location</h3>
                  <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
                    <iframe
                      title="Egypt location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d345230.5929840015!2d30.882428694400215!3d26.82055329072856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841f506f7e595%3A0xfa9f935468d5e265!2sEgypt!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
                      className="h-96 w-full border-0"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background/80 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-3xl bg-primary/10 text-primary grid place-items-center">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-primary">Gamal Tarek</p>
                  <p className="text-base text-muted-foreground">Premium portfolio and digital experiences.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">Stay connected through the best channels.</p>
                <div className="flex items-center gap-3 text-slate-500">
                  <a href="#" className="transition hover:text-cyan-400"><Linkedin className="h-5 w-5" /></a>
                  <a href="#" className="transition hover:text-cyan-400"><Twitter className="h-5 w-5" /></a>
                  <a href="#" className="transition hover:text-cyan-400"><Instagram className="h-5 w-5" /></a>
                  <a href="#" className="transition hover:text-cyan-400"><Github className="h-5 w-5" /></a>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-slate-950/90 p-8 shadow-xl backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">Theme customizer</h3>
                  <p className="text-sm text-slate-400">Choose accent colors and toggle dark mode.</p>
                </div>
                <Button size="icon" variant="ghost" onClick={toggleTheme}>
                  {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </Button>
              </div>
              <div className="grid gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  {accentOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setAccentColor(option.value as any)}
                      className={`h-11 w-11 rounded-full border-2 ${accentColor === option.value ? "border-white" : "border-border"}`}
                      style={{ backgroundColor: option.color }}
                      aria-label={`Set accent ${option.label}`}
                    />
                  ))}
                  <input
                    type="color"
                    value={customAccent}
                    onChange={(event) => setCustomAccent(event.target.value)}
                    className="h-11 w-11 rounded-full border border-border p-0"
                    aria-label="Choose custom accent"
                  />
                </div>
                <p className="text-sm text-slate-400">Accent color is stored in your browser and updates the page palette instantly.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
            © 2026 Gamal Tarek. Crafted with premium experiences and thoughtful interactions.
          </div>
        </div>
      </footer>
    </div>
  );
}
