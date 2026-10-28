import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  ActionIcon,
  Breadcrumbs,
  Modal,
  Pagination,
  SegmentedControl,
  Switch,
  Tabs,
} from '@mantine/core'
import { RiMenuLine } from '@remixicon/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'

// ----------------------------------------------------------------------

/** Components imported straight from @mantine/core, as apps do: the kit theme gives them the Blank UI look */
const meta = {
  title: 'Foundations/Raw Mantine',
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <Story />
    </KvellUiProvider>
  ),
} satisfies Meta

type Story = StoryObj<typeof meta>

// ----------------------------------------------------------------------

export const RawMantineComponents: Story = {
  render: function Render() {
    const [opened, setOpened] = useState(false)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
        <Breadcrumbs>
          <a href='#payouts'>Выплаты</a>
          <span>Реестр № 418</span>
        </Breadcrumbs>
        <Tabs
          variant='none'
          defaultValue='all'
        >
          <Tabs.List>
            <Tabs.Tab value='all'>Все</Tabs.Tab>
            <Tabs.Tab value='new'>Новые</Tabs.Tab>
            <Tabs.Tab value='done'>Завершены</Tabs.Tab>
          </Tabs.List>
        </Tabs>
        <SegmentedControl data={['Выплаты', 'Платежи']} />
        <Switch label='Автоплатёж' />
        <div style={{ display: 'flex', gap: 8 }}>
          {(['filled', 'default', 'light', 'subtle'] as const).map((variant) => (
            <ActionIcon
              key={variant}
              variant={variant}
              aria-label={variant}
              onClick={() => setOpened(true)}
            >
              <RiMenuLine />
            </ActionIcon>
          ))}
        </div>
        <Pagination
          total={12}
          defaultValue={3}
        />
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title='Информация об операции'
        >
          Платёж 20,00 RUB от 22.10.2026
        </Modal>
      </div>
    )
  },
}

// ----------------------------------------------------------------------

export default meta
