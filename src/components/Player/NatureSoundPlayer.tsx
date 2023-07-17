import { natureCardsInfo } from '@/assets/assets'
import { MusicCard } from './MusicCard'

export const NatureSoundPlayer = () => {
  return (
    <>
      {natureCardsInfo.map((sound) => (
        <MusicCard
          key={sound.type}
          sound={sound.sound}
          image={sound.image}
          type={sound.type}
        />
      ))}
    </>
  )
}
