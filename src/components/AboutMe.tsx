import React, { lazy, Suspense } from 'react';
import { Typography } from './Typography';
import { projectData } from '../projectData';
import { useInView } from '../hooks/useInView';

const CarouselWithImages = lazy(() =>
  import('./CarouselWithImages').then((m) => ({ default: m.CarouselWithImages })),
);

export function AboutMe(): React.ReactElement {
  const { heading, paragraphs, technologiesLabel, technologies } =
    projectData.copy.aboutMe;
  const [carouselRef, carouselInView] = useInView('400px');

  return (
    <section aria-labelledby="about-heading" className="w-full">
      <div className="container mx-auto w-full md:max-w-6xl px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2">
            <Typography variant="heading" gradient level={2} id="about-heading">
              {heading}
            </Typography>
            {paragraphs.map((text, i) => (
              <Typography key={i} variant="body">
                {text}
              </Typography>
            ))}
            <Typography variant="body">{technologiesLabel}</Typography>
            <div className="grid grid-cols-2 gap-4">
              <ul aria-label="Technologies used">
                {technologies[0].map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <ul aria-label="Technologies used">
                {technologies[1].map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
          <div ref={carouselRef} className="w-full md:w-1/2 pt-5 md:pt-0 min-h-[200px]">
            {carouselInView && (
              <Suspense fallback={<div className="min-h-[280px] animate-pulse bg-white/5 rounded" />}>
                <CarouselWithImages />
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
