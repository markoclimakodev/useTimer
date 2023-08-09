import { TimerContextProps } from '@/types'
import { createContext } from 'react'

export const TimerContext = createContext<TimerContextProps>({
  time: '10',
  timer: 0,
  isActive: false,
  isModalOpen: false,
  activeFunctionality: 'countdown-paused',
  updateTime: () => {},
  updateTimer: () => {},
  updateActiveStatus: () => {},
  updateModalStatus: () => {},
  updateActiveFunctionality: () => {},
})
