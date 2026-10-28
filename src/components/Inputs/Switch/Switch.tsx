import { Switch as SwitchBase } from '@mantine/core'
import classes from './Switch.module.css'

// ----------------------------------------------------------------------

/** Registered in theme.components, so raw Mantine Switch gets the kit look too */
export const SwitchTheme = SwitchBase.extend({
  classNames: classes,
  defaultProps: { size: 'xs' },
})

export const Switch = SwitchBase.withProps({
  classNames: classes,
  size: 'xs',
})
