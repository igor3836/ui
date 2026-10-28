import { Breadcrumbs as MantineBreadcrumbs } from '@mantine/core'
import { RiArrowRightSLine } from '@remixicon/react'
import classNames from './Breadcrumbs.module.css'

// ----------------------------------------------------------------------

/** Registered in theme.components, so raw Mantine Breadcrumbs get the kit look too */
export const BreadcrumbsTheme = MantineBreadcrumbs.extend({
  classNames,
  defaultProps: {
    separator: <RiArrowRightSLine size={16} />,
    separatorMargin: 8,
  },
})

export const Breadcrumbs = MantineBreadcrumbs
