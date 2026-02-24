import React, { useRef } from 'react';
import { projectData } from '../projectData';
import { useActiveSection } from '../hooks/useActiveSection';

const SCROLL_TARGET: Record<string, string> = {
  'about-me': 'about-heading',
  experience: 'experience-heading',
  'contact-me': 'contact-heading',
};

export function NavBar(): React.ReactElement {
  const activeSection = useActiveSection();
  const navRef = useRef<HTMLElement>(null);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-4 sm:gap-6 py-3 sm:py-4 bg-black/80 backdrop-blur-sm border-b border-white/10"
      aria-label="Main navigation"
    >
      {projectData.copy.nav.map(({ href, label }) => {
        const isHome = href === '#intro';
        const sectionId = href.slice(1);
        const scrollTargetId = SCROLL_TARGET[sectionId] ?? sectionId;
        const isActive = activeSection === sectionId;

        const handleClick = (e: React.MouseEvent) => {
          e.preventDefault();
          if (isHome) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const el = document.getElementById(scrollTargetId);
            const nav = navRef.current;
            if (el && nav) {
              const navHeight = nav.offsetHeight;
              const elTop = el.getBoundingClientRect().top + window.scrollY;
              window.scrollTo({
                top: elTop - navHeight,
                behavior: 'smooth',
              });
            }
          }
        };

        const showGradient = isActive;

        return (
          <a
            key={href}
            href={href}
            className="group relative inline-block text-sm font-semibold"
            onClick={handleClick}
          >
            <span className={showGradient ? 'invisible' : 'text-white'}>{label}</span>
            <span
              aria-hidden
              className={`absolute inset-0 bg-gradient-text bg-clip-text text-transparent transition-opacity duration-150 ${
                showGradient ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            >
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
