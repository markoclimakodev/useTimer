'use client'
import { NatureSoundButton } from '@/assets/icons/NatureSoundButton'
import { SpotifyButton } from '@/assets/icons/SpotifyButton'
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import { Button } from '../Button'
import { NaturePlayer } from './NaturePlayer'
import { SpotifyPlayer } from './SpotifyPlayer'

const placeholder = 'Cole a URL da playlist aqui'
const placeholderLoading = 'Carregando...'
const placeholderFailure = 'Falha ao carregar a playlist'

interface PlayerProps {
  timer: number
}
export const Player = ({ timer }: PlayerProps) => {
  const [playlist, setPlaylist] = useState('7p74IyGRffWebhuk43cQWD')
  const [isLoading, setIsLoading] = useState(true)
  const [placeholderMessage, setPlaceholderMessage] = useState(placeholder)
  const [playerVariant, setPlayerVariant] = useState<'spotify' | 'nature'>(
    'spotify',
  )
  const handleVariant = (event: MouseEvent) => {
    const { id } = event.currentTarget
    if (id === 'nature') {
      setPlayerVariant('nature')
    } else {
      setPlayerVariant('spotify')
    }
  }

  useEffect(() => {
    const savedPlaylist = localStorage.getItem('playlist')
    if (savedPlaylist) {
      setPlaylist(savedPlaylist)
    }
    setIsLoading(false)
  }, [])

  const handlePlaylistChange = (event: ChangeEvent<HTMLInputElement>) => {
    const playlistUrl = event.target.value
    const regex = /\/playlist\/([^/?]+)/
    const match = playlistUrl.match(regex)
    if (match === null) {
      setTimeout(() => {
        setPlaceholderMessage(placeholderFailure)
        event.target.value = ''
      }, 1000)
      return
    }
    const playlistLink = match[1]
    setPlaceholderMessage(placeholderLoading)

    setTimeout(() => {
      setPlaylist(playlistLink)
      setPlaceholderMessage(placeholder)
    }, 500)

    localStorage.setItem('playlist', playlistLink)
    event.target.value = ''
  }

  return (
    <>
      {/* <PlayerNavigation /> */}
      <section className="flex items-center justify-start gap-2 rounded bg-carbon_100 p-2">
        <Button
          icon={SpotifyButton}
          id="spotify"
          onClick={handleVariant}
          isActive={playerVariant === 'spotify'}
        />

        <Button
          icon={NatureSoundButton}
          id="nature"
          onClick={handleVariant}
          isActive={playerVariant === 'nature'}
          className="transition-all"
        />
      </section>
      {playerVariant === 'spotify' ? (
        <SpotifyPlayer
          handlePlaylistChange={handlePlaylistChange}
          playlist={playlist}
          placeholderMessage={placeholderMessage}
          isLoading={isLoading}
        />
      ) : (
        <NaturePlayer timer={timer} />
      )}
    </>
  )
}
