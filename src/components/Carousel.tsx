import React, { useCallback, useEffect, useState } from 'react';
import { useSwipe } from '../hooks/useSwipe';

const AUTOPLAY_DELAY_MS = 4000;
const TRANSITION_DURATION_MS = 800;

interface CarouselImage {
  src: string;
  srcSet?: string;
  alt: string;
  objectFit?: 'cover';
}

interface CarouselProps {
  images: CarouselImage[];
  className?: string;
}

function SlideContent({ img }: { img: CarouselImage }): React.ReactElement {
  return img.objectFit === 'cover' ? (
    <div className="w-full md:max-w-[75%] aspect-[3/4] overflow-hidden rounded">
      <img
        src={img.src}
        srcSet={img.srcSet}
        sizes="(max-width: 768px) 100vw, 50vw"
        alt={img.alt}
        className="block w-full h-full object-cover object-center"
        loading="lazy"
      />
    </div>
  ) : (
    <img
      src={img.src}
      srcSet={img.srcSet}
      sizes="(max-width: 768px) 100vw, 50vw"
      alt={img.alt}
      className="block w-full md:max-w-[75%] mx-auto h-auto object-cover rounded"
      loading="lazy"
    />
  );
}

function CarouselButton({
  direction,
  onClick,
  ariaLabel,
}: {
  direction: 'prev' | 'next';
  onClick: () => void;
  ariaLabel: string;
}): React.ReactElement {
  const isPrev = direction === 'prev';
  const positionClasses = isPrev
    ? 'left-2 md:left-[13%]'
    : 'right-2 md:right-[13%]';
  const path = isPrev ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute ${positionClasses} top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/30 text-white focus:outline-none transition-colors [@media(hover:hover)]:hover:bg-white [@media(hover:hover)]:hover:text-black`}
      aria-label={ariaLabel}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6"
        aria-hidden
        fill="none"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={path} />
      </svg>
    </button>
  );
}

export function Carousel({ images, className = '' }: CarouselProps): React.ReactElement {
  const count = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayResetKey, setAutoplayResetKey] = useState(0);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % count);
  }, [count]);

  const handlePrev = useCallback(() => {
    goPrev();
    setAutoplayResetKey((k) => k + 1);
  }, [goPrev]);

  const handleNext = useCallback(() => {
    goNext();
    setAutoplayResetKey((k) => k + 1);
  }, [goNext]);

  const swipeHandlers = useSwipe(handleNext, handlePrev);

  useEffect(() => {
    if (count <= 1) return;
    const interval = setInterval(goNext, AUTOPLAY_DELAY_MS);
    return () => clearInterval(interval);
  }, [count, goNext, autoplayResetKey]);

  if (count === 0) return <div className={className} />;

  const translateX = -currentIndex * 100;

  return (
    <div
      className={`relative w-[100vw] max-w-[100vw] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:w-full md:max-w-none ${className}`}
    >
      <div
        className="overflow-hidden touch-pan-y"
        {...swipeHandlers}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(${translateX}%)`,
            transition: `transform ${TRANSITION_DURATION_MS}ms ease-in-out`,
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="min-w-0 flex-[0_0_100%] flex justify-center px-4 md:px-0"
            >
              <SlideContent img={img} />
            </div>
          ))}
        </div>
      </div>
      <CarouselButton direction="prev" onClick={handlePrev} ariaLabel="Previous image" />
      <CarouselButton direction="next" onClick={handleNext} ariaLabel="Next image" />
    </div>
  );
}
