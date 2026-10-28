import { SegmentedControl as MantineSegmentedControl } from '@mantine/core'

import classNames from './SegmentedControl.module.css'

/** Registered in theme.components, so raw Mantine SegmentedControl gets the kit look too */
export const SegmentedControlTheme = MantineSegmentedControl.extend({
  classNames,
  defaultProps: { size: 'md', radius: 'xl', withItemsBorders: false },
})

export const SegmentedControl = MantineSegmentedControl.withProps({
  size: 'md',
  radius: 'xl',
  withItemsBorders: false,
  classNames,
})
