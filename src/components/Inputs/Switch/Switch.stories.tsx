import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'
import { Switch } from '@/components/Inputs/Switch'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Switch',
  component: Switch,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <Story />
    </KvellUiProvider>
  ),
} satisfies Meta<typeof Switch>

type Story = StoryObj<typeof Switch>

// ----------------------------------------------------------------------

export const ComponentSwitch: Story = {
  args: {
    description: 'Сохранить карту в KVELL.Pay',
  },
  argTypes: {
    checked: { control: 'boolean' },
    error: {
      control: 'text',
    },
  },
}

export const SwitchStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: 24 }}>
      {(['xs', 'sm'] as const).map((size) => (
        <div
          key={size}
          style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          data-testid={`switch-${size}`}
        >
          <Switch
            size={size}
            label='Автоплатёж'
            description='Списывать 1 200 ₽ ежемесячно'
          />
          <Switch
            size={size}
            label='Автоплатёж'
            description='Списывать 1 200 ₽ ежемесячно'
            defaultChecked
          />
          <Switch
            size={size}
            label='Автоплатёж'
            disabled
          />
          <Switch
            size={size}
            label='Автоплатёж'
            disabled
            defaultChecked
          />
        </div>
      ))}
    </div>
  ),
}

// ----------------------------------------------------------------------

export default meta
