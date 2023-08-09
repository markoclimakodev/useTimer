import React from 'react'

export type ActiveFunctionalityType =
  | 'countdown-running'
  | 'countdown-paused'
  | 'none'

export interface TimerContextProps {
  time: string
  updateTime: Function
  timer: number
  updateTimer: Function
  isActive: boolean
  updateActiveStatus: Function
  isModalOpen: boolean
  updateModalStatus: Function
  activeFunctionality: ActiveFunctionalityType
  updateActiveFunctionality: Function
}

export type PlayerVariantType = 'spotify' | 'nature'

export interface PlayerContextProps {
  playerVariant: PlayerVariantType
  handleSetPlayerVariant: Function
}

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

export type PlaceholderType =
  | 'Cole a URL da playlist aqui'
  | 'Carregando...'
  | 'Falha ao carregar a playlist'

export interface MusicCardProps {
  sound: string
  image: string
  type: string
}
