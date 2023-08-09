import { TimerContext } from '@/context/timerContext'
import { MusicCardProps } from '@/types'
import { PauseCircle, PlayCircle, Repeat, Volume2, VolumeX } from 'lucide-react'
import { Tooltip } from 'react-tooltip'

import Image from 'next/image'
import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react'
import { Button } from '../Button'

export const MusicCardControls = ({ sound, image, type }: MusicCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [loop, setLoop] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { timer } = useContext(TimerContext)

  useEffect(() => {
    const audio = audioRef.current

    if (audio) {
      isPlaying ? audio.play() : audio.pause()
    }
    if (timer === 0) {
      setIsPlaying(false)
    }
  }, [isPlaying, timer])

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
      <form className=" z-10 flex h-1/3 w-full items-center justify-between rounded-b-lg bg-carbon_100/75">
        <fieldset className="flex gap-2 rounded-lg py-1">
          <Button
            icon={isPlaying ? PauseCircle : PlayCircle}
            onClick={togglePlay}
            isActive={isPlaying}
            data-tooltip-id="play-pause-btn"
          />
          <Tooltip
            id="play-pause-btn"
            content="Reproduzir/Pausar"
            place="bottom"
          />
        </fieldset>
        <fieldset>
          <label
            htmlFor="volume"
            className="mb-2 flex w-60 items-center justify-center gap-2 rounded-lg text-sm font-medium text-smoke"
          >
            <Button icon={volume === 0 ? VolumeX : Volume2} />

            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              id="volume"
              value={volume}
              onChange={handleVolumeChange}
              className=" h-[0.2rem] cursor-pointer appearance-none rounded-lg bg-gray-200 accent-grass"
              data-tooltip-id="volume-tooltip"
            />
            <span className="w-1/3">
              {volume > 0 ? `${volume * 100}%` : 'Sem som'}
            </span>
            <Tooltip
              id="volume-tooltip"
              content="Controle de Volume"
              place="bottom"
            />
          </label>
        </fieldset>
        <fieldset className="pr-1">
          <Button
            icon={Repeat}
            onClick={handleLoop}
            isActive={loop}
            data-tooltip-id="loop-btn"
          />
          <Tooltip
            id="loop-btn"
            content="Ativar/Desativar Loop"
            place="bottom"
          />
        </fieldset>
      </form>
    </section>
  )
}
