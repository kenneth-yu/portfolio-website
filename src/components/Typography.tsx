import React from 'react';

type TypographyVariant = 'heading' | 'subheading' | 'body';

interface TypographyProps {
  variant: TypographyVariant;
  gradient?: boolean;
  level?: 1 | 2 | 3;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  id?: string;
}

const variantClasses: Record<TypographyVariant, string> = {
  heading:
    'text-[2rem] md:text-headline font-medium leading-tight tracking-tight mb-2',
  subheading:
    'text-subhead font-normal leading-tight tracking-tight mb-1',
  body:
    'text-body font-normal leading-relaxed mb-4',
};

const levelToTag: Record<1 | 2 | 3, 'h1' | 'h2' | 'h3'> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
};

const gradientClasses = 'bg-gradient-text bg-clip-text text-transparent';

export function Typography({
  variant,
  gradient = false,
  level,
  as,
  className = '',
  style,
  children,
  id,
}: TypographyProps): React.ReactElement {
  const baseClasses = variantClasses[variant];
  const combinedClasses = [
    baseClasses,
    gradient && gradientClasses,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const defaultTag =
    variant === 'heading'
      ? (level ? levelToTag[level] : 'h2')
      : variant === 'subheading'
        ? 'h3'
        : 'p';
  const Tag = (as ?? defaultTag) as keyof JSX.IntrinsicElements;

  return (
    <Tag className={combinedClasses} style={style} id={id}>
      {children}
    </Tag>
  );
}
