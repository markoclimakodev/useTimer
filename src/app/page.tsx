'use client'
import { TimerProvider } from '@/context/TimerContext'

export default function Home() {
  return (
    <TimerProvider>
      <main className="relative mx-auto mt-10 flex w-[314px] flex-col gap-4 md:mt-20 md:w-[506px] "></main>
    </TimerProvider>
  )
}
