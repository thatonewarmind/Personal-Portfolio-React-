import { Container } from '../../components/ui/Container'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { AboutHighlights } from './AboutHighlights'

export function About() {
  return (
    <section id="about" className="about">
      <Container>
        <SectionHeading title="About" />
        <p>A paragraph about your background and interests goes here.</p>
        <AboutHighlights />
      </Container>
    </section>
  )
}
