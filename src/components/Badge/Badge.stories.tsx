import type { Meta, StoryObj } from '@storybook/react'
import { RiCheckLine } from '@remixicon/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'
import { Badge } from '@/components/Badge'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Badge',
  component: Badge,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <Story />
    </KvellUiProvider>
  ),
} satisfies Meta<typeof Badge>

type Story = StoryObj<typeof meta>

const colors = ['gray', 'blue', 'green', 'orange', 'red', 'purple', 'white', 'white-destructive']
const sizes = ['xs', 'sm', 'md', 'lg'] as const

// ----------------------------------------------------------------------

export const ComponentBadge: Story = {
  args: {
    variant: 'green',
    size: 'md',
    children: 'Оплачен',
  },
  argTypes: {
    variant: { control: 'select', options: colors },
    size: { control: 'select', options: sizes },
  },
}

export const BadgeColorsAndSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {sizes.map((size) => (
        <div
          key={size}
          style={{ display: 'flex', gap: 8, alignItems: 'center' }}
        >
          {colors.map((color) => (
            <Badge
              key={color}
              variant={color}
              size={size}
            >
              {color}
            </Badge>
          ))}
        </div>
      ))}
    </div>
  ),
}

export const BadgeWithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      {sizes.map((size) => (
        <Badge
          key={size}
          variant='green'
          size={size}
          leftSection={<RiCheckLine />}
        >
          Оплачен
        </Badge>
      ))}
    </div>
  ),
}

/** Mantine variants have no Figma look and render as Gray */
export const BadgeMantineVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      {(['filled', 'light', 'outline', undefined] as const).map((variant) => (
        <Badge
          key={String(variant)}
          variant={variant}
          size='md'
        >
          {String(variant ?? 'no variant')}
        </Badge>
      ))}
    </div>
  ),
}

// ----------------------------------------------------------------------

export default meta
