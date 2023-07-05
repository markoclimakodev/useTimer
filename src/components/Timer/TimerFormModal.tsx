import { CheckIcon } from '@/assets/icons/CheckIcon'
import { CloseIcon } from '@/assets/icons/CloseIcon'
import React, { ChangeEvent } from 'react'
import { Button } from '../Button'

interface TimerFormModalProps {
  handleSetTimerValue: (event: ChangeEvent<HTMLInputElement>) => void
  timeInputValue: string
  timeInputPlaceholder: string
  handleCloseModal: (event: React.MouseEvent<HTMLButtonElement>) => void
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  modalIsOpen: boolean
}

export const TimerFormModal = ({
  handleCloseModal,
  handleSetTimerValue,
  onClick,
  timeInputPlaceholder,
  timeInputValue,
  modalIsOpen,
}: TimerFormModalProps) => {
  return (
    <form
      className={
        modalIsOpen
          ? `absolute top-64 flex w-72 flex-col gap-4 rounded-lg bg-carbon px-4 py-3`
          : 'hidden'
      }
    >
      <fieldset className="flex flex-col">
        <legend className=" pb-2 text-smoke/90">Enter time in minutes:</legend>
        <label htmlFor="time">
          <input
            type="text"
            id="time"
            name="time"
            onChange={handleSetTimerValue}
            value={timeInputValue}
            placeholder={timeInputPlaceholder}
            className=" rounded-md px-3 py-2 placeholder:pl-1 placeholder:text-carbon/75"
          />
        </label>
      </fieldset>
      <fieldset className="flex items-center justify-end gap-2 p-1">
        <Button icon={CloseIcon} onClick={handleCloseModal} />
        <Button icon={CheckIcon} onClick={onClick} />
      </fieldset>
    </form>
  )
}
