import { Tabs as MantineTabs } from '@mantine/core'
import classNames from './Tabs.module.css'

// ----------------------------------------------------------------------

/** Registered in theme.components: every Mantine Tabs variant renders as Figma Tab Menu Fill */
export const TabsTheme = MantineTabs.extend({ classNames })

export const Tabs = MantineTabs
