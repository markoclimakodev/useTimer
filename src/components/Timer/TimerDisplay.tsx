interface TimerDisplayProps {
  minutesRemaining: number
  secondsRemaining: number
}

export const TimerDisplay = ({
  minutesRemaining,
  secondsRemaining,
}: TimerDisplayProps) => {
  return (
    <p className="text-display_small text-smoke md:text-display_large">
      {minutesRemaining.toString().padStart(2, '0')}:
      {secondsRemaining.toString().padStart(2, '0')}
    </p>
  )
}
