'useClient'
import { TimerContext } from '@/context/timerContext'
import { Clock3, PauseCircle, PlayCircle, StopCircle } from 'lucide-react'
import { useContext } from 'react'
import { Tooltip } from 'react-tooltip'
import { Button } from '../Button'

export const TimerControls = () => {
  const {
    timer,
    updateTimer,
    isActive,
    updateActiveStatus,
    updateModalStatus,
    activeFunctionality,
    updateActiveFunctionality,
  } = useContext(TimerContext)
  const handleOpenModal = () => {
    updateModalStatus(true)
    updateActiveStatus(false)
  }

  const handleStartTimer = () => {
    if (timer === 0) {
      handleOpenModal()
      updateActiveStatus(false)
    } else {
      updateActiveStatus(true)
      updateActiveFunctionality('countdown-running')
    }
  }

  const handlePauseTimer = () => {
    if (timer === 0) {
      handleOpenModal()
      updateActiveStatus(false)
    } else {
      updateActiveStatus(false)
      updateActiveFunctionality('countdown-paused')
    }
  }

  const handleStopTimer = () => {
    updateActiveStatus(false)
    updateTimer(600)
    updateActiveFunctionality('none')
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
        data-tooltip-id="pause-btn"
      />
      <Tooltip id="pause-btn" content="Pausar" place="bottom" />

      <Button
        icon={StopCircle}
        onClick={handleStopTimer}
        data-tooltip-id="stop-btn"
      />
      <Tooltip id="stop-btn" content="Redefinir" place="bottom" />

      <Button
        icon={Clock3}
        onClick={handleOpenModal}
        data-tooltip-id="set-btn"
      />
      <Tooltip id="set-btn" content="Configurar tempo" place="bottom" />
    </section>
  )
}
