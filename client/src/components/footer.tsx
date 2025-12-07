import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowUp } from "lucide-react";
import { SiFacebook, SiX, SiInstagram } from "react-icons/si";

const socialLinks = [
  {
    name: "Facebook",
    icon: SiFacebook,
    href: "https://www.facebook.com/",
  },
  {
    name: "Twitter",
    icon: SiX,
    href: "https://x.com/gamalcode553",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    href: "https://www.instagram.com/gamac_ode/",
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center gap-8">
          <a
            href="#home"
            className="font-serif text-2xl font-bold text-foreground"
            data-testid="link-footer-logo"
          >
            Gamal<span className="text-primary">.</span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="mailto:gamaltarek553@gmail.com"
              className="flex items-center gap-2 text-sm text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid="link-footer-email"
            >
              <Mail className="w-4 h-4" />
              gamaltarek553@gmail.com
            </a>
            <a
              href="tel:+201200384900"
              className="flex items-center gap-2 text-sm text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid="link-footer-phone"
            >
              <Phone className="w-4 h-4" />
              +20 1200 384 900
            </a>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                size="icon"
                variant="ghost"
                asChild
                data-testid={`link-social-${social.name.toLowerCase()}`}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>

          <div className="w-full border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              {currentYear} Gamal Tarek. All rights reserved.
            </p>
            
            <Button
              size="icon"
              variant="outline"
              onClick={scrollToTop}
              data-testid="button-scroll-top"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
