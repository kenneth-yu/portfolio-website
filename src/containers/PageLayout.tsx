import React from 'react';
import { Hero } from '../components/Hero';
import { AboutMe } from '../components/AboutMe';
import { Experiences } from './Experiences';
import { Contact } from '../components/Contact';
import { NavBar } from '../components/NavBar';
import { SectionDivider } from '../components/SectionDivider';

export function PageLayout(): React.ReactElement {
  return (
    <>
      <NavBar />

      <main id="main-content" className="pt-14 sm:pt-16">
        <section
          id="intro"
          className="min-h-[calc(100vh-6rem)] sm:min-h-[calc(100vh-8rem)] flex items-center justify-center px-4"
          aria-label="Introduction"
        >
          <Hero />
        </section>

        <SectionDivider />

        <section
          id="about-me"
          className="min-h-0 sm:min-h-screen flex items-center justify-center py-8 sm:py-12 px-4"
          aria-label="About Me"
        >
          <AboutMe />
        </section>

        <SectionDivider />

        <section
          id="experience"
          className="py-8 sm:py-12"
          aria-label="Experience"
        >
          <Experiences />
        </section>

        <SectionDivider />

        <section
          id="contact-me"
          className="min-h-0 sm:min-h-screen flex items-center justify-center py-12 sm:py-12 px-4"
          aria-label="Contact"
        >
          <Contact />
        </section>
      </main>
    </>
  );
}
