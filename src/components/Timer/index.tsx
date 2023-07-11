'use client'
import { TimerProps } from '@/types'
import { TimerControls } from './TimerControls'
import { TimerDisplay } from './TimerDisplay'
import { TimerFormModal } from './TimerFormModal'

export function Timer({
  handleCloseModal,
  handleOpenModal,
  handlePause,
  handleSetTimerValue,
  handleStart,
  handleStop,
  isCountdownActive,
  minutesRemaining,
  modalIsOpen,
  onClick,
  secondsRemaining,
  selectedFeature,
  timeInputPlaceholder,
  timeInputValue,
}: TimerProps) {
  return (
    <>
      <section className="flex flex-col items-center rounded-lg bg-carbon_100 px-16 py-4 text-center md:px-16">
        <TimerDisplay
          minutesRemaining={minutesRemaining}
          secondsRemaining={secondsRemaining}
        />
        <TimerControls
          handleOpenModal={handleOpenModal}
          handleStop={handleStop}
          handleStart={handleStart}
          handlePause={handlePause}
          isCountdownActive={isCountdownActive}
          selectedFeature={selectedFeature}
        />
      </section>
      <TimerFormModal
        modalIsOpen={modalIsOpen}
        handleCloseModal={handleCloseModal}
        handleSetTimerValue={handleSetTimerValue}
        onClick={onClick}
        timeInputPlaceholder={timeInputPlaceholder}
        timeInputValue={timeInputValue}
      />
    </>
  )
}
