import type { Meta, StoryObj } from '@storybook/react'

import { theme } from '@/theme'
import { Checkbox as CheckboxComponent } from '@/components/Inputs/Checkbox'
import { Text } from '@/components/Text'
import { Anchor } from '@mantine/core'
import { KvellUiProvider } from '@/components/KvellUiProvider'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Inputs/Checkbox',
  component: CheckboxComponent,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <div style={{ maxWidth: '465px' }}>
        <Story />
      </div>
    </KvellUiProvider>
  ),
} satisfies Meta<typeof CheckboxComponent>

type Story = StoryObj<typeof CheckboxComponent>

// ----------------------------------------------------------------------

export const Checkbox: Story = {
  args: {
    label: (
      <Text variant='caption-l-medium'>
        Соглашаюсь с условиями{' '}
        <Anchor
          href='#'
          target='_blank'
          rel='noreferrer'
          c='text-accent-blue-accent.0'
          inherit
        >
          КИД (Ключевого информационного документа)
        </Anchor>
      </Text>
    ),
  },
}

export const CheckboxChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}

export const CheckboxStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: 24 }}>
      {(['sm', 'md'] as const).map((size) => (
        <div
          key={size}
          style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          data-testid={`checkbox-${size}`}
        >
          <CheckboxComponent
            size={size}
            label='Запомнить карту'
            description='•• 4021, до 09/28'
          />
          <CheckboxComponent
            size={size}
            label='Запомнить карту'
            defaultChecked
          />
          <CheckboxComponent
            size={size}
            label='Все операции'
            indeterminate
          />
          <CheckboxComponent
            size={size}
            label='Запомнить карту'
            disabled
          />
          <CheckboxComponent
            size={size}
            label='Запомнить карту'
            disabled
            defaultChecked
          />
          <CheckboxComponent
            size={size}
            label='Запомнить карту'
            error='Обязательное поле'
          />
        </div>
      ))}
    </div>
  ),
}

// ----------------------------------------------------------------------

export default meta
