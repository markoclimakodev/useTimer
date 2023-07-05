import { PauseIcon } from '@/assets/icons/PauseIcon'
import { PlayIcon } from '@/assets/icons/PlayIcon'
import { StopIcon } from '@/assets/icons/StopIcon'
import { TimerIcon } from '@/assets/icons/TimerIcon'
import { Button } from '../Button'

interface TimerControlsProps {
  modalIsOpen: boolean
  isCountdownActive: boolean
  handleStartPause: () => void
  handleStop: () => void
  handleOpenModal: () => void
}
export const TimerControls = ({
  modalIsOpen,
  isCountdownActive,
  handleStartPause,
  handleStop,
  handleOpenModal,
}: TimerControlsProps) => {
  return (
    <section className="flex gap-4 px-4 py-2">
      {!modalIsOpen && (
        <Button
          icon={isCountdownActive ? PauseIcon : PlayIcon}
          onClick={handleStartPause}
          disabled={!!modalIsOpen}
        />
      )}
      <Button icon={StopIcon} onClick={handleStop} />
      <Button
        icon={TimerIcon}
        onClick={handleOpenModal}
        disabled={!!modalIsOpen}
      />
    </section>
  )
}
