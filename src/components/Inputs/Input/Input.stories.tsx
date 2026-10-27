import type { Meta, StoryObj } from '@storybook/react'

import { RiSearchLine, RiInformationLine } from '@remixicon/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'
import { Input as InputComponent } from '@/components/Inputs/Input/Input'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Inputs/Input',
  component: InputComponent,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <div style={{ maxWidth: '465px' }}>
        <Story />
      </div>
    </KvellUiProvider>
  ),
} satisfies Meta<typeof InputComponent>

type Story = StoryObj<typeof InputComponent>

// ----------------------------------------------------------------------

export const Input: Story = {
  args: {
    placeholder: 'IVAN IVANOV',
    label: 'Имя на карте',
  },
}

export const InputError: Story = {
  args: {
    placeholder: 'IVAN IVANOV',
    label: 'Имя на карте',
    error: 'Неправильный формат имени',
  },
}

export const InputFilled: Story = {
  args: {
    label: 'Имя на карте',
    defaultValue: 'IVAN IVANOV',
    description: 'Как на лицевой стороне карты',
  },
}

export const InputWithIcons: Story = {
  args: {
    label: 'Получатель',
    placeholder: 'ИНН или название',
    leftSection: <RiSearchLine size={20} />,
    rightSection: <RiInformationLine size={20} />,
  },
}

export const InputRequired: Story = {
  args: {
    label: 'Имя на карте',
    placeholder: 'IVAN IVANOV',
    withAsterisk: true,
  },
}

export const InputDisabled: Story = {
  args: {
    label: 'Имя на карте',
    defaultValue: 'IVAN IVANOV',
    disabled: true,
  },
}

// ----------------------------------------------------------------------

export default meta
