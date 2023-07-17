'useClient'
import { TimerContext } from '@/context/timerContext'
import { Clock3, PauseCircle, PlayCircle, StopCircle } from 'lucide-react'
import { useContext } from 'react'
import { Tooltip } from 'react-tooltip'
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
    setTimer(600)
    setActiveFunctionality('none')
  }

  return (
    <section className="flex gap-4">
      <Button
        icon={PlayCircle}
        onClick={handleStartTimer}
        isActive={isActive && activeFunctionality === 'countdown-running'}
        data-tooltip-id="start-btn"
      />
      <Tooltip id="start-btn" content="Iniciar" place="bottom" />

      <Button
        icon={PauseCircle}
        onClick={handlePauseTimer}
        isActive={!isActive && activeFunctionality === 'countdown-paused'}
        data-for="pause-btn"
      />
      <Tooltip id="pause-btn" content="Pausar" place="bottom" />

      <Button icon={StopCircle} onClick={handleStopTimer} data-for="stop-btn" />
      <Tooltip id="stop-btn" content="Redefinir" place="bottom" />

      <Button icon={Clock3} onClick={handleOpenModal} data-for="set-btn" />
      <Tooltip id="set-btn" content="Configurar tempo" place="bottom" />
    </section>
  )
}
