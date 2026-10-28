import { Modal as ModalBase } from '@mantine/core'
import '@mantine/core/styles/Modal.layer.css'
import classNames from './Modal.module.css'

// ----------------------------------------------------------------------

/** Registered in theme.components, so raw Mantine Modal gets the kit look too */
export const ModalTheme = ModalBase.extend({
  classNames,
  defaultProps: { transitionProps: { transition: 'fade-up' } },
})

export const Modal = ModalBase.withProps({
  classNames,
  transitionProps: { transition: 'fade-up' },
})
