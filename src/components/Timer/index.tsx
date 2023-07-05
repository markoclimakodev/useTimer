'use client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { TimerControls } from './TimerControls'
import { TimerDisplay } from './TimerDisplay'
import { TimerFormModal } from './TimerFormModal'

export function Timer() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [time, setTimerValue] = useState(0)
  const [timeInputValue, setTimeInputValue] = useState('')
  const [isCountdownActive, setIsCountdownActive] = useState(false)
  const [timeInputPlaceholder, setTimeInputPlaceholder] = useState('Ex:3:30')

  const handleOpenModal = () => {
    setModalIsOpen(true)
    setIsCountdownActive(false)
  }

  const handleCloseModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setModalIsOpen(false)
    setIsCountdownActive(false)
  }

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (timeInputValue === '')
      return setTimeInputPlaceholder('Insira um valor para o timer')

    let timeValue = timeInputValue
    if (!timeValue.includes(':')) timeValue = `${timeValue}:00`

    const [minutesString, secondsString] = timeValue.split(':')
    const minutes = Number(minutesString)
    const seconds = Number(secondsString)
    const totalSeconds = minutes * 60 + seconds
    setTimerValue(totalSeconds)
    setModalIsOpen(false)
    setTimeInputValue('')
  }

  const handleStartPause = () => {
    if (time === 0) {
      handleOpenModal()
    } else {
      setIsCountdownActive(!isCountdownActive)
    }
  }

  const handleStop = () => {
    setTimerValue(0)
    setIsCountdownActive(false)
  }

  const handleSetTimerValue = (event: ChangeEvent<HTMLInputElement>) => {
    const time = event.target.value.replace(/[^0-9:]/g, '')
    setTimeInputValue(time)
  }

  useEffect(() => {
    let countdownInterval: any
    if (isCountdownActive && time > 0) {
      countdownInterval = setInterval(() => {
        setTimerValue((previousTime) => previousTime - 1)
      }, 1000)
    }

    return () => {
      clearInterval(countdownInterval)
    }
  }, [isCountdownActive, time])

  const minutesRemaining = Math.floor(time / 60)
  const secondsRemaining = time - minutesRemaining * 60

  return (
    <main className="relative flex h-screen flex-col items-center">
      <section className="mx-auto mt-10 flex w-52 flex-col items-center justify-center rounded-lg bg-carbon p-6 opacity-50 md:w-1/3 md:gap-16">
        <TimerDisplay
          minutesRemaining={minutesRemaining}
          secondsRemaining={secondsRemaining}
        />
        <TimerControls
          handleOpenModal={handleOpenModal}
          handleStop={handleStop}
          handleStartPause={handleStartPause}
          isCountdownActive={isCountdownActive}
          modalIsOpen={modalIsOpen}
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
    </main>
  )
}
