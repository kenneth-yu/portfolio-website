import { useEffect, useState } from 'react';

const SECTION_IDS = ['intro', 'about-me', 'experience', 'contact-me'] as const;
const TRIGGER_OFFSET = 150;

function getActiveSection(): string {
  const triggerY = TRIGGER_OFFSET;
  let active = SECTION_IDS[0];

  const nearBottom =
    window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50;
  if (nearBottom) return 'contact-me';

  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const { top, bottom } = el.getBoundingClientRect();
    if (triggerY >= top && triggerY <= bottom) return id;
    if (triggerY >= top) active = id;
  }

  return active;
}

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const update = () => setActiveSection(getActiveSection());
    let scrollEndTimer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      update();
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(update, 150);
    };

    update();
    window.addEventListener('scroll', handleScroll, { passive: true });
    if ('onscrollend' in window) {
      window.addEventListener('scrollend', update, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollEndTimer);
      if ('onscrollend' in window) {
        window.removeEventListener('scrollend', update);
      }
    };
  }, []);

  return activeSection;
}
