import { SpotifyPlayer } from '@/components/SpotifyPlayer'
import { Timer } from '@/components/Timer'

export default function Home() {
  return (
    <main className="relative mx-auto mt-10 flex w-[314px] flex-col gap-8 md:mt-20 md:w-[506px] ">
      <Timer />
      <SpotifyPlayer />
    </main>
  )
}
