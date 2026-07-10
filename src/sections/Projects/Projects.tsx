import { Container } from '../../components/ui/Container'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { ProjectList } from './ProjectList'

export function Projects() {
  return (
    <section id="projects" className="projects">
      <Container>
        <SectionHeading title="Projects" />
        <ProjectList />
      </Container>
    </section>
  )
}
