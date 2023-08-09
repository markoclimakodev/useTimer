import { PlayerContext } from '@/context/playerContext'
import { Music } from 'lucide-react'
import React, { useContext } from 'react'
import { BsSpotify } from 'react-icons/bs'
import { Button } from '../Button'

export const PlayerNavigation = () => {
  const { playerVariant, handleSetPlayerVariant } = useContext(PlayerContext)

  const handlePlayerVariant = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const { id } = event.currentTarget
    if (id === 'spotify') {
      handleSetPlayerVariant('spotify')
    } else {
      handleSetPlayerVariant('nature')
    }
  }
  return (
    <>
      <section className="flex items-center justify-start gap-2 rounded bg-carbon_100 p-2">
        <Button
          icon={BsSpotify}
          id="spotify"
          onClick={handlePlayerVariant}
          isActive={playerVariant === 'spotify'}
          title="Spotify"
        />

        <Button
          icon={Music}
          id="nature"
          onClick={handlePlayerVariant}
          isActive={playerVariant === 'nature'}
          className="transition-all"
          title="Nature Sounds"
        />
      </section>
    </>
  )
}
