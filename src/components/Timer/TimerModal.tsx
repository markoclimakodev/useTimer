import { CheckIcon } from '@/assets/icons/CheckIcon'
import { CloseIcon } from '@/assets/icons/CloseIcon'
import { ChangeEvent } from 'react'
import { Button } from '../Button'

interface TimerModalProps {
  isOpen: boolean
  onSetTime: (event: ChangeEvent<HTMLInputElement>) => void
  time: number
}
export const TimerModal = ({ isOpen, onSetTime, time }: TimerModalProps) => {
  if (!isOpen) {
    return null
  }
  return (
    <form
      className={
        isOpen
          ? `mx-auto mt-8 flex w-72 flex-col gap-4 rounded-lg bg-carbon px-4 py-3`
          : 'hidden'
      }
    >
      <fieldset className="flex flex-col gap-8">
        <legend className="text-smoke"> Enter time in minutes:</legend>
        <label htmlFor="time">
          <input
            type="number"
            id="time"
            name="time"
            onChange={onSetTime}
            value={time}
          />
        </label>
      </fieldset>
      <fieldset className="flex items-center justify-end gap-2 p-1">
        <Button icon={CloseIcon} />
        <Button icon={CheckIcon} />
      </fieldset>
    </form>
  )
}
