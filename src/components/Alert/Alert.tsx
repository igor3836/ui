import { forwardRef } from 'react'
import { Alert as MantineAlert } from '@mantine/core'
import type { AlertProps as MantineAlertProps } from '@mantine/core'
import { RiErrorWarningFill } from '@remixicon/react'
import classNames from './Alert.module.css'
import { DANGER_ALERT_VARIANT, WARNING_ALERT_VARIANT } from './constants'
import type { ExtendedAlertVariant } from './types'

// ----------------------------------------------------------------------

export type AlertProps = Omit<MantineAlertProps, 'variant'> & { variant?: ExtendedAlertVariant }

// Figma Notification uses error-warning-fill for every status (colour comes from --alert-color)
const variantIcons: Partial<Record<ExtendedAlertVariant & string, React.ReactNode>> = {
  [WARNING_ALERT_VARIANT]: <RiErrorWarningFill size={20} />,
  [DANGER_ALERT_VARIANT]: <RiErrorWarningFill size={20} />,
}

// ----------------------------------------------------------------------

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { variant, icon, ...others } = props

  const resolvedIcon = icon === undefined ? (variant ? variantIcons[variant] : null) : icon

  return (
    <MantineAlert
      ref={ref}
      variant={variant ?? 'transparent'}
      icon={resolvedIcon}
      {...others}
      classNames={classNames}
    />
  )
})
