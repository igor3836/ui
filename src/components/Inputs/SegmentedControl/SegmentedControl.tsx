import { SegmentedControl as MantineSegmentedControl } from '@mantine/core'

import classNames from './SegmentedControl.module.css'

export const SegmentedControl = MantineSegmentedControl.withProps({
  size: 'md',
  radius: 'xl',
  withItemsBorders: false,
  classNames,
})
