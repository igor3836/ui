import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'
import { Pagination } from '@/components/Pagination'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <Story />
    </KvellUiProvider>
  ),
} satisfies Meta<typeof Pagination>

type Story = StoryObj<typeof meta>

// ----------------------------------------------------------------------

export const ComponentPagination: Story = {
  args: {
    total: 24,
    defaultValue: 5,
    disabled: false,
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    disabled: { control: 'boolean' },
  },
}

export const PaginationSizes: Story = {
  args: { total: 24 },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Pagination
        total={24}
        defaultValue={5}
      />
      <Pagination
        total={24}
        defaultValue={5}
        size='sm'
      />
    </div>
  ),
}

export const PaginationFirstAndLastPage: Story = {
  args: { total: 24 },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Pagination
        total={5}
        defaultValue={1}
      />
      <Pagination
        total={5}
        defaultValue={5}
      />
    </div>
  ),
}

export const PaginationDisabled: Story = {
  args: {
    total: 5,
    defaultValue: 2,
    disabled: true,
  },
}

// ----------------------------------------------------------------------

export default meta
