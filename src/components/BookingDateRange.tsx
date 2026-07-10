import { addDays, format } from 'date-fns'
import { forwardRef, type ReactNode, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

type ActivePicker = 'checkIn' | 'checkOut' | null

type BookingDateRangeProps = {
  checkIn: Date | null
  checkOut: Date | null
  onCheckInChange: (date: Date | null) => void
  onCheckOutChange: (date: Date | null) => void
  children?: ReactNode
}

type DateFieldButtonProps = {
  value?: string
  onClick?: () => void
  placeholder: string
  disabled?: boolean
}

const createDateFieldButton = (placeholder: string) => {
  const DateFieldButton = forwardRef<HTMLButtonElement, DateFieldButtonProps>(
    ({ value, onClick, disabled }, ref) => {
      const hasValue = Boolean(value?.trim())

      return (
        <button
          ref={ref}
          type="button"
          onClick={onClick}
          disabled={disabled}
          className={[
            'w-full p-3 text-left text-sm focus:outline-none',
            disabled
              ? 'cursor-not-allowed bg-gray-50 text-gray-400'
              : 'cursor-pointer',
          ].join(' ')}
        >
          <span className={hasValue ? 'text-gray-900' : 'text-gray-400'}>
            {hasValue ? value : placeholder}
          </span>
        </button>
      )
    },
  )

  DateFieldButton.displayName = `DateFieldButton(${placeholder})`
  return DateFieldButton
}

const CheckInButton = createDateFieldButton('Check in')
const CheckOutButton = createDateFieldButton('Check out')

export const BookingDateRange = ({
  checkIn,
  checkOut,
  onCheckInChange,
  onCheckOutChange,
  children,
}: BookingDateRangeProps) => {
  const [activePicker, setActivePicker] = useState<ActivePicker>(null)

  const closePicker = () => setActivePicker(null)

  const handleCheckInChange = (date: Date | null) => {
    onCheckInChange(date)
    if (date && checkOut && checkOut <= date) {
      onCheckOutChange(null)
    }
    closePicker()
  }

  const handleCheckOutChange = (date: Date | null) => {
    onCheckOutChange(date)
    closePicker()
  }

  return (
    <div className="mb-4 rounded-lg border border-gray-300">
      <div className="grid grid-cols-2 border-b border-gray-300">
        <div className="booking-datepicker border-r border-gray-300">
          <DatePicker
            selected={checkIn}
            onChange={handleCheckInChange}
            open={activePicker === 'checkIn'}
            onInputClick={() => setActivePicker('checkIn')}
            onClickOutside={closePicker}
            minDate={new Date()}
            placeholderText="Check in"
            dateFormat="MMM d, yyyy"
            calendarClassName="booking-calendar"
            popperPlacement="bottom-start"
            customInput={<CheckInButton placeholder="Check in" />}
          />
        </div>

        <div className="booking-datepicker">
          <DatePicker
            selected={checkOut}
            onChange={handleCheckOutChange}
            open={activePicker === 'checkOut'}
            onInputClick={() => checkIn && setActivePicker('checkOut')}
            onClickOutside={closePicker}
            minDate={checkIn ? addDays(checkIn, 1) : addDays(new Date(), 1)}
            disabled={!checkIn}
            placeholderText="Check out"
            dateFormat="MMM d, yyyy"
            calendarClassName="booking-calendar"
            popperPlacement="bottom-end"
            customInput={<CheckOutButton placeholder="Check out" disabled={!checkIn} />}
          />
        </div>
      </div>

      {(checkIn || checkOut) && (
        <p className="border-t border-gray-300 px-3 py-2 text-xs text-zinc-500">
          {checkIn ? format(checkIn, 'MMM d, yyyy') : 'Check in'}
          {' — '}
          {checkOut ? format(checkOut, 'MMM d, yyyy') : 'Check out'}
        </p>
      )}

      {children}
    </div>
  )
}
