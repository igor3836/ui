import type { Meta, StoryObj } from '@storybook/react'
import { RiBankCardLine, RiFileList3Line } from '@remixicon/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'
import { Badge } from '@/components/Badge'
import { Tabs } from '@/components/Tabs'

// ----------------------------------------------------------------------

/** Figma Tab Menu Type=Fill, Style=Primary, Shape=Rounded, md — applied to every Mantine Tabs variant */
const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <Story />
    </KvellUiProvider>
  ),
} satisfies Meta<typeof Tabs>

type Story = StoryObj<typeof meta>

const statuses = ['Все', 'Новые', 'В обработке', 'Завершены']

// ----------------------------------------------------------------------

export const ComponentTabs: Story = {
  args: { defaultValue: 'Все' },
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        {statuses.map((status) => (
          <Tabs.Tab
            key={status}
            value={status}
          >
            {status}
          </Tabs.Tab>
        ))}
        <Tabs.Tab
          value='Отменены'
          disabled
        >
          Отменены
        </Tabs.Tab>
      </Tabs.List>
      {statuses.map((status) => (
        <Tabs.Panel
          key={status}
          value={status}
        >
          Выплаты: {status.toLowerCase()}
        </Tabs.Panel>
      ))}
    </Tabs>
  ),
}

export const TabsWithIconsAndCounter: Story = {
  args: { defaultValue: 'drafts' },
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab
          value='drafts'
          leftSection={<RiFileList3Line />}
          rightSection={
            <Badge
              variant='gray'
              size='sm'
            >
              29
            </Badge>
          }
        >
          Черновики
        </Tabs.Tab>
        <Tabs.Tab
          value='pending'
          leftSection={<RiBankCardLine />}
          rightSection={
            <Badge
              variant='gray'
              size='sm'
            >
              10
            </Badge>
          }
        >
          Ожидает подтверждения
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  ),
}

/** default, outline, pills and none all render as Fill */
export const TabsMantineVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {(['default', 'outline', 'pills', 'none'] as const).map((variant) => (
        <Tabs
          key={variant}
          variant={variant}
          defaultValue='Все'
        >
          <Tabs.List>
            {statuses.map((status) => (
              <Tabs.Tab
                key={status}
                value={status}
              >
                {status}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
      ))}
    </div>
  ),
}

// ----------------------------------------------------------------------

export default meta
