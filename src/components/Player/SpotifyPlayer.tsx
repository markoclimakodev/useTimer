import { LinkIcon } from '@/assets/icons/LinkIcon'
import { ChangeEvent } from 'react'

interface SpotifyPlayerProps {
  placeholderMessage: string
  handlePlaylistChange: (event: ChangeEvent<HTMLInputElement>) => void
  playlist: string
  isLoading: boolean
}

export const SpotifyPlayer = ({
  handlePlaylistChange,
  placeholderMessage,
  playlist,
  isLoading,
}: SpotifyPlayerProps) => {
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
          src={`https://open.spotify.com/embed/playlist/${playlist}?utm_source=generator&theme=0`}
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="eager"
          className="h-[400px] w-full bg-transparent opacity-80 md:h-[480px]  xl:h-[360px] 2xl:h-[360px] 3xl:h-[480px]"
        />
      )}
    </>
  )
}
