import React, { createContext, useState } from 'react'

interface TimerContextProps {
  timer: number
  setTimer: Function
  isActive: boolean
  setIsActive: Function
}

export const TimerContext = createContext<TimerContextProps>({
  timer: 10,
  setTimer: () => {},
  isActive: false,
  setIsActive: () => {},
})

interface TimerProviderProps {
  children: React.ReactNode
}

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const timerContextValue: TimerContextProps = {
    timer,
    setTimer,
    isActive,
    setIsActive,
  }

  return (
    <TimerContext.Provider value={timerContextValue}>
      {children}
    </TimerContext.Provider>
  )
}
