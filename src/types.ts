import React, { Dispatch, SetStateAction } from 'react'

export type ActiveFunctionalityType =
  | 'countdown-running'
  | 'countdown-paused'
  | 'none'

export interface TimerContextProps {
  time: string
  setTime: Dispatch<SetStateAction<string>>
  timer: number
  setTimer: Dispatch<SetStateAction<number>>
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  activeFunctionality: ActiveFunctionalityType
  setActiveFunctionality: Dispatch<SetStateAction<ActiveFunctionalityType>>
}

export type PlayerVariantType = 'spotify' | 'nature'

export interface PlayerContextProps {
  playerVariant: PlayerVariantType
  setPlayerVariant: Dispatch<SetStateAction<PlayerVariantType>>
}

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

export type PlaceholderType =
  | 'Cole a URL da playlist aqui'
  | 'Carregando...'
  | 'Falha ao carregar a playlist'
