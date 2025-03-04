import * as React from 'react';
import styles from './Typography.module.css';
import { cn } from '../../utils/cn';

type FontFamily = 'poppins' | 'inter';
type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption';
type Color = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
type Weight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';

type TypographyComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface TypographyProps {
  variant?: Variant;
  fontFamily?: FontFamily;
  color?: Color;
  weight?: Weight;
  as?: TypographyComponent;
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
}

const variantMap: Record<Variant, TypographyComponent> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
};

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = 'body1',
      fontFamily = 'inter',
      color,
      weight,
      as,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as || variantMap[variant];

    return (
      <Component
        ref={ref as any}
        className={cn(
          'dsai-ui',
          styles[variant],
          styles[fontFamily],
          color && styles[color],
          weight && styles[weight],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';