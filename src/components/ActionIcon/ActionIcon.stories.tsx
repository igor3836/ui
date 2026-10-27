import type { Meta, StoryObj } from '@storybook/react'
import { RiAddLine } from '@remixicon/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'
import { ActionIcon } from '@/components/ActionIcon'
import { ACTION_ICON_SIZE, ACTION_ICON_VARIANT } from '@/components/ActionIcon/constants'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/ActionIcon',
  component: ActionIcon,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <Story />
    </KvellUiProvider>
  ),
} satisfies Meta<typeof ActionIcon>

type Story = StoryObj<typeof meta>

const variants = Object.values(ACTION_ICON_VARIANT)
const sizes = Object.values(ACTION_ICON_SIZE)

// ----------------------------------------------------------------------

export const ComponentActionIcon: Story = {
  args: {
    variant: ACTION_ICON_VARIANT.SECONDARY,
    size: ACTION_ICON_SIZE.MD,
    disabled: false,
    'aria-label': 'Добавить',
    children: <RiAddLine />,
  },
  argTypes: {
    variant: { control: 'select', options: variants },
    size: { control: 'select', options: sizes },
    disabled: { control: 'boolean' },
  },
}

export const ActionIconVariantsAndSizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, max-content)', gap: 16 }}>
      {variants.map((variant) => (
        <div
          key={variant}
          style={{ display: 'contents' }}
        >
          {sizes.map((size) => (
            <ActionIcon
              key={size}
              variant={variant}
              size={size}
              aria-label='Добавить'
            >
              <RiAddLine />
            </ActionIcon>
          ))}
          <ActionIcon
            variant={variant}
            aria-label='Добавить'
            disabled
          >
            <RiAddLine />
          </ActionIcon>
        </div>
      ))}
    </div>
  ),
}

// ----------------------------------------------------------------------

export default meta
