import { Select as MantineSelect } from '@mantine/core'
import clsx from 'clsx'
import inputClassNames from '../Input/Input.module.css'
import selectClassNames from './Select.module.css'

// ----------------------------------------------------------------------

const classNames = {
  ...inputClassNames,
  root: clsx(selectClassNames.root, inputClassNames.root),
  section: clsx(selectClassNames.section, inputClassNames.section),
  dropdown: selectClassNames.dropdown,
  option: selectClassNames.option,
  empty: selectClassNames.empty,
}

// ----------------------------------------------------------------------

export const Select = MantineSelect.withProps({
  classNames,
  inputWrapperOrder: ['label', 'input', 'error', 'description'],
  comboboxProps: { floatingStrategy: 'fixed' },
  // Figma Select menu: check icon after the label
  checkIconPosition: 'right',
  // Figma open Select: 7 items (260px incl. border and padding) before scrolling
  maxDropdownHeight: 252,
})
