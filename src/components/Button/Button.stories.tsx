import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import {
  RiAddLine as AddSVG,
  RiArrowLeftLine as ArrowLeftSVG,
  RiArrowRightSLine as ArrowRightSVG,
  RiLockLine as LockSVG,
} from '@remixicon/react'

import { theme } from '@/theme'
import { Button } from '@/components/Button'
import { Text } from '@/components/Text/Text'
import {
  ButtonSizes,
  ButtonVariants,
  LG_BUTTON_SIZE,
  PRIMARY_BUTTON_VARIANT,
  SECONDARY_BUTTON_VARIANT,
  TERTIARY_BUTTON_VARIANT,
  GHOST_BUTTON_VARIANT,
  LINK_BUTTON_VARIANT,
} from '@/components/Button/constants'
import { BODY_S_MEDIUM_FONT_VARIANT } from '@/constants/font-variants'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Button',
  argTypes: { variant: ButtonVariants },
  component: Button,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <Story />
    </KvellUiProvider>
  ),
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

// ----------------------------------------------------------------------

export const ComponentButton: Story = {
  args: {
    children: 'Текст кнопки',
    variant: 'tertiary',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ButtonVariants,
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ButtonSizes,
    },
  },
}

export const PrimaryButton: Story = {
  args: {
    variant: PRIMARY_BUTTON_VARIANT,
    leftSection: <LockSVG size={20} />,
    fullWidth: true,
    style: { maxWidth: '465px' },
    children: <Text variant={BODY_S_MEDIUM_FONT_VARIANT}>Оплатить 7 605,30 RUB</Text>,
    size: LG_BUTTON_SIZE,
  },
}

export const SecondaryButton: Story = {
  args: {
    variant: SECONDARY_BUTTON_VARIANT,
    leftSection: <ArrowLeftSVG size={20} />,
    children: 'Вернуться на сайт продавца',
  },
}

export const TertiaryButton: Story = {
  args: {
    variant: TERTIARY_BUTTON_VARIANT,
    leftSection: <ArrowLeftSVG size={20} />,
    children: 'Сохранённые карты',
  },
}

export const GhostButton: Story = {
  args: {
    variant: GHOST_BUTTON_VARIANT,
    leftSection: <AddSVG size={20} />,
    children: 'Добавить получателя',
  },
}

export const LinkButton: Story = {
  args: {
    variant: LINK_BUTTON_VARIANT,
    rightSection: <ArrowRightSVG size={20} />,
    children: 'Все операции',
  },
}

const fillVariants = [
  PRIMARY_BUTTON_VARIANT,
  SECONDARY_BUTTON_VARIANT,
  TERTIARY_BUTTON_VARIANT,
  GHOST_BUTTON_VARIANT,
] as const
const allSizes = ['xs', 'sm', 'md', 'lg'] as const

export const ButtonVariantsAndSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {fillVariants.map((variant) => (
        <div
          key={variant}
          style={{ display: 'flex', gap: 12, alignItems: 'center' }}
        >
          {allSizes.map((size) => (
            <Button
              key={size}
              variant={variant}
              size={size}
              leftSection={<AddSVG />}
              rightSection={<ArrowRightSVG />}
            >
              Создать
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
}

export const ButtonDisabledAndLoading: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {[{ disabled: true }, { loading: true }].map((state) => (
        <div
          key={Object.keys(state)[0]}
          style={{ display: 'flex', gap: 12, alignItems: 'center' }}
        >
          {[...fillVariants, LINK_BUTTON_VARIANT].map((variant) => (
            <Button
              key={variant}
              variant={variant}
              leftSection={<AddSVG />}
              {...state}
            >
              Создать
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
}

/** Loading keeps the label; the spinner replaces the left icon (14 / 16 / 20 / 20 px) */
export const ButtonLoadingSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {allSizes.map((size) => (
        <Button
          key={size}
          size={size}
          leftSection={<AddSVG />}
          loading
        >
          Создать
        </Button>
      ))}
    </div>
  ),
}

/** Mantine variants have no Figma look: filled → primary, outline/default → secondary, light → tertiary, subtle → ghost */
export const ButtonMantineVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {(['filled', 'outline', 'default', 'light', 'subtle', undefined] as const).map((variant) => (
        <Button
          key={String(variant)}
          variant={variant}
        >
          {String(variant ?? 'no variant')}
        </Button>
      ))}
    </div>
  ),
}

// ----------------------------------------------------------------------

export default meta
