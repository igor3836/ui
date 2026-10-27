import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'
import { Select as SelectComponent } from '@/components/Inputs/Select'

// ----------------------------------------------------------------------

const data = [
  { value: 'rub', label: 'Рублёвый счёт •• 4021' },
  { value: 'usd', label: 'Долларовый счёт •• 7710' },
  { value: 'eur', label: 'Евро счёт •• 1184' },
  { value: 'cny', label: 'Юаневый счёт •• 3390', disabled: true },
]

const meta = {
  title: 'Components/Inputs/Select',
  component: SelectComponent,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    </KvellUiProvider>
  ),
} satisfies Meta<typeof SelectComponent>

type Story = StoryObj<typeof SelectComponent>

// ----------------------------------------------------------------------

export const Select: Story = {
  args: {
    label: 'Счёт списания',
    placeholder: 'Выберите счёт',
    data,
  },
}

export const SelectWithValue: Story = {
  args: {
    label: 'Счёт списания',
    placeholder: 'Выберите счёт',
    data,
    defaultValue: 'usd',
  },
}

export const SelectNothingFound: Story = {
  args: {
    label: 'Счёт списания',
    placeholder: 'Найдите счёт',
    searchable: true,
    nothingFoundMessage: 'Ничего не найдено',
    data,
  },
}

export const SelectDisabled: Story = {
  args: {
    label: 'Счёт списания',
    placeholder: 'Выберите счёт',
    data,
    disabled: true,
  },
}

export const SelectError: Story = {
  args: {
    label: 'Счёт списания',
    placeholder: 'Выберите счёт',
    data,
    error: 'Выберите счёт списания',
  },
}

// ----------------------------------------------------------------------

export default meta
