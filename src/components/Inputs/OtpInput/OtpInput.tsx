import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import { Input, PinInput, getStyleObject, useMantineTheme } from '@mantine/core'
import type { PinInputProps } from '@mantine/core'
import clsx from 'clsx'

import classes from './OtpInput.module.css'
import textClasses from '../../../styles/typography.module.css'
import inputBaseClasses from '../@styles/input-base.module.css'

const DEFAULT_LENGTH = 6
const DEFAULT_SEPARATOR_INDEX = 3

const inputClassName = clsx(
  classes.input,
  textClasses['caption-l-regular'],
  inputBaseClasses['input-base']
)

export type OtpInputProps = Omit<PinInputProps, 'error'> & {
  error?: ReactNode
  separatorIndex?: number
}

export const OtpInput = forwardRef<HTMLInputElement, OtpInputProps>((props, ref) => {
  const {
    error,
    length = DEFAULT_LENGTH,
    separatorIndex = length === DEFAULT_LENGTH ? DEFAULT_SEPARATOR_INDEX : 0,
    size = 'sm',
    gap = 4,
    radius = 'xl',
    inputMode = 'numeric',
    type = 'number',
    placeholder = '0',
    getInputProps,
    classNames,
    ...restProps
  } = props

  const theme = useMantineTheme()

  const hasSeparator = separatorIndex > 0 && separatorIndex < length

  return (
    <Input.Wrapper
      error={error}
      classNames={{ root: inputBaseClasses.wrapper, error: inputBaseClasses['error-message'] }}
    >
      <PinInput
        ref={ref}
        {...restProps}
        length={length}
        size={size}
        gap={gap}
        radius={radius}
        inputMode={inputMode}
        type={type}
        placeholder={placeholder}
        error={Boolean(error)}
        classNames={(...args) => {
          const custom = typeof classNames === 'function' ? classNames(...args) : classNames

          return {
            ...custom,
            root: clsx(classes.root, custom?.root),
            pinInput: clsx(classes.pinInput, custom?.pinInput),
            input: clsx(inputClassName, custom?.input),
          }
        }}
        data-no-separator={hasSeparator ? undefined : ''}
        getInputProps={(index) => {
          const custom = getInputProps?.(index)

          return {
            ...custom,
            style: {
              '--input-padding': '0',
              '--input-text-align': 'center',
              ...getStyleObject(custom?.style, theme),
              order: hasSeparator && index >= separatorIndex ? 2 : 0,
            },
          }
        }}
      />
    </Input.Wrapper>
  )
})

OtpInput.displayName = 'OtpInput'
