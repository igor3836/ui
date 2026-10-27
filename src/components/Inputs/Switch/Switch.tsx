import { Switch as SwitchBase } from '@mantine/core'
import classes from './Switch.module.css'

// ----------------------------------------------------------------------

export const Switch = SwitchBase.withProps({
  classNames: classes,
  size: 'xs',
})
