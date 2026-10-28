import { Title as MantineTitle } from '@mantine/core'
import classNames from './Title.module.css'

// ----------------------------------------------------------------------

/** Registered in theme.components, so raw Mantine Title gets the kit type scale too */
export const TitleTheme = MantineTitle.extend({ classNames })

export const Title = MantineTitle
