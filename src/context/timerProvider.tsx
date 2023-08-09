import { ActiveFunctionalityType, TimerContextProps } from '@/types'
import React, { useCallback, useMemo, useState } from 'react'
import { TimerContext } from './timerContext'

interface TimerProviderProps {
  children: React.ReactNode
}

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const [time, setTime] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [timer, setTimer] = useState(600)
  const [activeFunctionality, setActiveFunctionality] =
    useState<ActiveFunctionalityType>('none')

  const updateTime = useCallback((newTime: string) => {
    setTime(newTime)
  }, [])

  const updateTimer = useCallback((newTimer: number) => {
    setTimer(newTimer)
  }, [])

  const updateActiveStatus = useCallback((newStatus: boolean) => {
    setIsActive(newStatus)
  }, [])

  const updateModalStatus = useCallback((newStatus: boolean) => {
    setIsModalOpen(newStatus)
  }, [])

  const updateActiveFunctionality = useCallback(
    (newFunctionality: ActiveFunctionalityType) => {
      setActiveFunctionality(newFunctionality)
    },
    [],
  )

  const timerContextValue: TimerContextProps = useMemo(
    () => ({
      time,
      updateTime,
      timer,
      updateTimer,
      isActive,
      updateActiveStatus,
      isModalOpen,
      updateModalStatus,
      activeFunctionality,
      updateActiveFunctionality,
    }),
    [
      time,
      updateTime,
      timer,
      updateTimer,
      isActive,
      updateActiveStatus,
      isModalOpen,
      updateModalStatus,
      activeFunctionality,
      updateActiveFunctionality,
    ],
  )

  return (
    <TimerContext.Provider value={timerContextValue}>
      {children}
    </TimerContext.Provider>
  )
}
