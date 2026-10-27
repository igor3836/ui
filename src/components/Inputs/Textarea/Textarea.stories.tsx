import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'
import { Textarea as TextareaComponent } from '@/components/Inputs/Textarea'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Inputs/Textarea',
  component: TextareaComponent,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    </KvellUiProvider>
  ),
} satisfies Meta<typeof TextareaComponent>

type Story = StoryObj<typeof TextareaComponent>

// ----------------------------------------------------------------------

export const Textarea: Story = {
  args: {
    label: 'Назначение платежа',
    placeholder: 'Оплата по договору № 418 от 14.10.2026',
    description: 'До 210 символов',
  },
}

export const TextareaFilled: Story = {
  args: {
    label: 'Назначение платежа',
    defaultValue: 'Оплата по договору № 418 от 14.10.2026, НДС не облагается',
  },
}

export const TextareaError: Story = {
  args: {
    label: 'Назначение платежа',
    placeholder: 'Оплата по договору № 418 от 14.10.2026',
    error: 'Укажите назначение платежа',
  },
}

export const TextareaDisabled: Story = {
  args: {
    label: 'Назначение платежа',
    defaultValue: 'Оплата по договору № 418 от 14.10.2026',
    disabled: true,
  },
}

// ----------------------------------------------------------------------

export default meta
