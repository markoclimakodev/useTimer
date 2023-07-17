import { TimerContext } from '@/context/timerContext'
import { InputChangeEvent } from '@/types'
import { Check, X } from 'lucide-react'
import { useContext } from 'react'

export const TimerModal = () => {
  const { isModalOpen, setIsModalOpen, time, setTime, setTimer } =
    useContext(TimerContext)

  const handleSetTimerChangeValue = (event: InputChangeEvent) => {
    const { value } = event.target
    const time = value.replace(/[^0-9:]/g, '')
    setTime(time)
  }

  const handleSetTimer = () => {
    const [minutesString = '0', secondsString = '0'] = time.split(':')
    let minutes = Number(minutesString)
    const seconds = Number(secondsString)

    if (minutes > 60) {
      minutes = 60
    }

    const totalSeconds = minutes * 60 + seconds
    setTimer(totalSeconds)
    setIsModalOpen(false)
    setTime('')
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  return (
    <section
      className={
        isModalOpen
          ? `absolute top-0 z-10 flex  h-screen w-full items-center justify-center bg-mobile bg-contain md:h-full md:w-full md:bg-cover`
          : 'hidden'
      }
    >
      <form className=" flex flex-col gap-4  rounded-lg bg-carbon_100 p-4">
        <fieldset className="flex flex-col">
          <legend className="mb-2 text-[16px] text-smoke">
            Informe a duração desejada:
          </legend>
          <label
            htmlFor="minutes"
            className="flex rounded-lg bg-carbon_200 p-3"
          >
            <input
              type="text"
              id="minutes"
              name="minutes"
              onChange={handleSetTimerChangeValue}
              value={time}
              className="bg-transparent text-smoke outline-none"
            />
          </label>
        </fieldset>
        <fieldset className="flex items-center justify-end gap-2 p-1">
          <button
            type="button"
            onClick={handleCloseModal}
            className="rounded bg-rose-600"
          >
            <X size={32} color="#CFD4D4" />
          </button>
          <button
            type="button"
            onClick={handleSetTimer}
            className="rounded bg-grass"
          >
            <Check size={32} color="#CFD4D4" />
          </button>
        </fieldset>
      </form>
    </section>
  )
}
