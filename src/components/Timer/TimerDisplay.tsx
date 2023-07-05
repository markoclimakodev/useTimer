interface TimerDisplayProps {
  minutesRemaining: number
  secondsRemaining: number
}

export const TimerDisplay = ({
  minutesRemaining,
  secondsRemaining,
}: TimerDisplayProps) => {
  return (
    <p className="flex items-center justify-center text-6xl text-smoke md:text-8xl xl:text-9xl">
      {minutesRemaining.toString().padStart(2, '0')}:
      {secondsRemaining.toString().padStart(2, '0')}
    </p>
  )
}
