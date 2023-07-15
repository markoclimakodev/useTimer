import React, { Dispatch, SetStateAction, createContext, useState } from 'react'

type PlayerVariantType = 'spotify' | 'nature'

interface PlayerContextProps {
  playerVariant: PlayerVariantType
  setPlayerVariant: Dispatch<SetStateAction<PlayerVariantType>>
}

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
