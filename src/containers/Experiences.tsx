import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Experience } from '../components/Experience';
import { Typography } from '../components/Typography';
import { Tabs, TabList, Tab, TabPanel } from '../components/Tabs';
import { projectData } from '../projectData';
import type { Experience as ExperienceType } from '../types/projectData';

const { heading, viewDetails, collapse, ariaLabelTabs } = projectData.copy.experience;

function getLinkTag(experience: ExperienceType): string {
  return experience.linkTag ?? experience.company.toLowerCase();
}

function getActiveKeyFromHash(validKeys: string[]): string | null {
  if (typeof window === 'undefined') return null;
  const hash = window.location.hash;
  if (validKeys.includes(hash)) return hash;
  return null;
}

export function Experiences(): React.ReactElement {
  const experiences = projectData.experience;
  const validKeys = experiences.map((e) => `#experience/${getLinkTag(e)}`);
  const defaultActiveKey = validKeys[0];

  const [activeKey, setActiveKeyState] = useState(() => {
    const fromHash = getActiveKeyFromHash(validKeys);
    return fromHash ?? defaultActiveKey;
  });

  const [expandedId, setExpandedId] = useState<string | null>(() => {
    const fromHash = getActiveKeyFromHash(validKeys);
    if (fromHash) {
      const exp = experiences.find((e) => `#experience/${getLinkTag(e)}` === fromHash);
      return exp ? getLinkTag(exp) : getLinkTag(experiences[0]);
    }
    return getLinkTag(experiences[0]);
  });

  const pendingExpandRef = useRef<string | null>(null);

  useEffect(() => {
    const handler = () => {
      const fromHash = getActiveKeyFromHash(validKeys);
      if (fromHash) {
        setActiveKeyState(fromHash);
        const exp = experiences.find((e) => `#experience/${getLinkTag(e)}` === fromHash);
        if (exp) setExpandedId(getLinkTag(exp));
      }
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, [validKeys.join(','), experiences]);

  const handleSelect = useCallback((key: string) => {
    setActiveKeyState(key);
    const exp = experiences.find((e) => `#experience/${getLinkTag(e)}` === key);
    if (exp) setExpandedId(getLinkTag(exp));
    if (typeof window !== 'undefined') {
      history.replaceState(null, '', `#${key.replace('#', '')}`);
    }
  }, [experiences]);

  const handleAccordionToggle = useCallback((tag: string) => {
    const isExpanding = expandedId !== tag;
    const isCollapsing = expandedId === tag;

    const expandAndScroll = (targetTag: string) => {
      setExpandedId(targetTag);
      setActiveKeyState(`#experience/${targetTag}`);
      if (typeof window !== 'undefined') {
        history.replaceState(null, '', `#experience/${targetTag}`);
      }
        setTimeout(() => {
        const el = document.getElementById(`experience-content-${targetTag}`);
        if (el) {
          const navHeight = 95;
          const elTop = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elTop - navHeight, behavior: 'smooth' });
        }
      }, 150);
    };

    if (isCollapsing) {
      setExpandedId(null);
      return;
    }

    if (isExpanding && expandedId !== null) {
      const collapsingTag = expandedId;
      pendingExpandRef.current = tag;
      setExpandedId(null);

      const collapsingEl = document.getElementById(
        `experience-content-${collapsingTag}`,
      );
      if (collapsingEl) {
        let done = false;
        const doExpand = () => {
          if (done) return;
          done = true;
          const toExpand = pendingExpandRef.current;
          pendingExpandRef.current = null;
          if (toExpand) expandAndScroll(toExpand);
        };
        const onCollapsed = (e: TransitionEvent) => {
          if (e.propertyName === 'max-height' && e.target === collapsingEl) {
            collapsingEl.removeEventListener('transitionend', onCollapsed);
            doExpand();
          }
        };
        collapsingEl.addEventListener('transitionend', onCollapsed);
        setTimeout(doExpand, 550);
      } else {
        pendingExpandRef.current = null;
        expandAndScroll(tag);
      }
    } else {
      expandAndScroll(tag);
    }
  }, [expandedId]);

  return (
    <div aria-labelledby="experience-heading">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="w-full md:max-w-[75%]">
          <Typography
            variant="heading"
            gradient
            level={2}
            id="experience-heading"
            className="mb-6 md:mb-0"
          >
            {heading}
          </Typography>

          <div className="lg:hidden space-y-2">
            {experiences.map((exp) => {
              const tag = getLinkTag(exp);
              const isExpanded = expandedId === tag;
              return (
                <div
                  key={tag}
                  id={`experience-accordion-${tag}`}
                  className="border border-white/20 rounded-lg overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => handleAccordionToggle(tag)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left bg-white/10 hover:bg-white/15 transition-colors rounded-t-lg"
                    aria-expanded={isExpanded}
                    aria-controls={`experience-content-${tag}`}
                  >
                    <span className="font-medium text-white">{exp.company}</span>
                    <span className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-white/50">
                        {isExpanded ? collapse : viewDetails}
                      </span>
                      <svg
                        className={`w-5 h-5 text-white/70 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`experience-content-${tag}`}
                    role="region"
                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] scroll-mt-20 ${
                      isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 py-4 border-t border-white/10">
                      <Experience
                        linkTag={tag}
                        experienceData={exp}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Tabs
              id="experience-tabs"
              defaultActiveKey={defaultActiveKey}
              activeKey={activeKey}
              onSelect={handleSelect}
            >
              <div className="flex flex-row gap-8 items-start">
                <div className="w-1/4 shrink-0 sticky top-8">
                  <TabList aria-label={ariaLabelTabs} className="pt-8">
                    {experiences.map((exp, index) => (
                      <Tab key={`tab-${index}`} eventKey={`#experience/${getLinkTag(exp)}`}>
                        {exp.company}
                      </Tab>
                    ))}
                  </TabList>
                </div>
                <div className="w-3/4 min-w-0">
                  {experiences.map((exp, index) => (
                    <TabPanel
                      key={`panel-${index}`}
                      eventKey={`#experience/${getLinkTag(exp)}`}
                    >
                      <Experience
                        linkTag={getLinkTag(exp)}
                        experienceData={exp}
                      />
                    </TabPanel>
                  ))}
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}