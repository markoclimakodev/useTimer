import { PlayerContext } from '@/context/playerContext'
import { useContext } from 'react'
import { NatureSoundPlayer } from './NatureSoundPlayer'
import { PlayerNavigation } from './PlayerNavigation'
import { SpotifyPlayer } from './SpotifyPlayer'

export const Player = () => {
  const { playerVariant } = useContext(PlayerContext)
  return (
    <>
      <PlayerNavigation />
      {playerVariant === 'spotify' ? <SpotifyPlayer /> : <NatureSoundPlayer />}
    </>
  )
}
