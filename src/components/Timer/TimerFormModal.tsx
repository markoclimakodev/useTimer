import { CheckIcon } from '@/assets/icons/CheckIcon'
import { CloseIcon } from '@/assets/icons/CloseIcon'
import { TimerIcon } from '@/assets/icons/TimerIcon'
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
    <section
      className={
        modalIsOpen
          ? `absolute top-0 z-10 flex  h-screen w-full items-center justify-center bg-mobile bg-contain md:w-full md:bg-cover`
          : 'hidden'
      }
    >
      <form className=" flex flex-col gap-4  rounded-lg bg-carbon_100 p-4">
        <fieldset className="flex flex-col">
          <legend className="mb-2 text-[16px] text-smoke">
            Informe a duração desejada:
          </legend>
          <label htmlFor="time" className="flex rounded-lg bg-carbon_200 p-3">
            <input
              type="text"
              id="time"
              name="time"
              onChange={handleSetTimerValue}
              value={timeInputValue}
              placeholder={timeInputPlaceholder}
              className="bg-transparent text-smoke"
            />
            <TimerIcon className="fill-smoke" />
          </label>
        </fieldset>
        <fieldset className="flex items-center justify-end gap-2 p-1">
          <Button icon={CloseIcon} onClick={handleCloseModal} />
          <Button icon={CheckIcon} onClick={onClick} />
        </fieldset>
      </form>
    </section>
  )
}
