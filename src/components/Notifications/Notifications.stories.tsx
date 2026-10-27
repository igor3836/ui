import type { Meta, StoryObj } from '@storybook/react'
import { Notification } from '@mantine/core'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/theme'
import { Button } from '@/components/Button'
import { Notifications, notifications } from '@/components/Notifications'

// ----------------------------------------------------------------------

/** Toasts: Mantine Notification styled through `theme.components`, shown by `notifications.show` */
const meta = {
  title: 'Components/Notifications',
  component: Notification,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    </KvellUiProvider>
  ),
} satisfies Meta<typeof Notification>

type Story = StoryObj<typeof meta>

// ----------------------------------------------------------------------

export const NotificationMessageOnly: Story = {
  args: {
    children: 'Реквизиты скопированы',
  },
}

export const NotificationWithTitle: Story = {
  args: {
    title: 'Выплата отправлена',
    children: '12 500,00 ₽ поступят на карту •• 4021 в течение часа',
  },
}

export const NotificationError: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Notification className='error'>Не удалось загрузить реестр</Notification>
      <Notification
        className='error'
        title='Платёж отклонён'
      >
        Банк отклонил операцию. Попробуйте другую карту
      </Notification>
    </div>
  ),
}

export const NotificationsShow: Story = {
  render: () => (
    <>
      <Notifications />
      <div style={{ display: 'flex', gap: 8 }}>
        <Button
          variant='secondary'
          onClick={() =>
            notifications.show({
              title: 'Выплата отправлена',
              message: '12 500,00 ₽ поступят на карту •• 4021 в течение часа',
            })
          }
        >
          Показать уведомление
        </Button>
        <Button
          variant='secondary'
          onClick={() =>
            notifications.show({
              className: 'error',
              message: 'Не удалось загрузить реестр',
            })
          }
        >
          Показать ошибку
        </Button>
      </div>
    </>
  ),
}

// ----------------------------------------------------------------------

export default meta
