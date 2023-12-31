import { TimerContext } from '@/context/timerContext'
import { InputChangeEvent } from '@/types'
import { Check, X } from 'lucide-react'
import { useContext } from 'react'

export const TimerModal = () => {
  const { isModalOpen, updateModalStatus, time, updateTime, updateTimer } =
    useContext(TimerContext)

  const handleupdateTimerChangeValue = (event: InputChangeEvent) => {
    const { value } = event.target
    const time = value.replace(/[^0-9:]/g, '')
    updateTime(time)
  }

  const handleupdateTimer = () => {
    const [minutesString = '0', secondsString = '0'] = time.split(':')
    let minutes = parseFloat(minutesString)
    const seconds = parseFloat(secondsString)

    if (minutes > 60) {
      minutes = 60
    }

    if (isNaN(minutes)) {
      minutes = 10
    }

    if (minutes === 0 && seconds > 0) {
      minutes = 0
    }

    const totalSeconds = minutes * 60 + seconds
    updateTimer(totalSeconds)
    updateModalStatus(false)
    updateTime('')
  }

  const handleCloseModal = () => {
    updateModalStatus(false)
  }
  return (
    <section
      className={
        isModalOpen
          ? `absolute top-0 z-20 flex  h-screen w-full items-center justify-center bg-mobile bg-contain md:h-full md:w-full md:bg-cover`
          : 'hidden'
      }
    >
      <form className="relative flex  flex-col  gap-3 rounded-lg bg-carbon_100 px-4 py-3 shadow-lg">
        <section className="flex justify-between">
          <h2 className="mb-2 text-[16px] text-smoke">
            Informe a duração desejada:
          </h2>
          <X
            onClick={handleCloseModal}
            className="absolute right-0 top-0 cursor-pointer rounded text-rose-600 hover:text-rose-700"
          />
        </section>
        <fieldset className="flex items-center gap-2">
          <label
            htmlFor="minutes"
            className="flex rounded-lg bg-carbon_200 p-3"
          >
            <input
              type="text"
              id="minutes"
              name="minutes"
              onChange={handleupdateTimerChangeValue}
              value={time}
              placeholder="Ex: 15:00 ou 15"
              className="bg-transparent text-smoke outline-none"
            />
          </label>
        </fieldset>
        <fieldset className="flex items-center justify-end gap-2 p-1">
          <Check
            onClick={handleupdateTimer}
            className="rounded bg-emerald-600 text-smoke hover:bg-grass"
          />
        </fieldset>
      </form>
    </section>
  )
}
