import React from 'react';
import { Carousel } from './Carousel';
import { projectData } from '../projectData';
import { imageSourcesByPath } from '../carouselImageSources';

export function CarouselWithImages(): React.ReactElement {
  const { carouselImages } = projectData.copy.aboutMe;
  const imagesWithSources = carouselImages.map((img) => ({
    ...img,
    ...imageSourcesByPath[img.path],
  }));
  return <Carousel images={imagesWithSources} />;
}
