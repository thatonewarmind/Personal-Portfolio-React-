import { Container } from '../../components/ui/Container'
import { HeroContent } from './HeroContent'
import { HeroActions } from './HeroActions'

export function Hero() {
  return (
    <section id="hero" className="hero">
      <Container>
        <HeroContent />
        <HeroActions />
      </Container>
    </section>
  )
}
