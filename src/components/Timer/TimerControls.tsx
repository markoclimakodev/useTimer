import { PauseIcon } from '@/assets/icons/PauseIcon'
import { PlayIcon } from '@/assets/icons/PlayIcon'
import { StopIcon } from '@/assets/icons/StopIcon'
import { TimerIcon } from '@/assets/icons/TimerIcon'
import { Button } from '../Button'

interface TimerControlsProps {
  onStartPause: () => void
  onStop: () => void
  openModal: () => void
  countdown: boolean
}
export function TimerControls({
  onStartPause,
  onStop,
  openModal,
  countdown,
}: TimerControlsProps) {
  return (
    <section className="flex gap-4 px-4 py-2">
      <Button icon={countdown ? PauseIcon : PlayIcon} onClick={onStartPause} />
      <Button icon={StopIcon} onReset={onStop} />
      <Button icon={TimerIcon} onClick={openModal} />
    </section>
  )
}
