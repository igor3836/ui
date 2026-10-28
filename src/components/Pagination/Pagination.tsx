import { Pagination as MantinePagination } from '@mantine/core'
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react'
import classNames from './Pagination.module.css'

/** Registered in theme.components, so raw Mantine Pagination gets the kit look too */
export const PaginationTheme = MantinePagination.extend({
  classNames,
  defaultProps: {
    previousIcon: () => <RiArrowLeftLine size={16} />,
    nextIcon: () => <RiArrowRightLine size={16} />,
    dotsIcon: () => <>...</>,
  },
})

export const Pagination = MantinePagination.withProps({
  classNames,
  previousIcon: () => <RiArrowLeftLine size={16} />,
  nextIcon: () => <RiArrowRightLine size={16} />,
  dotsIcon: () => <>...</>,
})
