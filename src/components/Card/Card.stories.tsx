import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'
import { Card } from '@/components/Card'
import { Text } from '@/components/Text/Text'
import {
  BODY_S_MEDIUM_FONT_VARIANT,
  CAPTION_L_REGULAR_FONT_VARIANT,
} from '@/constants/font-variants'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Card',
  component: Card,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    </KvellUiProvider>
  ),
} satisfies Meta<typeof Card>

type Story = StoryObj<typeof meta>

const content = (
  <>
    <Text variant={BODY_S_MEDIUM_FONT_VARIANT}>Рублёвый счёт •• 4021</Text>
    <Text variant={CAPTION_L_REGULAR_FONT_VARIANT}>Доступно 184 350,00 ₽</Text>
  </>
)

// ----------------------------------------------------------------------

export const ComponentCard: Story = {
  args: {
    withBorder: true,
    children: content,
  },
  argTypes: {
    withBorder: { control: 'boolean' },
  },
}

export const CardWithoutBorder: Story = {
  args: {
    withBorder: false,
    children: content,
  },
}

// ----------------------------------------------------------------------

export default meta
