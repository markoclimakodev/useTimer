'use client'
import { ChangeEvent, useState } from 'react'
import { TimerControls } from './TimerControls'
import { TimerDisplay } from './TimerDisplay'
import { TimerModal } from './TimerModal'

export function Timer() {
  const [remainingTime, setRemainingTime] = useState(600)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(!isModalOpen)

  const handleSetTime = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setRemainingTime(Number(value))
  }

  console.log(remainingTime)
  return (
    <>
      <section className=" mx-auto mt-10 flex w-52 flex-col items-center justify-center rounded-lg bg-carbon p-6 opacity-50 md:w-1/3 md:gap-16">
        <TimerDisplay minutes={10} seconds={0} />
        <TimerControls openModal={handleOpenModal} />
      </section>
      <TimerModal onSetTime={handleSetTime} isOpen={isModalOpen} />
    </>
  )
}
