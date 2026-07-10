import { Button } from '../../components/ui/Button'

export function HeroActions() {
  return (
    <div className="hero__actions">
      <Button href="#projects" variant="primary">
        View Projects
      </Button>
      <Button href="#contact" variant="secondary">
        Contact Me
      </Button>
    </div>
  )
}
