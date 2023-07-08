'use client'
import { LinkIcon } from '@/assets/icons/LinkIcon'
import { ChangeEvent, useEffect, useState } from 'react'

const placeholder = 'Cole a URL da playlist aqui'
const placeholderLoading = 'Carregando...'
const placeholderFailure = 'Falha ao carregar a playlist'

export const SpotifyPlayer = () => {
  const [playList, setPlaylist] = useState('7p74IyGRffWebhuk43cQWD')
  const [isLoading, setIsLoading] = useState(true)
  const [placeholderMessage, setPlaceholderMessage] = useState(placeholder)

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
      <label
        htmlFor="playlist"
        className="flex items-center justify-between rounded-lg bg-carbon_100 p-3"
      >
        <input
          type="text"
          id="playlist"
          placeholder={placeholderMessage}
          onChange={handlePlaylistChange}
          className="w-full bg-transparent text-smoke outline-none"
        />
        <LinkIcon />
      </label>
      {isLoading ? (
        <section className="flex h-[420px] w-full items-center justify-center md:h-[480px] xl:h-[361px] 2xl:h-[380px] 3xl:h-[480px]">
          <p className="text-smoke ">Carregando...</p>
        </section>
      ) : (
        <iframe
          src={`https://open.spotify.com/embed/playlist/${playList}?utm_source=generator&theme=0`}
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="eager"
          className="h-[420px] w-full bg-transparent opacity-80 md:h-[480px]  xl:h-[361px] 2xl:h-[380px] 3xl:h-[480px]"
        />
      )}
    </>
  )
}
