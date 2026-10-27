import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'
import providerCss from '@/components/KvellUiProvider/KvellUiProvider.css?raw'

import { theme } from '@/theme'

// ----------------------------------------------------------------------

/** Colour and shadow tokens from Figma «Blank_2.7 x KVELL» (Theme/Light), defined in KvellUiProvider.css */
const meta = {
  title: 'Foundations/Tokens',
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <Story />
    </KvellUiProvider>
  ),
} satisfies Meta

type Story = StoryObj<typeof meta>

const declared = (prefix: string) => [
  ...new Set(providerCss.match(new RegExp(`--${prefix}[\\w-]+(?=:)`, 'g')) ?? []),
]

const label = { fontSize: 12, lineHeight: '16px', fontFamily: 'monospace' }

// ----------------------------------------------------------------------

export const Colors: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 8,
      }}
    >
      {declared('color-').map((name) => (
        <div
          key={name}
          style={{ display: 'flex', gap: 8, alignItems: 'center' }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              flex: 'none',
              borderRadius: 8,
              background: `var(${name})`,
              boxShadow: 'inset 0 0 0 1px #0a0f2914',
            }}
          />
          <span style={label}>{name.replace('--color-', '')}</span>
        </div>
      ))}
    </div>
  ),
}

export const Shadows: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, padding: 16 }}>
      {declared('shadow-').map((name) => (
        <div
          key={name}
          style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}
        >
          <div
            style={{
              width: 96,
              height: 64,
              borderRadius: 12,
              background: '#fff',
              boxShadow: `var(${name})`,
            }}
          />
          <span style={label}>{name.replace('--', '')}</span>
        </div>
      ))}
    </div>
  ),
}

// ----------------------------------------------------------------------

export default meta
