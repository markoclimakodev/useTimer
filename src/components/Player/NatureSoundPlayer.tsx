import { natureCardsInfo } from '@/assets/assets'
import { MusicCardWithControls } from './MusicCardWithControls'

export const NatureSoundPlayer = () => {
  return (
    <>
      {natureCardsInfo.map((sound) => (
        <MusicCardWithControls
          key={sound.type}
          sound={sound.sound}
          image={sound.image}
          type={sound.type}
        />
      ))}
    </>
  )
}
