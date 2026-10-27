import { createPolymorphicComponent, Button as MantineButton } from '@mantine/core'
import type { ButtonProps as BaseButtonProps } from '@mantine/core'
import { RiLoaderLine } from '@remixicon/react'
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

// Figma icon slot per size
const LOADER_SIZES: Record<string, number> = { xs: 14, sm: 16, md: 20, lg: 20 }

export const Button = createPolymorphicComponent<'button', ButtonProps>(
  forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const {
      size = 'md',
      variant = 'primary',
      loading,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Mantine's loader isn't rendered
      loaderProps,
      leftSection,
      disabled,
      ...resProps
    } = props

    // Loading keeps the label: the spinner takes the left icon slot instead of covering the button
    return (
      <MantineButton
        ref={ref}
        size={size}
        variant={MANTINE_VARIANT_ALIASES[variant] ?? variant}
        disabled={disabled || loading}
        data-loading={loading || undefined}
        aria-busy={loading || undefined}
        leftSection={
          loading ? (
            <RiLoaderLine
              className={classNames.loader}
              size={LOADER_SIZES[size] ?? LOADER_SIZES.md}
              aria-hidden
            />
          ) : (
            leftSection
          )
        }
        {...resProps}
        classNames={classNames}
      />
    )
  })
)
