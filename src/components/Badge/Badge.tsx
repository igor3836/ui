import { createPolymorphicComponent, Badge as MantineBadge } from '@mantine/core'
import type { BadgeProps } from '@mantine/core'
import '@mantine/core/styles/Badge.layer.css'
import { forwardRef } from 'react'
import classNames from './Badge.module.css'

// ----------------------------------------------------------------------

// Mantine's own variants have no Figma look; render them as Blank UI Badge Color=Gray
const MANTINE_VARIANTS = ['filled', 'light', 'outline', 'dot', 'default', 'transparent']

export const Badge = createPolymorphicComponent<'div', BadgeProps>(
  forwardRef<HTMLDivElement, BadgeProps>(({ variant = 'gray', ...props }, ref) => (
    <MantineBadge
      ref={ref}
      bd={0}
      {...props}
      variant={MANTINE_VARIANTS.includes(variant) ? 'gray' : variant}
      classNames={classNames}
    />
  ))
)
