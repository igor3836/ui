import type { Meta, StoryObj } from '@storybook/react'
import { CloseButton } from '@mantine/core'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'

// ----------------------------------------------------------------------

/** The kit styles Mantine's CloseButton through `theme.components` */
const meta = {
  title: 'Components/CloseButton',
  component: CloseButton,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <Story />
    </KvellUiProvider>
  ),
} satisfies Meta<typeof CloseButton>

type Story = StoryObj<typeof meta>

// ----------------------------------------------------------------------

export const ComponentCloseButton: Story = {
  args: {
    'aria-label': 'Закрыть',
    disabled: false,
  },
  argTypes: {
    disabled: { control: 'boolean' },
  },
}

export const CloseButtonDisabled: Story = {
  args: {
    'aria-label': 'Закрыть',
    disabled: true,
  },
}

// ----------------------------------------------------------------------

export default meta
