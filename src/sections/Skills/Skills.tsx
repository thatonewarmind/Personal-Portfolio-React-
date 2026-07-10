import { Container } from '../../components/ui/Container'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { SkillGroupList } from './SkillGroupList'

export function Skills() {
  return (
    <section id="skills" className="skills">
      <Container>
        <SectionHeading title="Skills" />
        <SkillGroupList />
      </Container>
    </section>
  )
}
