import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'
import { Divider } from '@/components/@core/Divider'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Divider',
  component: Divider,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    </KvellUiProvider>
  ),
} satisfies Meta<typeof Divider>

type Story = StoryObj<typeof meta>

// ----------------------------------------------------------------------

export const ComponentDivider: Story = {
  args: {},
}

export const DividerWithLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Divider
        label='или'
        labelPosition='center'
      />
      <Divider
        label='Вчера'
        labelPosition='left'
      />
      <Divider
        label='Все операции'
        labelPosition='right'
      />
    </div>
  ),
}

export const DividerVertical: Story = {
  render: () => (
    <div style={{ display: 'flex', height: 24, gap: 12, alignItems: 'center' }}>
      <span>Выплаты</span>
      <Divider orientation='vertical' />
      <span>Платежи</span>
    </div>
  ),
}

// ----------------------------------------------------------------------

export default meta
