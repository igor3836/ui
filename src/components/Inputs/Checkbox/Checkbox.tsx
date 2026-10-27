import { Checkbox as MantineCheckbox } from '@mantine/core'
import textClassNames from '../../../styles/typography.module.css'
import classNames from './Checkbox.module.css'
import { CAPTION_L_MEDIUM_FONT_VARIANT } from '../../../constants/font-variants'
import clsx from 'clsx'

// ----------------------------------------------------------------------

const inputClassName = clsx(textClassNames[CAPTION_L_MEDIUM_FONT_VARIANT], classNames.label)

// ----------------------------------------------------------------------

// Figma Checkbox: check = 8x6 stroke 1.5 (round join), indeterminate = 8px line stroke 2
function CheckboxIcon({
  indeterminate,
  className,
}: {
  indeterminate: boolean | undefined
  className: string
}) {
  return (
    <svg
      className={className}
      viewBox='0 0 8 6'
      fill='none'
      aria-hidden
    >
      {indeterminate ? (
        <path
          d='M0 3H8'
          stroke='currentColor'
          strokeWidth='2'
        />
      ) : (
        <path
          d='M0 2.2857L2.9167 6L8 0'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinejoin='round'
        />
      )}
    </svg>
  )
}

// ----------------------------------------------------------------------

export const Checkbox = MantineCheckbox.withProps({
  size: 'sm',
  icon: CheckboxIcon,
  classNames: {
    label: inputClassName,
    root: classNames.root,
    inner: classNames.inner,
    input: classNames.input,
    icon: classNames.icon,
    description: classNames.description,
    error: classNames.error,
  },
})
