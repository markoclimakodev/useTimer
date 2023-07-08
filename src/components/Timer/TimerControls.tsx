import { PauseIcon } from '@/assets/icons/PauseIcon'
import { PlayIcon } from '@/assets/icons/PlayIcon'
import { StopIcon } from '@/assets/icons/StopIcon'
import { TimerIcon } from '@/assets/icons/TimerIcon'
import { Button } from '../Button'

interface TimerControlsProps {
  isCountdownActive: boolean
  selectedFeature: 'play' | 'pause' | 'none'
  handleStart: () => void
  handlePause: () => void
  handleStop: () => void
  handleOpenModal: () => void
}
export const TimerControls = ({
  handleStart,
  handlePause,
  handleStop,
  handleOpenModal,
  isCountdownActive,
  selectedFeature,
}: TimerControlsProps) => {
  return (
    <section className="flex w-full justify-center gap-4 ">
      <Button
        icon={PlayIcon}
        onClick={handleStart}
        isActive={isCountdownActive && selectedFeature === 'play'}
      />
      <Button
        icon={PauseIcon}
        onClick={handlePause}
        isActive={!isCountdownActive && selectedFeature === 'pause'}
      />
      <Button icon={StopIcon} onClick={handleStop} />
      <Button icon={TimerIcon} onClick={handleOpenModal} />
    </section>
  )
}
