import React from 'react';

export function SectionDivider(): React.ReactElement {
  return (
    <div
      className="h-px w-full max-w-2xl mx-auto my-4 sm:my-4 bg-gradient-to-r from-transparent via-white/25 to-transparent"
      role="presentation"
    />
  );
}
