'use client'
import { Player } from '@/components/Player'
import { Timer } from '@/components/Timer'
import { PlayerProvider } from '@/context/playerContext'
import { TimerProvider } from '@/context/timerContext'

export default function Home() {
  return (
    <TimerProvider>
      <PlayerProvider>
        <main className="relative mx-auto mt-10 flex w-[314px] flex-col gap-4 pb-6 md:mt-20 md:w-[506px]">
          <Timer />
          <Player />
        </main>
      </PlayerProvider>
    </TimerProvider>
  )
}
