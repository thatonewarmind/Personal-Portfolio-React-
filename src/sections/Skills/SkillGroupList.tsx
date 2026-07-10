import { skills } from '../../data/skills'
import { SkillGroup } from './SkillGroup'

export function SkillGroupList() {
  return (
    <div className="skills__groups">
      {skills.map((group) => (
        <SkillGroup key={group.category} category={group.category} items={group.items} />
      ))}
    </div>
  )
}
