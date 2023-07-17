import { MusicCardProps } from '@/types'
import { PauseCircle, PlayCircle, Repeat, Volume2, VolumeX } from 'lucide-react'
import Image from 'next/image'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Button } from '../Button'

export const MusicCard = ({ sound, image, type }: MusicCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [loop, setLoop] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = audioRef.current

    if (audio) {
      isPlaying ? audio.play() : audio.pause()
    }
  }, [isPlaying])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleLoop = () => {
    setLoop(!loop)
  }

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const updatedVolume = parseFloat(value)
    setVolume(updatedVolume)

    if (audioRef.current) {
      audioRef.current.volume = updatedVolume
    }
  }

  return (
    <section
      key={type}
      className={`relative flex h-28 items-end shadow-md ${
        isPlaying ? 'animate-pulse' : 'animate-none'
      }`}
    >
      <Image
        src={image}
        layout="fill"
        alt={type}
        className={`rounded-lg ${isPlaying ? 'animate-pulse' : 'animate-none'}`}
      />
      <audio ref={audioRef} src={sound} loop={loop} />
      <form className=" z-10 flex h-1/3 w-full items-end justify-between rounded-b-lg bg-carbon_100/75">
        <fieldset className="flex gap-2 rounded-lg p-1">
          <Button
            icon={isPlaying ? PauseCircle : PlayCircle}
            onClick={togglePlay}
            isActive={isPlaying}
          />
          <Button icon={Repeat} onClick={handleLoop} isActive={loop} />
        </fieldset>
        <label
          htmlFor="volume"
          className="mb-2 flex items-center gap-1 rounded-lg  px-2 text-sm font-medium"
        >
          {volume === 0 ? (
            <VolumeX color="#CFD4D4" />
          ) : (
            <Volume2 color="#CFD4D4" />
          )}
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            id="volume"
            value={volume}
            onChange={handleVolumeChange}
            className=" h-[0.25rem]  cursor-pointer appearance-none rounded-lg bg-gray-200 accent-grass "
          />
        </label>
      </form>
    </section>
  )
}
