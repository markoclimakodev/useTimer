import { PlayerContextProps } from '@/types'
import { createContext } from 'react'

export const PlayerContext = createContext<PlayerContextProps>({
  playerVariant: 'spotify',
  handleSetPlayerVariant: () => {},
})
