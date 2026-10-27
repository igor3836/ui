import { Autocomplete as MantineAutocomplete } from '@mantine/core'
import clsx from 'clsx'
import inputClassNames from '../Input/Input.module.css'
import selectClassNames from '../Select/Select.module.css'
import autocompleteSelectClassNames from './AutocompleteSelect.module.css'

// ----------------------------------------------------------------------

const classNames = {
  ...inputClassNames,
  root: clsx(autocompleteSelectClassNames.root, inputClassNames.root),
  section: clsx(autocompleteSelectClassNames.section, inputClassNames.section),
  dropdown: selectClassNames.dropdown,
  option: selectClassNames.option,
  empty: selectClassNames.empty,
}

// ----------------------------------------------------------------------

export const AutocompleteSelect = MantineAutocomplete.withProps({
  classNames,
  inputWrapperOrder: ['label', 'input', 'error', 'description'],
  comboboxProps: { floatingStrategy: 'fixed' },
  // Figma open Select: 7 items (260px incl. border and padding) before scrolling
  maxDropdownHeight: 252,
})
