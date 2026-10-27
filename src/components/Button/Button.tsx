import { createPolymorphicComponent, Button as MantineButton } from '@mantine/core'
import type { ButtonProps as BaseButtonProps } from '@mantine/core'
import classNames from './Button.module.css'
import { forwardRef } from 'react'
import type { ExtendedButtonVariant } from './types'

// ----------------------------------------------------------------------

export type ButtonProps = BaseButtonProps & { variant?: ExtendedButtonVariant }

// Mantine's own variants have no Figma look; render them as the closest Blank UI style
const MANTINE_VARIANT_ALIASES: Partial<Record<string, ExtendedButtonVariant>> = {
  filled: 'primary',
  default: 'secondary',
  outline: 'secondary',
  light: 'tertiary',
  subtle: 'ghost',
}

export const Button = createPolymorphicComponent<'button', ButtonProps>(
  forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { size = 'md', variant = 'primary', ...resProps } = props
    return (
      <MantineButton
        ref={ref}
        size={size}
        variant={MANTINE_VARIANT_ALIASES[variant] ?? variant}
        {...resProps}
        classNames={classNames}
      />
    )
  })
)
