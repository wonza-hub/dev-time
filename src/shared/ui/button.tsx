import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/shared/lib/utils';

const buttonVariants = cva(
  "min-w-[88px] min-h-[48px] sub-title-s600 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible:outline-1.5 focus-visible:outline-offset-0 focus-visible:outline-focused",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:shadow-[inset_0_0_0_100vmax_rgba(0,0,0,0.1)] disabled:bg-gray-400 disabled:text-gray-300',
        destructive:
          'bg-destructive text-white hover:shadow-[inset_0_0_0_100vmax_rgba(0,0,0,0.1)] focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:shadow-[inset_0_0_0_100vmax_rgba(0,0,0,0.1)] dark:bg-input/30 dark:border-input',
        secondary:
          'bg-primary-light text-primary hover:shadow-[inset_0_0_0_100vmax_rgba(0,0,0,0.1)] disabled:bg-gray-300 disabled:text-gray-400',
        tertiary:
          'bg-gray-50 text-primary hover:shadow-[inset_0_0_0_100vmax_rgba(0,0,0,0.1)] disabled:bg-gray-300 disabled:text-gray-400',
        ghost: 'hover:shadow-[inset_0_0_0_100vmax_rgba(0,0,0,0.1)]',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-3 has-[>svg]:px-3',
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-xs': "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
