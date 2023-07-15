'use client'
import { TimerControls } from './TimerControls'
import { TimerDisplay } from './TimerDisplay'
import { TimerModal } from './TimerModal'
export function Timer() {
  return (
    <>
      <section className="flex flex-col items-center rounded-lg bg-carbon_100 px-16 py-4 text-center md:px-16">
        <TimerDisplay />
        <TimerControls />
        <TimerModal />
      </section>
    </>
  )
}
