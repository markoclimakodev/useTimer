import { NatureSoundButton } from '@/assets/icons/NatureSoundButton'
import { SpotifyButton } from '@/assets/icons/SpotifyButton'
import { Button } from '../Button'

export const PlayerNavigation = () => {
  return (
    <section className="flex items-center justify-start gap-2 rounded bg-carbon_100 p-2">
      <Button icon={SpotifyButton} />
      <Button
        icon={NatureSoundButton}
        className="hover:fill-grass hover:stroke-grass"
      />
    </section>
  )
}
