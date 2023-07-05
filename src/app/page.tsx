import { SpotifyPlayer } from '@/components/SpotifyPlayer'
import { Timer } from '@/components/Timer'

export default function Home() {
  return (
    <main className="m relative mx-auto mt-10 flex h-full w-[266px] flex-col items-center gap-8 pb-6 md:mt-20 md:max-h-screen md:w-[506px]">
      <Timer />
      <SpotifyPlayer />
    </main>
  )
}
