import { InputChangeEvent, PlaceholderType } from '@/types'
import { LinkIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export const SpotifyPlayer = () => {
  const [playlist, setPlaylist] = useState('7p74IyGRffWebhuk43cQWD')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [placeholder, setPlaceholder] = useState<PlaceholderType>(
    'Cole a URL da playlist aqui',
  )

  useEffect(() => {
    setIsLoading(true)
    const savedPlaylist = localStorage.getItem('playlist')
    if (savedPlaylist) {
      setPlaylist(savedPlaylist)
    }
    setIsLoading(false)
  }, [])

  const handlePlaylistChange = (event: InputChangeEvent) => {
    setIsLoading(true)
    const playlistUrl = event.target.value
    const regex = /\/playlist\/([^/?]+)/
    const match = playlistUrl.match(regex)
    if (match === null) {
      setTimeout(() => {
        setPlaceholder('Falha ao carregar a playlist')
        event.target.value = ''
      }, 1000)
      setIsLoading(false)
      return
    }

    const playlistLink = match[1]
    setPlaceholder('Carregando...')

    setTimeout(() => {
      setPlaylist(playlistLink)
      setPlaceholder('Cole a URL da playlist aqui')
      setIsLoading(false)
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
          placeholder={placeholder}
          onChange={handlePlaylistChange}
          className="w-full bg-transparent text-smoke outline-none"
        />
        <LinkIcon color="#CFD4D4" />
      </label>
      {isLoading ? (
        <section className="flex h-[420px] w-full items-center justify-center md:h-[480px] xl:h-[361px] 2xl:h-[380px] 3xl:h-[480px]">
          <p className="text-smoke ">Carregando...</p>
        </section>
      ) : (
        <iframe
          src={`https://open.spotify.com/embed/playlist/${playlist}?utm_source=generator&theme=0&robust_level=1`}
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="eager"
          className="h-[400px] w-full bg-transparent opacity-80 md:h-[480px]  xl:h-[360px] 2xl:h-[360px] 3xl:h-[480px]"
        />
      )}
    </>
  )
}
