import { ActiveFunctionalityType, TimerContextProps } from '@/types'
import React, { createContext, useState } from 'react'

export const TimerContext = createContext<TimerContextProps>({
  time: '0',
  setTime: () => {},
  timer: 0,
  setTimer: () => {},
  isActive: false,
  setIsActive: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
  activeFunctionality: 'countdown-paused',
  setActiveFunctionality: () => {},
})

interface TimerProviderProps {
  children: React.ReactNode
}

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const [time, setTime] = useState('0')
  const [isActive, setIsActive] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [timer, setTimer] = useState(0)
  const [activeFunctionality, setActiveFunctionality] =
    useState<ActiveFunctionalityType>('none')

  const timerContextValue: TimerContextProps = {
    time,
    setTime,
    timer,
    setTimer,
    isActive,
    setIsActive,
    isModalOpen,
    setIsModalOpen,
    activeFunctionality,
    setActiveFunctionality,
  }

  return (
    <TimerContext.Provider value={timerContextValue}>
      {children}
    </TimerContext.Provider>
  )
}
