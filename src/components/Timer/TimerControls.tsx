'useClient'
import { TimerContext } from '@/context/timerContext'
import { Clock3, PauseCircle, PlayCircle, StopCircle } from 'lucide-react'
import { useContext } from 'react'
import { Button } from '../Button'

export const TimerControls = () => {
  const {
    timer,
    setTimer,
    isActive,
    setIsActive,
    setIsModalOpen,
    activeFunctionality,
    setActiveFunctionality,
  } = useContext(TimerContext)

  const handleOpenModal = () => {
    setIsModalOpen(true)
    setIsActive(false)
  }

  const handleStartTimer = () => {
    if (timer === 0) {
      handleOpenModal()
      setIsActive(false)
    } else {
      setIsActive(true)
      setActiveFunctionality('countdown-running')
    }
  }

  const handlePauseTimer = () => {
    if (timer === 0) {
      handleOpenModal()
      setIsActive(false)
    } else {
      setIsActive(false)
      setActiveFunctionality('countdown-paused')
    }
  }

  const handleStopTimer = () => {
    setIsActive(false)
    setTimer(0)
    setActiveFunctionality('none')
  }

  return (
    <section className="flex gap-4">
      <Button
        icon={PlayCircle}
        onClick={handleStartTimer}
        isActive={isActive && activeFunctionality === 'countdown-running'}
      />
      <Button
        icon={PauseCircle}
        onClick={handlePauseTimer}
        isActive={!isActive && activeFunctionality === 'countdown-paused'}
      />
      <Button icon={StopCircle} onClick={handleStopTimer} />
      <Button icon={Clock3} onClick={handleOpenModal} />
    </section>
  )
}
