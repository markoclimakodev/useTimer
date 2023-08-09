import { natureCardsInfo } from '@/assets/assets'
import { MusicCardControls } from './MusicCardControls'

export const NatureSoundPlayer = () => {
  return (
    <>
      {natureCardsInfo.map((sound) => (
        <MusicCardControls
          key={sound.type}
          sound={sound.sound}
          image={sound.image}
          type={sound.type}
        />
      ))}
    </>
  )
}
