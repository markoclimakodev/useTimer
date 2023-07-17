import { PlayerContextProps, PlayerVariantType } from '@/types'
import React, { createContext, useState } from 'react'

export const PlayerContext = createContext<PlayerContextProps>({
  playerVariant: 'spotify',
  setPlayerVariant: () => {},
})

interface PlayerProviderProps {
  children: React.ReactNode
}

export const PlayerProvider = ({ children }: PlayerProviderProps) => {
  const [playerVariant, setPlayerVariant] =
    useState<PlayerVariantType>('spotify')

  const playerContextValue: PlayerContextProps = {
    playerVariant,
    setPlayerVariant,
  }

  return (
    <PlayerContext.Provider value={playerContextValue}>
      {children}
    </PlayerContext.Provider>
  )
}
