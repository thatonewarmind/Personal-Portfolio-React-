import { Container } from '../../components/ui/Container'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { AboutHighlights } from './AboutHighlights'

export function About() {
  return (
    <section id="about" className="about">
      <Container>
        <SectionHeading title="About" />
        <p>I'm an Electrical and Computer Engineering student at The Ohio State University, with a minor in Mathematics. Passionate about solving problems at the intersection of technology, automotive, and community impact. Exploring opportunities in software development.</p>
        <AboutHighlights />
      </Container>
    </section>
  )
}
