import React from 'react';
import { Typography } from './Typography';
import { projectData } from '../projectData';
import profilePhotoSrc from '../images/profilePhoto.png?w=800&format=webp';
import profilePhotoSrcSet from '../images/profilePhoto.png?w=400;800;1200&format=webp&as=srcset';

export function Hero(): React.ReactElement {
  const { heading, subheading, body } = projectData.copy.hero;
  return (
    <section aria-labelledby="hero-heading">
      <div className="container mx-auto w-full md:max-w-6xl px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={profilePhotoSrc}
              srcSet={profilePhotoSrcSet}
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Kenneth Yu profile photo"
              className="max-w-full h-auto rounded-lg"
                            loading="eager"
            />
          </div>
          <div className="w-full md:w-1/2">
            <Typography variant="heading" gradient level={1} id="hero-heading">
              {heading}
            </Typography>
            <Typography variant="heading" gradient level={2}>
              {subheading}
            </Typography>
            <Typography variant="body">{body}</Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
