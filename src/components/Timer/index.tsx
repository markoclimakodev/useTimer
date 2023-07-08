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
  const [selectedFeature, setSelectedFeature] = useState<
    'play' | 'pause' | 'none'
  >('none')

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
    let minutes = Number(minutesString)
    const seconds = Number(secondsString)

    if (minutes > 60) {
      minutes = 60
    }

    const totalSeconds = minutes * 60 + seconds
    setTimerValue(totalSeconds)
    setModalIsOpen(false)
    setTimeInputValue('')
  }

  const handleStart = () => {
    if (time === 0) {
      handleOpenModal()
    } else {
      setIsCountdownActive(true)
      setSelectedFeature('play')
    }
  }

  const handlePause = () => {
    if (time === 0) {
      handleOpenModal()
      setIsCountdownActive(false)
    } else {
      setIsCountdownActive(false)
      setSelectedFeature('pause')
    }
  }

  const handleStop = () => {
    setTimerValue(0)
    setIsCountdownActive(false)
    setSelectedFeature('none')
  }

  const handleSetTimerValue = (event: ChangeEvent<HTMLInputElement>) => {
    const time = event.target.value.replace(/[^0-9:]/g, '')
    setTimeInputValue(time)
  }

  useEffect(() => {
    let countdownInterval: any
    const timeEnd = new Audio('/sounds/end.mp3')
    const timeEnding = new Audio('/sounds/ending.mp3')

    if (isCountdownActive && time > 0) {
      countdownInterval = setInterval(() => {
        setTimerValue((previousTime) => previousTime - 1)
      }, 1000)
    }

    if (countdownInterval === 0) {
      setSelectedFeature('none')
    }

    if (time === 10) {
      timeEnding.play()
    } else if (time === 0 && isCountdownActive) {
      timeEnd.play()
      setSelectedFeature('none')
      timeEnd.play()
    }

    return () => {
      clearInterval(countdownInterval)
    }
  }, [isCountdownActive, time])

  const minutesRemaining = Math.floor(time / 60)
  const secondsRemaining = time - minutesRemaining * 60

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
