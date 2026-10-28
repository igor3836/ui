import { createPolymorphicComponent, ActionIcon as MantineActionIcon } from '@mantine/core'
import type { ActionIconProps as BaseActionIconProps } from '@mantine/core'
import classNames from './ActionIcon.module.css'
import { forwardRef } from 'react'
import type { ExtendedActionIconVariant } from './types'

// ----------------------------------------------------------------------

export type ActionIconProps = BaseActionIconProps & { variant?: ExtendedActionIconVariant }

/** Registered in theme.components, so raw Mantine ActionIcon gets the kit look too */
export const ActionIconTheme = MantineActionIcon.extend({ classNames })

export const ActionIcon = createPolymorphicComponent<'button', ActionIconProps>(
  forwardRef<HTMLButtonElement, ActionIconProps>((props, ref) => {
    const { size = 'md', ...resProps } = props
    return (
      <MantineActionIcon
        ref={ref}
        size={size}
        {...resProps}
        classNames={classNames}
      />
    )
  })
)
