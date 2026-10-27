import { PasswordInput as PasswordInputBase } from '@mantine/core'
import classNames from '../Input/Input.module.css'
import sectionClassNames from './PasswordInput.module.css'
import { RiEyeLine, RiEyeOffLine } from '@remixicon/react'
import clsx from 'clsx'

// ----------------------------------------------------------------------

export const PasswordInput = PasswordInputBase.withProps({
  classNames: {
    ...classNames,
    root: clsx(classNames.root, sectionClassNames.root),
    section: clsx(classNames.section, sectionClassNames.section),
    innerInput: sectionClassNames.innerInput,
    visibilityToggle: sectionClassNames.visibilityToggle,
  },
  autoComplete: 'current-password',
  inputWrapperOrder: ['label', 'input', 'error', 'description'],
  visibilityToggleIcon: ({ reveal }) =>
    reveal ? <RiEyeOffLine size={20} /> : <RiEyeLine size={20} />,
})
