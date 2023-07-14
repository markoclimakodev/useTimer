import { natureCardsInfo } from '@/assets/assets'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import AudioPlayer from 'react-h5-audio-player'

interface NaturePlayerProps {
  timer: number
}

export const NaturePlayer = ({ timer }: NaturePlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (timer === 0 && audioRef.current) {
      audioRef.current.pause()
    }
  }, [timer])

  return (
    <section className=" flex h-[420px] w-full flex-col items-start gap-4 overflow-auto opacity-80 md:h-[480px] xl:h-[380px] 2xl:h-[420px] 3xl:h-[480px]">
      {natureCardsInfo.map((natureCard, index) => (
        <section key={natureCard.type} className="flex w-full gap-3 ">
          <Image
            src={natureCard.image}
            className="w-28 rounded-xl"
            width={120}
            height={120}
            alt={natureCard.type}
          />

          <AudioPlayer src={natureCard.sound} showDownloadProgress loop />
        </section>
      ))}
    </section>
  )
}