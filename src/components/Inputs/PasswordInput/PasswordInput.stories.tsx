import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'
import { PasswordInput as PasswordInputComponent } from '@/components/Inputs/PasswordInput/PasswordInput'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Inputs/PasswordInput',
  component: PasswordInputComponent,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <div style={{ maxWidth: '465px' }}>
        <Story />
      </div>
    </KvellUiProvider>
  ),
} satisfies Meta<typeof PasswordInputComponent>

type Story = StoryObj<typeof PasswordInputComponent>

// ----------------------------------------------------------------------

export const PasswordInput: Story = {
  args: {
    label: 'Введите пароль',
  },
}

export const PasswordInputError: Story = {
  args: {
    label: 'Введите пароль',
    error: 'Неверный пароль',
  },
}

export const PasswordInputDisabled: Story = {
  args: {
    label: 'Введите пароль',
    defaultValue: 'kvell-2026',
    disabled: true,
  },
}

// ----------------------------------------------------------------------

export default meta
