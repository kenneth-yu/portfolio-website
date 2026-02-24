import React from 'react';
import { Typography } from './Typography';
import type { Experience as ExperienceType } from '../types/projectData';

interface ExperienceProps {
  experienceData: ExperienceType;
  linkTag: string;
}

export function Experience({
  experienceData,
  linkTag,
}: ExperienceProps): React.ReactElement {
  const { jobTitle, jobTitles, roles, summary, company, jobDates, description } =
    experienceData;

  const listClass = 'list-disc text-body font-normal leading-relaxed pl-5 md:pl-6 space-y-2 mb-4';

  return (
    <div>
      <Typography variant="subheading" as="span" className="font-normal">
        {jobTitle}
        <br className="md:hidden" />
        <span className="bg-gradient-text bg-clip-text text-transparent">
          {` @ ${company}`}
        </span>
      </Typography>
      {jobTitles && jobTitles.length > 0 && !roles && (
        <Typography variant="body" className="text-neutral-500 dark:text-neutral-400 mt-1 mb-0">
          {jobTitles.join(' → ')}
        </Typography>
      )}
      <Typography variant="body" className="mb-4">
        {jobDates}
      </Typography>
      {summary && summary.length > 0 ? (
        <div className="space-y-4">
          {summary.map((paragraph, index) => (
            <Typography key={`${linkTag}-summary-${index}`} variant="body" className="mb-0">
              {paragraph}
            </Typography>
          ))}
        </div>
      ) : roles && roles.length > 0 ? (
        <div className="space-y-6">
          {roles.map((role, roleIndex) => (
            <div key={`${linkTag}-role-${roleIndex}`}>
              <Typography variant="subheading" className="text-neutral-500 dark:text-neutral-400 mb-2 font-medium">
                {role.title}
              </Typography>
              <ul className={listClass}>
                {role.description.map((bullet, index) => (
                  <li key={`${linkTag}-${roleIndex}-${index}`}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className={listClass}>
          {description.map((bullet, index) => (
            <li key={`${linkTag}-${index}`}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
