import '@mantine/notifications/styles.layer.css'
import { Notifications as MantineNotifications } from '@mantine/notifications'

export * from '@mantine/notifications'

// Figma Notification 2066:51710 is 400px wide (Mantine default container is 440px)
export const Notifications = MantineNotifications.withProps({ containerWidth: 400 })
