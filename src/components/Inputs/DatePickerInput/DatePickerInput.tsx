import { DatePickerInput as MantineDatePickerInput } from '@mantine/dates'
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react'
import inputClassNames from '../Input/Input.module.css'
import datePickerClassNames from './DatePickerInput.module.css'

// ----------------------------------------------------------------------

const { dropdown, ...calendarClassNames } = datePickerClassNames

const classNames = {
  ...inputClassNames,
  ...calendarClassNames,
}

// ----------------------------------------------------------------------

export const DatePickerInput = MantineDatePickerInput.withProps({
  classNames,
  inputWrapperOrder: ['label', 'input', 'error', 'description'],
  size: 'sm',
  // Figma Calendar header: arrow-left-s-line / arrow-right-s-line, 20px
  previousIcon: <RiArrowLeftSLine size={20} />,
  nextIcon: <RiArrowRightSLine size={20} />,
  popoverProps: { classNames: { dropdown } },
})
