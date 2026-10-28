import type { Meta, StoryObj } from '@storybook/react'
import { RiFolderLine } from '@remixicon/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'
import { Breadcrumbs } from '@/components/Breadcrumbs'

// ----------------------------------------------------------------------

/** Figma Breadcrumbs Size=md, Divider=Icon; the last item is the current page */
const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <Story />
    </KvellUiProvider>
  ),
} satisfies Meta<typeof Breadcrumbs>

type Story = StoryObj

// ----------------------------------------------------------------------

export const ComponentBreadcrumbs: Story = {
  render: () => (
    <Breadcrumbs>
      <a href='#payouts'>Выплаты</a>
      <a href='#registries'>Реестры</a>
      <span>Реестр № 418 от 14.10.2026</span>
    </Breadcrumbs>
  ),
}

export const BreadcrumbsWithIcon: Story = {
  render: () => (
    <Breadcrumbs>
      <a href='#smz'>
        <RiFolderLine />
        Самозанятые
      </a>
      <a href='#documents'>Документы</a>
      <span>Договор № 77-ИП</span>
    </Breadcrumbs>
  ),
}

// ----------------------------------------------------------------------

export default meta
