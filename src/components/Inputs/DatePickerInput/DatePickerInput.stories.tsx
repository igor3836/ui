import type { Meta, StoryObj } from '@storybook/react'
import 'dayjs/locale/ru'

import { KvellUiProvider } from '@/components/KvellUiProvider'
import { DatesProvider } from '@/components/DatesProvider'

import { theme } from '@/theme'
import { DatePickerInput as DatePickerInputComponent } from '@/components/Inputs/DatePickerInput'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Inputs/DatePickerInput',
  component: DatePickerInputComponent,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <DatesProvider settings={{ locale: 'ru', firstDayOfWeek: 1 }}>
        <div style={{ maxWidth: '400px' }}>
          <Story />
        </div>
      </DatesProvider>
    </KvellUiProvider>
  ),
} satisfies Meta<typeof DatePickerInputComponent>

type Story = StoryObj<typeof DatePickerInputComponent>

// ----------------------------------------------------------------------

export const DatePickerInput: Story = {
  args: {
    label: 'Дата платежа',
    placeholder: 'Выберите дату',
    defaultValue: '2026-10-14',
    defaultDate: '2026-10-01',
    minDate: '2026-10-03',
  },
}

export const DatePickerInputRange: Story = {
  render: () => (
    <DatePickerInputComponent
      type='range'
      label='Период выписки'
      placeholder='Выберите период'
      // withProps() drops the `type` generic, so the range value needs a cast
      defaultValue={['2026-10-08', '2026-10-17'] as unknown as string}
      defaultDate='2026-10-01'
    />
  ),
}

// ----------------------------------------------------------------------

export default meta
