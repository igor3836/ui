import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'
import { Title } from '@/components/Title'

// ----------------------------------------------------------------------

/** h1 = page title (H6/Semi Bold), h2 = section title (Body L/Semi Bold), h3–h6 continue down the scale */
const meta = {
  title: 'Components/Title',
  component: Title,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <Story />
    </KvellUiProvider>
  ),
} satisfies Meta<typeof Title>

type Story = StoryObj<typeof meta>

// ----------------------------------------------------------------------

export const TitleOrders: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {([1, 2, 3, 4, 5, 6] as const).map((order) => (
        <Title
          key={order}
          order={order}
        >
          h{order} · Реестры выплат
        </Title>
      ))}
    </div>
  ),
}

// ----------------------------------------------------------------------

export default meta
