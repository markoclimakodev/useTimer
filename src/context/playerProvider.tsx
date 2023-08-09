import { PlayerContextProps, PlayerVariantType } from '@/types'
import React, { useCallback, useState } from 'react'
import { PlayerContext } from './playerContext'

type PlayerProviderProps = {
  children: React.ReactNode
}

export const PlayerProvider = ({ children }: PlayerProviderProps) => {
  const [playerVariant, setPlayerVariant] =
    useState<PlayerVariantType>('spotify')

  const handleSetPlayerVariant = useCallback((variant: PlayerVariantType) => {
    setPlayerVariant(variant)
  }, [])

  const playerContextValue: PlayerContextProps = {
    playerVariant,
    handleSetPlayerVariant,
  }

  return (
    <PlayerContext.Provider value={playerContextValue}>
      {children}
    </PlayerContext.Provider>
  )
}
