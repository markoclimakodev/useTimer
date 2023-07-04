interface TimerDisplayProps {
  minutes: number
  seconds: number
}
export function TimerDisplay({ minutes, seconds }: TimerDisplayProps) {
  return (
    <p className="flex items-center justify-center text-6xl text-smoke md:text-8xl xl:text-9xl">
      {minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}
    </p>
  )
}
