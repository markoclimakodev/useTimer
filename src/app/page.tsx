'use client'
import { Player } from '@/components/Player'
import { Timer } from '@/components/Timer'
import React, { ChangeEvent, useEffect, useState } from 'react'

export default function Home() {
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
    const timeEnd = new Audio('/sounds/notification.mp3')

    if (isCountdownActive && time > 0) {
      countdownInterval = setInterval(() => {
        setTimerValue((previousTime) => previousTime - 1)
      }, 1000)
    }

    if (countdownInterval === 0) {
      setSelectedFeature('none')
    }

    if (time === 0 && isCountdownActive) {
      timeEnd.play()
      setSelectedFeature('none')
      setIsCountdownActive(false)
      timeEnd.play()
    }

    return () => {
      clearInterval(countdownInterval)
    }
  }, [isCountdownActive, time])

  const minutesRemaining = Math.floor(time / 60)
  const secondsRemaining = time - minutesRemaining * 60

  return (
    <main className="relative mx-auto mt-10 flex w-[314px] flex-col gap-4 md:mt-20 md:w-[506px] ">
      <Timer
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        handleStart={handleStart}
        handlePause={handlePause}
        handleStop={handleStop}
        handleSetTimerValue={handleSetTimerValue}
        isCountdownActive={isCountdownActive}
        minutesRemaining={minutesRemaining}
        secondsRemaining={secondsRemaining}
        modalIsOpen={modalIsOpen}
        onClick={onClick}
        selectedFeature={selectedFeature}
        timeInputPlaceholder={timeInputPlaceholder}
        timeInputValue={timeInputValue}
      />
      <Player timer={time} />
    </main>
  )
}
