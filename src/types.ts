import React, { ChangeEvent } from 'react'

export interface IconProps {
  className: string
}

export interface TimerProps {
  handleOpenModal: () => void
  handleStop: () => void
  handleStart: () => void
  handlePause: () => void
  isCountdownActive: boolean
  selectedFeature: 'play' | 'pause' | 'none'
  minutesRemaining: number
  secondsRemaining: number
  modalIsOpen: boolean
  handleCloseModal: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleSetTimerValue: (event: ChangeEvent<HTMLInputElement>) => void
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  timeInputPlaceholder: string
  timeInputValue: string
}
